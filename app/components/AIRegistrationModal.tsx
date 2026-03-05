"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Bot,
    Sparkles,
    Key,
    Phone,
    Building2,
    BarChart3,
    Check,
    ArrowLeft,
    ArrowRight,
    AlertCircle
} from "lucide-react";

interface AIRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: (data: { name: string; contact: string }) => void;
}

const AIRegistrationModal = ({ isOpen, onClose, onRegister }: AIRegistrationModalProps) => {
    const initialFormState = {
        username: "",
        password: "",
        confirmPassword: "",
        contactName: "",
        companyName: "",
        address: "",
        phoneNumber: "",
        email: "",
        brandName: "",
        productTypes: [] as string[],
        otherProductType: "",
        marketingSource: [] as string[],
        interInput: "",
        magazineInput: "",
    };

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateStep = (step: number) => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.username.trim()) newErrors.username = "กรุณากรอกชื่อผู้ใช้งาน";
            if (!formData.password) newErrors.password = "กรุณากรอกรหัสผ่าน";
            if (formData.password && formData.password.length < 6) newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
        }

        if (step === 2) {
            if (!formData.contactName.trim()) newErrors.contactName = "กรุณากรอกชื่อผู้ติดต่อ";
            if (!formData.companyName.trim()) newErrors.companyName = "กรุณากรอกชื่อบริษัท";
            if (!formData.address.trim()) newErrors.address = "กรุณากรอกที่อยู่บริษัท";
            if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "กรุณากรอกเบอร์โทรศัพท์";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email.trim()) newErrors.email = "กรุณากรอกอีเมล";
            else if (!emailRegex.test(formData.email)) newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
        }

        if (step === 3) {
            if (!formData.brandName.trim()) newErrors.brandName = "กรุณากรอกชื่อแบรนด์";
            if (formData.productTypes.length === 0 && !formData.otherProductType.trim()) {
                newErrors.productTypes = "กรุณาเลือกประเภทสินค้าอย่างน้อย 1 อย่าง";
            }
        }

        if (step === 4) {
            if (formData.marketingSource.length === 0) {
                newErrors.marketingSource = "กรุณาเลือกแหล่งที่มาอย่างน้อย 1 อย่าง";
            } else {
                if (formData.marketingSource.includes('Inter') && !formData.interInput.trim()) {
                    newErrors.interInput = "กรุณาระบุรายละเอียดแหล่งข้อมูล Inter";
                }
                if (formData.marketingSource.includes('Magazine') && !formData.magazineInput.trim()) {
                    newErrors.magazineInput = "กรุณาระบุชื่อนิตยสาร";
                }
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const totalSteps = 4;
    const steps = [
        { id: 1, title: "Account", icon: <Key size={16} /> },
        { id: 2, title: "Contact", icon: <Phone size={16} /> },
        { id: 3, title: "Business", icon: <Building2 size={16} /> },
        { id: 4, title: "Survey", icon: <BarChart3 size={16} /> },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateStep(currentStep)) return;

        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
        } else {
            onRegister({ name: formData.contactName, contact: formData.email || formData.phoneNumber });
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(1, prev - 1));
    };

    const handleClear = () => {
        if (confirm("ต้องการล้างข้อมูลทั้งหมดใช่หรือไม่?")) {
            setFormData(initialFormState);
            setCurrentStep(1);
        }
    };

    const toggleCheckbox = (listName: 'productTypes' | 'marketingSource', value: string) => {
        setFormData(prev => ({
            ...prev,
            [listName]: prev[listName].includes(value)
                ? prev[listName].filter(item => item !== value)
                : [...prev[listName], value]
        }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
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
                        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden font-kanit flex flex-col max-h-[95vh]"
                    >
                        {/* Header Section */}
                        <div className="bg-gradient-to-r from-[#0e9aef] to-[#0a82cc] p-6 text-white text-center relative shrink-0">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 rotate-3">
                                    <Bot size={26} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold">สมัครสมาชิก BCI Smart AI</h3>
                                    <p className="text-white/80 text-xs">ขั้นตอนที่ {currentStep} จาก {totalSteps}</p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline / Progress Indicator */}
                        <div className="px-8 pt-8 pb-2 shrink-0">
                            <div className="relative flex justify-between">
                                {/* Background Line */}
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
                                {/* Progress Line */}
                                <motion.div
                                    className="absolute top-1/2 left-0 h-1 bg-[#0e9aef] -translate-y-1/2 z-0"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                                />

                                {steps.map((step) => (
                                    <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                                        <motion.div
                                            animate={{
                                                backgroundColor: currentStep >= step.id ? "#0e9aef" : "#fff",
                                                borderColor: currentStep >= step.id ? "#0e9aef" : "#e2e8f0",
                                                color: currentStep >= step.id ? "#fff" : "#94a3b8",
                                                scale: currentStep === step.id ? 1.2 : 1
                                            }}
                                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm shadow-sm transition-colors cursor-default`}
                                        >
                                            {currentStep > step.id ? <Check size={16} /> : step.id}
                                        </motion.div>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${currentStep >= step.id ? "text-[#0e9aef]" : "text-slate-400"}`}>
                                            {step.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Section - Single Step View */}
                        <div className="overflow-y-auto p-8 custom-scrollbar flex-1">
                            <form onSubmit={handleSubmit} className="h-full flex flex-col">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-1"
                                    >
                                        {currentStep === 1 && (
                                            <section className="space-y-5">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-10 h-10 bg-[#0e9aef]/10 rounded-xl flex items-center justify-center text-[#0e9aef]">
                                                        <Key size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-slate-800">Account Information</h4>
                                                        <p className="text-sm text-slate-500">กรุณากำหนดชื่อผู้ใช้และรหัสผ่านเพื่อเข้าสู่ระบบ</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Username</label>
                                                        <input type="text" placeholder="ชื่อผู้ใช้งาน" value={formData.username} onChange={(e) => { setFormData({ ...formData, username: e.target.value }); if (errors.username) setErrors({ ...errors, username: "" }); }} className={`w-full px-5 py-3.5 bg-slate-50 border rounded-2xl outline-none transition-all text-sm ${errors.username ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                        {errors.username && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.username}</p>}
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="space-y-1.5">
                                                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Password</label>
                                                            <input type="password" placeholder="รหัสผ่าน" value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }); if (errors.password) setErrors({ ...errors, password: "" }); }} className={`w-full px-5 py-3.5 bg-slate-50 border rounded-2xl outline-none transition-all text-sm ${errors.password ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                            {errors.password && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.password}</p>}
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Confirm Password</label>
                                                            <input type="password" placeholder="ยืนยันรหัสผ่าน" value={formData.confirmPassword} onChange={(e) => { setFormData({ ...formData, confirmPassword: e.target.value }); if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: "" }); }} className={`w-full px-5 py-3.5 bg-slate-50 border rounded-2xl outline-none transition-all text-sm ${errors.confirmPassword ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                            {errors.confirmPassword && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.confirmPassword}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        )}

                                        {currentStep === 2 && (
                                            <section className="space-y-5">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-10 h-10 bg-[#0e9aef]/10 rounded-xl flex items-center justify-center text-[#0e9aef]">
                                                        <Phone size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-slate-800">Contact Information</h4>
                                                        <p className="text-sm text-slate-500">ข้อมูลสำหรับการติดต่อและระบุตัวตนบริษัท</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 block">Contact Name</label>
                                                        <input type="text" placeholder="ชื่อผู้ติดต่อ" value={formData.contactName} onChange={(e) => { setFormData({ ...formData, contactName: e.target.value }); if (errors.contactName) setErrors({ ...errors, contactName: "" }); }} className={`w-full px-5 py-3 bg-slate-50 border rounded-xl outline-none transition-all text-sm ${errors.contactName ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                        {errors.contactName && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-0.5"><AlertCircle size={10} /> {errors.contactName}</p>}
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 block">Company Name</label>
                                                        <input type="text" placeholder="ชื่อบริษัท" value={formData.companyName} onChange={(e) => { setFormData({ ...formData, companyName: e.target.value }); if (errors.companyName) setErrors({ ...errors, companyName: "" }); }} className={`w-full px-5 py-3 bg-slate-50 border rounded-xl outline-none transition-all text-sm ${errors.companyName ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                        {errors.companyName && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-0.5"><AlertCircle size={10} /> {errors.companyName}</p>}
                                                    </div>
                                                    <div className="space-y-1.5 md:col-span-2">
                                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 block">Address</label>
                                                        <textarea rows={2} placeholder="ที่อยู่บริษัท" value={formData.address} onChange={(e) => { setFormData({ ...formData, address: e.target.value }); if (errors.address) setErrors({ ...errors, address: "" }); }} className={`w-full px-5 py-3 bg-slate-50 border rounded-xl outline-none transition-all text-sm resize-none ${errors.address ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                        {errors.address && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-0.5"><AlertCircle size={10} /> {errors.address}</p>}
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 block">Phone Number</label>
                                                        <input type="tel" placeholder="08x-xxx-xxxx" value={formData.phoneNumber} onChange={(e) => { setFormData({ ...formData, phoneNumber: e.target.value }); if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" }); }} className={`w-full px-5 py-3 bg-slate-50 border rounded-xl outline-none transition-all text-sm ${errors.phoneNumber ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                        {errors.phoneNumber && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-0.5"><AlertCircle size={10} /> {errors.phoneNumber}</p>}
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 block">Email</label>
                                                        <input type="email" placeholder="example@email.com" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: "" }); }} className={`w-full px-5 py-3 bg-slate-50 border rounded-xl outline-none transition-all text-sm ${errors.email ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                        {errors.email && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-0.5"><AlertCircle size={10} /> {errors.email}</p>}
                                                    </div>
                                                </div>
                                            </section>
                                        )}

                                        {currentStep === 3 && (
                                            <section className="space-y-5">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-10 h-10 bg-[#0e9aef]/10 rounded-xl flex items-center justify-center text-[#0e9aef]">
                                                        <Building2 size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-slate-800">Business Details</h4>
                                                        <p className="text-sm text-slate-500">รายละเอียดเกี่ยวกับสินค้าและลักษณะธุรกิจของคุณ</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-5">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 block">Brand Name of Products Sold</label>
                                                        <input type="text" placeholder="ชื่อแบรนด์สินค้า" value={formData.brandName} onChange={(e) => { setFormData({ ...formData, brandName: e.target.value }); if (errors.brandName) setErrors({ ...errors, brandName: "" }); }} className={`w-full px-5 py-3.5 bg-slate-50 border rounded-xl outline-none transition-all text-sm ${errors.brandName ? "border-red-500 bg-red-50 ring-4 ring-red-500/10" : "border-slate-100 focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white"}`} />
                                                        {errors.brandName && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1 mt-0.5"><AlertCircle size={10} /> {errors.brandName}</p>}
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 block">Product Types (Select all that apply)</label>
                                                        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 p-1 rounded-2xl transition-all ${errors.productTypes ? "bg-red-50 ring-2 ring-red-500/20" : ""}`}>
                                                            {["Food", "Medicine", "Printing"].map(type => (
                                                                <label key={type} className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors border-2 border-transparent has-[:checked]:border-[#0e9aef]/30 has-[:checked]:bg-[#0e9aef]/5 group">
                                                                    <input type="checkbox" checked={formData.productTypes.includes(type)} onChange={() => { toggleCheckbox('productTypes', type); if (errors.productTypes) setErrors({ ...errors, productTypes: "" }); }} className="w-5 h-5 rounded text-[#0e9aef] focus:ring-[#0e9aef] border-slate-300" />
                                                                    <span className="text-sm text-slate-700 font-bold group-hover:text-[#0e9aef] transition-colors">{type}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        {errors.productTypes && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.productTypes}</p>}
                                                        <div className="flex flex-col gap-1.5 mt-2">
                                                            <label className="text-[11px] font-bold text-slate-400 pl-1 block">Other :</label>
                                                            <input type="text" placeholder="ระบุประเภทอื่นๆ..." value={formData.otherProductType} onChange={(e) => { setFormData({ ...formData, otherProductType: e.target.value }); if (errors.productTypes) setErrors({ ...errors, productTypes: "" }); }} className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-4 focus:ring-[#0e9aef]/10 focus:border-[#0e9aef]/30 focus:bg-white transition-all text-sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        )}

                                        {currentStep === 4 && (
                                            <section className="space-y-5">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-10 h-10 bg-[#0e9aef]/10 rounded-xl flex items-center justify-center text-[#0e9aef]">
                                                        <BarChart3 size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-slate-800">Marketing Survey</h4>
                                                        <p className="text-sm text-slate-500">ช่วยให้เรารู้จักคุณดีขึ้นผ่านแหล่งที่มาของข้อมูล</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-5">
                                                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 block">How did you know ERP?</label>
                                                    <div className="space-y-3">
                                                        {/* Facebook & Line */}
                                                        <div className={`grid grid-cols-2 gap-3 p-1 rounded-2xl transition-all ${errors.marketingSource ? "bg-red-50 ring-2 ring-red-500/20" : ""}`}>
                                                            {["Facebook", "Line"].map(src => (
                                                                <label key={src} className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors border-2 border-transparent has-[:checked]:border-[#0e9aef]/30 has-[:checked]:bg-[#0e9aef]/5 group">
                                                                    <input type="checkbox" checked={formData.marketingSource.includes(src)} onChange={() => { toggleCheckbox('marketingSource', src); if (errors.marketingSource) setErrors({ ...errors, marketingSource: "" }); }} className="w-5 h-5 rounded text-[#0e9aef] focus:ring-[#0e9aef] border-slate-300" />
                                                                    <span className="text-sm text-slate-700 font-bold group-hover:text-[#0e9aef] transition-colors">{src}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        {errors.marketingSource && <p className="text-[10px] text-red-500 font-bold pl-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.marketingSource}</p>}

                                                        {/* Inter & Magazine with Inputs */}
                                                        <div className="space-y-3">
                                                            <div className={`flex flex-col gap-2 bg-slate-50 p-4 rounded-2xl border-2 transition-all ${errors.interInput ? "border-red-500 bg-red-50 ring-2 ring-red-500/10" : "border-transparent has-[:checked]:border-[#0e9aef]/20"}`}>
                                                                <label className="flex items-center gap-3 shrink-0 cursor-pointer group">
                                                                    <input type="checkbox" checked={formData.marketingSource.includes('Inter')} onChange={() => { toggleCheckbox('marketingSource', 'Inter'); if (errors.marketingSource) setErrors({ ...errors, marketingSource: "" }); }} className="w-5 h-5 rounded text-[#0e9aef] focus:ring-[#0e9aef] border-slate-300" />
                                                                    <span className="text-sm text-slate-700 font-bold group-hover:text-[#0e9aef] transition-colors">Inter :</span>
                                                                </label>
                                                                <input type="text" placeholder="ระบุแหล่งข้อมูล..." disabled={!formData.marketingSource.includes('Inter')} value={formData.interInput} onChange={(e) => { setFormData({ ...formData, interInput: e.target.value }); if (errors.interInput) setErrors({ ...errors, interInput: "" }); }} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl outline-none text-sm disabled:opacity-50 focus:border-[#0e9aef]/40" />
                                                                {errors.interInput && <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5"><AlertCircle size={10} /> {errors.interInput}</p>}
                                                            </div>
                                                            <div className={`flex flex-col gap-2 bg-slate-50 p-4 rounded-2xl border-2 transition-all ${errors.magazineInput ? "border-red-500 bg-red-50 ring-2 ring-red-500/10" : "border-transparent has-[:checked]:border-[#0e9aef]/20"}`}>
                                                                <label className="flex items-center gap-3 shrink-0 cursor-pointer group">
                                                                    <input type="checkbox" checked={formData.marketingSource.includes('Magazine')} onChange={() => { toggleCheckbox('marketingSource', 'Magazine'); if (errors.marketingSource) setErrors({ ...errors, marketingSource: "" }); }} className="w-5 h-5 rounded text-[#0e9aef] focus:ring-[#0e9aef] border-slate-300" />
                                                                    <span className="text-sm text-slate-700 font-bold group-hover:text-[#0e9aef] transition-colors">Magazine :</span>
                                                                </label>
                                                                <input type="text" placeholder="ระบุชื่อนิตยสาร..." disabled={!formData.marketingSource.includes('Magazine')} value={formData.magazineInput} onChange={(e) => { setFormData({ ...formData, magazineInput: e.target.value }); if (errors.magazineInput) setErrors({ ...errors, magazineInput: "" }); }} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl outline-none text-sm disabled:opacity-50 focus:border-[#0e9aef]/40" />
                                                                {errors.magazineInput && <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5"><AlertCircle size={10} /> {errors.magazineInput}</p>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Bottom Navigation */}
                                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between gap-4 shrink-0">
                                    <div className="flex gap-2">
                                        {currentStep === 1 ? (
                                            <button type="button" onClick={handleClear} className="px-5 py-3 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-red-500 transition-colors">เคลียร์ฟอม</button>
                                        ) : (
                                            <button type="button" onClick={handleBack} className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-2">
                                                <ArrowLeft size={16} /> ย้อนกลับ
                                            </button>
                                        )}
                                    </div>

                                    <button type="submit" className="flex-1 max-w-[200px] bg-[#0e9aef] text-white font-bold py-3.5 rounded-xl shadow-[0_8px_25px_rgba(14,154,239,0.3)] hover:bg-[#0c86d1] transition-all active:scale-95 flex items-center justify-center gap-2">
                                        {currentStep === totalSteps ? (
                                            <>
                                                <Sparkles size={18} />
                                                ยืนยันสมัคร
                                            </>
                                        ) : (
                                            <>
                                                ถัดไป <ArrowRight size={16} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AIRegistrationModal;
