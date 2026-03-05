"use client";

import {
  Layers,
  Calculator
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageMyAccount() {
  const features = [
    {
      number: "1",
      title: "Enterprise Manager",
      description: "เป็นการกำหนดค่าเริ่มต้นต่างๆ (Master Files) สำหรับการเริ่มใช้งานโปรแกรม รวมถึงการกำหนดตั้งค่า Option ในแต่ละระบบของโปรแกรมเพื่อให้รองรับกับการ บันทึก Transaction และการวางระบบในการทำงานของโปรแกรม"
    },
    {
      number: "2",
      title: "Purchase Order",
      description: "เป็นการบันทึกซื้อสินค้าโดยเริ่มจากทำใบสั่งซื้อเพื่ออ้างอิงไปทำรายการซื้อสดหรือซื้อเชื่อ เพื่อเพิ่มสต๊อกสินค้าทันที รองรับการจ่ายเงินมัดจำและ Landed Cost"
    },
    {
      number: "3",
      title: "Accounts Payable",
      description: "เป็นการบันทึกจ่ายชำระหนี้ จากการซื้อหรือตั้งหนี้ สามารถบันทึกการรับวางบิลจากเจ้าหนี้เข้าในระบบ หรือทำเอกสารเช็คเพื่อรออนุมัติจ่าย พร้อมพิมพ์ฟอร์มใบสำคัญจ่าย"
    },
    {
      number: "4",
      title: "Sale Order",
      description: "เป็นการบันทึกขายสินค้า โดยเริ่มจากทำใบเสนอราคา เมื่อลูกค้ายืนยันคำสั่งซื้อ เพื่อการสั่งจองและจัดทำใบสั่งขาย รองรับการรับเงินมัดจำและ สั่งพิมพ์ใบกำกับภาษี"
    },
    {
      number: "5",
      title: "Accounts Receivable",
      description: "เป็นการบันทึกรับชำระหนี้และบริหารยอดลูกหนี้คงค้าง สามารถจัดทำใบวางบิลและใบเสร็จรับเงิน พร้อมออกใบเสร็จรับเงิน ฟอร์มใบสำคัญรับ"
    },
    {
      number: "6",
      title: "Cheque and Bank",
      description: "เป็นการบริหารจัดการเช็ครับ-จ่าย และเงินโอน มีรายงานรองรับทุกสถานะของเช็คแต่ละใบ การบันทึกฝาก-ถอนเงิน และการจัดทำ Bank Reconcile"
    },
    {
      number: "7",
      title: "Inventory Control",
      description: "เป็นการตรวจสอบความเคลื่อนไหวสินค้าได้แบบ Real Time เชื่อมโยงจากระบบต่างๆให้อัตโนมัติ รองรับการบันทึกสินค้ายกมา เบิก โอนย้ายคลัง และปรับปรุงสินค้า"
    },
    {
      number: "8",
      title: "Petty Cash",
      description: "เป็นการบริหารวงเงินสดย่อย เพื่อควบคุมการรับ-จ่ายเงินสดย่อย รองรับการกำหนดวงเงินตามแผนก พร้อมสั่งพิมพ์ฟอร์มใบสำคัญจ่าย"
    },
    {
      number: "9",
      title: "Advance System",
      description: "เป็นการควบคุมเงินทดรองจ่าย สามารถทำเอกสารเพื่อขออนุมัติเบิก รองรับการเบิกเงินตามรหัสงาน JOB และการเบิก-เคลียร์เงินทดรอง"
    },
    {
      number: "10",
      title: "Budget Control",
      description: "เป็นการกำหนดงบประมาณในการเปรียบเทียบผลต่างที่ตั้งไว้กับรายได้และค่าใช้จ่าย รองรับงบประมาณตามแผนก Job และหลายปีงบประมาณ"
    },
    {
      number: "11",
      title: "General Ledger",
      description: "เป็นการบันทึกบัญชีรายวันแยกประเภท และการ Post ลงบัญชีของระบบอื่นๆแบบ Real Time สามารถพิมพ์ Voucher งบทดลองหรือกระดาษทำการได้"
    },
    {
      number: "12",
      title: "Financial Management",
      description: "เป็นการสร้างและจัดทำรูปแบบงบการเงิน เช่น งบกำไรขาดทุน งบดุล งบต้นทุนขาย รองรับการ Export เป็น Excel และสามารถเรียกงบการเงินตามสาขา แผนก"
    },
    {
      number: "13",
      title: "Value Added Tax",
      description: "เพื่อการเรียกดูรายงานภาษีซื้อ-ขาย ของกิจการ สามารถเลือกรายงานตามงวดภาษี พิมพ์แบบภ.พ.30 และหนังสือรับรองการหักภาษี ณ ที่จ่าย"
    },
    {
      number: "14",
      title: "Audit and Internal Control",
      description: "เป็นการตรวจข้อมูลและการควบคุมภายใน เพื่อการควบคุมภายใน และช่วยควบคุมระบบการทำงานให้มีประสิทธิภาพ"
    },
    {
      number: "15",
      title: "Company Manager",
      description: "เพื่อการตรวจสอบข้อมูลที่บันทึกโดยจะเก็บประวัติการเพิ่ม ลบ แก้ไข เอกสาร รวมทั้งเป็นการกำหนดแบบฟอร์มของระบบต่างๆ"
    },
    {
      number: "16",
      title: "Purchase Analysis & Sale Analysis",
      description: "เป็นการแสดงรายงานวิเคราะห์เกี่ยวกับการซื้อ-ขายสินค้า การเปรียบเทียบยอดซื้อ-ขายสินค้า ทั้งที่เป็นแบบรายเดือนและรายปี"
    },
    {
      number: "17",
      title: "Fixed Assets",
      description: "เป็นการคำนวณค่าเสื่อมราคาทรัพย์สินด้วยวิธีเส้นตรง สามารถตรวจสอบการคิดค่าเสื่อมราคาได้ทันที และ Post กลับมายังโปรแกรม myAccount"
    },
    {
      number: "18",
      title: "Security Administrator",
      description: "เป็นการกำหนดสิทธิ์เข้าใช้ในต่ละระบบของผู้ใช้ได้รายบุคคล รองรับการกำหนดสิทธิ์ของพนักงานในแต่ละแผนก และเข้าถึงสาขา"
    },
    {
      number: "19",
      title: "To do list & Events",
      description: "เป็นระบบช่วยเตือน (Alert) งานประจำวัน และแสดงประวัติการบันทึกข้อมูล โปรแกรมจะแสดงข้อมูลให้อัตโนมัติตามการระบุช่วงเวลา"
    }
  ];

  return (
    <div className="font-kanit min-h-screen bg-orange-50/10 pb-20">
      {/* ===== Hero Header ===== */}
      <div className="bg-white border-b border-orange-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100/50 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-or-50 text-or-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <Calculator className="w-3.5 h-3.5" /> ACCOUNTING FOR SMEs
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                my<span className="bg-clip-text text-transparent bg-orange-600">Account</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium text-lg leading-relaxed"
              >
                โปรแกรมบัญชีสำหรับธุรกิจ SMEs ที่ครอบคลุมด้วยระบบการทำงานถึง 20 ระบบ
                เปี่ยมด้วยประสิทธิภาพ ลดขั้นตอนการทำงานที่ยุ่งยาก เชื่อมโยงข้อมูลแบบ Real Time
                รองรับมาตรฐานสรรพากรและหลักการบัญชี
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 500, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="static md:absolute md:right-32 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto flex justify-center md:block pointer-events-none"
              >
                <img
                  src="/img/feature/myAccount.png"
                  alt="MyAccount Illustration"
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
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-or-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Layers className="w-64 h-64" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-or-50 rounded-2xl flex items-center justify-center text-or-600">
                  <Layers className="w-7 h-7" />
                </div>
                Feature การทำงานหลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {features.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-or-100 hover:shadow-xl hover:shadow-or-500/5 transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-600 group-hover:text-white">
                      <span className="font-black text-lg">{item.number}</span>
                    </div>
                    <h4 className="font-black text-slate-800 mb-2 text-base">{item.title}</h4>
                    <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            <RelatedProducts color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
}
