'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            {children}
            <Toaster position="top-right" richColors closeButton />
        </AuthProvider>
    );
}
