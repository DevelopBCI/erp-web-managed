"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "@/app/components/FadeInSection";
import { Globe, BookOpen, Share2, Database, Layout, BarChart3 } from "lucide-react";

const PowerBIIcon = ({ className }: { className?: string }) => (
    <svg height="40" viewBox=".8 0 32.3 34" width="40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
        <g fill="currentColor">
            <path d="m11.1 27.3c0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1v-9c0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1zm6 2.4c0 1.1-.9 2.1-2.1 2.1s-2-.9-2-2.1v-13.7c0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1v13.7zm-12.1-4.4c0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1v-4.9c0-1.1.9-2.1 2.1-2.1s2.1 1 2.1 2.1zm18.1 6.6c0 1.1-.9 2.1-2.1 2.1-1.1 0-2-1-2-2.1v-18.2c0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1v18.2z" />
            <path d="m29.7 31c-.4 0-.7-.1-1.1-.2l-2.5-.8c-.4-.1-.7-.6-.5-1 .1-.4.6-.7 1-.5l2.6.8c.5.2 1.1.1 1.6-.3.5-.3.7-.9.7-1.4v-16.7c0-.8-.5-1.5-1.2-1.7l-24.5-7.4c-.5-.2-1.1-.1-1.6.2-.4.4-.7.9-.7 1.5v11.5c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8v-11.5c0-1.1.5-2.1 1.4-2.7.9-.7 2-.8 3-.5l24.4 7.4c1.4.4 2.4 1.8 2.4 3.3v16.7c0 1.1-.5 2.1-1.4 2.8-.6.2-1.3.5-2 .5" />
        </g>
    </svg>
);

