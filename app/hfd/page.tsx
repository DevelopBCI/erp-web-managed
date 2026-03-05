"use client";

import Image from "next/image";
import {
    FileDown,
    FileText,
    Download,
    CheckCircle2,
    Layers,
    ShieldCheck,
    Target,
    Circle,
    Hotel,
    BedDouble,
    Users2
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageHFD() {
    return (
        <div className="font-kanit min-h-screen bg-teal-50/10 pb-20">
            {/* ===== Hero Header ===== */}
            <div className="bg-white border-b border-teal-50 mb-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-100/50 -skew-x-12 transform origin-top-right"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="relative z-10 max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
                            >
                                <Hotel className="w-3.5 h-3.5" /> HOSPITALITY SOLUTION
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
                            >
                                Q.Soft <span className="bg-clip-text text-transparent bg-teal-600 ">HFD</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-slate-500 font-medium text-lg leading-relaxed"
                            >
                                Hotel Front Desk Management - ระบบบริหารจัดการโรงแรมและรีสอร์ท ออกแบบโดยผู้เชี่ยวชาญด้านการบริหารโรงแรมมากกว่า 10 ปี
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="static md:absolute md:right-32 w-full md:w-auto flex justify-center md:block pointer-events-none"
                        >
                            <img
                                src="/design/hfd.png"
                                alt="HFD Illustration"
                                className="h-80 w-auto object-contain drop-shadow-[-20px_20px_40px_rgba(147,51,234,0.1)]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* ===== Left Sidebar ===== */}
                    <div className="lg:col-span-1 lg:sticky lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-[2.5rem] shadow-2xl shadow-teal-200/20 overflow-hidden border border-slate-100"
                        >
                            <div className="p-8 space-y-8">
                                <div className="relative h-64 group">
                                    <Image
                                        src="/img/feature/qsoft_hfdm_lg.png"
                                        alt="Q.Soft HFD"
                                        fill
                                        className="object-contain p-8 relative z-10 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                                            <ShieldCheck className="w-7 h-7 text-teal-600" />
                                            รายละเอียด
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed text-[15px]">
                                            โปรแกรมที่พัฒนาขึ้นเพื่อบริหารงานของโรงแรมและรีสอร์ท
                                            มุ่งเน้น<span className="text-teal-600 font-bold">เพิ่มประสิทธิภาพการบริหารจัดการ</span>
                                            ด้วยคุณสมบัติครบครันบน<span className="text-teal-600 font-bold"> Web Application</span>
                                            ที่ติดตั้งง่าย และออกแบบโดยผู้มีประสบการณ์ด้านการบริหารโรงแรมมากกว่า 10 ปี
                                        </p>
                                    </div>

                                    <div className="pt-8 border-t border-slate-100">
                                        <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-[2rem]">
                                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600">
                                                <BedDouble className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Technology</p>
                                                <p className="text-slate-800 font-extrabold text-lg">Web Application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ===== Right Content ===== */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Feature Section */}
                        <section className="bg-white rounded-[3rem] shadow-2xl shadow-teal-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                                <Target className="w-64 h-64" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600">
                                    <Layers className="w-7 h-7" />
                                </div>
                                Feature การทำงานหลัก
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                {[
                                    { title: "1. ระบบบริหารห้องพัก", desc: "จัดการห้องพัก การจอง Check-in/Check-out อย่างมีประสิทธิภาพ" },
                                    { title: "2. ระบบโปรโมชั่น", desc: "สร้างและจัดการโปรโมชั่นพิเศษเพื่อดึงดูดลูกค้า" },
                                    { title: "3. ระบบรายรับ-รายจ่าย", desc: "บันทึกและติดตามรายรับรายจ่ายแบบ real-time" },
                                    { title: "4. ระบบคลังอุปกรณ์หอพัก", desc: "จัดการอุปกรณ์และพัสดุภายในโรงแรม" },
                                    { title: "5. ระบบรายงาน", desc: "รายงานสรุปยอดรายได้และสถิติต่างๆ อย่างครบถ้วน" },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-teal-600 group-hover:text-white">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-black text-slate-800 mb-3 text-lg">{item.title}</h4>
                                        <p className="text-[15px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-14 pt-12 border-t border-slate-100 relative z-10">
                                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                                        <Users2 className="w-6 h-6" />
                                    </div>
                                    ประโยชน์ที่ได้รับจากโปรแกรม
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        {
                                            role: "เจ้าของ / ผู้บริหาร / ผู้จัดการ",
                                            benefits: "สร้างความพึงพอใจจากความสามารถในการวิเคราะห์สรุปยอดรายได้ได้รวดเร็ว ทุกที่ ทุกเวลา ช่วยนำเสนอข้อมูลทางสถิติเพื่อการวางแผนงานในอนาคต"
                                        },
                                        {
                                            role: "ฝ่ายปฏิบัติการ",
                                            benefits: "ใช้ช่วยงานบันทึกการจองและดูสถานะพื้นที่(ห้อง)เพื่อรับจองพื้นที่(ห้องพัก)ได้ทันที"
                                        },
                                        {
                                            role: "ฝ่ายการเงิน",
                                            benefits: "ใช้ช่วยงานบันทึกรายได้และสรุปรายงานให้ผู้บริหารได้ทันที มั่นใจงานบริหารติดตามหนี้อย่างมีประสิทธิภาพ"
                                        },
                                        {
                                            role: "เจ้าหน้าที่ฝ่ายซ่อมบำรุงและแม่บ้าน",
                                            benefits: "ใช้ช่วยงานการบันทึกการซ่อมแซม และการทำความสะอาดพื้นที่(ห้องพัก)"
                                        }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="p-6 rounded-2xl bg-teal-50/30 hover:bg-teal-50 border border-teal-100/50 transition-all group"
                                        >
                                            <h4 className="text-teal-600 font-black text-base mb-3 flex items-center gap-2">
                                                <Circle className="w-3 h-3 fill-current" />
                                                {item.role}
                                            </h4>
                                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium pl-5">{item.benefits}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Download Section */}
                        <section className="bg-white rounded-[3rem] shadow-2xl shadow-teal-200/20 overflow-hidden border border-slate-100">
                            <div className="bg-teal-700 px-10 py-14 text-white relative">
                                <div className="absolute top-0 right-0 p-12 opacity-10">
                                    <FileDown className="w-40 h-40" />
                                </div>
                                <div className="relative z-10 text-center md:text-left">
                                    <h3 className="text-4xl font-black mb-4">ดาวน์โหลดเอกสาร</h3>
                                    <p className="text-teal-100 text-lg font-medium max-w-lg">รวบรวมข้อมูล คู่มือ และรายละเอียดฉบับสมบูรณ์สำหรับ Q.Soft HFD</p>
                                </div>
                            </div>

                            <div className="p-10">
                                <div className="grid grid-cols-1 gap-5">
                                    <motion.a
                                        whileHover={{ scale: 1.01 }}
                                        href="/doc/Q_SoftHFD(Brochue).pdf"
                                        download
                                        className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-white rounded-2xl border border-transparent hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-500 group-hover:bg-red-50 transition-colors">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-slate-800 font-bold text-[15px] leading-tight group-hover:text-teal-600 transition-colors">Q_SoftHFD(Brochue).pdf</p>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">Brochure</p>
                                            </div>
                                        </div>
                                        <div className="p-2 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-teal-500">
                                            <Download className="w-5 h-5" />
                                        </div>
                                    </motion.a>
                                </div>
                            </div>
                        </section>

                     <RelatedProducts color="teal" />
                    </div>
                </div>
            </div>
        </div>
    );
}
