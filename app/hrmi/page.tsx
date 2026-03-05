"use client";

import {
  Users,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageHRMI() {
  const objectives = [
    {
      title: "Cost Reduction",
      description: "การลดต้นทุนที่เกี่ยวข้องกับการดำเนินงาน ลดค่าใช้จ่ายด้านบุคลากรและสิ่งอำนวยความสะดวกอย่างมีประสิทธิภาพ"
    },
    {
      title: "New Technology",
      description: "การประยุกต์ใช้ประโยชน์จากเทคโนโลยีใหม่ๆ ให้ HR เป็นอิสระจากงานด้านธุรการ และยกระดับการทำงานของบุคลากร"
    },
    {
      title: "Talent Management",
      description: "การบริหารจัดการบุคลากรที่มีความสามารถพิเศษ จัดการบุคลากรยอดเยี่ยมให้ยังคงอยู่กับองค์กร"
    },
    {
      title: "HRD",
      description: "การพัฒนาเพิ่มขีดความสามารถของบุคลากร (Human Resource Development) พัฒนาทักษะและความรู้พนักงาน"
    },
    {
      title: "HPE",
      description: "การเพิ่มผลงานของบุคลากร (Human Performance Enhancement) ส่งเสริมผลิตภาพและประสิทธิภาพการทำงาน"
    }
  ];

  return (
    <div className="font-kanit min-h-screen bg-blue-50/10 pb-20">
      {/* ===== Hero Header ===== */}
      <div className="bg-white border-b border-blue-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/50 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Users className="w-3.5 h-3.5" /> HUMAN RESOURCE MANAGEMENT
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                HR<span className="bg-clip-text text-transparent bg-blue-600 ">MI</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium text-lg leading-relaxed"
              >
                โปรแกรมเงินเดือนสำหรับ HR เพื่อการบริหารงานบุคคลและ Payroll Software ที่มีประสิทธิภาพ
                ช่วยให้องค์กรประสบความสำเร็จด้วยการบริหารจัดการทรัพยากรมนุษย์ที่ทันสมัย
                "ทำอย่างไรให้ HR สามารถทำงานได้อย่างมีประสิทธิภาพ ภายใต้การลงทุนด้านซอฟแวร์ที่ต่ำกว่า"
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 500, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="static md:absolute md:right-32 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto flex justify-center md:block pointer-events-none"
              >
                <img
                  src="/img/feature/HRMI.png"
                  alt="HRMI Illustration"
                  className="h-50 w-auto object-contain drop-shadow-[-20px_20px_40px_rgba(5,150,105,0.1)]"
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
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-blue-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Briefcase className="w-64 h-64" />
              </div>
              

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Briefcase className="w-7 h-7" />
                </div>
                วัตถุประสงค์หลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {objectives.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-600 group-hover:text-white">
                      <span className="font-black text-lg">{idx + 1}</span>
                    </div>
                    <h4 className="font-black text-slate-800 mb-2 text-base">{item.title}</h4>
                    <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </motion.div>
                  
                ))}
              </div>

              <div className="mt-16 pt-12 border-t border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  Feature การทำงานหลัก
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Employee Information Management - จัดเก็บข้อมูลพนักงาน",
                    "Payroll Processing - ประมวลผลเงินเดือน ภาษี ประกันสังคม",
                    "Attendance & Leave Management - บันทึกเวลาและวันลา",
                    "Benefits Management - จัดการสวัสดิการพนักงาน",
                    "Performance Appraisal - ประเมินผลการทำงาน",
                    "Training & Development - ฝึกอบรมและพัฒนา",
                    "Recruitment Management - สรรหาว่าจ้าง",
                    "Compensation & Salary Planning - วางแผนค่าตอบแทน",
                    "Reports & Analytics - รายงานวิเคราะห์ข้อมูลบุคคล"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors" />
                      <span className="text-slate-600 font-medium">{feature}</span>
                    </div>
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
