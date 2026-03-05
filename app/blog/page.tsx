"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import FadeInSection from "@/app/components/FadeInSection";

const blogPosts = [
    {
        id: 1,
        title: "BCI ร่วมเวที ICDL Asia Digital Literacy Day 2025",
        description: "บริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด (BCI) ได้รับเกียรติเป็น แขกพิเศษ (Special Guest Speaker) ในงาน International Digital Talent Development Conference 2025 ซึ่งจัดขึ้นที่ มณฑลเจียงซู เมืองหนานจิง ประเทศจีน",
        image: "/img/blog/ICDLchina7.jpg",
        category: "Business",
        date: "Jan 15, 2025",
        author: "BCI Admin",
        href: "/blog-ICDLchina",
        tagColor: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
        id: 2,
        title: "BCI ถ่ายทอดองค์ความรู้ “บทบาทของ AI ในธุรกิจผลิตชิ้นส่วนรถยนต์”",
        description: "บริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด ได้รับเกียรติเป็นวิทยากรบรรยายในหลักสูตร “บทบาทของ AI ในธุรกิจผลิตชิ้นส่วนรถยนต์” ให้กับทีมผู้บริหารและบุคลากรของ บริษัท ซัมมิท โอโต บอดี้ สกิลส์ ดีเวลลอปเม้นท์ เซ็นเตอร์ จำกัด",
        image: "/img/blog/aicar1.jpg",
        category: "Training",
        date: "Jan 10, 2025",
        author: "BCI Admin",
        href: "/blog-aicar",
        tagColor: "bg-red-50 text-red-600 border-red-100"
    },
    {
        id: 3,
        title: "รุก ตลาดแอฟริกา สู่งาน Africa Technology Expo 2025",
        description: "กรม DITP ร่วมกับ ATSI นำผู้ประกอบการซอฟต์แวร์ไทยบุกตลาดแอฟริกา ผ่านงาน Africa Technology Expo 2025 และกิจกรรมเจรจาธุรกิจในไนจีเรีย-อียิปต์ เพื่อขยายเครือข่ายและสร้างพันธมิตรทางธุรกิจระยะยาว",
        image: "/img/blog/africa2.jpg",
        category: "Business",
        date: "Jan 5, 2025",
        author: "BCI Admin",
        href: "/blog-africa",
        tagColor: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
        id: 4,
        title: "หลักการและระบบการผลิตแบบลีน (Lean Principle & Lean Manufacturing)",
        description: "เมื่อแนวคิด Lean และระบบการผลิตแบบลีน (Lean Manufacturing) เป็นที่รู้จักมากขึ้นทั้งในอุตสาหกรรมโลกและในบ้านเรา โรงงานต่างๆ ก็ต้องการเปลี่ยนระบบการผลิตจาก Mass Production สู่ Lean Production",
        image: "/img/blog/lean-manufacturing-istock-1073363688.jpg",
        category: "Technology",
        date: "Dec 20, 2024",
        author: "BCI Admin",
        href: "/blog-details-1",
        tagColor: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
        id: 5,
        title: "ระบบ AI Quality Control ตัวช่วยเรื่องการควบคุมคุณภาพสินค้า",
        description: "การนำระบบ AI Quality Control เข้ามาใช้งานไม่ใช่เพียงการติดตั้งกล้องเพื่อตรวจจับข้อบกพร่องในการผลิตเพียงอย่างเดียวเท่านั้น แต่อัญที่จริงแล้ว ยังเป็นการใช้กล้องเพื่อตรวจจับภาพสินค้าในสายการผลิตอย่างแม่นยำ",
        image: "/img/blog/1_81e42V29ALfP6eU1FPhMdg.jpeg",
        category: "Technology",
        date: "Dec 15, 2024",
        author: "BCI Admin",
        href: "/blog-details-2",
        tagColor: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
        id: 6,
        title: "ระบบ ERP ในธุรกิจ SME",
        description: "ERP คืออะไร ปัจจุบันโลกได้เข้าสู่ยุคการปฏิวัติอุตสาหกรรมแบบทวีคูณ ทำให้ผู้ประกอบการธุรกิจประเภทต่างๆทั่วโลกต้องปรับตัวเพื่อรองรับการเปลี่ยนแปลงนี้ โดยเฉพาะผู้ประกอบการ SME ที่ได้รับผลกระทบเป็นอย่างมาก",
        image: "/img/blog/ERP.jpg",
        category: "Technology",
        date: "Dec 10, 2024",
        author: "BCI Admin",
        href: "/blog-details-3",
        tagColor: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
        id: 7,
        title: "เผย 7 ข้อดีของ IIoT ที่ชี้ชัดว่าทำไมอุตสาหกรรมการผลิตควรยกระดับ",
        description: "Industrial IoT หรือ IIoT ถือเป็นสิ่งที่มีบทบาทสำคัญในระบบอุตสาหกรรม 4.0 เพราะเป็นสิ่งที่จะช่วยเชื่อมโยงเครื่องจักรการผลิต เทคโนโลยีไอที และทรัพยากรบุคคลเข้าไว้ด้วยกัน",
        image: "/img/blog/iiot mn.png",
        category: "Technology",
        date: "Nov 25, 2024",
        author: "BCI Admin",
        href: "/blog-details-4",
        tagColor: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
        id: 8,
        title: "ระบบ AI ทำให้หุ่นยนต์เป็นมากกว่าหุ่นยนต์",
        description: "ปัจจุบันนี้ ระบบ AI (Artificial Intelligence) หรือระบบปัญญาประดิษฐ์ถูกนำมาใช้ในหุ่นยนต์โรงงานอุตสาหกรรมมากขึ้นเพื่อทำให้หุ่นยนต์สามารถทำงานและตัดสินใจเองได้อย่างอิสระ",
        image: "/img/blog/Ai_content.jpg",
        category: "Technology",
        date: "Nov 15, 2024",
        author: "BCI Admin",
        href: "/blog-details-5",
        tagColor: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
        id: 9,
        title: "ทำความรู้จัก Smart Warehouse คลังสินค้าอัจฉริยะ",
        description: "การจัดการบริหารสินค้าคงคลัง (Inventory Management) สามารถช่วยให้ธุรกิจประหยัดเงินได้จำนวนมหาศาลหากสามารถจัดการให้สินค้าของเรามีไม่ขาดไม่เกิน หรือเรียกได้ว่าอยู่ในจุดที่พอเหมาะที่สุด",
        image: "/img/blog/8070-02_digital_services180830-1highressrgb.jpg",
        category: "Technology",
        date: "Nov 05, 2024",
        author: "BCI Admin",
        href: "/blog-details-6",
        tagColor: "bg-purple-50 text-purple-600 border-purple-100"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white font-kanit">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50" style={{backgroundImage: "url('/img/blog/10-ai-instead-human-job.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <path d="M100 0H0V100H100V0ZM99 1V99H1V1H99Z" fill="currentColor" />
                        <circle cx="50" cy="50" r="1" fill="currentColor" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeInSection>
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--brand-blue)] uppercase bg-blue-50 rounded-full border border-blue-100">
                                Insights & Updates
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                บทความจาก <span className="text-[var(--brand-blue)]">ERP</span>
                            </h1>
                            <p className="text-gray-100 text-lg md:text-xl font-light leading-relaxed">
                                อัพเดตข่าวสาร และบทความดี ๆ กับเรา
                            </p>
                            <div className="w-24 h-1.5 bg-[var(--brand-blue)] mx-auto mt-10 rounded-full"></div>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* Main Blog List */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                        <FadeInSection>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800 mb-2">บทความและข่าวสารล่าสุด</h2>
                                <p className="text-slate-500 font-light">ติดตามความเคลื่อนไหวและเทคโนโลยีใหม่ๆ ในอุตสาหกรรม</p>
                            </div>
                        </FadeInSection>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <FadeInSection key={post.id} delay={index * 0.1}>
                                <Link href={post.href} className="block h-full group">
                                    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col relative">
                                        {/* Image Container */}
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${post.tagColor}`}>
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <User className="w-3.5 h-3.5" />
                                                    {post.author}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[var(--brand-blue)] transition-colors leading-snug">
                                                {post.title}
                                            </h3>

                                            <p className="text-slate-500 font-light text-[15px] leading-relaxed mb-6">
                                                {post.description}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-slate-50">
                                                <div className="inline-flex items-center gap-2 text-[15px] font-bold text-[var(--brand-blue)] group-hover:text-black transition-colors">
                                                    อ่านเพิ่มเติม
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
