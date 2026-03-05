"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileDown,
  FileText,
  Package,
  Download,
  Archive,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Target,
  Box,
  Circle

} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageWMS() {
  return (
    <div className="font-kanit min-h-screen bg-violet-50/10 pb-20">
      {/* ===== Hero Header / Breadcrumb alternative ===== */}
      <div className="bg-white border-b border-violet-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-50 text-violet-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Archive className="w-3.5 h-3.5" /> WAREHOUSE MANAGEMENT
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                Q.Soft <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">WMS</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium max-w-xl text-lg leading-relaxed"
              >
                Warehouse Management System - ระบบบริหารจัดการคลังสินค้าอัจฉริยะที่ช่วยเพิ่มประสิทธิภาพสูงสุดในการใช้พื้นที่และทรัพยากร
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: -50, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="static md:absolute md:right-32 md:top-1 md:-translate-y-1 w-full md:w-auto flex justify-center md:block pointer-events-none"
              >
                <img
                  src="/design/wms.png"
                  alt="WMS Illustration"
                  className="h-90 w-auto object-contain drop-shadow-[-20px_20px_40px_rgba(5,150,105,0.1)]"
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
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-violet-200/20 overflow-hidden border border-slate-100"
            >
              <div className="p-8 space-y-8">
                <div className="relative h-64 group">
                  <Image
                    src="/img/feature/qsoft_wms_big.png"
                    alt="Q.Soft WMS"
                    fill
                    className="object-contain p-8 relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-violet-600" />
                      จุดมุ่งหมาย
                    </h3>
                    <div className="space-y-4">
                      {[
                        "1. ลดระยะทางในการปฏิบัติการในการเคลื่อนย้ายให้มากที่สุด",
                        "2. การใช้พื้นที่และปริมาตรในการจัดเก็บให้เกิดประโยชน์สูงสุด",
                        "3. สร้างความมั่นใจว่าแรงงาน เครื่องมือ อุปกรณ์ มีเพียงพอสอดคล้องกับระดับธุรกิจ",
                        "4. สร้างความพึงพอใจในการทำงานแก่ผู้เกี่ยวข้อง ทั้งการรับเข้าและจ่ายออก",
                        "5. วางแผนได้อย่างต่อเนื่อง ควบคุมทรัพยากรเพื่อให้เกิดประสิทธิภาพสูงสุด"
                      ].map((item, id) => (
                        <p key={id} className="text-slate-500 leading-relaxed text-[14px]">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-[2rem]">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-violet-600">
                        <Box className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Innovation</p>
                        <p className="text-slate-800 font-extrabold text-lg">คลังสินค้าเสมือนจริง</p>
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
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-violet-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Target className="w-64 h-64" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600">
                  <Layers className="w-7 h-7" />
                </div>
                Feature การทำงานหลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {[
                  { title: "1. บริหารงานด้วยระบบ Graphic", desc: "ทำให้ง่ายในการจัดการ และใช้หลักการ Drag & Drop ในการบริหารตารางเวลาการผลิต" },
                  { title: "2. วางแผนการผลิตและจ้างผลิต", desc: "บริหารจัดการกระบวนการผ่าน Gantt Bar อย่างมืออาชีพ" },
                  { title: "3. วางแผนการจัดซื้อและจัดส่ง", desc: "ควบคุมตารางเวลาด้วย Gantt Bar เพื่อความแม่นยำ" },
                  { title: "4. ภาพรวมเส้นทางการผลิต", desc: "ตรวจสอบได้ละเอียดตั้งแต่ระดับนาทีจนถึงระดับวัน" },
                  { title: "5. การใช้งานหน่วยการผลิต", desc: "ดูภาพรวมในรูปแบบ Gantt Chart เพื่อบริหารทรัพยากร" },
                  { title: "6. บริหารสินค้าคงคลัง", desc: "ระบบที่ทำให้เห็นภาพรวมการบริหารสต็อกได้อย่างชัดเจน" },
                  { title: "7. ตรวจสอบสถานะงาน", desc: "Track สถานะได้ง่ายทันทีผ่านระบบสีของ Gantt Chart" },
                  { title: "8. ลดเวลาการคำนวณ", desc: "ประมวลผลความต้องการที่ซ้ำซ้อนให้รวดเร็วยิ่งขึ้น" },
                  { title: "9. ตอบสนองความเปลี่ยนแปลง", desc: "ปรับแผนงานตามสถานการณ์จริงได้อย่างมีประสิทธิภาพ" },
                  { title: "10. เชื่อมต่อโปรแกรม MRP", desc: "Customized เพื่อเชื่อมต่อกับระบบเดิมที่คุณใช้งานอยู่" },
                  { title: "11. ดูรายละเอียดของงาน", desc: "ตรวจสอบ Order - Instruction เพื่อลดความผิดพลาดในการกระจายงาน" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-violet-100 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-violet-600 group-hover:text-white">
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
                    "1. รองรับคลังหลากหลายประเภท ทั้งคลังสินค้าโรงงาน, คลังรับฝากสินค้า, ศูนย์กระจายสินค้า และห้องเย็นรับฝาก",
                    "2. รองรับการทำงานหลายคลังพร้อมกัน (Multi-warehouse)",
                    "3. ระบบคลังเสมือน (Virtual Warehouse) สามารถมองสินค้าที่เก็บในคลังเป็นรูป Graphic เข้าใจง่าย",
                    "4. บริหารสินค้า Lot Specific, FIFO, LIFO",
                    "5. รองรับกระบวนการส่งผ่านสินค้าหรือ Cross Docking",
                    "6. บริหารคลังสินค้าให้มีปริมาณที่เหมาะสม และลดต้นทุนการจัดเก็บ พร้อมทราบความเคลื่อนไหวต่างๆ ของวัตถุดิบและสินค้า",
                    "7. สามารถตรวจสอบต้นทุนสินค้าได้ทั้งแบบ FIFO, Average และ Lot Specific",
                    "8. เพิ่มความแม่นยํของข้อมูล และลดความผิดพลาดในการทำงานของพนักงาน",
                    "9. สามารถกำหนดสิทธิการใช้งานได้อย่างอิสระทุกเมนู",
                    "10. สามารถสร้างแบบฟอร์มการทำงานได้เอง โดยดึงข้อมูลจากโครงสร้างของระบบไปใช้งานได้ทันที",
                    "11. สามารถ Export ข้อมูลเป็นไฟล์ MS Word, MS Excel, PDF และ XML ได้",
                    "12. สามารถตรวจสอบการทำงานของแต่ละผู้ใช้งานได้ (Traceability)",
                    "13. รองรับ Multi Company, Multi Branch, Multi Factory",
                    "14. รองรับการทำงานได้ทั้งภาษาไทย และอังกฤษ",
                    "15. มีระบบบริหารสินค้าคงคลัง (เบิก-รับ-โอน-คืน) แบบครบวงจร",
                    "16. โปรแกรมทำ Lot Traceability ได้อย่างแม่นยำ",
                    "17. โปรแกรมทำให้ทราบต้นทุนสินค้าก่อนการผลิตได้",
                    "18. สามารถตรวจสอบยอดสต็อกสินค้าผ่านทางระบบ Internet ได้",
                    "19. สามารถตรวจสอบยอดค้างส่งสินค้าผ่านทางระบบ Internet ได้",
                    "20. สามารถจองสินค้าเพื่อขาย (Commitment) ได้",
                    "21. สามารถสรุปยอดสั่งซื้อรวมของแต่ละลูกค้าได้",
                    "22. สามารถพิมพ์สั่งซื้อ หรือใบส่งสินค้าผ่านทาง Internet ได้",
                    "23. สามารถกำหนดราคาค่าเช่าพื้นที่เป็นปริมาตรได้",
                    "24. เลือกติดตั้งระบบได้ทั้งแบบ Client/Server (Thick Client) หรือ Multi Tiers (Thin Client)"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-violet-50/50 transition-all group"
                    >
                      <div className="mt-1.5 p-1 rounded-full bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                        <Circle className="w-3 h-3" />
                      </div>
                      <span className="text-slate-600 text-[15px] leading-relaxed font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== Re-imagined Download Section ===== */}
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-violet-200/20 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-br from-violet-700 via-fuchsia-600 to-violet-500 px-10 py-14 text-white relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <FileDown className="w-40 h-40" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-4xl font-black mb-4">ดาวน์โหลดเอกสาร</h3>
                  <p className="text-violet-100 text-lg font-medium max-w-lg">รวบรวมข้อมูล คู่มือ และโบรชัวร์สำหรับ Q.Soft WMS เพื่อการจัดการคลังสินค้าที่เหนือกว่า</p>
                </div>
              </div>

              <div className="p-10">
                {/* Bundle Download */}
                <div className="mb-10">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/doc/Q_Soft_WMS.zip"
                    download
                    className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-violet-200 transition-all group"
                  >
                    <Package className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    ดาวน์โหลดทั้งหมด (ZIP)
                    <ArrowRight className="w-6 h-6 opacity-50" />
                  </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { name: "Q.Soft WMS Prof+ V1 (Thai)", file: "Q_Soft_WMS_Prof+Brochue(thai)V1.pdf", type: "Brochure V1" },
                    { name: "Q.Soft WMS Brochure (Thai)", file: "Q_Soft_WMS_Brochue(thai)591207.pdf", type: "Brochure" },
                  ].map((doc, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      href={`/doc/${doc.file}`}
                      download
                      className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-white rounded-2xl border border-transparent hover:border-violet-100 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-500 group-hover:bg-red-50 transition-colors">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-slate-800 font-bold text-[15px] leading-tight group-hover:text-violet-600 transition-colors">{doc.name}</p>
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">{doc.type}</p>
                        </div>
                      </div>
                      <div className="p-2 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-violet-500">
                        <Download className="w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </section>

            <RelatedProducts color="violet" />
          </div>
        </div>
      </div>
    </div>
  );
}