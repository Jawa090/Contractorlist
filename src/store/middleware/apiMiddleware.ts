import { Middleware, UnknownAction } from '@reduxjs/toolkit';

// API middleware for handling request logging only (no token injection)
export const apiMiddleware: Middleware = (_store) => (next) => (action) => {
  const a = action as any;
  // Log API calls in development
  if (process.env.NODE_ENV === 'development' && a.type && a.type.includes('pending')) {
    console.log(`🚀 API Call: ${a.type}`, a.meta?.arg);
  }

  return next(action);
};
