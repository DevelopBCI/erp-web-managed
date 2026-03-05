"use client";

import Image from "next/image";

import {
    CheckCircle2,
    Layers,
    ShieldCheck,
    Zap,
    Target,
    Circle,
    Building2,
    Landmark
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageMBS() {
    return (
        <div className="font-kanit min-h-screen bg-pink-50/10 pb-20">
            {/* ===== Hero Header ===== */}
            <div className="bg-white border-b border-pink-50 mb-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-100/50 -skew-x-12 transform origin-top-right"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="relative z-10 max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
                            >
                                <Landmark className="w-3.5 h-3.5" /> FINANCIAL SOLUTION
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
                            >
                                Q.Soft <span className="bg-clip-text text-transparent bg-pink-600 ">MBS</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-slate-500 font-medium text-lg leading-relaxed"
                            >
                                MicroBank System - ซอฟท์แวร์บริหารงานด้านธนาคารและการเงิน เหมาะสำหรับกองทุนหมู่บ้าน สถาบันการเงินชุมชน และสหกรณ์ออมทรัพย์
                            </motion.p>
                        </div>


                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 20, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="static md:absolute md:right-32 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto flex justify-center md:block pointer-events-none"
                        >
                            <img
                                src="/design/mbs.png"
                                alt="MBS Illustration"
                                className="h-80 w-auto object-contain drop-shadow-[-20px_20px_40px_rgba(2,132,199,0.1)]"
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
                            className="bg-white rounded-[2.5rem] shadow-2xl shadow-pink-200/20 overflow-hidden border border-slate-100"
                        >
                            <div className="p-8 space-y-8">
                                <div className="relative h-64 group">
                                    <Image
                                        src="/img/feature/qsoft_mbs_lg.png"
                                        alt="Q.Soft MBS"
                                        fill
                                        className="object-contain p-8 relative z-10 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                                            <ShieldCheck className="w-7 h-7 text-pink-600" />
                                            จุดมุ่งหมาย
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed text-[15px]">
                                            ให้ผู้ดูแลการจัดการด้านธนาคารและการเงินสามารถบริหารจัดการได้อย่างมีประสิทธิภาพ
                                            พร้อม <span className="text-pink-600 font-bold">ระบบที่ใช้งานง่าย</span> และ
                                            <span className="text-pink-600 font-bold"> ราคาเข้าถึงได้</span>
                                            เหมาะสำหรับสถาบันการเงินขนาดเล็กและปานกลาง
                                        </p>
                                    </div>

                                    <div className="pt-8 border-t border-slate-100">
                                        <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-[2rem]">
                                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-pink-600">
                                                <Building2 className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Target</p>
                                                <p className="text-slate-800 font-extrabold text-lg">กองทุน สหกรณ์ ชุมชน</p>
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
                        <section className="bg-white rounded-[3rem] shadow-2xl shadow-pink-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                                <Target className="w-64 h-64" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600">
                                    <Layers className="w-7 h-7" />
                                </div>
                                Feature การทำงานหลัก
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                {[
                                    { title: "1. ระบบธนาคาร", desc: "ระบบจัดการบัญชีเงินฝาก บัญชีเงินกู้ การจ่ายดอกเบี้ย และการบริหารสมาชิก" },
                                    { title: "2. ระบบบาร์โค้ด", desc: "รองรับการพิมพ์และสแกนบาร์โค้ดสำหรับการทำธุรกรรม เพิ่มความรวดเร็วและความแม่นยำ" },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-pink-100 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-500"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-pink-600 group-hover:text-white">
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
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    ประโยชน์ที่ได้รับจากโปรแกรม
                                </h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        "1. สร้างทะเบียนสมาชิกได้ไม่จำกัด ซึ่งแยกสถานะได้ว่า เป็นสมาชิก ผู้ออม ผู้กู้ ผู้ค้ำประกัน และเก็บประวัติการทำธุรกรรมของสมาชิกแต่ละรายไว้ที่ทั้งหมด ทำให้ง่ายต่อการตรวจสอบข้อมูล",
                                        "2. สามารถใส่รูปภาพสมาชิกที่ทะเบียนสมาชิกได้",
                                        "3. สามารถสร้างประเภทเงินฝากได้ไม่จำกัดประเภท พร้อมกำหนดอัตราดอกเบี้ย จำนวนครั้งในการจ่ายดอกเบี้ย และรูปแบบการจ่ายดอกเบี้ยว่าจะจ่ายโดยโอนดอกเบี้ยเข้าบัญชีเดิมหรือโอนดอกเบี้ยเข้าบัญชีอื่น หรือจ่ายดอกเบี้ยเป็นเงินสดก็ได้",
                                        "4. สามารถสร้างเงื่อนไขการฝากเงินเป็นกลุ่ม สำหรับกลุ่มที่ฝากในจำนวนเงินที่เท่ากันได้",
                                        "5. บันทึกการเปิดบัญชี โดยเพิ่มสมาชิกใหม่หรือลูกค้าใหม่ได้จากหน้าจอเปิดบัญชี และสามารถระบุบัญชีที่ขอเปิดได้มากกว่า 1 บัญชี และระบุชื่อผู้มีอำนาจถอนได้ถึง 3 ชื่อ",
                                        "6. สามารถระบุบัญชีคู่ฝากที่ใช้ในการโอนดอกเบี้ยเงินฝากได้",
                                        "7. สามารถพิมพ์สมุดคู่ฝากได้จากหน้าจอ ฝาก - ถอนเงิน และหน้าทะเบียนสมาชิก",
                                        "8. มีสถานะบอกว่าบัญชีทุกประเภทอยู่ในสถานะใด เช่น เปิด ปิดบัญชี ฝาก ถอนหรือจ่ายดอกเบี้ย",
                                        "9. โปรแกรมจะทำการคำนวณอัตราดอกเบี้ยเงินฝาก ดอกเบี้ยเงินกู้ ตามเงื่อนไขที่กำหนดให้อัตโนมัติ",
                                        "10. สามารถทำรายการจ่ายดอกเบี้ยเงินฝากในแต่ละประเภทเมื่อครบกำหนดได้รับดอกเบี้ยให้สมาชิกได้พร้อมกันทุกรายไม่จำกัดจำนวนราย และสำหรับดอกเบี้ยเงินฝากประจำสามารถกำหนดเงื่อนไขให้ทำระบบรายการจ่ายดอกเบี้ยแบบอัตโนมัติเมื่อครบกำหนดได้รับดอกเบี้ยได้",
                                        "11. สามารถกำหนดวันที่ที่ต้องการเปลี่ยนแปลงอัตราดอกเบี้ยล่วงหน้าได้ และระบบจะคำนวณอัตราใหม่ให้ทันทีเมื่อถึงกำหนดวันที่ที่ระบุไว้ให้เปลี่ยนเป็นอัตราใหม่",
                                        "12. สามารถทำรายการรับฝากเงินแบบเป็นกลุ่มได้ครั้งละไม่จำกัดจำนวนสมาชิกที่ทำรายการ พร้อมทั้งสามารถเปลี่ยนแปลงจำนวนเงินที่ฝากของสมาชิกแต่ละรายได้",
                                        "13. สามารถเก็บค่าธรรมเนียมแรกเข้า ค่าธรรมเนียมการเปิดบัญชี ค่าธรรมเนียมการขอกู้หรือค่าธรรมเนียมอื่น",
                                        "14. สามารถกำหนดประเภทหุ้นได้หลายประเภท พร้อมกำหนดราคามูลค่าหุ้นแต่ละประเภทได้",
                                        "15. สามารถบันทึกการซื้อหุ้น ขายหุ้น โอนหุ้น ถอนหุ้น หรือบันทึกหุ้นยกมาตามรายบุคคลได้ไม่จำกัด",
                                        "16. สามารถกำหนดประเภทเงื่อนไขการกู้ได้ไม่จำกัด พร้อมระบุวิธีการคิดดอกเบี้ย การคิดค่าปรับเพื่อโปรแกรมจะนำไปใช้ในการสร้างตารางการผ่อนชำระให้อัตโนมัติ",
                                        "17. กำหนดการอัตราดอกเบี้ยเงินกู้ในแต่ละประเภทเงินกู้ได้",
                                    ].map((text, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 p-3 rounded-2xl hover:bg-pink-50/50 transition-all group"
                                        >
                                            <div className="mt-1.5 p-1 rounded-full bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                                                <Circle className="w-2.5 h-2.5 fill-current" />
                                            </div>
                                            <span className="text-slate-600 text-[15px] leading-relaxed font-medium">{text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <RelatedProducts color="pink" />
                    </div>
                </div>
            </div>
        </div>
    );
}
