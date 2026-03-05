"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Bot, Eye, Zap, Brain, Rocket, Settings, CheckCircle2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

export default function BlogAIRoboticsPage() {
    const features = [
        {
            title: "ควบคุมตัวเองได้ (Self-Control)",
            desc: "ในอนาคตอันใกล้นี้ หุ่นยนต์ Cobot จะสามารถตรวจจับการเปลี่ยนแปลงของสภาพพื้นที่ทำงานได้ด้วยตัวเองผ่านระบบ AI",
            icon: <Settings className="w-6 h-6" />
        },
        {
            title: "มีการมองเห็น (Visual Perception)",
            desc: "จดจำทิศทางชิ้นส่วน ตรวจสอบ เลือกงานและวางแบบไดนามิก ตลอดจนตัดสินใจผลิตงานได้ด้วยตัวเองตามความเหมาะสม",
            icon: <Eye className="w-6 h-6" />
        },
        {
            title: "มีการปรับตัว (Adaptability)",
            desc: "ปรับและเคลื่อนย้ายงานได้เหมือนการเคลื่อนที่ของเครื่องจักร ควบคุมแรงที่จำเป็น ตรวจจับและหลีกเลี่ยงการชนอัตโนมัติ",
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: "มีการเรียนรู้ (Continuous Learning)",
            desc: "คาดการณ์ความน่าจะเป็นที่งานจะล้มเหลว ระบุรูปแบบวิธีการแก้ไขปัญหา และใช้ข้อมูลเชิงลึกเพื่อผลักดันประสิทธิภาพ",
            icon: <Brain className="w-6 h-6" />
        },
        {
            title: "มีการปรับใช้ (Rapid Deployment)",
            desc: "ทำงานให้สำเร็จได้ภายในไม่กี่ชั่วโมง และสามารถใช้ข้อมูลงานเดิมเพื่อแบ่งปันข้อมูลสื่อสารกับหุ่นยนต์ตัวอื่นๆ ได้",
            icon: <Rocket className="w-6 h-6" />
        },
        {
            title: "สามารถควบคุม (Master Control)",
            desc: "หุ่นยนต์ที่ขับเคลื่อนด้วย AI สามารถสื่อสารและควบคุมเครื่องจักรอื่นๆ เพื่อให้การทำงานบรรลุวัตถุประสงค์สูงสุด",
            icon: <Bot className="w-6 h-6" />
        }
    ];

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
                            Robotics & Artificial Intelligence
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            ระบบ AI ทำให้หุ่นยนต์เป็นมากกว่าหุ่นยนต์: การก้าวกระโดดสู่โรงงานอัจฉริยะ
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
                                        <p className="text-sm font-bold text-slate-700">December 5, 2024</p>
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
                                ปัจจุบันนี้ ระบบ AI (Artificial Intelligence) หรือระบบปัญญาประดิษฐ์ถูกนำมาใช้ในหุ่นยนต์โรงงานอุตสาหกรรมมากขึ้น
                                เพื่อทำให้หุ่นยนต์สามารถทำงานและตัดสินใจเองได้อย่างอิสระ จากเดิมที่มนุษย์จะต้องป้อนคำสั่งล่วงหน้าในทุกรายละเอียด
                                เพื่อให้หุ่นยนต์ทำงานได้ตามเป้าหมายที่วางไว้
                            </p>

                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                                <Image
                                    src="/img/blog/Ai_content.jpg"
                                    alt="AI Integrated Robotics"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-[var(--brand-blue)] pl-4">
                                หุ่นยนต์ฉลาดขึ้นด้วยระบบ AI
                            </h2>
                            <p className="text-slate-600 mb-12">
                                การนำระบบ AI เข้ามาใช้ในหุ่นยนต์ <span className="text-[var(--brand-blue)] font-semibold">Cobot (Collaborative Robot)</span> ช่วยยกระดับให้เครื่องจักรเหล่านี้เป็นได้มากกว่าหุ่นยนต์ที่ทำงานอันตรายหรืองานซ้ำซากจำเจ แต่กลายเป็นคู่หูอัจฉริยะที่พร้อมเรียนรู้และเติบโตไปกับสายการผลิต
                            </p>

                            {/* Cognitive Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                                {features.map((feat, idx) => (
                                    <div key={idx} className="group p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-[var(--brand-blue)]/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[var(--brand-blue)] mb-6 shadow-sm group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-colors">
                                            {feat.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-800 mb-3">{feat.title}</h4>
                                        <p className="text-slate-500 font-light text-[15px] leading-relaxed">
                                            {feat.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Conclusion Section */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-16 text-white mb-16 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-blue)] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold mb-6">อนาคตของ Cobot และ AI</h3>
                                    <p className="text-white/70 font-light leading-relaxed mb-10">
                                        หุ่นยนต์ในอนาคตจะไม่ใช่แค่เครื่องมือ แต่จะเป็นระบบนิเวศการทำงานที่สื่อสารกันเองได้ (Robot-to-Robot Communication) และมีการตัดสินใจที่อิงตามข้อมูลจริงหน้างาน ทำให้โรงงานสามารถลดความผิดพลาดได้เกือบ 100%
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-medium">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="text-[var(--brand-blue)]" />
                                            <span>ลดอุบัติเหตุในโรงงาน</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="text-[var(--brand-blue)]" />
                                            <span>เพิ่มความเร็วการผลิต</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="text-[var(--brand-blue)]" />
                                            <span>ลดความซับซ้อนของคำสั่ง</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="text-[var(--brand-blue)]" />
                                            <span>วิเคราะห์ปัญหาได้แม่นยำ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm font-light">
                                <p>อ้างอิงข้อมูล: Techsauce | Tech and Biz Ecosystem Leader</p>
                                <div className="flex items-center gap-2">
                                    <span>แหล่งที่มา:</span>
                                    <Link href="https://techsauce.co" target="_blank" className="text-[var(--brand-blue)] hover:underline">techsauce.co</Link>
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
