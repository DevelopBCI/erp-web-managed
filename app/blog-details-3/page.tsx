"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User,  Zap, Database, Users, Banknote, Users2, Truck, LayoutGrid, Globe, ShieldCheck, Box } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

export default function BlogERPSMEPage() {
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
                            SME & Business Transformation
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            ระบบ ERP ในธุรกิจ SME: หัวใจสำคัญของการขับเคลื่อนองค์กรในยุคดิจิทัล
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
                                        <p className="text-sm font-bold text-slate-700">December 10, 2024</p>
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
                                <span className="font-bold text-slate-800 italic">ERP คืออะไร?</span> ปัจจุบันโลกได้เข้าสู่ยุคการปฏิวัติอุตสาหกรรมแบบทวีคูณ ทำให้ผู้ประกอบการธุรกิจประเภทต่างๆ ทั่วโลกต้องปรับตัวเพื่อรองรับการเปลี่ยนแปลงนี้ โดยเฉพาะอย่างยิ่งผู้ประกอบการวิสาหกิจขนาดกลางและขนาดย่อม (SME) ที่ได้รับผลกระทบเป็นอย่างมาก
                            </p>

                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                                <Image
                                    src="/img/blog/ERP.jpg"
                                    alt="ERP for SME Business"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-16 text-lg font-light">
                                ดังนั้น SME จึงต้องเตรียมความพร้อมด้านกระบวนการทำงาน โดยเฉพาะการนำเอาเทคโนโลยีสารสนเทศเข้ามาช่วยเพิ่มประสิทธิภาพ เช่น <span className="text-[var(--brand-blue)] font-semibold">Enterprise Resource Planning (ERP)</span> หรือระบบสารสนเทศเพื่อการบรูณาการข้อมูล และการวางแผนทรัพยากรทางธุรกิจขององค์กรโดยรวม เพื่อก้าวข้ามขีดจำกัดด้านการจัดการและสร้างความได้เปรียบในเชิงลึก
                            </p>

                            {/* 5 Groups of ERP */}
                            <div className="mb-20">
                                <h3 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-[var(--brand-blue)] pl-4">
                                    ประเภทของระบบ ERP แบ่งออกเป็น 5 กลุ่มหลัก
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        {
                                            title: "Material Resource Planning (MRP)",
                                            desc: "ระบบจัดทำแผนความต้องการวัสดุ ตารางการผลิตหลัก และแฟ้มข้อมูล BOM เพื่อการจัดการสินค้าคงคลังที่แม่นยำ",
                                            icon: <Box className="w-5 h-5" />
                                        },
                                        {
                                            title: "Customer Resource Management (CRM)",
                                            desc: "บริหารความสัมพันธ์ลูกค้า ศึกษาพฤติกรรมการซื้อ และการบริการหลังการขายเพื่อสร้างความสัมพันธ์ระยะยาว",
                                            icon: <Users className="w-5 h-5" />
                                        },
                                        {
                                            title: "Finance Resource Management (FRM)",
                                            desc: "หัวใจหลักด้านบัญชีและการเงิน กระบวนการรายงานตามกฎระเบียบ กรมสรรพากร และข้อมูลเพื่อการบริหาร",
                                            icon: <Banknote className="w-5 h-5" />
                                        },
                                        {
                                            title: "Human Resource Management (HRM)",
                                            desc: "จัดการข้อมูลบุคลากร โครงสร้างองค์กร และการประมวลผลเงินเดือน (Payroll) อย่างเป็นระบบ",
                                            icon: <Users2 className="w-5 h-5" />
                                        },
                                        {
                                            title: "Supply Chain Management (SCM)",
                                            desc: "จัดการกระบวนการไหลของวัสดุและข้อมูล ตั้งแต่ผู้ส่งมอบ ผู้จัดจำหน่าย ไปจนถึงมือลูกค้า",
                                            icon: <Truck className="w-5 h-5" />
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all">
                                            <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-xl flex items-center justify-center text-[var(--brand-blue)] shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                                                <p className="text-slate-500 font-light text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features Section */}
                            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 mb-20 text-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-blue)] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h3 className="text-3xl font-bold mb-12 text-center relative z-10">
                                    คุณสมบัติที่สำคัญของระบบ <span className="text-[var(--brand-blue)]">ERP</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                                    {[
                                        { icon: <Database />, title: "Flexible", desc: "ยืดหยุ่น รองรับการปรับเปลี่ยนในอนาคต พัฒนาบนฐานข้อมูลเดียว" },
                                        { icon: <LayoutGrid />, title: "Modular", desc: "โมดูลอิสระจากกัน ทำงานแยกโมดูลได้ชัดเจน ไม่กระทบส่วนอื่น" },
                                        { icon: <Globe />, title: "Comprehensive", desc: "ครอบคลุม หลากหลายแพลตฟอร์ม รองรับวิถีธุรกิจที่แตกต่าง" },
                                        { icon: <Zap />, title: "Beyond Company", desc: "เชื่อมต่อไร้ขีดจำกัด ไม่จำกัดเพียงแค่วงใน แต่เชื่อมสารสนเทศภายนอก" },
                                        { icon: <ShieldCheck />, title: "Best Practices", desc: "อิงแนวปฏิบัติที่ดีที่สุด มีกระบวนการมาตรฐานที่ปรับแต่งได้" }
                                    ].map((feat, idx) => (
                                        <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                            <div className="text-[var(--brand-blue)] mb-4">{feat.icon}</div>
                                            <h4 className="font-bold mb-2">{feat.title}</h4>
                                            <p className="text-white/60 font-light text-[13px] leading-relaxed">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-100 flex items-center justify-end gap-2 text-slate-400 text-sm font-light">
                                <span>ที่มา : สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (DEPA)</span>
                                <Link href="https://www.depa.or.th/" target="_blank" className="text-[var(--brand-blue)] hover:underline">depa.or.th</Link>
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
