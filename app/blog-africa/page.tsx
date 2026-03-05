"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/app/components/Navbar";

import FadeInSection from "@/app/components/FadeInSection";

export default function BlogAfricaPage() {
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
                            Business & Technology
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            รุกตลาดแอฟริกา สู่งาน Africa Technology Expo 2025
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
                                        <p className="text-sm font-bold text-slate-700">July 03, 2025</p>
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
                                กรมส่งเสริมการค้าระหว่างประเทศ (DITP) ร่วมมือกับสมาคมอุตสาหกรรมซอฟต์แวร์ไทย (ATSI)
                                นำผู้ประกอบการซอฟต์แวร์ไทยออกบุกตลาดในภูมิภาคแอฟริกา เพื่อขยายฐานธุรกิจและเพิ่มโอกาสบนเวทีโลก
                                ในครั้งนี้ได้จัดกิจกรรมนำคณะเดินทางไปยังเมืองลากอส ประเทศไนจีเรีย และกรุงไคโร ประเทศอียิปต์
                                ระหว่างวันที่ 21–26 มิถุนายน 2568 โดยมีเป้าหมายเข้าร่วมงาน Africa Technology Expo 2025,
                                กิจกรรม Business Matching และกิจกรรม Thai Software Business Trip เพื่อเสริมสร้างความร่วมมือด้านเทคโนโลยี
                            </p>

                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
                                <Image
                                    src="/img/blog/africa5.jpg"
                                    alt="Africa Technology Expo 2025"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-12 text-lg font-light">
                                การดำเนินงานในครั้งนี้มุ่งเน้นการสนับสนุนผู้ประกอบการซอฟต์แวร์ไทยที่มีศักยภาพด้านระบบ
                                <span className="text-[var(--brand-blue)] font-semibold"> Cyber Security, FinTech, Manufacturing Execution System (MES), AI, ERP, Hotel Management, Travel Platform, GPS และ IoT Solutions</span>
                                ให้สามารถเข้าสู่ตลาดแอฟริกาที่กำลังพัฒนาอย่างก้าวกระโดดในด้านโครงสร้างดิจิทัล
                            </p>

                            {/* Multi-column row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-center">
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                                    <Image src="/img/blog/africa2.jpg" alt="Africa Activity" fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[var(--brand-blue)] pl-4">
                                        ไฮไลต์ของภารกิจ ได้แก่
                                    </h3>
                                    <ul className="space-y-4 text-slate-600 font-light">
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] mt-2 shrink-0"></div>
                                            <span>การแสดงผลงานและแพลตฟอร์มซอฟต์แวร์ของผู้ประกอบการไทยภายในโซน Thailand Pavilion ในงาน Africa Technology Expo 2025</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] mt-2 shrink-0"></div>
                                            <span>การเจรจาจับคู่ธุรกิจ (Business Matching) กับผู้ประกอบการด้าน ICT และตัวแทนจำหน่ายในไนจีเรียและอียิปต์</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Multi-column row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-center">
                                <div className="order-2 md:order-1">
                                    <ul className="space-y-4 text-slate-600 font-light">
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] mt-2 shrink-0"></div>
                                            <span>การรับข้อมูลเชิงลึกเกี่ยวกับตลาดซอฟต์แวร์จากสำนักงานส่งเสริมการค้า/หอการค้าอียิปต์ รวมถึงหน่วยงานสำคัญอื่นๆ</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] mt-2 shrink-0"></div>
                                            <span>การพบปะหารือกับสถานเอกอัครราชทูตไทยประจำกรุงไคโร และการจัดงาน Networking Dinner เพื่อสร้างเครือข่ายความร่วมมือระหว่างผู้ประกอบการ</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl order-1 md:order-2">
                                    <Image src="/img/blog/africa3.jpg" alt="Africa Activity" fill className="object-cover" />
                                </div>
                            </div>

                            {/* Multi-column row 3 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-center">
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                                    <Image src="/img/blog/africa7.jpg" alt="Africa Trip" fill className="object-cover" />
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light italic text-lg">
                                    "การเดินทางในครั้งนี้ได้รับการต้อนรับและสนับสนุนอย่างอบอุ่นจากทั้งภาครัฐและภาคเอกชนในประเทศคู่ค้า แสดงให้เห็นถึงความพร้อมและโอกาสทางธุรกิจที่ดี ถือเป็นจุดเริ่มต้นที่สำคัญในการต่อยอดสู่การขยายธุรกิจในตลาดแอฟริกา"
                                </p>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-12 text-lg font-light">
                                ทางสมาคมฯ ยังคงเดินหน้าพัฒนาและสานต่อความสัมพันธ์ที่แข็งแกร่งในตลาดต่างประเทศอย่างต่อเนื่อง
                                โดยมีเป้าหมายสำคัญในการส่งเสริมและผลักดันผู้ประกอบการไทยให้ก้าวสู่เวทีตลาดโลก
                                และพร้อมที่จะนำองค์ความรู้และเทคโนโลยีที่มีประสิทธิภาพมาประยุกต์ใช้
                                รวมถึงสร้างเครือข่ายพันธมิตรทางธุรกิจที่แข็งแกร่ง เพื่อรองรับการเติบโตของผู้ประกอบการไทยในระยะยาว
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <Image src="/img/blog/africa6.jpg" alt="Gallery 1" fill className="object-cover" />
                                </div>
                                <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <Image src="/img/blog/africa4.jpg" alt="Gallery 2" fill className="object-cover" />
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
