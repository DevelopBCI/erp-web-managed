'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { loginUser as apiLoginUser, logoutUser as apiLogoutUser, getMe } from '@/services/auth.service';
import { LoginFormModel } from '@/models/auth.model';
import { User } from '@/models/auth.model';

export type { User };

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (formData: Partial<LoginFormModel>) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuth = async () => {
        try {
            setIsLoading(true);
            const response = await getMe();
            if (response.status === 'success' && response.data?.user) {
                setUser(response.data.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Auth verification failed', error);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (formData: Partial<LoginFormModel>) => {
        try {
            const response = await apiLoginUser(formData);
            
            if (response.status === 'success') {
                const responseData = (response as any).data;
                if (responseData && responseData.user) {
                    setUser(responseData.user);
                }
            } else {
                // If it resolves as 200 but status is 'error'
                throw new Error(response.message || 'Login failed');
            }
        } catch (error: any) {
            // Unify network 401s and custom errors
            const errorMessage = error.response?.data?.message || error.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อ';
            throw new Error(errorMessage);
        }
    };

    const logout = async () => {
        try {
            await apiLogoutUser();
        } catch (error) {
            console.error('Logout failed', error);
        } finally {
            setUser(null);
            window.location.reload();
        }
    };

    useEffect(() => {
        // Initial auth check when app loads
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            isLoading,
            login,
            logout,
            checkAuth
        }}>
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
