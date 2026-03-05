"use client";

import Image from "next/image";

import {
  FileDown,
  FileText,
  Package,
  Download,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  Activity,
  Target,
  Circle
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageAPS() {
  return (
    <div className="font-kanit min-h-screen bg-cyan-50/10 pb-20">
      {/* ===== Hero Header / Breadcrumb alternative ===== */}
      <div className="bg-white border-b border-cyan-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-600/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 text-cyan-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Activity className="w-3.5 h-3.5" /> ADVANCED SCHEDULING
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                Q.Soft <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500">APS</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium max-w-xl text-lg leading-relaxed"
              >
                Advanced Planning and Scheduling - ระบบบริหารจัดการตารางการผลิตอัจฉริยะที่ช่วยเพิ่มประสิทธิภาพสูงสุดให้โรงงานของคุณ
              </motion.p>

              <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: -20, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="static md:absolute md:right-32 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto flex justify-center md:block pointer-events-none"
            >
              <img
                src="/design/aps.png"
                alt="APS Illustration"
                className="h-80 w-auto object-contain drop-shadow-[-20px_20px_40px_rgba(5,150,105,0.1)]"
              />
            </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* ===== Left Sidebar - Polished ===== */}
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-cyan-200/20 overflow-hidden border border-slate-100"
            >
              <div className="p-8 space-y-8">
                <div className="relative h-64 group">
                  <Image
                    src="/img/feature/qsoft_aps_big.png"
                    alt="Q.Soft APS"
                    fill
                    className="object-contain p-8 relative z-10  transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-cyan-600" />
                      จุดมุ่งหมาย
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[15px]">
                      ให้ผู้ประกอบการที่กำลังมองหาโปรแกรมบริหารแลวางแผนการผลิตที่มีคุณภาพ ใช้งานง่าย และราคาเข้าถึงได้
                      เพื่อให้รับรู้ <span className="text-cyan-600 font-bold">ต้นทุนที่แท้จริง (Actual Cost)</span>
                      อันจะนำไปสู่การพัฒนาศักยภาพอย่างยั่งยืน
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-[2rem]">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-cyan-600">
                        <Zap className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Efficiency</p>
                        <p className="text-slate-800 font-extrabold text-lg">บริหารจัดการรวดเร็ว ใช้งานง่าย</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ===== Right Content - Main Content ===== */}
          <div className="lg:col-span-2 space-y-12">

            {/* Feature Section */}
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-cyan-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Target className="w-64 h-64" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600">
                  <Layers className="w-7 h-7" />
                </div>
                Feature การทำงานหลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {[
                  { title: "1. บริหารงานด้วยระบบ Graphic", desc: "ทำให้ง่ายในการจัดการ และใช้หลักการ Drag & Drop ในการบริหารตารางเวลาการผลิต" },
                  { title: "2. วางแผนการผลิตและจ้างผลิต", desc: "บริหารจัดการกระบวนการผลิตผ่าน Gantt Bar อย่างมืออาชีพ" },
                  { title: "3. วางแผนการจัดซื้อและจัดส่ง", desc: "ควบคุมตารางการจัดซื้อและส่งมอบสินค้าด้วย Gantt Bar" },
                  { title: "4. ภาพรวมเส้นทางการผลิต", desc: "ตรวจสอบกระบวนการได้ละเอียดตั้งแต่ระดับนาทีจนถึงระดับวัน" },
                  { title: "5. การใช้งานหน่วยการผลิต", desc: "ดูภาพรวมการรันเครื่องจักรและทรัพยากรในรูปแบบ Gantt Chart" },
                  { title: "6. บริหารสินค้าคงคลัง", desc: "ดูแลภาพรวมการบริหารสต็อกและสินค้าคงคลังได้อย่างชัดเจน" },
                  { title: "7. ตรวจสอบสถานะงาน", desc: "Track สถานะการทำงานได้ง่ายทันทีจากสีของ Gantt Chart" },
                  { title: "8. ลดเวลาการคำนวณ", desc: "ช่วยในการประมวลผลความต้องการที่ซ้ำซ้อนให้เร็วยิ่งขึ้น" },
                  { title: "9. ตอบสนองความเปลี่ยนแปลง", desc: "ปรับแผนการผลิตที่เปลี่ยนตลอดเวลาให้เข้ากับสถานการณ์จริง" },
                  { title: "10. เชื่อมต่อโปรแกรม MRP", desc: "รองรับการ Customize เพื่อเชื่อมต่อโปรแกรม MRP ใดๆ ก็ได้" },
                  { title: "11. ดูรายละเอียดของงาน", desc: "ตรวจสอบ Order - Instruction ที่ออกไปเพื่อลดความผิดพลาด" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-cyan-600 group-hover:text-white">
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
                    "1. สามารถแบ่งกำลังการผลิตแยกหน่วยผลิตในกระบวนการเดียวกัน",
                    "2. มีรายงานสำหรับประเมินผล (Report Evaluation) ที่ครบถ้วนสมบูรณ์",
                    "3. สามารถ Drill Down ไปยังเอกสารเพื่อปรับปรุง หรือเปลี่ยนแปลงข้อมูลได้ทันที",
                    "4. สามารถ Export ข้อมูลไปยังโปรแกรม MS Project หรือ MS Excel ได้รวดเร็ว",
                    "5. Friendly Graphic User Interface ออกแบบให้ใช้งานง่ายและเป็นมิตรกับผู้ใช้"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-cyan-50/50 transition-all group"
                    >
                      <div className="mt-1.5 p-1 rounded-full bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                        <Circle className="w-2.5 h-2.5 fill-current" />
                      </div>
                      <span className="text-slate-600 text-[15px] leading-relaxed font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== Re-imagined Download Section ===== */}
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-cyan-200/20 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-br from-cyan-700 via-blue-600 to-cyan-500 px-10 py-14 text-white relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <FileDown className="w-40 h-40" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-4xl font-black mb-4">ดาวน์โหลดเอกสาร</h3>
                  <p className="text-cyan-100 text-lg font-medium max-w-lg">รวบรวมข้อมูล คู่มือ และรายละเอียดสำหรับ Q.Soft APS</p>
                </div>
              </div>

              <div className="p-10">
                {/* Bundle Download */}
                <div className="mb-10">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/doc/Q_Soft_APS"
                    download
                    className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-cyan-200 transition-all group"
                  >
                    <Package className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    ดาวน์โหลดทั้งหมด (ZIP)
                    <ArrowRight className="w-6 h-6 opacity-50" />
                  </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { name: "APS_new.pdf", file: "APS_new.pdf", type: "Manual" },
                    { name: "APS Brochure (Thai)", file: "Q_Soft_APS_Brochue(thai)561206.pdf", type: "Brochure" },
                  ].map((doc, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      href={`/doc/${doc.file}`}
                      download
                      className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-white rounded-2xl border border-transparent hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-500 group-hover:bg-red-50 transition-colors">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-slate-800 font-bold text-[15px] leading-tight group-hover:text-cyan-600 transition-colors">{doc.name}</p>
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">{doc.type}</p>
                        </div>
                      </div>
                      <div className="p-2 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-cyan-500">
                        <Download className="w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </section>

            <RelatedProducts color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}
