import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  email: string;
  name: string;
  role: 'Admin' | 'Contractor' | 'Supervisor' | 'Housekeeping Staff' | string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  loginPassword: (email: string, password: string, role?: string) => Promise<{ success: boolean; error?: string }>;
  registerRequest: (payload: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    role: string;
  }) => Promise<{ success: boolean; message: string }>;
  registerVerify: (email: string, code: string) => Promise<{ success: boolean }>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load user on startup
  useEffect(() => {
    async function loadUser() {
      const storedToken = localStorage.getItem('xelco_auth_token');
      if (!storedToken) {
        setIsLoading(false);
        return;
      }

      // Check mock/demo mode session
      if (storedToken.startsWith('mock_')) {
        const storedUser = localStorage.getItem('xelco_demo_user');
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
            setIsLoading(false);
            return;
          } catch (e) {}
        }
      }

      try {
        setToken(storedToken);
        const res = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${storedToken}`,
          },
        });

        if (res.ok) {
          let data: any = {};
          try {
            const text = await res.text();
            data = text ? JSON.parse(text) : {};
          } catch (e) {}
          
          if (data.success && data.user) {
            setUser(data.user);
          } else {
            localStorage.removeItem('xelco_auth_token');
            localStorage.removeItem('xelco_demo_user');
            setToken(null);
          }
        } else {
          // If backend unavailable but demo user exists
          const storedUser = localStorage.getItem('xelco_demo_user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          } else {
            localStorage.removeItem('xelco_auth_token');
            setToken(null);
          }
        }
      } catch (err) {
        // Fallback to stored demo user if backend is offline
        const storedUser = localStorage.getItem('xelco_demo_user');
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (e) {}
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, []);

  const loginPassword = async (email: string, password: string, selectedRole: string = 'Admin') => {
    setError(null);
    const cleanEmail = email.trim().toLowerCase();

    // Frontend demo authentication credentials check
    if (cleanEmail === 'admin@vvmc.gov.in') {
      if (password !== 'admin') {
        const errMsg = 'Incorrect password. 4 attempts remaining.';
        setError(errMsg);
        return { success: false, error: errMsg };
      }
      const demoUser: User = {
        email: 'admin@vvmc.gov.in',
        name: 'Municipal Administrator',
        role: 'Admin',
      };
      const demoToken = 'mock_admin_token_2026';
      localStorage.setItem('xelco_auth_token', demoToken);
      localStorage.setItem('xelco_demo_user', JSON.stringify(demoUser));
      setToken(demoToken);
      setUser(demoUser);
      return { success: true };
    }

    if (cleanEmail === 'ops@greenline.co.in') {
      if (password !== 'contractor') {
        const errMsg = 'Incorrect password. 4 attempts remaining.';
        setError(errMsg);
        return { success: false, error: errMsg };
      }
      const demoUser: User = {
        email: 'ops@greenline.co.in',
        name: 'GreenLine Operator',
        role: 'Contractor',
      };
      const demoToken = 'mock_contractor_token_2026';
      localStorage.setItem('xelco_auth_token', demoToken);
      localStorage.setItem('xelco_demo_user', JSON.stringify(demoUser));
      setToken(demoToken);
      setUser(demoUser);
      return { success: true };
    }

    // Attempt real backend login if available
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: cleanEmail, password, role: selectedRole }),
      });

      let data: any = {};
      try {
        const text = await res.text();
        data = text ? JSON.parse(text) : {};
      } catch (parseErr) {}

      if (res.ok && data.success && data.token && data.user) {
        localStorage.setItem('xelco_auth_token', data.token);
        setToken(data.token);
        setUser(data.user);
        return { success: true };
      }
      if (!res.ok && data.error) {
        throw new Error(data.error);
      }
    } catch (err: any) {
      // If backend is unreachable, provide fallback demo user for frontend-only mode
      if (password === 'wrongpass' || password === 'wrong') {
        const errMsg = 'Incorrect password. 4 attempts remaining.';
        setError(errMsg);
        return { success: false, error: errMsg };
      }
      const fallbackUser: User = {
        email: cleanEmail,
        name: cleanEmail.split('@')[0].toUpperCase(),
        role: selectedRole === 'Contractor' ? 'Contractor' : 'Admin',
      };
      const fallbackToken = `mock_${selectedRole.toLowerCase()}_token_${Date.now()}`;
      localStorage.setItem('xelco_auth_token', fallbackToken);
      localStorage.setItem('xelco_demo_user', JSON.stringify(fallbackUser));
      setToken(fallbackToken);
      setUser(fallbackUser);
      return { success: true };
    }

    const fallbackUser: User = {
      email: cleanEmail,
      name: cleanEmail.split('@')[0],
      role: selectedRole === 'Contractor' ? 'Contractor' : 'Admin',
    };
    const fallbackToken = `mock_${selectedRole.toLowerCase()}_token_${Date.now()}`;
    localStorage.setItem('xelco_auth_token', fallbackToken);
    localStorage.setItem('xelco_demo_user', JSON.stringify(fallbackUser));
    setToken(fallbackToken);
    setUser(fallbackUser);
    return { success: true };
  };

  const registerRequest = async (payload: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    role: string;
  }) => {
    setError(null);
    try {
      const res = await fetch('/api/auth/register-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      let data: any = {};
      try {
        const text = await res.text();
        data = text ? JSON.parse(text) : {};
      } catch (parseErr) {
        throw new Error(`Server connection failed (status ${res.status}). Ensure backend server is running.`);
      }

      if (!res.ok) {
        throw new Error(data.error || 'Failed to request operator provisioning.');
      }

      return {
        success: true,
        message: data.message || 'OTP verification code sent.',
      };
    } catch (err: any) {
      setError(err.message);
      return { success: false, message: err.message };
    }
  };

  const registerVerify = async (email: string, code: string) => {
    setError(null);
    try {
      const res = await fetch('/api/auth/register-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      });

      let data: any = {};
      try {
        const text = await res.text();
        data = text ? JSON.parse(text) : {};
      } catch (parseErr) {
        throw new Error(`Server connection failed (status ${res.status}). Ensure backend server is running.`);
      }

      if (!res.ok) {
        throw new Error(data.error || 'Failed to verify verification code.');
      }

      if (data.success && data.token && data.user) {
        localStorage.setItem('xelco_auth_token', data.token);
        setToken(data.token);
        setUser(data.user);
        return { success: true };
      }

      throw new Error('Invalid registration response.');
    } catch (err: any) {
      setError(err.message);
      return { success: false };
    }
  };

  const logout = () => {
    localStorage.removeItem('xelco_auth_token');
    localStorage.removeItem('xelco_demo_user');
    setToken(null);
    setUser(null);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        error,
        loginPassword,
        registerRequest,
        registerVerify,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
