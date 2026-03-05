"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Settings2, ClipboardList, AlertCircle, ShieldCheck, Zap, Wrench, BarChart3, Bot } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

export default function BlogIIoTAdvantagesPage() {
    const advantages = [
        {
            id: 1,
            title: "ผลิตได้อย่างมีประสิทธิภาพมากขึ้น",
            description: "การผลิตในแบบ Industry 4.0 ต้องไม่ใช่แค่การเน้นปริมาณ แต่สินค้าที่ผลิตออกมาจะต้องได้มาตรฐานและตรงกับความต้องการของตลาดด้วย ระบบ Sensor/Controller จะตอบสนองได้อย่างแม่นยำมากขึ้น",
            icon: <Settings2 className="w-6 h-6" />
        },
        {
            id: 2,
            title: "วางแผนการผลิตได้ง่ายมากขึ้น",
            description: "ยกระดับการจัดการด้วยข้อมูลขนาดใหญ่ (Big Data) และ Cloud Computing ทำให้เห็นความสามารถในการผลิตแบบ Real-time ตั้งแต่ก่อนเริ่ม ระหว่างทำ และหลังการผลิต",
            icon: <ClipboardList className="w-6 h-6" />
        },
        {
            id: 3,
            title: "ลดความผิดพลาดในการผลิต",
            description: "เครื่องจักรสามารถสื่อสารและดำเนินการได้แบบอัตโนมัติ ลดพึ่งพาแรงงานจำนวนมากในส่วนที่มีความเสี่ยงสูง ทำให้เกิดความผิดพลาดน้อยลงอย่างเห็นได้ชัด",
            icon: <AlertCircle className="w-6 h-6" />
        },
        {
            id: 4,
            title: "ช่วยให้การผลิตมีความปลอดภัยมากขึ้น",
            description: "ระบบ Sensor จะบันทึกและแจ้งเตือนเมื่อเกิดปัญหา Downtime หรือเครื่องจักรหยุดทำงาน ทำให้ผู้ควบคุมเข้าแก้ไขได้ทันก่อนเกิดอุบัติเหตุร้ายแรง",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            id: 5,
            title: "ประหยัดพลังงานได้มากขึ้น",
            description: "ระบบเปิด-ปิดอัตโนมัติเมื่อมีการใช้งานจริง (On-demand) ในส่วนของปั๊ม คอมเพรสเซอร์ และระบบระบายความร้อน ช่วยลดต้นทุนด้านพลังงานของธุรกิจ",
            icon: <Zap className="w-6 h-6" />
        },
        {
            id: 6,
            title: "การบำรุงรักษาเชิงคาดการณ์ (Predictive Maintenance)",
            description: "แจ้างเตือนล่วงก่อนอุปกรณ์เสียหายหนัก ช่วยยืดอายุการใช้งานเครื่องจักรได้นานขึ้น 20-40% และลดปัญหาเครื่องจักรหยุดทำงานได้ถึง 30-50%",
            icon: <Wrench className="w-6 h-6" />
        },
        {
            id: 7,
            title: "รายงานแม่นยำ และแจ้งเตือนทันการณ์",
            description: "สรุปข้อมูลผ่าน Dashboard ที่ดูง่าย ถูกต้องแม่นยำ และเชื่อถือได้ ช่วยให้ผู้บริหารตัดสินใจในเรื่องต่างๆ ได้อย่างรวดเร็วและมีประสิทธิภาพสูงสุด",
            icon: <BarChart3 className="w-6 h-6" />
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
                            Industrial IoT & Smart Industry
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            เผย 7 ข้อดีของ IIoT ที่ชี้ชัดว่าทำไมอุตสาหกรรมการผลิตควรยกระดับ
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
                                        <p className="text-sm font-bold text-slate-700">November 25, 2024</p>
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
                                <span className="font-bold text-slate-800">Industrial IoT หรือ IIoT</span> ถือเป็นสิ่งที่มีบทบาทสำคัญในระบบอุตสาหกรรม 4.0 เพราะเป็นสิ่งที่จะช่วยเชื่อมโยงเครื่องจักรการผลิต เทคโนโลยีไอที และทรัพยากรบุคคลเข้าไว้ด้วยกัน ให้ทั้งหมดสามารถทำงานประสานกันได้อย่างลงตัวและเป็นหนึ่งเดียว
                            </p>

                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                                <Image
                                    src="/img/blog/iiot.jpg"
                                    alt="Industrial IoT Implementation"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-16 text-lg font-light">
                                ครั้งนี้จะมาเผย 7 ข้อดีของ IIoT ที่มีต่ออุตสาหกรรมการผลิต เพื่อให้ผู้ประกอบการเห็นภาพกว้างและลึกในเชิงการยกระดับขีดความสามารถการแข่งขันในระดับสากล
                            </p>

                            {/* 7 Advantages Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                                {advantages.map((adv, idx) => (
                                    <div
                                        key={adv.id}
                                        className={`p-8 rounded-[2rem] border transition-all duration-300 ${adv.id === 6
                                            ? "bg-[var(--brand-blue)] border-[var(--brand-blue)] text-white shadow-xl shadow-blue-100 md:col-span-2"
                                            : "bg-slate-50 border-slate-100 text-slate-800 hover:bg-white hover:border-[var(--brand-blue)]/30 hover:shadow-lg"
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${adv.id === 6 ? "bg-white/20 text-white" : "bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]"
                                            }`}>
                                            {adv.icon}
                                        </div>
                                        <h4 className="text-xl font-bold mb-4">{adv.id}. {adv.title}</h4>
                                        <p className={`font-light text-sm leading-relaxed ${adv.id === 6 ? "text-white/90" : "text-slate-500"
                                            }`}>
                                            {adv.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Special Section: Predictive Maintenance */}
                            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 mb-20 text-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--brand-blue)] opacity-10 rounded-full blur-3xl -mr-40 -mt-40"></div>

                                <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                                    <div className="flex-1">
                                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full text-[#0e9aef] text-[10px] font-bold uppercase tracking-wider mb-6">
                                            <Bot className="w-4 h-4" />
                                            AI Integration
                                        </div>
                                        <h3 className="text-3xl font-bold mb-6">การบำรุงรักษาเชิงคาดการณ์ (Predictive Maintenance)</h3>
                                        <p className="text-white/70 font-light leading-relaxed mb-8">
                                            McKinsey รายงานว่า การนำเทคโนโลยี IIoT มาปรับใช้กับการบำรุงรักษาเชิงคาดการณ์ช่วยลดปัญหา Downtime ได้มหาศาล และยืดอายุเครื่องจักรได้สูงสุดถึง 40% โดยที่ต้นทุนค่าใช้จ่ายในการบำรุงรักษาไม่ได้เพิ่มขึ้นตามไปด้วย
                                        </p>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                                <div className="text-2xl font-bold text-[#0e9aef] mb-1">30-50%</div>
                                                <div className="text-[11px] text-white/40 uppercase tracking-wider">Reduced Downtime</div>
                                            </div>
                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                                <div className="text-2xl font-bold text-[#0e9aef] mb-1">20-40%</div>
                                                <div className="text-[11px] text-white/40 uppercase tracking-wider">Extended Life Cycles</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/3 aspect-square relative rounded-3xl overflow-hidden border border-white/10">
                                        <Image
                                            src="/img/blog/iiot mn.png"
                                            alt="Maintenance Analysis"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm font-light">
                                <p>อ้างอิงข้อมูล: McKinsey Global Institute & Smart Manufacturing Research</p>
                                <div className="flex items-center gap-2">
                                    <span>แหล่งที่มาเพิ่มเติม:</span>
                                    <Link href="https://www.mckinsey.com" target="_blank" className="text-[#0e9aef] hover:underline italic">McKinsey Insights</Link>
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
                                className="inline-flex items-center gap-2 bg-[#0e9aef] text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-black transition-all hover:scale-105 active:scale-95 shrink-0"
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
