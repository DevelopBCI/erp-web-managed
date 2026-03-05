"use client";

import {
  
  Layers,
  
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";
import RelatedProducts from "../components/RelatedProducts";

export default function PageWinSpeed() {
  const features = [
    {
      number: "1",
      title: "ระบบเจ้าหนี้ (Account Payable)",
      description: "ใช้ควบคุม และการตัดจ่ายชำระหนี้ ตั้งแต่ การรับวางบิล เตรียมเช็คจ่าย และใบหัก ณ ที่จ่าย ก่อนตัดการ์ดเจ้าหนี้ที่หน้าต่างจ่ายชำระหนี้ รวมไปถึง การควบคุมเช็คจ่ายไปยังระบบเช็ค (CQ) และการตั้งบัญชีให้อัตโนมัติ เพื่อ Post ข้อมูลไปบัญชีแยกประเภท ทั้งนี้ยังมีระบบเสริม Bank Net ที่รองรับ การทำ E-banking ผ่านธนาคาร ได้"
    },
    {
      number: "2",
      title: "ระบบลูกหนี้ (Account Receivable)",
      description: "ใช้ควบคุมและการตัดลูกหนี้ค้างชำระ ไม่ว่าจะเป็นการบันทึกวางบิล ออกใบเสร็จก่อนรับเงิน การตัดรับชำระหนี้ ที่รองรับทั้ง เช็ค เงินโอน บัตรเครดิต และเงินสด มีระบบติดตามหนี้ Back list รวมไปทั้งการดูรายงานค้างชำระการประมาณการรับเงิน ตัดรับเช็คที่ระบบ Checq And Bank และบันทึกบัญชีแยกประเภทให้อัตโนมัติ"
    },
    {
      number: "3",
      title: "ระบบเงินทดรอง (Advance System)",
      description: "ใช้ควบคุมการจ่ายเงินทดรอง ที่สามารถคุมยอดค้าง เคลียร์ตามพนักงานที่มาเบิก ระบบนี้จะรองรับตั้งแต่ ผู้ที่ต้องการใช้เงิน ทำขอเบิกเงินทดรอง ไปถึง บัญชีตัดเบิกเงินให้ และเมื่อพนักงานต้องการจะเคลียร์เงิน ก็จะมาทำการขอเคลียร์เงินทดรอง เพื่อให้บัญชีทำการตัดเคลียร์เงินทดรองและลงบัญชี ตามบิลที่ใช้จริง"
    },
    {
      number: "4",
      title: "ระบบงบประมาณ (Budget System)",
      description: "ใช้สำหรับจัดทำงบประมาณ ประจำเดือน หรือประจำปี ตามที่ผู้บริหารกำหนดเป้าไว้ ซึ่งสามารถกำหนดงบประมาณ แยกตามผังบัญชี,โครงการ, แผนก ได้ ทั้งนี้สามารถดึงข้อมูลงบประมาณเพื่อออกงบการเงินได้"
    },
    {
      number: "5",
      title: "ระบบแคมเปญ (Campaign Module)",
      description: "ใช้สำหรับกำหนดราคาขาย (Price List) , โปรโมชั่น (Promotion) , กำหนดราคาตามระยะเวลาเครดิต สามารถกำหนดแยกตามรายตัวหรือกลุ่มสินค้า หรือ ลูกค้า"
    },
    {
      number: "6",
      title: "ระบบเช็ค (Cheque & Bank)",
      description: "ใช้สำหรับจัดทำ Bank Reconcile ให้ได้ยอดตรงตาม Statement การบันทึกเช็ครับ, เช็คจ่าย, เช็คคืน, เปลี่ยนเช็ค, ฝากเงิน, ถอนเงิน, โอนเงินระหว่างสมุดเงินฝาก, บันทึกรายได้และค่าธรรมเนียมธนาคาร"
    },
    {
      number: "7",
      title: "ระบบจัดการ (Multi-User & Security)",
      description: "ใช้สำหรับตรวจสอบการทำงานของผู้ใช้งานทั้งหมด (User) เช่นสถานะ เพิ่ม แก้ไข ลบข้อมูล สามารถตั้งเตือนไว้ล่วงหน้า (Alert) สามารถกำหนดสิทธิ์ผู้ใช้งานแบบรายบุคคล หรือแบบกลุ่ม (Security)"
    },
    {
      number: "8",
      title: "ระบบบริหารจัดการงานขาย (CRM)",
      description: "ใช้สำหรับเก็บประวัติการติดต่อ การนัดพบ การบันทึกแผนงานต่างๆ บันทึกงาานประจำวันของพนักงาน เก็บประวัติการบริการหลังการขาย (ลูกค้าสัมพันธ์)"
    },
    {
      number: "9",
      title: "ระบบงบการเงิน (Financial Statement)",
      description: "ใช้สำหรับจัดทำงบการเงิน เช่น งบกำไรขาดทุน งบดุล งบต้นทุนขาย งบต้นทุนผลิต หมายเหตุประกอบงบการเงิน ฯลฯ สามารถออกแบบ และจัดทำงบการเงิน ได้หลากหลายรูปแบบ"
    },
    {
      number: "10",
      title: "ระบบบัญชีแยกประเภท (General Ledger)",
      description: "ใช้สำหรับบันทึกรายการรายวัน การปรับปรุงบัญชี ซึ่งจะบันทึกรายการที่นอกเหนือจากรายการค้าที่ไม่ต้องการคุมการ์ดลูกหนี้เจ้าหนี้ บันทึกข้อมูลเช็ครับ เช็คจ่าย ภาษีซื้อ ภาษีขาย ภงด. 3, 53 สามารถประมวลผลสิ้นปีเพื่อปิดรายได้ค่าใช้จ่ายเข้ากำไรสะสม และตั้งยอดยกมาในรอบบัญชีถัดไป"
    },
    {
      number: "11",
      title: "ระบบสินค้าคงเหลือ (Inventory Control)",
      description: "ใช้สำหรับบริหารสินค้าคงคลัง ต้นทุนสินค้า คำนวณต้นทุนได้ 2 แบบ Periodic และ Perpetual เช่น บันทึกรับสินค้า บันทึกเบิกสินค้า บันทึกโอนย้ายระหว่างคลัง บันทึกตรวจนับ และ ปรับปรุงสินค้า"
    },
    {
      number: "12",
      title: "ระบบ Letter of Credit",
      description: "ใช้ในกรณีที่มีบันทึกขายสินค้าระหว่างประเทศ บริษัทที่เป็นผู้ขายในประเทศ มีการตกลงกับผู้ซื้อที่อยู่ต่างประเทศเพื่อชำระค่าสินค้า โดยให้ธนาคารทำหน้าที่เป็นตัวกลางในการรับ-จ่ายเงิน รองรับอัตราแลกเปลี่ยนทุกประเภท การบันทึก L/C และการนำ Packing Credit ที่มีการโอนเงินเรียบร้อยแล้วมาตัดในการรับชำระหนี้จากลูกค้าได้"
    },
    {
      number: "13",
      title: "ระบบจัดส่งเอกสาร (Messenger)",
      description: "ใช้ในการจัดเตรียมส่งเอกสาร บันทึกข้อมูลการเดินทาง และเอกสาที่ Messenger ใช้ในการรับส่ง เพื่อใช้ควบคุมการจ่ายงาน ค่าใช้จ่ายอื่นๆ เช่น ค่าน้ำมัน ค่าทางด่วน ค่าที่จอดรถ สามารถบันทึกปรับปรุงวันลา หรือวันหยุดของพนักงานที่ไม่สามารถรับงานได้"
    },
    {
      number: "14",
      title: "ระบบเงินสดย่อย (Petty Cash)",
      description: "ควบคุมการตั้งวงเงินสดย่อย ตามแผนก หรือ โครงการ การทำรับชดเชยเงินสดย่อย และจ่ายเงินสดย่อย ทั้งนี้สามารถดูรายงานการเคลื่อนไหวเงินสดย่อย เงินสดย่อยคงเหลือ"
    },
    {
      number: "15",
      title: "ระบบงานจัดซื้อ (Purchase Order)",
      description: "รองรับตั้งแต่การเปิดใบขอซื้อ สอบราคา เปรียบเทียบราคา สั่งซื้อ จ่ายมัดจำ ซื้อชื่อ ซื้อสด ลดหนี้/เพิ่มหนี้ และการปันส่วนต้นทุน เพิ่มลด เช่นค่าใช้จ่ายในการนำเข้า รองรับกระบวนการซื้อทั่วไปและซื้อต่างประเทศ มีรายงานรองรับการคุมสินค้าค้างรับ รายงานวิเคราะห์ยอดซื้อ"
    },
    {
      number: "16",
      title: "ระบบงานขาย (Sale Order)",
      description: "รองรับตั้งแต่การเปิดเสนอราคา สั่งจอง สั่งขาย รับเงินมัดจำ ขายเชื่อ ขายสด ลดหนี้/เพิ่มหนี้ สามารถดูรายงานวิเคราะห์ยอดขายสุทธิ รายงานเปรียบเทียบยอดขาย รายงานวิเคราะห์ยอดค้างส่ง รายงานเปรียบเทียบเป้าการขาย รายงานยอดขายรายวัน รายเดือน รายปี"
    },
    {
      number: "17",
      title: "ระบบภาษี (Value Added Tax)",
      description: "สามารถดูรายงานภาษีซื้อ, ภาษีขาย โดยเลือกรายงานตามงวดเพื่อใช้เป็นเอกสารประกอบการจัดทำภาษีมูลค่าเพิ่ม(ภ.พ.30) ให้แก่กรมสรรพากร และยังสามารถพิมพ์แบบฟอร์ม ภ.ง.ด 1,ภ.ง.ด 3 , ภ.ง.ด 53 ใบปะหน้าและใบแนบ และหนังสือรับรองภาษีหัก ณ ที่จ่าย"
    },
    {
      number: "18",
      title: "ระบบสินค้าคงคลัง (Warehouse)",
      description: "รองรับการทำรับสินค้าจากการสั่งซื้อและรับอื่น จ่ายสินค้าเพื่อเตรียมจัดส่งให้ลูกค้าและการจ่ายภายในอื่นๆ การโอนย้ายคลัง การตรวจนับสินค้าและปรับปรุงสินค้า สามารถดูรายงานสินค้าคงเหลือ รายการเคลื่อนไหวสินค้า (Stock Card)"
    }
  ];

  return (
    <div className="font-kanit min-h-screen bg-cyan-50/10 pb-20">
      {/* ===== Hero Header ===== */}
      <div className="bg-white border-b border-cyan-50 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-100/50 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 text-cyan-600 rounded-full text-[11px] font-black tracking-widest mb-6 uppercase"
              >
                <BarChart3 className="w-3.5 h-3.5" /> ENTERPRISE RESOURCE PLANNING
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
              >
                WIN<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-indigo-600">Speed</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium text-lg leading-relaxed"
              >
                โปรแกรมบัญชีสำหรับนักบริหารมืออาชีพ รองรับการทำงานอย่างเป็นระบบแบบครบวงจร ตั้งแต่การเปรียบเทียบราคา การวางแผนการสั่งซื้อ พยากรณ์ยอดขาย บริหารคลังสินค้า Real Time จนถึงการลงบัญชีและออกงบการเงิน
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 500, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="static md:absolute md:right-32 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto flex justify-center md:block pointer-events-none"
              >
                <img
                  src="/img/feature/win-speed.png"
                  alt="winspeed Illustration"
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
            <section className="bg-white rounded-[3rem] shadow-2xl shadow-cyan-200/20 p-8 md:p-14 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
                <Layers className="w-64 h-64" />
              </div>

              {/* รูปภาพด้านบนหัวข้อ Feature การทำงานหลัก */}
              <div className="flex justify-center mb-6">
                <img
                  src="/img/Flow_overview.png"
                  alt="WINSpeed Feature"
                  className="h-150 w-auto object-contain drop-shadow-md"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600">
                  <Layers className="w-7 h-7" />
                </div>
                Feature การทำงานหลัก
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {features.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-cyan-600 group-hover:text-white">
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

            <RelatedProducts color="cyan" />
          </div>
        </div>
      </div>
    </div>
  );
}
