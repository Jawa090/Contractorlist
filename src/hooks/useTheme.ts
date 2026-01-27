import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Theme,
    getStoredTheme,
    changeTheme,
    toggleTheme as toggleThemeUtil,
    resolveTheme,
    watchSystemTheme,
    isDashboardRoute,
    getDashboardTheme,
    changeDashboardTheme,
} from '@/utils/theme';

/**
 * Custom hook for theme management
 * Provides theme state and functions to change it
 * Dashboard-aware: Uses saved preference in dashboard, light theme elsewhere
 * 
 * @example
 * const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
 */
export const useTheme = () => {
    const location = useLocation();
    const isDashboard = isDashboardRoute(location.pathname);

    // Get initial theme based on route
    const getInitialTheme = (): Theme => {
        if (isDashboard) {
            return getDashboardTheme();
        }
        return 'light';
    };

    const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() =>
        resolveTheme(getInitialTheme())
    );

    // Update theme when route changes
    useEffect(() => {
        const newTheme = getInitialTheme();
        setThemeState(newTheme);
        changeTheme(newTheme);
    }, [location.pathname]);

    // Update resolved theme when theme changes
    useEffect(() => {
        setResolvedTheme(resolveTheme(theme));
    }, [theme]);

    // Watch for system theme changes if theme is 'system'
    useEffect(() => {
        if (theme === 'system') {
            const cleanup = watchSystemTheme((newSystemTheme) => {
                setResolvedTheme(newSystemTheme);
            });
            return cleanup;
        }
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        if (isDashboard) {
            // Save to dashboard theme preference
            changeDashboardTheme(newTheme);
        } else {
            // Public pages should stay light, but update state
            changeTheme('light');
        }
        setThemeState(newTheme);
    };

    const toggleTheme = () => {
        if (isDashboard) {
            const newTheme = toggleThemeUtil();
            changeDashboardTheme(newTheme);
            setThemeState(newTheme);
        } else {
            // Don't toggle on public pages
            changeTheme('light');
        }
    };

    return {
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        isDark: resolvedTheme === 'dark',
        isLight: resolvedTheme === 'light',
        isDashboard, // Expose whether we're on a dashboard route
    };
};
