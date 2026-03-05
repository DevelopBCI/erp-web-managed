"use client";


import {
  Package,
  Layers,
  Cpu,
  Wifi,
  Radio,
  BarChart3,
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageIIoT() {
  const objectives = [
    {
      title: "Employee Monitoring",
      description: "ติดตามสถานการณ์ทำงานของพนักงาน เก็บข้อมูลระดับการสวมใส่อุปกรณ์ และสถิติการทำงาน"
    },
    {
      title: "Real-time Alert",
      description: "ติดตามแจ้งเตือนสถานะงานผลิตแบบ Real Time เมื่อมีการเปลี่ยนแปลงสถานะงานหรือเกิดวิกฤต"
    },
    {
      title: "Quality Control",
      description: "ควบคุมคุณภาพการผลิต จัดการและติดตามผลการตรวจสอบคุณภาพในแต่ละขั้นตอน"
    },
    {
      title: "Cost Calculation",
      description: "คำนวณค่าจ่ายค่าแรงต่อคนตามผลการทำงานจริงของพนักงานได้อย่างแม่นยำ"
    },
    {
      title: "Predictive Warning",
      description: "ทราบความวิกฤตของงานล่วงหน้า มีระบบเตือนภัยสำหรับงานที่มีความเสี่ยง"
    },
    {
      title: "Machine Monitoring",
      description: "ตรวจวัดการทำงานของเครื่องจักร ติดตามและวินิจฉัยสถานะเพื่อการบำรุงรักษา"
    }
  ];

  const features = [
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "ประมวลผลและบันทึกข้อมูลลงในอุปกรณ์ตนเองก่อน ไม่กลัวปัญหาสัญญาณอ่อน"
    },
    {
      icon: Wifi,
      title: "Cloud Computing",
      description: "ส่งข้อมูลไปเก็บและประมวลผลที่ Platform บนระบบ Cloud เพื่อการเข้าถึงจากทุกที่"
    },
    {
      icon: Smartphone,
      title: "LINE Alert",
      description: "แจ้งเตือนเหตุการณ์สำคัญและความคืบหน้าไปยัง LINE Application ทันที"
    },
    {
      icon: Layers,
      title: "Gateway Storage",
      description: "Gateway มี HDD ขนาดใหญ่เก็บข้อมูลสำรอง มั่นใจข้อมูลไม่สูญหาย"
    },
    {
      icon: BarChart3,
      title: "Real Time Monitoring",
      description: "ติดตามงานผลิตและสถานะเครื่องจักรแบบ Real Time ตลอด 24 ชั่วโมง"
    },
    {
      icon: Radio,
      title: "Smart Connectivity",
      description: "เชื่อมต่อกับอุปกรณ์ Sensor และเครื่องจักรได้อย่างหลากหลาย (RS232, Modbus, etc.)"
    }
  ];

  return (
    <div className="font-kanit min-h-screen bg-gray-50/10 pb-20">
      {/* ===== Hero Header ===== */}
      <div className="bg-white border-b border-gray-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100/50 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 text-gray-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Cpu className="w-3.5 h-3.5" /> INDUSTRIAL INTERNET OF THINGS
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                II<span className="bg-clip-text text-transparent bg-gray-600 ">oT</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium text-lg leading-relaxed"
              >
                Platform และอุปกรณ์ Industrial IoT เพิ่มประสิทธิภาพการทำงานของโรงงานอุตสาหกรรม
                ระบบติดตามงาน การจ่ายค่าจ้าง และผลักดันการทำงานอย่างต่อเนื่องด้วยเทคโนโลยี Edge Computing และ Cloud Platform
              </motion.p>
               <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 580, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="static md:absolute md:right-32 md:top-0.5 w-full md:w-auto flex justify-center md:block pointer-events-none"
              >
                <img
                  src="img/feature/IoT box final.png"
                  alt="IIoT Illustration"
                  className="h-65 w-auto object-contain drop-shadow-[-20px_20px_40px_rgba(5,150,105,0.1)]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full">
          {/* ===== Right Content ===== */}
          <div className="space-y-12">

            {/* Feature Section */}
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Wifi className="w-64 h-64" />
              </div>
              {/* รูปภาพด้านบนหัวข้อ Feature การทำงานหลัก */}
              <div className="flex justify-center mb-6">
                <img
                  src="/img/iiot.jpg"
                  alt="IIot Feature"
                  className="h-80 w-auto object-contain drop-shadow-md"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600">
                  <Package className="w-7 h-7" />
                </div>
                วัตถุประสงค์หลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {objectives.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-gray-500/5 transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-600 mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-gray-600 group-hover:text-white">
                      <span className="font-black text-lg">{idx + 1}</span>
                    </div>
                    <h4 className="font-black text-slate-800 mb-2 text-base">{item.title}</h4>
                    <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 pt-12 border-t border-slate-100 relative z-10">
                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  คุณสมบัติเด่น (Features)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-gray-100 hover:shadow-lg hover:shadow-gray-500/5 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-gray-600 group-hover:text-white transition-colors flex-shrink-0">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">{feature.title}</h4>
                        <p className="text-slate-500 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>

            <RelatedProducts color="gray" />
          </div>
        </div>
      </div>
    </div>
  );
}