export default function PowerBIPage() {
    return (
        <div className="bg-[#f8fafc] min-h-screen font-kanit">
            {/* Hero Header */}
            <div className="bg-white overflow-hidden relative border-b border-slate-50">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--brand-blue)]/5 -skew-x-12 transform origin-top-right"></div>
                <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
                    <FadeInSection>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex p-4 bg-[var(--brand-blue)] rounded-3xl text-white shadow-2xl shadow-blue-200 mb-8"
                        >
                            <PowerBIIcon />
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-[#111827] mb-6 tracking-tighter leading-none">
                            Power <span style={{ color: "var(--brand-blue)" }}>BI</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-semibold tracking-tight">นวัตกรรมซอฟต์แวร์สำหรับการจัดการข้อมูลอัจฉริยะ</p>
                        <div className="w-24 h-1.5 bg-[var(--brand-blue)] mx-auto mt-10 rounded-full"></div>
                    </FadeInSection>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="space-y-32">

                    {/* Video Section - No Box, just rounded video */}
                    <FadeInSection>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="aspect-video relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-100 bg-slate-900">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/n534IUwLOtk"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Information Sections - Clean Typography, No Boxes */}
                    <div className="space-y-24">
                        <FadeInSection>
                            <div className="text-center">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter flex items-center justify-center gap-4">
                                    Power BI <span className="text-[var(--brand-blue)] italic">คืออะไร?</span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium mx-auto italic">
                                    "เปลี่ยนแหล่งข้อมูลที่กระจัดกระจาย ให้เป็นข้อมูลเชิงลึกที่สอดคล้องกัน แข็งแกร่ง และโต้ตอบได้อย่างชาญฉลาด"
                                </p>
                                <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                                    Power BI คือคอลเลกชันของบริการซอฟต์แวร์ แอป และตัวเชื่อมต่อที่ทำงานร่วมกัน
                                    เพื่อเปลี่ยนแหล่งข้อมูลที่ไม่เกี่ยวข้องของคุณให้เป็นข้อมูลเชิงลึกที่สอดคล้องกัน แสดงข้อมูลได้ และโต้ตอบได้
                                    ข้อมูลของคุณอาจเป็นสเปรดชีต Excel หรือคอลเลกชันของระบบ Cloud และคลังข้อมูลแบบไฮบริดภายในองค์กร
                                    Power BI ช่วยให้คุณเชื่อมต่อกับแหล่งข้อมูลของคุณ แสดงภาพและค้นพบเรื่องสำคัญ รวมถึงแชร์สิ่งเหล่านั้นกับบุคคลหรือทุกคนที่คุณต้องการได้อย่างง่ายดาย
                                </p>
                            </div>
                        </FadeInSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-12 border-t border-slate-100">
                            <FadeInSection>
                                <div className="space-y-4 text-center md:text-left">
                                    <h3 className="text-2xl font-black text-slate-900 flex items-center justify-center md:justify-start gap-3">
                                        <Layout className="text-blue-400 w-7 h-7" />
                                        Power BI Desktop
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        เครื่องมือในการจัดการกับข้อมูล ทั้ง จัดระเบียบ คำนวณ ปรับแต่งอัตโนมัติและยังเป็นเครื่องมือในการสร้างรายงาน
                                        มีความสามารถในการรวม ประสานข้อมูลจากหลายแหล่ง ทั้ง ฐานข้อมูล ไฟล์ต่างๆ ทั้ง Excel, Text File และ ข้อมูลจากเว็บไซต์
                                        ทำให้งานอันแสนน่าเบื่อ เป็นงานที่สนุก ใช้เวลาในการพัฒนาไม่มาก
                                    </p>
                                </div>
                            </FadeInSection>

                            <FadeInSection>
                                <div className="space-y-4 text-center md:text-left">
                                    <h3 className="text-2xl font-black text-slate-900 flex items-center justify-center md:justify-start gap-3">
                                        <Share2 className="text-[var(--brand-blue)] w-7 h-7" />
                                        ส่วนต่างๆ ของ Power BI
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Power BI ประกอบด้วย: แอปพลิเคชันสำหรับเครื่องเดสก์ท็อป Windows ที่เรียกว่า Power BI Desktop
                                        บริการ SaaS (Software as a Service) แบบออนไลน์ที่เรียกว่าบริการของ Power BI
                                        แอปสำหรับอุปกรณ์เคลื่อนที่ Power BI สำหรับอุปกรณ์ Windows, iOS และ Android
                                    </p>
                                </div>
                            </FadeInSection>

                            <FadeInSection>
                                <div className="space-y-4 text-center md:text-left md:col-span-2">
                                    <h3 className="text-2xl font-black text-slate-900 flex items-center justify-center md:justify-start gap-3">
                                        <Database className="text-blue-400 w-7 h-7" />
                                        การเก็บข้อมูลของ Power BI
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium md:max-w-none">
                                        Power BI จะยังสามารถนำข้อมูลของทั้งองค์กร ไม่ว่าจะอยู่บน คลาวน์ (Cloud) หรือ On-Premise
                                        โดยใช้ Power BI Gateway ที่จะเชื่อมโยงไปยังฐานข้อมูล SQL Server, Analysis Service หรือแหล่งต่างๆ
                                        ให้มาอยู่ใน Dashboard เดียวกันใน Power BI และเผยแพร่ไปให้กับทุกๆ อุปกรณ์
                                        หรือนำไปแสดงผลในเว็บไซต์ ด้วย embed code
                                    </p>
                                </div>
                            </FadeInSection>
                        </div>

                        {/* Centered Image Gallery - Prominent Documents - Moved to bottom */}
                        <FadeInSection>
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
                                        <BookOpen className="text-[var(--brand-blue)] w-10 h-10" />
                                        เอกสารประกอบหลักสูตร
                                    </h3>
                                    <div className="w-16 h-1.5 bg-[var(--brand-blue)] mx-auto mt-6 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {[
                                        { src: "/img/bi/หนังสือเชิญนายธนพล_page-0001 (1).jpg" },
                                        { src: "/img/bi/หนังสือเรียนเชิญเป็นวิทยากรAHRDA.jpg" }
                                    ].map((doc, idx) => (   
                                        <div key={idx} className="group cursor-zoom-in">
                                            <div className="relative aspect-[3/4.2] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 bg-slate-50 border border-slate-100">
                                                <Image
                                                    src={doc.src}
                                                    alt=""
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </div>
    );
}