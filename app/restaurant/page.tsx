"use client";

import Image from "next/image";
import {
  FileDown,
  FileText,
  Package,
  Download,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Target,
  Utensils,
  ChefHat,
  Users,
  MapPin,
  Percent,
  Ticket,
  BarChart3,
  Smartphone,
  Pizza,
  Circle
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function RestaurantPage() {
  return (
    <div className="font-kanit min-h-screen bg-rose-50/10 pb-20">
      {/* ===== Hero Header / Breadcrumb alternative ===== */}
      <div className="bg-white border-b border-rose-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-600/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Utensils className="w-3.5 h-3.5" /> SMART RESTAURANT POS
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                Q.Soft <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-red-500">Restaurant</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium max-w-xl text-lg leading-relaxed"
              >
                ระบบบริหารจัดการร้านอาหารอัจฉริยะที่ช่วยให้การจัดการโต๊ะ เมนู และพนักงานเป็นเรื่องง่าย เพื่อประสบการณ์ที่ดีที่สุดของลูกค้าคุณ
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: -50, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="static md:absolute md:right-32 md:top-1 md:-translate-y-1 w-full md:w-auto flex justify-center md:block pointer-events-none"
              >
                <img
                  src="/design/restaurant.png"
                  alt="Restaurant Illustration"
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
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-rose-200/20 overflow-hidden border border-slate-100"
            >
              <div className="p-8 space-y-8">
                <div className="relative h-64 group">
                  <Image
                    src="/img/feature/qsoft_restaurant_lg.png"
                    alt="Q.Soft POS for Restaurant"
                    fill
                    className="object-contain p-8 relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-rose-600" />
                      จุดมุ่งหมาย
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[15px]">
                      ระบบโปรแกรมขายหน้าร้านอาหารที่พัฒนาขึ้นสำหรับ <span className="text-rose-600 font-bold">ธุรกิจร้านอาหารโดยเฉพาะ</span>
                      ด้วยเทคโนโลยี ASP.NET ที่ทันสมัย มั่นคง และเสถียรภาพสูง ช่วยให้การบริหารร้านเป็นไปได้อย่างมืออาชีพ
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-[2rem]">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-rose-600">
                        <ChefHat className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Efficiency</p>
                        <p className="text-slate-800 font-extrabold text-lg">บริหารร้านได้ 100%</p>
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
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-rose-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Target className="w-64 h-64" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600">
                  <Layers className="w-7 h-7" />
                </div>
                Feature การทำงานหลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {[
                  { title: "1. จัดการเมนูอาหารและเครื่องดื่ม", desc: "บริหารจัดการรายการอาหาร หมวดหมู่ และสูตรอาหารได้อย่างเป็นระบบ", icon: Utensils },
                  { title: "2. กำหนดราคาตามโซน", desc: "รองรับการกำหนดราคาที่แตกต่างกันตามโซนการให้บริการของร้าน", icon: MapPin },
                  { title: "3. ระบบพนักงานและกะการทำงาน", desc: "จัดการข้อมูลพนักงาน แบ่งตำแหน่ง และสิทธิ์การเข้าถึงข้อมูล", icon: Users },
                  { title: "4. บริหารพื้นที่และโซน", desc: "สร้างโซนการให้บริการ และกำหนดค่าบริการต่างๆ ตามความเหมาะสม", icon: Pizza },
                  { title: "5. ระบบค่าคอมมิชชั่น", desc: "คำนวณค่าคอมมิชชั่นให้กับพนักงานได้อย่างถูกต้องและแม่นยำ", icon: Percent },
                  { title: "6. ระบบสมาชิกและโปรโมชั่น", desc: "บริหารจัดการบัตรสมาชิก คูปองส่วนลด และแคมเปญการตลาด", icon: Ticket },
                  { title: "7. รายงานวิเคราะห์ยอดขาย", desc: "สรุปยอดขายรายวัน รายเดือน และรายงานเชิงลึกเพื่อการตัดสินใจ", icon: BarChart3 },
                  { title: "8. รองรับทุกอุปกรณ์", desc: "ใช้งานได้ลื่นไหลทั้ง Desktop, Tablet และ Mobile (Responsive Design)", icon: Smartphone },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-rose-100 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-rose-600 group-hover:text-white">
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
                    "1. ช่วยลดความผิดพลาดในการรับออเดอร์และคำนวณบิล",
                    "2. ทราบยอดขายและสถานะกำไรขาดทุนได้แบบ Real-time",
                    "3. บริหารจัดการสต็อกวัตถุดิบและลดการสูญเสียได้อย่างมีประสิทธิภาพ",
                    "4. เพิ่มความเร็วในการให้บริการลูกค้า ทำให้มีโอกาสรับรอบลูกค้าได้มากขึ้น",
                    "5. สร้างความพึงพอใจให้ลูกค้าด้วยระบบสมาชิกและโปรโมชั่นที่ตอบโจทย์",
                    "6. ตรวจสอบการทำงานของพนักงานและป้องกันการทุจริตได้อย่างเป็นระบบ",
                    "7. ใช้งานง่าย พนักงานใช้เวลาเรียนรู้ไม่นาน ก็สามารถปฏิบัติงานได้ทันที",
                    "8. รองรับการขยายสาขาในอนาคตด้วยระบบฐานข้อมูลที่มั่นคง"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-rose-50/50 transition-all group"
                    >
                      <div className="mt-1.5 p-1 rounded-full bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                        <Circle className="w-3 h-3" />
                      </div>
                      <span className="text-slate-600 text-[15px] leading-relaxed font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== Re-imagined Download Section ===== */}
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-rose-200/20 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-br from-rose-700 via-red-600 to-rose-500 px-10 py-14 text-white relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <FileDown className="w-40 h-40" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-4xl font-black mb-4">ดาวน์โหลดเอกสาร</h3>
                  <p className="text-rose-100 text-lg font-medium max-w-lg">คู่มือแนะนำการใช้งานและโบรชัวร์ฉบับสมบูรณ์สำหรับ Q.Soft Restaurant</p>
                </div>
              </div>

              <div className="p-10">
                <div className="mb-10">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/doc/Q_SoftPOS-Restaurant.zip"
                    download
                    className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-violet-200 transition-all group"
                  >
                    <Package className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    ดาวน์โหลดทั้งหมด (ZIP)
                    <ArrowRight className="w-6 h-6 opacity-50" />
                  </motion.a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { name: "Restaurant Brochure (Thai)", file: "Q_SoftPOS-Restaurant(thai).pdf", type: "Brochure" },
                  ].map((doc, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      href={`/doc/${doc.file}`}
                      download
                      className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-white rounded-2xl border border-transparent hover:border-rose-100 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-500 group-hover:bg-red-50 transition-colors">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-slate-800 font-bold text-[15px] leading-tight group-hover:text-rose-600 transition-colors">{doc.name}</p>
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">{doc.type}</p>
                        </div>
                      </div>
                      <div className="p-2 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-rose-500">
                        <Download className="w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </section>

           <RelatedProducts color="rose"/>
          </div>
        </div>
      </div>
    </div>
  );
}