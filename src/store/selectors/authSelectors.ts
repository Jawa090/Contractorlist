import { RootState } from '../index';

/**
 * Auth Selectors
 * Reusable selectors for accessing auth state
 */

// User selectors
export const selectUser = (state: RootState) => state.auth.user;
export const selectUserId = (state: RootState) => state.auth.user?.id;
export const selectUserEmail = (state: RootState) => state.auth.user?.email;
export const selectUserRole = (state: RootState) => state.auth.user?.role;
export const selectUserName = (state: RootState) => state.auth.user?.name;
export const selectUserCompany = (state: RootState) => state.auth.user?.company;

// Authentication status selectors
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;

// Async state selectors
export const selectLoginState = (state: RootState) => state.auth.loginState;
export const selectRegisterState = (state: RootState) => state.auth.registerState;
export const selectLogoutState = (state: RootState) => state.auth.logoutState;
export const selectDeleteAccountState = (state: RootState) => state.auth.deleteAccountState;

// Session selectors
export const selectSessionExpiry = (state: RootState) => state.auth.sessionExpiry;
export const selectRefreshTokenExpiry = (state: RootState) => state.auth.refreshTokenExpiry;

// Computed selectors
export const selectIsSessionValid = (state: RootState) => {
  const expiry = state.auth.sessionExpiry;
  if (!expiry) return false;
  return Date.now() < expiry;
};

export const selectUserInitials = (state: RootState) => {
  const user = state.auth.user;
  if (!user?.name) return 'U';

  const names = user.name.split(' ');
  if (names.length >= 2) {
    return `${names[0][0]}${names[1][0]}`.toUpperCase();
  }
  return user.name[0].toUpperCase();
};

export const selectIsContractor = (state: RootState) => {
  const role = state.auth.user?.role;
  return role === 'general-contractor' || role === 'subcontractor';
};

export const selectIsClient = (state: RootState) => {
  const role = state.auth.user?.role;
  return role === 'client' || role === 'homeowner';
};

export const selectIsVendor = (state: RootState) => {
  return state.auth.user?.role === 'vendor';
};

export const selectIsAdmin = (state: RootState) => {
  return state.auth.user?.role === 'admin';
};
