import api from '../api';

/**
 * SC Dashboard API Service
 * Handles all backend API calls for Subcontractor Dashboard
 */

// ============================================
// SC PROJECT INTERFACES
// ============================================

export interface SCProject {
    id: number;
    sc_id: number;
    name: string;
    client?: string;
    project_type?: string;
    trade?: string;
    city?: string;
    state?: string;
    address?: string;
    contract_value?: number;
    status: 'Planning' | 'Bidding' | 'Active' | 'Completed' | 'On Hold';
    progress: number;
    phase?: string;
    start_date?: string;
    expected_completion_date?: string;
    actual_completion_date?: string;
    team_size: number;
    gc_project_id?: number;
    description?: string;
    notes?: string;
    documents_count?: number;
    team_count?: number;
    created_at: string;
    updated_at: string;
}

export interface SCProjectTeamMember {
    id: number;
    project_id: number;
    member_name: string;
    role?: string;
    phone?: string;
    email?: string;
    status: 'Active' | 'Inactive';
    assigned_at: string;
}

export interface SCDocument {
    id: number;
    project_id: number;
    name: string;
    file_path: string;
    file_type: string;
    file_size: number;
    category: 'Plans' | 'Drawings' | 'Photos' | 'Contracts' | 'Invoices' | 'Safety' | 'Permits' | 'Other';
    uploaded_by: number;
    uploaded_by_name?: string;
    starred: boolean;
    shared: boolean;
    created_at: string;
}

export interface SCDashboardOverview {
    activeProjectsCount: number;
    completedProjectsCount: number;
    totalTeamSize: number;
    totalContractValue: number;
    averageProgress: string;
}

export interface SCProjectFilters {
    status?: string;
    trade?: string;
    search?: string;
    page?: number;
    limit?: number;
}

// ============================================
// SC PROJECT API FUNCTIONS
// ============================================

/**
 * Get SC Dashboard Overview Stats
 */
export const getDashboardOverview = async (): Promise<SCDashboardOverview> => {
    const response = await api.get('/sc-dashboard/overview');
    return response.data.data;
};

/**
 * Get All SC Projects
 */
export const getProjects = async (params?: SCProjectFilters): Promise<{
    projects: SCProject[];
    pagination: { page: number; limit: number; total: number; totalPages: number };
    statusCounts: Record<string, number>;
}> => {
    const response = await api.get('/sc-dashboard/projects', { params });
    return response.data.data;
};

/**
 * Get Recent SC Projects
 */
export const getRecentProjects = async (limit: number = 3): Promise<SCProject[]> => {
    const response = await api.get(`/sc-dashboard/projects/recent?limit=${limit}`);
    return response.data.data.projects;
};

/**
 * Get Single SC Project
 */
export const getProjectById = async (id: number): Promise<SCProject> => {
    const response = await api.get(`/sc-dashboard/projects/${id}`);
    return response.data.data.project;
};

/**
 * Create New SC Project
 */
export const createProject = async (projectData: {
    name: string;
    client?: string;
    project_type?: string;
    trade?: string;
    city?: string;
    state?: string;
    address?: string;
    contract_value?: number;
    status?: string;
    progress?: number;
    phase?: string;
    start_date?: string;
    expected_completion_date?: string;
    team_size?: number;
    gc_project_id?: number;
    description?: string;
    notes?: string;
}): Promise<SCProject> => {
    const response = await api.post('/sc-dashboard/projects', projectData);
    return response.data.data.project;
};

/**
 * Update SC Project
 */
export const updateProject = async (id: number, projectData: Partial<SCProject>): Promise<SCProject> => {
    const response = await api.put(`/sc-dashboard/projects/${id}`, projectData);
    return response.data.data.project;
};

/**
 * Delete SC Project
 */
export const deleteProject = async (id: number): Promise<void> => {
    await api.delete(`/sc-dashboard/projects/${id}`);
};

// ============================================
// SC DOCUMENT API FUNCTIONS
// ============================================

/**
 * Get SC Project Documents
 */
export const getProjectDocuments = async (projectId: number): Promise<SCDocument[]> => {
    const response = await api.get(`/sc-dashboard/projects/${projectId}/documents`);
    return response.data.data.documents;
};

/**
 * Upload SC Document
 */
export const uploadDocument = async (projectId: number, file: File, category: string): Promise<SCDocument> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);

    const response = await api.post(`/sc-dashboard/projects/${projectId}/documents`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data.data.document;
};

/**
 * Delete SC Document
 */
export const deleteDocument = async (projectId: number, documentId: number): Promise<void> => {
    await api.delete(`/sc-dashboard/projects/${projectId}/documents/${documentId}`);
};

/**
 * Download SC Document
 */
export const downloadDocument = async (projectId: number, documentId: number): Promise<Blob> => {
    const response = await api.get(`/sc-dashboard/projects/${projectId}/documents/${documentId}/download`, {
        responseType: 'blob',
    });
    return response.data;
};

/**
 * View SC Document (for preview)
 */
export const viewDocument = async (projectId: number, documentId: number): Promise<string> => {
    const response = await api.get(`/sc-dashboard/projects/${projectId}/documents/${documentId}/view`, {
        responseType: 'blob',
    });
    return URL.createObjectURL(response.data);
};

// ============================================
// SC PROJECT TEAM API FUNCTIONS
// ============================================

/**
 * Get SC Project Team
 */
