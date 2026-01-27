import { RootState } from '../index';

/**
 * UI Selectors
 * Reusable selectors for accessing UI state
 */

// Notification selectors
export const selectNotifications = (state: RootState) => state.ui.notifications;
export const selectUnreadNotificationCount = (state: RootState) =>
  state.ui.notifications?.filter(n => !n.read).length || 0;

// Modal selectors
export const selectIsMobileMenuOpen = (state: RootState) => state.ui.isMobileMenuOpen;
export const selectActiveDropdown = (state: RootState) => state.ui.activeDropdown;

// Theme selectors
export const selectTheme = (state: RootState) => state.ui.theme;
export const selectIsDarkMode = (state: RootState) => state.ui.theme === 'dark';