"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, CheckCircle2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

export default function BlogAiCarPage() {
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
                            Training & AI Technology
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            BCI ถ่ายทอดองค์ความรู้ “บทบาทของ AI ในธุรกิจผลิตชิ้นส่วนรถยนต์”
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
                                        <p className="text-sm font-bold text-slate-700">October 15, 2025</p>
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
                                เมื่อวันที่ 9 ตุลาคม 2568 คุณธนพล ต่อสิทธิเดชกุล กรรมการผู้จัดการบริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด
                                ได้รับเกียรติเป็นวิทยากรบรรยายในหลักสูตร <span className="text-[var(--brand-blue)] font-semibold">“บทบาทของ AI ในธุรกิจผลิตชิ้นส่วนรถยนต์”</span>
                                ให้กับทีมผู้บริหารและบุคลากรของ บริษัท ซัมมิท โอโต บอดี้ สกิลส์ ดีเวลลอปเม้นท์ เซ็นเตอร์ จำกัด ณ จ.สมุทรปราการ
                            </p>

                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                                <Image
                                    src="/img/blog/aicar1.jpg"
                                    alt="Training AI in Automotive Business"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Training Highlights Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                                    <Image src="/img/blog/aicar3.jpg" alt="Training Atmosphere" fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[var(--brand-blue)] pl-4">
                                        หัวข้อสำคัญในการอบรม
                                    </h3>
                                    <p className="text-slate-500 font-light mb-6">มุ่งเน้นให้ผู้เข้าร่วมได้เข้าใจแนวโน้มการประยุกต์ใช้เทคโนโลยี AI ในอุตสาหกรรมการผลิตชิ้นส่วนยานยนต์</p>
                                    <ul className="space-y-4">
                                        {[
                                            "การใช้ AI เพื่อเพิ่มประสิทธิภาพในกระบวนการผลิต",
                                            "การคาดการณ์ความต้องการและการบริหารซัพพลายเชน",
                                            "การใช้ Generative AI เพื่อสนับสนุนงานด้านวางแผนและวิเคราะห์ข้อมูล"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3 items-start text-slate-600 font-light">
                                                <CheckCircle2 className="w-5 h-5 text-[var(--brand-blue)] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-16 text-lg font-light">
                                บรรยากาศการอบรมเต็มไปด้วยความสนใจและการแลกเปลี่ยนความคิดเห็นอย่างสร้างสรรค์
                                สะท้อนให้เห็นถึงความมุ่งมั่นของภาคอุตสาหกรรมไทยในการก้าวสู่ <span className="text-[var(--brand-blue)] font-semibold">ยุคการผลิตอัจฉริยะ (Smart Manufacturing)</span>
                                ด้วยเทคโนโลยี AI ที่ BCI พร้อมให้คำปรึกษาและพัฒนาโซลูชันร่วมกับภาคธุรกิจอย่างต่อเนื่อง
                            </p>

                            {/* Dynamic Image Collage */}
                            <div className="relative h-[600px] mb-16 hidden md:block">
                                {/* Top Row */}
                                <div className="absolute top-0 left-0 w-[47%] h-[250px] rounded-[2rem] overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-500 z-10">
                                    <Image src="/img/blog/aicar2.jpg" alt="Collage 1" fill className="object-cover" />
                                </div>
                                <div className="absolute top-0 right-0 w-[47%] h-[250px] rounded-[2rem] overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500 z-10">
                                    <Image src="/img/blog/aicar4.jpg" alt="Collage 2" fill className="object-cover" />
                                </div>

                                {/* Center Floating Image */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white z-20 hover:scale-105 transition-transform duration-500">
                                    <Image src="/img/blog/aicar5.jpg" alt="Collage Center" fill className="object-cover" />
                                </div>

                                {/* Bottom Row */}
                                <div className="absolute bottom-0 left-0 w-[47%] h-[250px] rounded-[2rem] overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500 z-10">
                                    <Image src="/img/blog/aicar7.jpg" alt="Collage 3" fill className="object-cover" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-[47%] h-[250px] rounded-[2rem] overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-500 z-10">
                                    <Image src="/img/blog/aicar6.jpg" alt="Collage 4" fill className="object-cover" />
                                </div>
                            </div>

                            {/* Mobile Image Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-16 md:hidden">
                                <div className="relative h-40 rounded-2xl overflow-hidden shadow-md">
                                    <Image src="/img/blog/aicar2.jpg" alt="Gallery 1" fill className="object-cover" />
                                </div>
                                <div className="relative h-40 rounded-2xl overflow-hidden shadow-md">
                                    <Image src="/img/blog/aicar4.jpg" alt="Gallery 2" fill className="object-cover" />
                                </div>
                                <div className="relative h-40 rounded-2xl overflow-hidden shadow-md">
                                    <Image src="/img/blog/aicar7.jpg" alt="Gallery 3" fill className="object-cover" />
                                </div>
                                <div className="relative h-40 rounded-2xl overflow-hidden shadow-md">
                                    <Image src="/img/blog/aicar6.jpg" alt="Gallery 4" fill className="object-cover" />
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
