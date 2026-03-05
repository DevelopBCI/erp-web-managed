"use client";

import Image from "next/image";
import {
  FileDown,
  FileText,
  Package,
  Download,
  CheckCircle2,
  Layers,
  Monitor,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  Target,
  Circle
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "@/app/components/RelatedProducts";

export default function PageMRP() {
  return (
    <div className="font-kanit min-h-screen bg-emerald-50/10 pb-20">
      {/* ===== Hero Header / Breadcrumb alternative ===== */}
      <div className="bg-white border-b border-emerald-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-100/50 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Monitor className="w-3.5 h-3.5" /> SOFTWARE SOLUTION
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                Q.Soft <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">MRP</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium text-lg leading-relaxed"
              >
                Manufacturing Resource Planning - ระบบจัดการและวางแผนการผลิตระดับมืออาชีพที่ช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน
              </motion.p>
            </div>


            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 30, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="static md:absolute md:right-32 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto flex justify-center md:block pointer-events-none"
            >
              <img
                src="/design/mrp.png"
                alt="MRP Illustration"
                className="h-100 w-auto object-contain drop-shadow-[-20px_20px_40px_rgba(5,150,105,0.1)]"
              />
            </motion.div>
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
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-200/20 overflow-hidden border border-slate-100"
            >
              <div className="p-8 space-y-8">
                <div className="relative h-64 group">
                  <Image
                    src="/img/feature/qsoft_mrp_big.png"
                    alt="Q.Soft MRP"
                    fill
                    className="object-contain p-8 relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-emerald-600" />
                      จุดมุ่งหมาย
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[15px]">
                      ให้ผู้ประกอบการที่กำลังมองหาโปรแกรม MRP ที่มีคุณภาพ ใช้งานง่าย และราคาเข้าถึงได้
                      เพื่อให้รับรู้ <span className="text-emerald-600 font-bold">ต้นทุนที่แท้จริง (Actual Cost)</span>
                      อันจะนำไปสู่การพัฒนาศักยภาพอย่างยั่งยืน
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-[2rem]">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600">
                        <Zap className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Experience</p>
                        <p className="text-slate-800 font-extrabold text-lg">ทีมงานมืออาชีพ 10+ ปี</p>
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
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-emerald-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Target className="w-64 h-64" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Layers className="w-7 h-7" />
                </div>
                Feature การทำงานหลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {[
                  { title: "1. ระบบบริหารการใช้สินค้าและวัตถุดิบ", desc: "(Material Requirement Planning MRP.I) รองรับการบริหารสต็อก, การจัดซื้อวัตถุดิบ" },
                  { title: "2. ระบบวางแผนการผลิต", desc: "(Manufacturing Resource Planning MRP.II) รองรับการผลิตแบบ made to order, made to stock สามารถจัดการกับ hot order ได้อย่างมีประสิทธิภาพ และช่วยกำหนดการบริหาร shop floor" },
                  { title: "3. ระบบต้นทุนการผลิต", desc: "(Cost Accounting) รองรับการเก็บต้นทุนการผลิตทุกหน่วยการผลิต (Work In Process) และทำ Actual Cost ได้" },
                  { title: "4. ระบบขาย", desc: "(Sale Order) รองรับการจัดทำใบเสนอราคา, ใบรับคำสั่งซื้อ, ใบส่งของ สามารถทำงานผ่าน internet ได้" },
                  { title: "5. ระบบรักษากำหนดสิทธิการใช้งาน", desc: "(Security Authority) สามารถกำหนดสิทธิการใช้งานได้ทุกเมนู, ทุก field" },
                  { title: "6. ระบบการเชื่อมต่อกับโปรแกรมบัญชี-การเงิน", desc: "(Interface System) รองรับการเชื่อมต่อกับโปรแกรมบัญชี-การเงิน ที่ใช้งานในปัจจุบัน โดยสามารถเชื่อมต่อกับโปรแกรมบัญชีชั้นนำได้" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-emerald-600 group-hover:text-white">
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
                    "1. สามารถวางแผนแบบ Advance Scheduling (Forward + Backward Scheduling)",
                    "2. สามารถวางแผนการผลิตได้ทั้งแบบที่ละขั้นตอน (แยกส่วนการวางแผน) หรือวางแผนการผลิตทั้งสายการผลิตผลิตภัณฑ์ หรือผสมรูปแบบกันก็ได้",
                    "3. สามารถแทรกงานด่วน เปลี่ยนแปลงแผนการผลิตที่วางแผนไปแล้ว หรือแม้กระทั่งแผนที่ออก ใบสั่งผลิตไปแล้วก็ตาม โดยมีรูปแบบสำหรับการแทรก หรือเปลี่ยนแปลงงานที่หลากหลาย ทั้งนี้ขึ้นอยู่กับสิทธิการใช้งานโปรแกรมที่ถูกกำหนดขึ้น",
                    "4. ผู้บริหารสามารถทราบต้นทุนก่อนการผลิต และทราบต้นทุนที่แท้จริงหลังการผลิตแล้ว ทำให้ง่าย ต่อการตัดสินใจ การบริหารการผลิต และสะดวกในการช่วยจัดทำบัญชีต้นทุน",
                    "5. รองรับการวางแผนการผลิตแบบ Re-Process, Re-Work, Re-Pack และคำนวณต้นทุนสินค้าเฉพาะกรณีนั้นๆได้อย่างถูกต้อง",
                    "6. รองรับ QC Process",
                    "7. รองรับการวางแผนการผลิตของจุดสนใจ (Work Center) แม้การผลิตจะขึ้นอยู่กับกำลังคนก็ตาม (มีการสับเปลี่ยนกำลังคนตลอดเวลา)",
                    "8. ลดความซ้ำซ้อน เพิ่มความรวดเร็วในการทำงาน ทั้งงานจัดซื้อ งานคลังสินค้า งานวางแผนการผลิตงานส่งสินค้า และทำให้ง่ายต่อการสืบค้น หรือติดตามข้อมูล พร้อมทั้งนำข้อมูลไปประมวลผลต่อ",
                    "9. สามารถนำไปใช้ในการบริหารคลังสินค้า ให้มีปริมาณที่เหมาะสม และลดต้นทุนการจัดเก็บพร้อมทั้ง ทราบความเคลื่อนไหวต่างๆ ของวัตถุดิบ สินค้ากึ่งสำเร็จรูป สินค้าสำเร็จรูป ในคลังสินค้า",
                    "10. สามารถตรวจสอบต้นทุนสินค้าได้ทั้งแบบ FIFO, Average และ Lot Specific",
                    "11. เพิ่มความแม่นยำของข้อมูล และลดความผิดพลาดในการทำงานของพนักงาน",
                    "12. เป็นเครื่องมือช่วยสนับสนุนข้อมูลให้หน่วยวางแผนการผลิต, จัดซื้อ, คลังสินค้า ใช้เพื่อตอบสนอง นโยบายขององค์กร",
                    "13. สามารถกำหนดสิทธิการใช้งานได้อย่างอิสระทุกเมนู",
                    "14. สามารถสร้างแบบฟอร์มการทำงานได้เอง โดยดึงข้อมูลจากโครงสร้างของระบบไปใช้งานได้ทันที",
                    "15. สามารถ Export ข้อมูลเป็นไฟล์ MS Office (.doc, .docx, .xls, .xlsx, .ppt, .pptx, .vsd, .pub, .mpp, .mppx, mdb, accdb),.rtf, .txt, .pdf, .xml ได้",
                    "16. สามารถตรวจสอบการทำงานของแต่ละผู้ใช้งานว่าอะไรไปบ้าง วันไหนและเวลาใด",
                    "17. รองรับการทำงานแบบ Multi Company, Multi Branch, Multi Factory"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-emerald-50/50 transition-all group"
                    >
                      <div className="mt-1.5 p-1 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <Circle className="w-2.5 h-2.5 fill-current" />
                      </div>
                      <span className="text-slate-600 text-[15px] leading-relaxed font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== Re-imagined Download Section ===== */}
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-emerald-200/20 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-500 px-10 py-14 text-white relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <FileDown className="w-40 h-40" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-4xl font-black mb-4">ดาวน์โหลดเอกสาร</h3>
                  <p className="text-emerald-100 text-lg font-medium max-w-lg">รวบรวมข้อมูล คู่มือ และรายละเอียดอุตสาหกรรมฉบับสมบูรณ์สำหรับ Q.Soft MRP</p>
                </div>
              </div>

              <div className="p-10">
                {/* Bundle Download */}
                <div className="mb-10">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/doc/Q_Soft_MRP.zip"
                    download
                    className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-emerald-200 transition-all group"
                  >
                    <Package className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    ดาวน์โหลดทั้งหมด (ZIP)
                    <ArrowRight className="w-6 h-6 opacity-50" />
                  </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { name: "Q-Soft MRP (TH Version)", file: "Q-Soft_MRP_TH.pdf", type: "Manual" },
                    { name: "MRP Brochure V6.11", file: "Q_Soft_MRP_ENT+Brochue(thai)V6.11.pdf", type: "Brochure" },
                    { name: "MRP Automotive", file: "Q_Soft_MRP_ENT+Brochue(thai)V6Automotive.pdf", type: "Industry" },
                    { name: "MRP Plastics", file: "Q_Soft_MRP_ENT+Brochue(thai)V6_Plastics.pdf", type: "Industry" },
                    { name: "MRP Assembly", file: "Q_Soft_MRP_ENT+Brochue(thai)V6_Assembly.pdf", type: "Industry" },
                    { name: "Qsoft (FLB)", file: "Qsoft(FLB).pdf", type: "General" },
                    { name: "MRP + PM V7.01", file: "Q_Soft_MRP_Opt_PM_Brochue(thai)V7.01.pdf", type: "Combined" },
                    { name: "MRP + WMS V7.01", file: "Q_Soft_MRP+_Opt_WMS_Brochue(thai)V7.01.pdf", type: "Combined" },
                    { name: "MRP Food/Drug/Chemical", file: "Q_Soft_MRP_ENT+Brochue(thai)V6_Food-Drug-Chemical.pdf", type: "Industry" },
                  ].map((doc, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      href={`/doc/${doc.file}`}
                      download
                      className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-white rounded-2xl border border-transparent hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-500 group-hover:bg-red-50 transition-colors">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-slate-800 font-bold text-[15px] leading-tight group-hover:text-emerald-600 transition-colors">{doc.name}</p>
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">{doc.type}</p>
                        </div>
                      </div>
                      <div className="p-2 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-emerald-500">
                        <Download className="w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}         
                </div>
              </div>
            </section>

            {/* Related Products Section */}
            <RelatedProducts color="emerald" />
          </div>
        </div>
      </div>
    </div>
  );
}