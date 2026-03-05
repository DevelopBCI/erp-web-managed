"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Search, Zap, BarChart3, ShieldCheck } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

export default function BlogAIQualityControlPage() {
    return (
        <div className="min-h-screen bg-white font-kanit">
            <Navbar />

            {/* Premium Back Button - Top Left */}
            <div className="fixed top-32 left-6 lg:left-12 z-40">
                <FadeInSection>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-3 text-slate-500 hover:text-[var(--brand-blue)] transition-all duration-300 group bg-white/80 backdrop-blur-md p-2 pr-4 rounded-full border border-slate-100 shadow-sm hover:shadow-md hover:border-[var(--brand-blue)]/20"
                    >
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        </div>
                        <span className="font-semibold tracking-wide text-[12px]">BACK TO BLOG</span>
                    </Link>
                </FadeInSection>
            </div>

            <main className="pt-32 pb-24">
                {/* Article Header */}
                <section className="max-w-4xl mx-auto px-6 mb-12">
                    <FadeInSection>

                        <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] text-[var(--brand-blue)] uppercase bg-blue-50 rounded-full border border-blue-100">
                            AI Technology & Innovation
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            ระบบ AI Quality Control ตัวช่วยเรื่องการควบคุมคุณภาพสินค้า
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-slate-100">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[var(--brand-blue)]">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-light">Written by</p>
                                        <p className="text-sm font-bold text-slate-700">BCI Admin</p>
                                    </div>
                                </div>
                                <div className="h-8 w-[1px] bg-slate-100"></div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-light">Published on</p>
                                        <p className="text-sm font-bold text-slate-700">December 15, 2024</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </FadeInSection>
                </section>

                {/* Article Content */}
                <section className="max-w-4xl mx-auto px-6">
                    <FadeInSection delay={0.1}>
                        <div className="prose prose-slate prose-lg max-w-none">
                            <p className="text-slate-600 leading-relaxed indent-10 mb-10 text-lg font-light">
                                หลายคนคงคิดว่าการนำระบบ <span className="text-[var(--brand-blue)] font-semibold">AI Quality Control</span> เข้ามาใช้งานจะเป็นแค่การติดตั้งกล้องเพื่อตรวจจับข้อบกพร่องในการผลิตเพียงอย่างเดียวเท่านั้น แต่อันที่จริงแล้ว ยังจะเป็นการใช้กล้องเพื่อตรวจจับภาพสินค้าในสายการผลิตและส่งข้อมูลไปยังระบบประมวลผลอัจฉริยะที่แม่นยำกว่าสายตามนุษย์หลายเท่า
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src="/img/blog/1_81e42V29ALfP6eU1FPhMdg.jpeg"
                                        alt="AI Quality Control Detection"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src="/img/blog/1_9cLgTN_qKJusj54j2VbJrg.jpeg"
                                        alt="AI Processing Analysis"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-16 text-lg font-light">
                                ระบบจะประมวลผลข้อมูลรูปภาพ และแสดงให้ทราบทันทีว่าสินค้าแต่ละชิ้นผ่านการตรวจสอบคุณภาพหรือไม่
                                อัลกอริทึมจะคัดแยกสินค้าที่ไม่ได้คุณภาพออกมาอัตโนมัติ พร้อมวิเคราะห์หาสาเหตุของปัญหา
                                ทำให้พนักงานสามารถปรับปรุงกระบวนการผลิตได้อย่างตรงจุดและทันท่วงที
                            </p>

                            {/* Key Benefits of AI QC */}
                            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 mb-20 border border-slate-100">
                                <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                                    ทำไมต้องนำ <span className="text-[var(--brand-blue)]">AI</span> มาใช้ในสายการผลิต?
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--brand-blue)] mb-6 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all duration-300 shadow-sm">
                                            <ShieldCheck className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-800 mb-4">ความแม่นยำสูงสุด</h4>
                                        <p className="text-slate-500 font-light text-sm leading-relaxed">
                                            อัลกอริทึมของ AI จะเรียนรู้และพัฒนาความแม่นยำอยู่ตลอดเวลา ช่วยลดความผิดพลาดจากความเหนื่อยล้าของแรงงานมนุษย์
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--brand-blue)] mb-6 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all duration-300 shadow-sm">
                                            <Zap className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-800 mb-4">รวดเร็วและต่อเนื่อง</h4>
                                        <p className="text-slate-500 font-light text-sm leading-relaxed">
                                            ตรวจสอบสินค้าได้หลายรายการพร้อมกันในคราวเดียว ทำงานได้ตลอด 24 ชั่วโมง โดยไม่มีความเร็วที่ลดลง
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--brand-blue)] mb-6 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all duration-300 shadow-sm">
                                            <BarChart3 className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-800 mb-4">ลดต้นทุนระยะยาว</h4>
                                        <p className="text-slate-500 font-light text-sm leading-relaxed">
                                            เมื่อเกิดความเยียที่น้อยลง ต้นทุนที่ต้องเสียไปกับสินค้าเสียก็น้อยลงตามไปด้วย ส่งผลต่อกำไรสุทธิโดยตรง
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                    <Search className="w-6 h-6 text-[var(--brand-blue)]" />
                                    หัวใจสำคัญของ AI Quality Control
                                </h3>
                                <div className="space-y-6">
                                    <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-slate-700 mb-2">อัลกอริทึมและการเรียนรู้ (Machine Learning)</h4>
                                        <p className="text-slate-500 font-light text-[15px]">
                                            อัลกอริทึมจะเรียนรู้จากข้อมูลรูปภาพในอดีต ยิ่งได้รับข้อมูลมากเท่าไหร่ ระบบก็จะยิ่งฉลาดและแยกแยะข้อบกพร่องที่ซับซ้อนได้ดีขึ้นเท่านั้น
                                        </p>
                                    </div>
                                    <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-slate-700 mb-2">การประมวลผลข้อมูล Real-time</h4>
                                        <p className="text-slate-500 font-light text-[15px]">
                                            ข้อมูลจะถูกวิเคราะห์ทันทีที่กล้องจับภาพภาพสินค้า ทำให้สามารถสั่งหยุดเครื่องจักรหรือคัดแยกสินค้าได้แบบปัจจุบันทันด่วน
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-100 flex items-center justify-end gap-2 text-slate-400 text-sm font-light">
                                <span>ที่มา : คณะสถิติประยุกต์ นิด้า (NIDA)</span>
                                <Link href="https://as.nida.ac.th/" target="_blank" className="text-[var(--brand-blue)] hover:underline">as.nida.ac.th</Link>
                            </div>
                        </div>
                    </FadeInSection>
                </section>

                {/* Back to Blog Bottom */}
                <section className="max-w-4xl mx-auto px-6 mt-20">
                    <FadeInSection delay={0.3}>
                        <div className="bg-slate-50 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100">
                            <div>
                                <h4 className="text-xl font-bold text-slate-800 mb-2">สนใจอ่านบทความอื่นๆ หรือไม่?</h4>
                                <p className="text-slate-500 font-light">ติดตามข่าวสารล่าสุดและสาระน่ารู้เกี่ยวกับ ERP และเทคโนโลยี</p>
                            </div>
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-black transition-all hover:scale-105 active:scale-95 shrink-0"
                            >
                                ดูบทความทั้งหมด
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </Link>
                        </div>
                    </FadeInSection>
                </section>
            </main>
        </div>
    );
}
