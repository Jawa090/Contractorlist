import api from './api';

// Types for Company Search Filters
export interface CompanySearchFilters {
  zip?: string;
  service?: string;
  city?: string;
  location?: string;
  rating?: number;
  verified_license?: boolean;
  responds_quickly?: boolean;
  hired_on_platform?: boolean;
  professional_category?: string;
  budget?: '$' | '$$' | '$$$' | '$$$$';
  provides_3d?: boolean;
  eco_friendly?: boolean;
  family_owned?: boolean;
  locally_owned?: boolean;
  offers_custom_work?: boolean;
  language?: string;
}

// Company Response Types
export interface Company {
  name: string;
  rating?: number;
  reviews?: number;
  verifiedHires?: number;
  tagline?: string;
  testimonial?: string;
  reviewer?: string;
  location?: string;
  projects?: number;
  images?: string[];
  sponsored?: boolean;
  bannerText?: string;
  [key: string]: any; // Allow for additional properties
}

export interface CompanySearchResult {
  company: Company;
  [key: string]: any; // Allow for additional properties
}

export interface CompanySearchResponse {
  success: boolean;
  data: CompanySearchResult[];
  message?: string;
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface ServicesByZipResponse {
  success: boolean;
  data: string[]; // Array of service names
  message?: string;
}

export interface CompanyDetailResponse {
  success: boolean;
  data: Company;
  message?: string;
}

export const companyService = {
  /**
   * Get All Companies
   * GET http://localhost:5000/api/companies
   */
  getAllCompanies: async (): Promise<CompanySearchResponse> => {
    // MOCK RESPONSE
    return {
      success: true,
      data: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10
      }
    };
  },

  /**
   * Search Companies (Main Endpoint)
   * GET http://localhost:5000/api/companies/search
   */
  searchCompanies: async (filters: CompanySearchFilters): Promise<CompanySearchResponse> => {
    // MOCK RESPONSE
    return {
      success: true,
      data: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10
      }
    };
  },

  /**
   * Get Services by Zip Code
   * GET http://localhost:5000/api/companies/zip/{zipCode}
   */
  getServicesByZip: async (zipCode: string): Promise<ServicesByZipResponse> => {
    // MOCK RESPONSE
    return {
      success: true,
      data: ["Plumbing", "Electrical", "HVAC"],
    };
  },

  /**
   * Get Company by Name
   * GET http://localhost:5000/api/companies/{companyName}
   */
  getCompanyByName: async (companyName: string): Promise<CompanyDetailResponse> => {
    // MOCK RESPONSE
    return {
      success: true,
      data: {
        name: companyName,
        rating: 4.5,
        reviews: 10,
        verifiedHires: 5,
        location: "New York, NY",
        projects: 3,
      },
    };
  },
};

export default companyService;

