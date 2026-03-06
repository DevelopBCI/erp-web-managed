import apiClient from '@/lib/apiClient';
import { LoginFormModel, AuthResponse } from '@/models/auth.model';
import { RegisterFormModel } from '@/models/register.model';

export interface RegisterResponse {
    status: string;
    message: string;
}

/**
 * ส่งข้อมูลสมัครสมาชิกไปยัง Backend
 */
export const registerUser = async (data: RegisterFormModel): Promise<RegisterResponse> => {
    return await apiClient.post('/users/register.php', data) as unknown as RegisterResponse;
};

/**
 * ส่งข้อมูล Login ไปยัง Backend
 */
export const loginUser = async (data: Partial<LoginFormModel>): Promise<AuthResponse> => {
    return await apiClient.post('/users/login.php', data) as unknown as AuthResponse;
};

/**
 * Logout จาก Backend
 */
export const logoutUser = async (): Promise<AuthResponse> => {
    return await apiClient.post('/users/logout.php') as unknown as AuthResponse;
};

/**
 * ตรวจสอบ session ปัจจุบัน
 */
export const getMe = async (): Promise<AuthResponse> => {
    try {
        return await apiClient.get('/users/me.php') as unknown as AuthResponse;
    } catch (error) {
        return { status: 'error', message: 'Unauthorized', data: undefined };
    }
};
