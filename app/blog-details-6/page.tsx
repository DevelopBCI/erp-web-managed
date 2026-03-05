"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Warehouse, BarChart3, PieChart, LineChart, Activity, CheckCircle2, FlaskConical, Target } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

export default function BlogSmartWarehousePage() {
    const analyticsLevels = [
        { title: "Descriptive Analytics", desc: "วิเคราะห์สิ่งที่เกิดขึ้นแล้วในอดีตเพื่อให้เข้าใจสถานภาพปัจจุบันของคลังสินค้า" },
        { title: "Diagnostic Analytics", desc: "หาสาเหตุของสิ่งที่เกิดขึ้น ทำไมสินค้าถึงขาด หรือทำไมกระบวนการถึงล่าช้า" },
        { title: "Predictive Analytics", desc: "พยากรณ์สถานการณ์ในอนาคตจากข้อมูลในอดีต (Historical Data) และ Real-time Data" },
        { title: "Prescriptive Analytics", desc: "เสนอแนะแนวทางปฏิบัติที่ดีที่สุด (Optimization) เพื่อผลลัพธ์ที่ต้องการ" }
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
                            Logistics & Supply Chain
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            ทำความรู้จัก Smart Warehouse: คลังสินค้าอัจฉริยะที่ช่วยลดต้นทุนและเพิ่มกำไรให้ธุรกิจ
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
                                        <p className="text-sm font-bold text-slate-700">December 1, 2024</p>
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
                                ในอุตสาหกรรมและโลจิสติกส์ยุคใหม่ การจัดการบริหารสินค้าคงคลัง (Inventory Management) คือหัวใจสำคัญ
                                ธุรกิจสามารถประหยัดเงินได้มหาศาลหากสามารถจัดการให้สินค้าอยู่ในจุดที่พอเหมาะที่สุด
                                หรือที่เรียกว่า <span className="text-[var(--brand-blue)] font-semibold">Inventory Optimization</span> ไม่ให้เกิดภาวะ "ของขาด" หรือ "ของเกิน" จนกลายเป็นต้นทุนจม
                            </p>

                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                                <Image
                                    src="/img/blog/8070-02_digital_services180830-1highressrgb.jpg"
                                    alt="Smart Warehouse System Digitalization"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <blockquote className="border-l-4 border-[var(--brand-blue)] pl-6 py-2 my-12 bg-blue-50/50 rounded-r-2xl">
                                <p className="text-slate-800 font-bold text-xl italic leading-relaxed">
                                    "Be in the right place at the right time"
                                </p>
                                <footer className="text-slate-500 text-sm mt-2">— หัวใจหลักของการจัดการโลจิสติกส์</footer>
                            </blockquote>

                            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                                <Warehouse className="text-[var(--brand-blue)]" />
                                Smart Warehouse คืออะไร?
                            </h2>
                            <p className="text-slate-600 mb-12">
                                Smart Warehouse คือการจัดการคลังสินค้าในรูปแบบที่ฉลาดล้ำ โดยการนำ <span className="text-[var(--brand-blue)] font-semibold">หุ่นยนต์อัจฉริยะ</span> เข้ามาช่วยในกระบวนการตรวจสอบ เคลื่อนย้าย และกระจายสินค้า เพื่อเป้าหมายคือความแม่นยำสูงสุดและการรายงานผลแบบอัตโนมัติ (Automated Reporting) ที่ช่วยลดความเสี่ยงในการตัดสินใจของผู้บริหาร
                            </p>

                            {/* Data Analytics Levels */}
                            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 mb-20 border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">
                                    ยกระดับคลังสินค้าด้วยการวิเคราะห์ข้อมูล 4 ระดับ
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {analyticsLevels.map((level, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[var(--brand-blue)] mb-6">
                                                {idx === 0 && <PieChart className="w-6 h-6" />}
                                                {idx === 1 && <Activity className="w-6 h-6" />}
                                                {idx === 2 && <LineChart className="w-6 h-6" />}
                                                {idx === 3 && <BarChart3 className="w-6 h-6" />}
                                            </div>
                                            <h4 className="font-bold text-slate-800 mb-4">{idx + 1}. {level.title}</h4>
                                            <p className="text-slate-500 font-light text-[15px] leading-relaxed">
                                                {level.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Big Data &streaming Section */}
                            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-6">ความท้าทายจากข้อมูลมหาศาล (Big Data)</h3>
                                    <p className="text-slate-600 leading-relaxed font-light mb-6">
                                        Smart Warehouse ขับเคลื่อนด้วยระบบอัตโนมัติที่รายงานผลเป็นข้อมูลมหาศาลและต่อเนื่องไม่หยุดหย่อน (Streaming Data) หากบุคลากรยังคงทำงานด้วยวิธีเดิม อาจส่งผลให้การทำ <span className="text-[var(--brand-blue)] font-semibold">Digital Transformation</span> ขององค์กรต้องสะดุดลง
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[var(--brand-blue)] mt-1 shrink-0" />
                                            <span className="text-slate-700">เปลี่ยนจาก Manual สู่ Automation 100%</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[var(--brand-blue)] mt-1 shrink-0" />
                                            <span className="text-slate-700">ใช้ประโยชน์จาก Real-time Data Analytics</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[var(--brand-blue)] mt-1 shrink-0" />
                                            <span className="text-slate-700">ลดช่องโหว่ในห่วงโซ่อุปทานด้วยเทคโนโลยี</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-10 bg-blue-50 rounded-[3rem] border border-blue-100/50 flex flex-col items-center text-center">
                                    <FlaskConical className="w-12 h-12 text-[var(--brand-blue)] mb-6" />
                                    <h4 className="font-bold text-slate-800 mb-2">Smart Logistics Lab</h4>
                                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                                        นิด้า (LM NIDA) ได้สร้างพื้นที่แห่งนี้เพื่อเป็น d'Lab สำหรับการทดลองวางแผน และออกแบบคลังสินค้าอัจฉริยะในสภาพแวดล้อมจริง
                                    </p>
                                </div>
                            </div>

                            {/* Strategic Conclusion */}
                            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white mb-16 relative overflow-hidden shadow-2xl shadow-blue-900/20">
                                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--brand-blue)] opacity-5 rounded-full blur-3xl -mb-40 -mr-40"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-2xl flex items-center justify-center">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold">การวางแผนเชิงกลยุทธ์ระยะยาว</h3>
                                    </div>
                                    <p className="text-white/70 font-light leading-relaxed mb-10 text-lg">
                                        จุดมุ่งหมายสูงสุดของการนำเทคโนโลยี Smart Warehouse เข้ามาใช้งาน คือการลดความเสี่ยงในการลงทุนมหาศาล และเพื่อให้ได้กำไรสูงที่สุดโดยใช้ต้นทุนต่ำที่สุด ไม่ว่าจะเป็นการตัดสินใจขยายพื้นที่คลังสินค้า หรือการจัดสัดส่วนวัตถุดิบ ล้วนต้องอิงตามข้อมูลที่แม่นยำทั้งสิ้น
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                            <h5 className="font-bold text-[var(--brand-blue)] mb-3 uppercase tracking-wider">Efficiency Result</h5>
                                            <p className="text-white/50 font-light">เพิ่มความเร็วในการกระจายสินค้าและลดข้อผิดพลาดในการจัดเก็บได้มากกว่า 40%</p>
                                        </div>
                                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                            <h5 className="font-bold text-[var(--brand-blue)] mb-3 uppercase tracking-wider">Cost Reduction</h5>
                                            <p className="text-white/50 font-light">ประหยัดต้นทุนจมจากการจัดการ Inventory ที่ไม่มีประสิทธิภาพได้ในระยะยาว</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm font-light">
                                <p>อ้างอิงข้อมูล: คณะสถิติประยุกต์ นิด้า (NIDA) | สาขาการจัดการโลจิสติกส์</p>
                                <div className="flex items-center gap-2">
                                    <span>แหล่งที่มา:</span>
                                    <Link href="https://as.nida.ac.th/" target="_blank" className="text-[var(--brand-blue)] hover:underline">as.nida.ac.th</Link>
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
