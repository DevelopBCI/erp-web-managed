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
  Wrench,
  Settings,
  Target,
  Circle
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PagePM() {
  return (
    <div className="font-kanit min-h-screen bg-orange-50/10 pb-20">
      {/* ===== Hero Header / Breadcrumb alternative ===== */}
      <div className="bg-white border-b border-orange-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Wrench className="w-3.5 h-3.5" /> PLANT MAINTENANCE
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                Q.Soft <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">PM</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium max-w-xl text-lg leading-relaxed"
              >
                Plant Maintenance System - ระบบบริหารจัดการงานดูแลรักษาเครื่องจักรและสินทรัพย์ที่ช่วยลดความสูญเสียและเพิ่มอายุการใช้งานอย่างยั่งยืน
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: -50, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="static md:absolute md:right-32 md:top-1 md:-translate-y-1 w-full md:w-auto flex justify-center md:block pointer-events-none"
              >
                <img
                  src="/design/pm.png"
                  alt="PM Illustration"
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
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-orange-200/20 overflow-hidden border border-slate-100"
            >
              <div className="p-8 space-y-8">
                <div className="relative h-64 group">
                  <Image
                    src="/img/feature/qsoft_pm_big.png"
                    alt="Q.Soft PM"
                    fill
                    className="object-contain p-8 relative z-10  transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-orange-600" />
                      จุดมุ่งหมาย
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[15px]">
                      ให้ผู้ประกอบการที่กำลังมองหาโปรแกรมบริหารงานบำรุงรักษาที่มีคุณภาพ ใช้งานง่าย และราคาเข้าถึงได้
                      เพื่อเพิ่ม <span className="text-orange-600 font-bold">ประสิทธิภาพสูงสุดในการทำงาน</span>
                      และลดความสูญเสียกะทันหันอันจะนำไปสู่ความยั่งยืน
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-[2rem]">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-600">
                        <Settings className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Reliability</p>
                        <p className="text-slate-800 font-extrabold text-lg">ดูแลเครื่องจักร 100%</p>
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
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-orange-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Target className="w-64 h-64" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                  <Layers className="w-7 h-7" />
                </div>
                Feature การทำงานหลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {[
                  { title: "1. แผนการซ่อมบำรุงล่วงหน้า", desc: "รองรับการกำหนดแผนการซ่อมบำรุงให้กับเครื่องจักร หรือสินทรัพย์ต่างๆ อย่างเป็นระบบ" },
                  { title: "2. บริหารงานสั่งซ่อม", desc: "รองรับการเปิดใบสั่งซ่อม การขอเบิกอะไหล่ และเตือนเมื่อปริมาณอะไหล่ถึงจุดสั่งซื้อ" },
                  { title: "3. ระบบคลังอะไหล่", desc: "รองรับการเบิกและคืนอะไหล่-อุปกรณ์ ตรวจนับ และปรับยอดได้อย่างแม่นยำ" },
                  { title: "4. ระบบต้นทุนซ่อมบำรุง", desc: "รองรับการเก็บต้นทุนการซ่อมบำรุง แยกตามแต่ละงานเพื่อให้เห็นค่าใช้จ่ายจริง" },
                  { title: "5. ระบบสิทธิการใช้งาน", desc: "สามารถกำหนดสิทธิการใช้งาน (เพิ่ม, แก้ไข, ลบ, พิมพ์) ได้ละเอียดทุกเมนูและ Field" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-orange-100 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-600 group-hover:text-white">
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
                    "1. สามารถวางแผนการซ่อมบำรุงเครื่องจักรล่วงหน้าได้",
                    "2. สามารถสร้างใบขอซื้ออะไหล่และอุปกรณ์ได้",
                    "3. สามารถสร้างใบสั่งซื้ออ้างอิง หรือไม่อ้างอิงใบขอซื้อได้",
                    "4. สามารถบันทึกรับอะไหล่-อุปกรณ์ อ้างอิงใบสั่งซื้อหรือไม่อ้างอิงก็ได้",
                    "5. สามารถเปิดใบสั่งซ่อม-ขอเบิกอะไหล่-อุปกรณ์ได้ทันที",
                    "6. สามารถติดตามสถานการณ์แจ้งซ่อมได้ (เริ่มงาน, กำลังดำเนินการ, ซ่อมเสร็จ)",
                    "7. สามารถบันทึกเวลาเริ่มซ่อม และซ่อมเสร็จจริงเพื่อวัดผล",
                    "8. สามารถทราบต้นทุนการซ่อมบำรุงเครื่องจักรย้อนหลังได้ทั้งหมด",
                    "9. สามารถเปิดงานซ่อมด่วน กรณีเครื่องจักรเสียกะทันหันได้ทันท่วงที",
                    "10. สามารถระบุพนักงานที่มีหน้าที่รับผิดชอบงานซ่อมแซมได้ชัดเจน",
                    "11. สามารถบริหารปริมาณสต็อกอะไหล่ได้อย่างมีประสิทธิภาพสูงสุด",
                    "12. บริหารสต็อกอะไหล่ให้มีปริมาณที่เหมาะสม และลดต้นทุนการจัดเก็บ",
                    "13. ตรวจสอบต้นทุนอะไหล่ได้ทั้งแบบ FIFO, Average และ Lot Specific",
                    "14. เพิ่มความแม่นยำของข้อมูล และลดความผิดพลาดในการทำงานของพนักงาน",
                    "15. เป็นเครื่องมือช่วยสนับสนุนข้อมูลให้ฝ่ายจัดซื้อและคลังอะไหล่",
                    "16. สามารถกำหนดสิทธิการใช้งานได้อย่างอิสระทุกเมนู",
                    "17. สามารถสร้างแบบฟอร์มการทำงานได้เองตามโครงสร้างระบบ",
                    "18. Export ข้อมูลไฟล์ MS Office, PDF, XML และอื่นๆ ได้หลากหลาย",
                    "19. ตรวจสอบ Log การทำงานของผู้ใช้งานได้ละเอียด (วัน/เวลา/รายการที่ทำ)",
                    "20. รองรับการทำงานแบบ 1 Companies, 1 Branch, 1 Factory",
                    "21. มีรายงานอะไหล่-อุปกรณ์ค้างรับ สำหรับติดตามงานจัดซื้อ",
                    "22. มีรายงานวิเคราะห์สาเหตุการเสีย (Pareto Chart) เพื่อการปรับปรุง",
                    "23. มีรายงานสรุป Master Productivity Report ประเมินประสิทธิภาพ",
                    "24. มีรายงานตารางแผนการซ่อมบำรุงที่ชัดเจนและดูง่าย",
                    "25. มีรายงานสต็อกอะไหล่-อุปกรณ์คงเหลือแบบ Real-time",
                    "26. มีรายงานความเคลื่อนไหวของปริมาณอะไหล่-อุปกรณ์ย้อนหลัง"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-orange-50/50 transition-all group"
                    >
                      <div className="mt-1.5 p-1 rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <Circle className="w-3 h-3" />
                      </div>
                      <span className="text-slate-600 text-[15px] leading-relaxed font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== Re-imagined Download Section ===== */}
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-orange-200/20 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-br from-orange-700 via-amber-600 to-orange-500 px-10 py-14 text-white relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <FileDown className="w-40 h-40" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-4xl font-black mb-4">ดาวน์โหลดเอกสาร</h3>
                  <p className="text-orange-100 text-lg font-medium max-w-lg">รวบรวมข้อมูล คู่มือ และโบรชัวร์สำหรับ Q.Soft PM</p>
                </div>
              </div>

              <div className="p-10">
                {/* Bundle Download */}
                <div className="mb-10">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/doc/Q_Soft_PM.zip"
                    download
                    className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-orange-200 transition-all group"
                  >
                    <Package className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    ดาวน์โหลดทั้งหมด (ZIP)
                    <ArrowRight className="w-6 h-6 opacity-50" />
                  </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { name: "Q.Soft PM V2 Brochure (Thai)", file: "Q.Soft_PM_V2Brochue(thai).pdf", type: "Brochure V2" },
                    { name: "Q.Soft PM V1 Brochure (Thai)", file: "Q.Soft_PM_V1Brochue(thai).pdf", type: "Brochure V1" },
                  ].map((doc, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      href={`/doc/${doc.file}`}
                      download
                      className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-white rounded-2xl border border-transparent hover:border-orange-100 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-500 group-hover:bg-red-50 transition-colors">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-slate-800 font-bold text-[15px] leading-tight group-hover:text-orange-600 transition-colors">{doc.name}</p>
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">{doc.type}</p>
                        </div>
                      </div>
                      <div className="p-2 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-orange-500">
                        <Download className="w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </section>

            <RelatedProducts color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
}
