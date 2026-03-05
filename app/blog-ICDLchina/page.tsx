"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Play } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

export default function BlogICDLChinaPage() {
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
                            International Conference
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            BCI ร่วมเวที ICDL Asia Digital Literacy Day 2025 - ผลักดันความร่วมมือสามฝ่าย จีน–สิงคโปร์–ไทย เพื่อยกระดับทักษะดิจิทัล
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
                                        <p className="text-sm font-bold text-slate-700">October 18, 2025</p>
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
                                ระหว่างวันที่ 13-16 ตุลาคม 2568 คุณธนพล ต่อสิทธิเดชกุล กรรมการผู้จัดการ บริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด (BCI)
                                ได้รับเกียรติเป็น แขกพิเศษ (Special Guest Speaker) ในงาน International Digital Talent Development Conference 2025
                                ซึ่งจัดขึ้นที่ มณฑลเจียงซู เมืองหนานจิง ประเทศจีน
                            </p>

                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
                                <Image
                                    src="/img/blog/ICDLchina4.jpg"
                                    alt="International Digital Talent Development Conference 2025"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-10 text-lg font-light">
                                ภายในงาน คุณธนพลได้ขึ้นบรรยายในหัวข้อ
                                <span className="text-[var(--brand-blue)] font-semibold"> “Standards · Skills · Mobility: A Trilateral Agenda for Digital Literacy Collaboration — China-Singapore-Thailand” </span>
                                โดยนำเสนอแนวคิดการพัฒนาและยกระดับทักษะดิจิทัลในระดับภูมิภาค ผ่านความร่วมมือด้านมาตรฐาน (Standards)
                                การพัฒนาทักษะ (Skills) และการเคลื่อนย้ายแรงงานอย่างมีคุณภาพ (Mobility) เพื่อสนับสนุนเศรษฐกิจดิจิทัลในภูมิภาคเอเชีย
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="relative h-72 rounded-[2rem] overflow-hidden shadow-xl">
                                    <Image src="/img/blog/ICDLchina7.jpg" alt="ICDL China 7" fill className="object-cover" />
                                </div>
                                <div className="relative h-72 rounded-[2rem] overflow-hidden shadow-xl">
                                    <Image src="/img/blog/ICDLchina6.jpg" alt="ICDL China 6" fill className="object-cover" />
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-12 text-lg font-light">
                                งานนี้จัดโดย ICDL Thailand ร่วมกับ ICDL Asia มีผู้บริหารระดับนโยบายจากหลายประเทศ สถาบันการศึกษา
                                และองค์กรพันธมิตรจากจีน สิงคโปร์ และไทย เข้าร่วมแลกเปลี่ยนแนวทางการพัฒนาทักษะดิจิทัล เพื่อสร้างความร่วมมืออย่างยั่งยืนในระดับภูมิภาค
                            </p>

                            {/* Video Section */}
                            <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden relative group/video mb-12 shadow-2xl">
                                <video
                                    className="w-full aspect-video object-cover opacity-80"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/img/news/ICDLchina3.jpg"
                                >
                                    <source src="/img/blog/ICDLchina-video.mp4" type="video/mp4" />
                                    เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover/video:opacity-0 transition-opacity">
                                    <div className="w-20 h-20 bg-[var(--brand-blue)] rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-500/50">
                                        <Play className="w-8 h-8 fill-current ml-1" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-12 text-lg font-light italic border-l-4 border-[var(--brand-blue)] pl-6">
                                "การเข้าร่วมของ BCI ในครั้งนี้สะท้อนถึงบทบาทของบริษัทในฐานะผู้นำด้าน Digital Transformation
                                และผู้สนับสนุนการพัฒนา สมรรถนะดิจิทัล (Digital Competency) ให้กับบุคลากรไทย ก้าวสู่มาตรฐานสากลในยุคเศรษฐกิจดิจิทัล"
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <Image src="/img/blog/ICDLchina9.jpg" alt="Gallery 1" fill className="object-cover" />
                                </div>
                                <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <Image src="/img/blog/ICDLchina5.jpg" alt="Gallery 2" fill className="object-cover" />
                                </div>
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
