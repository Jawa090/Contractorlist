import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AsyncThunkState } from '../types';
import authService from '@/services/authService';
import { RegisterData, LoginData, User as ApiUser } from '@/types/auth.types';

// Types
export interface User {
  id: number | string;
  name: string;
  email: string;
  avatar?: string;
  role: 'contractor' | 'client' | 'homeowner' | 'admin' | 'vendor';
  phone?: string;
  company?: string;
  is_verified?: boolean;
  license_number?: string;
  business_address?: string;
  years_experience?: number;
  specialties?: string[];
  project_type?: string;
  budget?: string;
  createdAt?: string;
  lastLogin?: string;
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  };
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  // Enhanced async states
  loginState: AsyncThunkState;
  registerState: AsyncThunkState;
  logoutState: AsyncThunkState;
  deleteAccountState: AsyncThunkState;
  // Session management
  sessionExpiry: number | null;
  refreshTokenExpiry: number | null;
}

// Initial state - check for accessToken in localStorage
const getInitialAuthState = (): AuthState => {
  const accessToken = localStorage.getItem('accessToken');
  return {
    user: null,
    isAuthenticated: !!accessToken,
    isLoading: false,
    error: null,
    token: accessToken,
    // Enhanced async states
    loginState: { pending: false, fulfilled: false, rejected: false, error: null },
    registerState: { pending: false, fulfilled: false, rejected: false, error: null },
    logoutState: { pending: false, fulfilled: false, rejected: false, error: null },
    deleteAccountState: { pending: false, fulfilled: false, rejected: false, error: null },
    // Session management
    sessionExpiry: null,
    refreshTokenExpiry: null,
  };
};

const initialState: AuthState = getInitialAuthState();

// Async thunks

/**
 * Register new user
 */
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data: RegisterData, { rejectWithValue }) => {
    try {
      const response = await authService.register(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Registration failed');
    }
  }
);

/**
 * Login user
 */
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const response = await authService.login(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

/**
 * Get user profile
 */
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.getProfile();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch profile');
    }
  }
);

/**
 * Logout user
 */
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      authService.logout();
      return null;
    } catch (error) {
      // Even if API call fails, clear local state
      authService.logout();
      return null;
    }
  }
);

export const deleteUserAccount = createAsyncThunk(
  'auth/deleteUserAccount',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call for account deletion
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear all user data from localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('token'); // legacy
      localStorage.removeItem('userData');
      localStorage.removeItem('sessionExpiry');
      localStorage.removeItem('rememberMe');
      
      return null;
    } catch (error) {
      return rejectWithValue('Account deletion failed');
    }
  }
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearAuthErrors: (state) => {
      state.loginState.error = null;
      state.registerState.error = null;
      state.logoutState.error = null;
      state.deleteAccountState.error = null;
      state.error = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      // Sync token from localStorage
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        state.token = accessToken;
      }
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.sessionExpiry = null;
      state.refreshTokenExpiry = null;
      // Clear tokens from localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    updateUserPreferences: (state, action: PayloadAction<Partial<User['preferences']>>) => {
      if (state.user?.preferences) {
        state.user.preferences = { ...state.user.preferences, ...action.payload };
      }
    },
    setSessionExpiry: (state, action: PayloadAction<number>) => {
      state.sessionExpiry = action.payload;
    },
    refreshSession: (state, action: PayloadAction<{ token: string; sessionExpiry: number }>) => {
      state.token = action.payload.token;
      state.sessionExpiry = action.payload.sessionExpiry;
      localStorage.setItem('accessToken', action.payload.token);
      localStorage.setItem('sessionExpiry', action.payload.sessionExpiry.toString());
    },
  },
  extraReducers: (builder) => {
    // Register
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.registerState = { pending: true, fulfilled: false, rejected: false, error: null };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user as User;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        state.registerState = { pending: false, fulfilled: true, rejected: false, error: null };
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.registerState = { 
          pending: false, 
          fulfilled: false, 
          rejected: true, 
          error: action.payload as string 
        };
      });

    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.loginState = { pending: true, fulfilled: false, rejected: false, error: null };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user as User;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        state.loginState = { pending: false, fulfilled: true, rejected: false, error: null };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.loginState = { 
          pending: false, 
          fulfilled: false, 
          rejected: true, 
          error: action.payload as string 
        };
      });

    // Fetch Profile
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload as User;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Logout
    builder
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
        state.sessionExpiry = null;
        state.refreshTokenExpiry = null;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        // Even if logout fails, clear the state
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      });

    // Delete Account
    builder
      .addCase(deleteUserAccount.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.deleteAccountState = { pending: true, fulfilled: false, rejected: false, error: null };
      })
      .addCase(deleteUserAccount.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.sessionExpiry = null;
        state.refreshTokenExpiry = null;
        state.error = null;
        state.deleteAccountState = { pending: false, fulfilled: true, rejected: false, error: null };
      })
      .addCase(deleteUserAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.deleteAccountState = { 
          pending: false, 
          fulfilled: false, 
          rejected: true, 
          error: action.payload as string 
        };
      });
  },
});

export const { 
  clearError, 
  clearAuthErrors, 
  setUser, 
  clearUser, 
  updateUserPreferences, 
  setSessionExpiry, 
  refreshSession 
} = authSlice.actions;
export default authSlice.reducer;