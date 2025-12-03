import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';

/**
 * API Configuration
 * Base URL for API
 * - Development: Uses proxy (relative URL)
 * - Production: Uses environment variable or fallback
 */
const BASE_URL = import.meta.env.DEV 
  ? '/api' 
  : import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API timeout in milliseconds
const API_TIMEOUT = 30000; // 30 seconds

/**
 * Create axios instance with default configuration
 */
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: API_TIMEOUT,
  withCredentials: false, // Set to true if using cookies
});

/**
 * Request Interceptor
 * - Adds authentication token to requests
 * - Logs requests in development mode
 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add authentication token
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log API calls in development
    if (import.meta.env.DEV) {
      console.log('🚀 API Request:', {
        method: config.method?.toUpperCase(),
        url: config.baseURL + config.url,
        data: config.data,
        params: config.params,
      });
    }
    
    return config;
  },
  (error: AxiosError) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * - Handles successful responses
 * - Handles errors globally
 * - Implements token refresh logic
 */
api.interceptors.response.use(
  (response) => {
    // Log successful responses in development
    if (import.meta.env.DEV) {
      console.log('✅ API Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data,
      });
    }
    return response;
  },
  async (error: AxiosError) => {
    // Log errors in development
    if (import.meta.env.DEV) {
      console.error('❌ API Error:', {
        message: error.message,
        status: error.response?.status,
        url: error.config?.url,
        data: error.response?.data,
      });
    }

    const originalRequest = error.config as any;

    // Handle 401 Unauthorized - Token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          // TODO: Implement token refresh logic when backend supports it
          // const response = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken });
          // localStorage.setItem('token', response.data.token);
          // originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
          // return api(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails, logout user
        handleLogout();
        return Promise.reject(refreshError);
      }
      
      // If no refresh token, logout
      handleLogout();
    }

    // Handle 403 Forbidden
    if (error.response?.status === 403) {
      console.error('Access forbidden - insufficient permissions');
    }

    // Handle 404 Not Found
    if (error.response?.status === 404) {
      console.error('Resource not found');
    }

    // Handle 500 Server Error
    if (error.response?.status === 500) {
      console.error('Server error - please try again later');
    }

    return Promise.reject(error);
  }
);

/**
 * Helper function to handle logout
 */
function handleLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  localStorage.removeItem('accessToken');
  
  // Redirect to login page
  if (window.location.pathname !== '/login') {
    window.location.href = '/login';
  }
}

export default api;
