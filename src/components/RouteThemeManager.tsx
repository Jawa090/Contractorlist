import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyRouteBasedTheme } from '@/utils/theme';

/**
 * RouteThemeManager Component
 * Automatically applies the correct theme based on the current route
 * - Dashboard routes: User's saved dashboard theme preference
 * - Public routes: Always light theme
 * 
 * This component should be placed high in the component tree,
 * ideally in App.tsx alongside other global managers
 */
export const RouteThemeManager = () => {
    const location = useLocation();

    useEffect(() => {
        // Apply appropriate theme whenever route changes
        applyRouteBasedTheme(location.pathname);
    }, [location.pathname]);

    // This component doesn't render anything
    return null;
};

export default RouteThemeManager;
