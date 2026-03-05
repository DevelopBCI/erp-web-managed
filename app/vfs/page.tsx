"use client";

import Image from "next/image";
import {
  Layers,
  ShieldCheck,
  Zap,
  Target,
  Home,
  Banknote,
  Users,
  PiggyBank,
  CreditCard,
  Building2,
  Circle
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageVFS() {
  return (
    <div className="font-kanit min-h-screen bg-fuchsia-50/10 pb-20">
      {/* ===== Hero Header / Breadcrumb alternative ===== */}
      <div className="bg-white border-b border-fuchsia-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-fuchsia-600/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-fuchsia-50 text-fuchsia-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Home className="w-3.5 h-3.5" /> VILLAGE FUND SYSTEM
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                Q.Soft <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-fuchsia-500">VFS</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium max-w-xl text-lg leading-relaxed"
              >
                Village Fund System - โซลูชั่นอัจฉริยะเพื่อการบริหารจัดการกองทุนหมู่บ้าน สถาบันการเงิน และสหกรณ์อย่างมืออาชีพ
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: -50, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="static md:absolute md:right-32 md:top-1 md:-translate-y-1 w-full md:w-auto flex justify-center md:block pointer-events-none"
              >
                <img
                  src="/design/vfs.png"
                  alt="VFS Illustration"
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
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-fuchsia-200/20 overflow-hidden border border-slate-100"
            >
              <div className="p-8 space-y-8">
                <div className="relative h-64 group">
                  <Image
                    src="/img/feature/qsoft_vfs_lg.png"
                    alt="Q.Soft VFS"
                    fill
                    className="object-contain p-8 relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-fuchsia-600" />
                      จุดมุ่งหมาย
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[15px]">
                      ซอฟต์แวร์ที่พัฒนาขึ้นมาเพื่อ <span className="text-fuchsia-600 font-bold">บริหารงานของกองทุนหมู่บ้าน สถาบันการเงิน และสหกรณ์โดยเฉพาะ</span>
                      เน้นการใช้งานง่าย ครอบคลุมระบบงานที่มีความหลากหลายตามภูมิภาคต่างๆ เพื่อความยั่งยืนของชุมชน
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-[2rem]">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-fuchsia-600">
                        <Building2 className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Community</p>
                        <p className="text-slate-800 font-extrabold text-lg">สถาบันการเงินชุมชน</p>
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
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-fuchsia-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Target className="w-64 h-64" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-fuchsia-50 rounded-2xl flex items-center justify-center text-fuchsia-600">
                  <Layers className="w-7 h-7" />
                </div>
                Feature การทำงานหลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {[
                  { title: "1. ระบบธนาคาร", desc: "โครงสร้างหลักสำหรับการบริหารจัดการธนาคารชุมชนที่ได้มาตรฐาน", icon: Building2 },
                  { title: "2. ระบบเงินฝาก", desc: "รองรับการรับฝากเงินหลากหลายประเภท พร้อมระบบคำนวณดอกเบี้ย", icon: PiggyBank },
                  { title: "3. ระบบเงินกู้", desc: "บริหารจัดการสัญญาเงินกู้ ตรวจสอบประวัติ และการชำระคืน", icon: Banknote },
                  { title: "4. ระบบเงินกู้ OD", desc: "รองรับวงเงินเบิกเกินบัญชีสำหรับสมาชิกที่ต้องการสภาพคล่อง", icon: CreditCard },
                  { title: "5. ระบบเงินหุ้น", desc: "จัดการการถือหุ้น การปันผล และการเพิ่มทุนของสมาชิก", icon: Users },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-fuchsia-100 hover:shadow-xl hover:shadow-fuchsia-500/5 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-fuchsia-600 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-fuchsia-600 group-hover:text-white">
                      <item.icon className="w-6 h-6" />
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
                    "1. กำหนดประเภทเงินฝากได้หลากหลายรูปแบบ",
                    "2. กำหนดอัตราดอกเบี้ยได้อิสระในแต่ละประเภทเงินฝาก",
                    "3. กำหนดระยะเวลาการจ่ายดอกเบี้ยได้ (เช่น จ่ายเป็นเงินสดอัตโนมัติ)",
                    "4. รองรับการฝากเงินสัจจะที่กำหนดให้ต้องฝากเงินทุกเดือน",
                    "5. มีระบบประมวลผลการจ่ายดอกเบี้ยและตัดเงินในบัญชีอัตโนมัติ",
                    "6. รองรับการฝากเงินเป็นกลุ่มชุมชน",
                    "7. สามารถปรับเปลี่ยนอัตราดอกเบี้ยล่วงหน้าตามประกาศได้",
                    "8. พิมพ์หน้าสมุดเงินฝากของกองทุนได้ทันที",
                    "9. พิมพ์รายการ Statement ลงสมุดเงินฝากได้รวดเร็ว",
                    "10. กำหนดประเภทและอัตราดอกเบี้ยเงินกู้ได้ตามความต้องการ",
                    "11. รองรับวิธีคิดดอกเบี้ยมาตรฐาน (แบบคงที่ และแบบลดต้นลดดอก)",
                    "12. รองรับวิธีคิดดอกเบี้ยสไตล์กองทุนหมู่บ้าน (เฉลี่ยงวด, กำหนดเงินต้นและดอกเบี้ยเอง)",
                    "13. ระบบคิดค่าปรับกรณีชำระล่าช้าให้อัตโนมัติ",
                    "14. รองรับการชำระเงินกู้แบบ รายวัน รายเดือน และรายปี",
                    "15. ระบบอนุมัติสัญญาเงินกู้โดยผู้มีอำนาจตามลำดับสิทธิ์",
                    "16. กำหนดวงเงินกู้ OD และคิดดอกเบี้ยตามยอดเบิกใช้จริง",
                    "17. พิมพ์สัญญาเงินกู้ สัญญาผู้ค้ำประกัน และเอกสารแนบหลักทรัพย์",
                    "18. จัดการเงินหุ้น (ซื้อ, ขาย, ถอน, ปันผล) พร้อมพิมพ์ใบเสร็จ",
                    "19. พิมพ์ Statement สมุดหุ้นกองทุนได้ชัดเจน",
                    "20. เชื่อมโยงการบันทึกบัญชีแยกประเภท (GL) ให้อัตโนมัติ",
                    "21. ออกรายงานสรุปการซื้อขายหุ้นประจำวันและรายละเอียดผู้ถือหุ้นครบถ้วน"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-fuchsia-50/50 transition-all group"
                    >
                      <div className="mt-1.5 p-1 rounded-full bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors duration-300">
                        <Circle className="w-3 h-3" />
                      </div>
                      <span className="text-slate-600 text-[15px] leading-relaxed font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <RelatedProducts color="fuchsia" />
          </div>
        </div>
      </div>
    </div>
  );
}