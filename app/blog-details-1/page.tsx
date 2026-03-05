"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, CheckCircle2, Zap, Target, TrendingUp } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

export default function BlogLeanManufacturingPage() {
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
                            Smart Manufacturing & Technology
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            หลักการและระบบการผลิตแบบลีน (Lean Principle & Lean Manufacturing)
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
                                        <p className="text-sm font-bold text-slate-700">December 20, 2024</p>
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
                                เมื่อแนวคิด <span className="text-[var(--brand-blue)] font-semibold">Lean</span> และระบบการผลิตแบบลีน (Lean Manufacturing)
                                เป็นที่รู้จักมากขึ้นทั้งในอุตสาหกรรมโลกและในบ้านเรา โรงงานต่างๆ ก็ต้องการเปลี่ยนระบบการผลิตจาก
                                Mass Production สู่ <span className="text-[var(--brand-blue)] font-semibold">Lean Production</span> หรือ
                                Lean Manufacturing ด้วยเหตุผลในการเพิ่มขีดความสามารถการแข่งขันและลดความสูญเสียในกระบวนการ
                            </p>

                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                                <Image
                                    src="/img/blog/lean-manufacturing-istock-1073363688.jpg"
                                    alt="Lean Manufacturing System"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* 8 Wastes Section */}
                            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-12 mb-16 border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-[var(--brand-blue)]" />
                                    แนวทางการลดความสูญเปล่า 8 ประการ (8 Wastes)
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "ผลิตมากเกินไป (Over Production)",
                                        "มีกระบวนการมากเกินไป (Over Processing)",
                                        "การขนย้ายที่ไม่จำเป็น (Conveyance)",
                                        "สินค้าคงคลังที่มากเกินไป (Inventory)",
                                        "วิธีการทำงานหรือท่าทางที่ไม่จำเป็น (Motion)",
                                        "เวลาการรอคอย (Waiting)",
                                        "กระบวนการที่เกิดของเสียและงานแก้ (Defect & Rework)",
                                        "ศักยภาพพนักงานที่ไม่ถูกนำมาใช้ประโยชน์ (Underutilized People)"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-hover hover:border-[var(--brand-blue)]/30 hover:shadow-md">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[var(--brand-blue)] font-bold text-sm shrink-0">
                                                {idx + 1}
                                            </div>
                                            <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Improvement Steps */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                        <Target className="w-6 h-6 text-[var(--brand-blue)]" />
                                        กิจกรรมหลักของการปรับปรุง
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "กำหนดคุณค่า (Value) ของเพิ่มผลิตภัณฑ์",
                                            "เขียนแผนผังคุณค่า (Value Stream Mapping)",
                                            "ทำให้การผลิตไหลลื่น (Flow)",
                                            "สร้างกลไกการดึงงาน (Pull) ลด Over Production",
                                            "พัฒนาสู่ความสมบูรณ์แบบ (Perfection)"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-4 items-center text-slate-600 font-light p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                                <CheckCircle2 className="w-5 h-5 text-[var(--brand-blue)] shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[var(--brand-blue)] rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-100">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <TrendingUp className="w-6 h-6 text-blue-200" />
                                        ประโยชน์ที่จะได้รับ
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                                                <span className="font-bold text-xl">15%</span>
                                            </div>
                                            <p className="font-light text-sm opacity-90 leading-relaxed">
                                                มีผลการปรับปรุงเพิ่มขึ้น หรือลดต้นทุนอย่างน้อย 15% (Productivity, Breakdown, Lead time)
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <p className="font-light text-[14px] opacity-90 leading-relaxed">
                                                กระบวนการผลิตมีความยืดหยุ่น ตอบสนองต่อลูกค้าได้รวดเร็วขึ้น และต้นทุนการผลิตอยู่ภายใต้การควบคุม
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                                                <User className="w-6 h-6" />
                                            </div>
                                            <p className="font-light text-[14px] opacity-90 leading-relaxed">
                                                เสริมสร้างและพัฒนาบุคลากรในองค์การ สู่ความเป็นเลิศในการผลิตอย่างยั่งยืน
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-100 flex items-center justify-end gap-2 text-slate-400 text-sm font-light">
                                <span>ที่มา: สมาคมส่งเสริมเทคโนโลยี (ไทย-ญี่ปุ่น)</span>
                                <Link href="https://www.tpa.or.th" target="_blank" className="text-[var(--brand-blue)] hover:underline">tpa.or.th</Link>
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
