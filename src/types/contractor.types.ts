// Contractor-related types
export interface Contractor {
  id: number;
  user_id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  license_number?: string;
  business_address?: string;
  years_experience?: number;
  specialties?: string[];
  rating?: number;
  total_reviews?: number;
  avatar?: string;
  bio?: string;
  portfolio?: string[];
  certifications?: string[];
  insurance_verified?: boolean;
  background_check?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContractorFilters {
  specialty?: string;
  location?: string;
  minRating?: number;
  minExperience?: number;
  verified?: boolean;
}

export interface ContractorReview {
  id: number;
  contractor_id: number;
  client_id: number;
  client_name: string;
  rating: number;
  comment: string;
  project_type?: string;
  createdAt: string;
}

export interface ContractorStats {
  total_projects: number;
  completed_projects: number;
  active_projects: number;
  total_earnings: number;
  average_rating: number;
  total_reviews: number;
}