export const getProjectTeam = async (projectId: number): Promise<SCProjectTeamMember[]> => {
    const response = await api.get(`/sc-dashboard/projects/${projectId}/team`);
    return response.data.data.team;
};

/**
 * Add SC Project Team Member
 */
export const addTeamMember = async (projectId: number, memberData: {
    member_name: string;
    role?: string;
    phone?: string;
    email?: string;
}): Promise<SCProjectTeamMember> => {
    const response = await api.post(`/sc-dashboard/projects/${projectId}/team`, memberData);
    return response.data.data.member;
};

/**
 * Remove SC Project Team Member
 */
export const removeTeamMember = async (projectId: number, memberId: number): Promise<void> => {
    await api.delete(`/sc-dashboard/projects/${projectId}/team/${memberId}`);
};

// ============================================
// PROJECT DISCOVERY API FUNCTIONS
// (Find Projects to Bid On)
// ============================================

export interface MarketplaceProject {
    id: number;
    project_name: string;
    client_name: string;
    company_name?: string;
    project_type: string;
    location: string;
    city?: string;
    state?: string;
    budget_min?: number;
    budget_max?: number;
    bid_deadline?: string;
    start_date?: string;
    end_date?: string;
    description?: string;
    status: string;
    trade_requirements?: string[];
    created_at: string;
}

export interface ProjectDiscoveryFilters {
    search?: string;
    location?: string;
    type?: string;
    budgetRange?: string;
    trade?: string;
    page?: number;
    limit?: number;
}

/**
 * Get Project Discovery List (Marketplace Projects)
 * Uses GC dashboard endpoint which is public
 */
export const getProjectDiscovery = async (filters?: ProjectDiscoveryFilters): Promise<MarketplaceProject[]> => {
    const response = await api.get('/gc-dashboard/project-discovery', { params: filters });
    return response.data.data;
};

// ============================================
// BID MANAGEMENT API FUNCTIONS
// (SC submitting bids on projects)
// ============================================

export interface BidItem {
    id?: number;
    name: string;
    description?: string;
    price: number;
}

export interface Bid {
    id: string;
    status: 'draft' | 'submitted' | 'viewed' | 'accepted' | 'started' | 'rejected' | 'withdrawn';
    amount: number;
    project_id: number;
    project_name: string;
    location: string;
    project_type: string;
    client_name: string;
    items_count: number;
    notes?: string;
    estimated_start_date?: string;
    estimated_end_date?: string;
    company_highlights?: string;
    relevant_experience?: string;
    credentials?: string;
    created_at: string;
    updated_at: string;
}

/**
 * Get My Bids (SC View - bids I've submitted)
 */
export const getMyBids = async (): Promise<Bid[]> => {
    const response = await api.get('/gc-dashboard/bids');
    return response.data.data;
};

/**
 * Get Bid Detail
 */
export const getBidDetail = async (bidId: string): Promise<Bid & { items: BidItem[] }> => {
    const response = await api.get(`/gc-dashboard/bids/${bidId}`);
    return response.data.data;
};

/**
 * Create New Bid (Start Draft)
 */
export const createBid = async (data: {
    projectId: string | number;
    totalPrice: number;
    notes?: string;
    items?: BidItem[];
    estimatedStartDate?: string;
    estimatedEndDate?: string;
    companyHighlights?: string;
    relevantExperience?: string;
    credentials?: string;
}): Promise<Bid> => {
    const response = await api.post('/gc-dashboard/bids', data);
    return response.data.data;
};

/**
 * Update Bid Items (Draft Only)
 */
export const updateBidItems = async (bidId: string, items: BidItem[]): Promise<Bid> => {
    const response = await api.put(`/gc-dashboard/bids/${bidId}/items`, { items });
    return response.data.data;
};

/**
 * Submit Bid (Move to Submitted status)
 */
export const submitBid = async (bidId: string): Promise<Bid> => {
    const response = await api.post(`/gc-dashboard/bids/${bidId}/submit`);
    return response.data.data;
};

/**
 * Withdraw Bid
 */
export const withdrawBid = async (bidId: string): Promise<Bid> => {
    const response = await api.post(`/gc-dashboard/bids/${bidId}/withdraw`);
    return response.data.data;
};

/**
 * Delete Bid (Only for draft bids)
 */
export const deleteBid = async (bidId: string): Promise<void> => {
    await api.delete(`/gc-dashboard/bids/${bidId}`);
};

// ============================================
// INVITATIONS API FUNCTIONS
// (For accepting project invitations from GCs)
// ============================================

export interface Invitation {
    id: number;
    project_id: number;
    project_name: string;
    inviter_name: string;
    role: string;
    status: 'pending' | 'accepted' | 'declined' | 'expired';
    created_at: string;
    expires_at?: string;
}

/**
 * Get My Pending Invitations
 */
export const getMyPendingInvitations = async (): Promise<Invitation[]> => {
    const response = await api.get('/gc-dashboard/invitations/my');
    return response.data.data;
};

/**
 * Accept Invitation
 */
export const acceptInvitation = async (token: string): Promise<any> => {
    const response = await api.post('/gc-dashboard/invitations/accept', { token });
    return response.data.data;
};

/**
 * Decline Invitation
 */
export const declineInvitation = async (token: string): Promise<any> => {
    const response = await api.post('/gc-dashboard/invitations/decline', { token });
    return response.data.data;
};
