import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'contractor' | 'client' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (userData: SignupData) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'contractor' | 'client';
  phone?: string;
  company?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Local-only mock user store (for demo before backend)
  type StoredUser = {
    id: string;
    email: string;
    name: string;
    role: 'contractor' | 'client' | 'admin';
    password: string; // plain text for demo only
    avatar?: string;
  };

  const getStoredUsers = (): StoredUser[] => {
    try {
      const raw = localStorage.getItem('mockUsers');
      if (!raw) return [];
      return JSON.parse(raw) as StoredUser[];
    } catch {
      return [];
    }
  };

  const setStoredUsers = (users: StoredUser[]) => {
    localStorage.setItem('mockUsers', JSON.stringify(users));
  };

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('userData');
        
        if (token && userData) {
          // In a real app, you'd validate the token with your backend
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);
      
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in local mock store
      const users = getStoredUsers();
      const found = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (!found || found.password !== password) {
        return { success: false, message: 'Invalid email or password' };
      }

      const mockUser: User = {
        id: found.id,
        email: found.email,
        name: found.name,
        role: found.role,
        avatar: found.avatar,
      };

      setUser(mockUser);
      localStorage.setItem('authToken', 'mock-jwt-token');
      localStorage.setItem('userData', JSON.stringify(mockUser));
      
      return { success: true, message: 'Login successful!' };
    } catch (error) {
      return { success: false, message: 'Login failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: SignupData): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);
      
      // Validate passwords match
      if (userData.password !== userData.confirmPassword) {
        return { success: false, message: 'Passwords do not match' };
      }
      
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check for existing email
      const users = getStoredUsers();
      const exists = users.some(u => u.email.toLowerCase() === userData.email.toLowerCase());
      if (exists) {
        return { success: false, message: 'An account with this email already exists' };
      }

      // Mock user creation and store locally
      const created: StoredUser = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        role: userData.role,
        password: userData.password,
        avatar: userData.role === 'contractor' ? '/contractor.jpg' : '/client-1.jpg',
      };
      setStoredUsers([...users, created]);

      const sessionUser: User = {
        id: created.id,
        email: created.email,
        name: created.name,
        role: created.role,
        avatar: created.avatar,
      };
      setUser(sessionUser);
      localStorage.setItem('authToken', 'mock-jwt-token');
      localStorage.setItem('userData', JSON.stringify(sessionUser));
      
      return { success: true, message: 'Account created successfully!' };
    } catch (error) {
      return { success: false, message: 'Signup failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('userData', JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 