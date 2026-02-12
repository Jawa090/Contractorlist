
export interface Project {
    id: string;
    name: string;
    location: string;
    status: string;
    percentComplete: number;
    budgetTotal: number;
    budgetSpent: number;
    startDate: string;
    endDate: string;
    gcName: string;
    subsCount: number;
    openRFIs: number;
    openChangeOrders: number;
    safetyScore: number;
}

export interface GanttTask {
    id: string;
    name: string;
    start: string;
    end: string;
    progress: number;
    assignee: string;
    trade: string;
    isCriticalPath?: boolean;
    dependencies?: string[];
}

export interface FinancialSummary {
    originalContract: number;
    approvedChanges: number;
    revisedContract: number;
    billedToDate: number;
    retainage: number;
    paidToDate: number;
    balance: number;
}
