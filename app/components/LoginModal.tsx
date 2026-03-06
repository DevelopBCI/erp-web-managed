'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToRegister: () => void;
}

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        identifier: '',
        password: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { login } = useAuth();

    if (!isOpen) return null;

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.identifier.trim()) {
            newErrors.identifier = "กรุณากรอกชื่อผู้ใช้หรืออีเมล";
        }
        if (!formData.password) {
            newErrors.password = "กรุณากรอกรหัสผ่าน";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            try {
                await login(formData);
                toast.success('เข้าสู่ระบบสำเร็จ!');
                onClose();
            } catch (error: any) {
                setErrors({
                    ...errors,
                    identifier: error.message || 'เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบข้อมูล'
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-10000 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-4xl shadow-2xl overflow-hidden font-kanit"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-[#0e9aef] to-[#0a82cc] p-8 text-white text-center relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 rotate-3">
                                    <Sparkles size={30} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">เข้าสู่ระบบ</h3>
                                    <p className="text-white/80 text-sm mt-1">ยินดีต้อนรับกลับสู่ BCI ERP</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-8">
                            <form onSubmit={handleLogin} className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                                        ชื่อผู้ใช้ หรือ อีเมล
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="กรอกชื่อผู้ใช้ หรือ อีเมล..."
                                        className={`w-full px-5 py-3.5 bg-slate-50 border rounded-2xl outline-none transition-all text-sm text-slate-900 ${
                                            errors.identifier
                                                ? "border-red-500 bg-red-50 ring-4 ring-red-500/10"
                                                : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"
                                        }`}
                                        value={formData.identifier}
                                        onChange={(e) => {
                                            setFormData({ ...formData, identifier: e.target.value });
                                            if (errors.identifier) setErrors({ ...errors, identifier: '' });
                                        }}
                                    />
                                    {errors.identifier && (
                                        <p className="text-[10px] text-red-500 font-bold pl-1 mt-1">{errors.identifier}</p>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                                        รหัสผ่าน
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className={`w-full px-5 py-3.5 bg-slate-50 border rounded-2xl outline-none transition-all text-sm text-slate-900 pr-12 ${
                                                errors.password
                                                    ? "border-red-500 bg-red-50 ring-4 ring-red-500/10"
                                                    : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"
                                            }`}
                                            value={formData.password}
                                            onChange={(e) => {
                                                setFormData({ ...formData, password: e.target.value });
                                                if (errors.password) setErrors({ ...errors, password: '' });
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                                            tabIndex={-1}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-[10px] text-red-500 font-bold pl-1 mt-1">{errors.password}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#0e9aef] text-white font-bold py-3.5 rounded-2xl shadow-[0_8px_25px_rgba(14,154,239,0.3)] hover:bg-[#0c86d1] transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Sparkles size={18} />
                                            เข้าสู่ระบบบัญชีของคุณ
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Footer Switch */}
                        <div className="px-8 py-5 border-t border-slate-100 bg-slate-50 text-center">
                            <p className="text-sm text-slate-600">
                                ยังไม่มีบัญชีผู้ใช้?{' '}
                                <button
                                    onClick={onSwitchToRegister}
                                    className="text-[#0e9aef] font-bold hover:text-[#0c86d1] hover:underline transition-all"
                                >
                                    สมัครสมาชิกฟรี
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
