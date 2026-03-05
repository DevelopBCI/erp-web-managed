"use client";

import { useState } from "react";
import { HelpCircle, User, Tag } from "lucide-react";
import FadeInSection from "@/app/components/FadeInSection";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  author: string;
  date: string;
  tags: string[];
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "เราไม่ได้มีลูกค้าเพียง 2 - 3 ราย แต่เรามีลูกค้าหลายร้อยราย ซึ่งมีความต้องการสินค้าของเรา โดยใช้ระบบ และวิธีการสั่งซื้อที่แตกต่างกัน เช่นลูกค้าบางรายมีการประมาณการยอดสั่งซื้อให้ก่อนล่วงหน้าเป็นเดือน แล้วจึงยืนยันยอดอีกครั้งหนึ่งล่วงหน้าประมาณ 1 สัปดาห์ ในขณะที่ลูกค้าบางรายไม่มีการประมาณยอดสั่งซื้อมาให้ถึงเวลาต้องการสินค้าก็สั่งซื้อเลยโดยมีระยะเวลาคอยให้เราน้อยเหลือเกิน",
    answer: "โปรแกรม Q.Soft มีเมนูสำหรับบันทึกประมาณการสั่งซื้อล่วงหน้าที่ลูกค้าส่งมาให้เพื่อวางแผนการผลิตได้ ต่อเมื่อได้ Confirmation Order แล้วจึงทำการตัดยอดออกจากสต็อกเพื่อส่งได้ทันที แต่หากสินค้าในสต็อกไม่พอส่งทั้งหมดก็วางแผนผลิตเพิ่มได้ เพราะเมื่อเราได้ Confirmation Order เราสามารถทำการจองสินค้าสำเร็จรูปเพื่อนำไปจัดส่งให้กับลูกค้าได้ทันที ทำให้ในโปรแกรมแยกยอดสินค้าที่ถูกจองเพราะยอดขายแล้วกับจำนวนสินค้าคงเหลือในสต็อกให้เป็นคนละตัวเลขกันเพื่อง่ายต่อการตรวจสอบ และนำจำนวนสินค้าที่ไม่พอไปวางแผนการผลิตต่อไปได้ คราวนี้ถ้าดันมีลูกค้าแทรกคำสั่งซื้อด่วนเข้ามาโดยที่สินค้าในสต็อกไม่พอส่งอยู่แล้วโปรแกรมก็จะให้เราเกลี่ยสินค้าในสต็อกเพื่อกระจายสินค้าให้กับลูกค้าตามที่เราอาจต่อรองกับลูกค้าด้วยการทยอยส่ง",
    author: "Admin",
    date: "24.06.2014 - 2:40 pm",
    tags: ["General"]
  },
  {
    id: 2,
    question: "ลูกค้าใช้ระบบ Kanban ในการจัดซื้อเมื่อต้องการสินค้าจะส่ง Kanban สั่งซื้อมาให้โดยมีระยะเวลาคอยนับจากที่ได้รับคำสั่งซื้อนี้ไม่กี่ชั่วโมงบางครั้งแค่ 1 - 2 ชั่วโมง โดยที่ยอดสั่งก็ไม่ตรงกับยอดประมาณการที่ได้รับก่อนหน้านี้ โปรแกรมจะพอช่วยอย่างไรได้บ้าง",
    answer: "ถ้ายอดยืนยันจำนวนสั่งซื้อไม่เกินยอดประมาณการที่เราผลิตรอไว้ก็ดีไป ก็จัดส่งตามนั้นได้เลย แต่ถ้ายอดสินค้าสำหรับจัดส่งให้ลูกค้าเจ้านี้ไม่เพียงพอโปรแกรมสามารถช่วยบริหารงานได้ดังนี้\n\n1.ถ้าสินค้านั้นๆ เป็นสินค้าที่ส่งขายลูกค้ารายอื่นด้วย อาจไปยกเลิกการจองสินค้าที่ของไว้สำหรับลูกค้ารายอื่นก่อนเพื่อนำมาส่งให้กับเจ้าด่วนนี้\n2.ถ้าสินค้ายังไม่พออีกจะสามารถแจ้งไปยังลูกค้าได้ทันทีว่าในอีก 2 ชั่วโมงลูกค้าจะได้รับสินค้าจำนวนเท่าไร และจำนวนที่เหลือจะได้รับเมื่อไร โดยเราจะผลักงานที่ไม่ด่วนออกไปก่อนแล้วนำงานด่วนนี้มาวางแผนว่าจะผลิตจำนวนที่เหลือของสินค้านี้ได้เสร็จเร็วที่สุดเมื่อไร โดยที่โปรแกรมจะประมวลผลกระทบต่องานอื่นๆ และแสดงให้ดูทั้งในรูปของ Gantt Chart และ Message เพื่อให้ผู้บริหารตัดสินใจ",
    author: "Admin",
    date: "11.06.2014 - 3:30 pm",
    tags: ["General"]
  },
  {
    id: 3,
    question: "ที่บริษัทฯนอกจากผลิตชิ้นงานจาก Coil และ Ingot แล้ว ยังมีการนำชิ้นงานมาประกอบกันด้วย (Assembly) โดยที่มีชิ้นงานที่เป็น common part ดังนั้นแม้ว่าเราจะวางแผนการผลิตแบบ Made to Order แต่ว่าเราต้องเตรียมชิ้นงาน Common Part ไว้ก่อนด้วยโปรแกรมสามารถแยกการวางแผน common part ออกมา แล้วเมื่อวางแผนเมื่อได้รับคำสั่งซื้อก็มาวางแผนในส่วนของชั้นสูตรการผลิตที่อยู่ในลำดับต่อเนื่องจาก Common Part โดยไม่ไปวางแผนในส่วนของ Common Part ได้หรือไม่ (เพราะวางแผนผลิตไว้ก่อนแล้ว)",
    answer: "ได้ครับ โปรแกรมสามารถแยกแยะการคำนวณกรณีนี้ได้โดยอัตโนมัติ (แต่เราต้อง config โปรแกรมให้ถูกต้องก่อน) เพราะกรณี Common Part เป็น Made to Stock ซึ่งวางแผนไว้ล่วงหน้าก่อน พอได้รับคำสั่งซื้อสินค้าก็ให้โปรแกรมวางแผนการผลิตชิ้นงานนั้นโดยไม่ต่อเนื่องไปวางแผนการผลิต Common Part ได้ครับโดย Config นี้อยู่หน้า 2 ของเมนูสูตรการผลิตส่วนวัตถุดิบที่ใช้ผลิตในช่อง Proc. ครับ",
    author: "Admin",
    date: "12.06.2014 - 7:60 pm",
    tags: ["General"]
  },
  {
    id: 4,
    question: "บริษัทฯ นำเข้าวัตถุดิบจากต่างประเทศ โปรแกรมสามารถคำนวณระยะเวลาที่ควรสั่งซื้อวัตถุดิบเข้ามาเพื่อให้เกิดการประหยัดที่สุดได้หรือไม่ อย่างไร ?",
    answer: "เนื่องจากสินค้าต้องเดินทางมาจากต่างประเทศซึ่งใช้ระยะเวลาหลายวัน หรืออาจหลายเดือน ดังนั้นให้นำเอาระยะเวลาตรงนี้บวกกับระยะเคลียสินค้าที่ท่าเรือเป็น Purchase Lead Time โปรแกรมก็จะคำนวณระยะเวลาที่ควรสั่งซื้อแล้วสินค้ามาส่งทันการผลิตได้ครับโดยโปรแกรมเป็นลักษณะแนะนำนะครับควรสั่งซื้ออย่างช้าวันที่เท่าไร ซึ่งเราสามารถเปลี่ยนวันที่ต้องการสินค้าในใบสั่งซื้อได้ ประกอบกับการนำเข้าสินค้านั้นคงต้องสั่งทีจำนวนมากไม่ได้สั่งแค่พอดีกับการใช้จากการคำนวณความต้องการการใช้วัสดุที่เกิดขึ้นเท่านั้นแต่คงสั่งโดยอาศัยหลัก EOQ, MOQ ด้วยทั้งนี้ในการควบคุมปริมาณสินค้าคงคลังนั้นโปรแกรมสามารถตั้ง Alert ให้โปรแกรมเตือนเมื่อจำนวนสินค้าคงคลังของสินค้านั้นๆ ถึงจุด ROP ได้ ซึ่งก็จะเป็นอีกทางนึงในการช่วยบริหารปริมาณสินค้าคงคลัง",
    author: "Admin",
    date: "22.06.2014 - 2:43 pm",
    tags: ["General", "Q.Soft MRP", "Q.Soft APS"]
  },
  {
    id: 5,
    question: "เมื่อไรควรรจะเปลี่ยนสถานะจากวางแผน เป็นสั่งผลิต ?",
    answer: "คำถามสั้น แต่คำตอบยาวนะครับ ต้องแบ่งเป็นกรณีๆ ไปครับให้พิจารณาว่าโรงงานของเราเข้าข่ายกรณีไหนนะครับ\n\n- กรณีโรงงานเป็น Sub Contact มีไม่กี่ขั้นตอนการผลิต(มักเจอกับโรงงานขนาดเล็ก) ซึ่งคำสั่งซื้อมักมีผลต่อคำสั่งผลิตทุกวัน(พูดง่ายๆคือ วางแผนเช้า เปลี่ยนแผนเย็น วางแผนเย็น พรุ่งนี้เช้าเปลี่ยน) ประเด็นมาจากเราเป็นผู้ผลิตรายเล็ก ยอดคำสั่งซื้อน้อย ไม่มีผลิตภัณฑ์หรือแบรนด์เป็นของตนเอง แบบนี้ไม่ต้องคิดวางแผนล่วงหน้าไว้ก่อนแต่อาจเป็นเพียงเพื่อประมาณความต้องการการใช้วัสดุล่วงหน้า ส่วนคำสั่งผลิตถ้าเป็นของกะเช้าพรุ่งนี้ก็ยืนยันกันตอนเย็นเตรียมไว้ให้พนักงานที่เข้างานตอนเช้า ซึ่งอย่างน้อยผมอยากให้ควบคุมคำสั่งผลิตให้ได้อย่าเปลี่ยนอีกเลย\n\n- กรณีโรงงานนำเข้าสินค้า หรือจ้างโรงงานอื่นผลิตชิ้นส่วน ตัวเองทำหน้าที่แค่ประกอบ และแพ็คสินค้า (3-4 ขั้นตอนผลิต) โรงงานแบบนี้เวลาได้คำสั่งซื้อมาแล้วก็ผลิตเลยแบบนี้ขั้นวางแผน และขั้นสั่งผลิตเกิดขึ้นพร้อมกันให้ใช้เวอร์ชั่น FLB (Few Level BOM) เพราะลักษณะงานประเภทนี้คือได้งานมาปุ๊ปรีบทำเลยไม่ต้อง 2 Steps (มักพบว่าเป็นโรงงานขนาดเล็กเหมือนกันครับ)",
    author: "Admin",
    date: "12.06.2014 - 1:23 pm",
    tags: ["General", "Q.Soft MRP", "Q.Soft APS"]
  }
];

export default function FaqsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(faqData.flatMap(faq => faq.tags)));

  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || faq.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-kanit">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="text-left mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-[var(--brand-blue)]/10 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-[var(--brand-blue)]" />
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Frequently Asked <span className="text-[var(--brand-blue)]">Questions</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-2xl font-light leading-relaxed">
              คำถามที่ถูกถามบ่อยๆ เกี่ยวกับระบบ Q.Soft และการบริหารจัดการโรงงาน พร้อมคำแนะนำเชิงลึกจากผู้เชี่ยวชาญ
            </p>
            <div className="w-24 h-1.5 bg-[var(--brand-blue)] mt-8 rounded-full"></div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden mb-12 p-8 md:p-12 border border-slate-100 flex justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16"></div>
            <div className="relative w-full max-w-5xl">
              <img
                src="/img/Service.drawio.png"
                alt="Service Diagram"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse"></div>
                Service Process Diagram
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Search and Filter */}
        <FadeInSection delay={0.3}>
          <div className="mb-12 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาคำถามหรือหัวข้อที่สนใจ..."
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-500 rounded-2xl shadow-sm focus:ring-2 focus:ring-[var(--brand-blue)]/20 focus:border-[var(--brand-blue)] transition-all outline-none placeholder:text-slate-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${!selectedTag ? 'bg-[var(--brand-blue)] text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-[var(--brand-blue)]'}`}
              >
                ทั้งหมด
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedTag === tag ? 'bg-[var(--brand-blue)] text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-[var(--brand-blue)]'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </FadeInSection>

        <div className="space-y-16 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-slate-200 before:hidden md:before:block">
          {filteredFaqs.map((faq, index) => (
            <div key={faq.id} className="space-y-6">
              {/* Question - Customer side (Left) */}
              <FadeInSection delay={0.1} direction="right">
                <div className="flex justify-start">
                  <div className="max-w-[85%] md:max-w-[70%] flex gap-4">
                    <div className="flex-shrink-0 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm">
                        <User className="w-5 h-5 text-slate-500" />
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200 p-5 rounded-2xl rounded-bl-none shadow-sm relative group transition-all hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Question</span>
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <span className="text-[10px] text-slate-400 font-medium">{faq.date}</span>
                      </div>
                      <h3 className="text-slate-800 text-lg font-semibold leading-relaxed">
                        {faq.question}
                      </h3>
                      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                        {faq.tags.map((tag) => (
                          <div
                            key={tag}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50/50 text-[var(--brand-blue)] text-[9px] font-bold uppercase tracking-wider rounded-md border border-blue-100/50 transition-colors hover:bg-blue-100"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="absolute  -left-2 w-4 h-4 bg-white border-l border-b border-slate-200 rotate-45 -translate-y-1/2 hidden md:block" />
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Answer - Specialist side (Right) */}
              <FadeInSection delay={0.3} direction="left">
                <div className="flex justify-end">
                  <div className="max-w-[95%] md:max-w-[80%] flex flex-row-reverse gap-4">
                    <div className="flex-shrink-0 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-[var(--brand-blue)] flex items-center justify-center border-2 border-white shadow-lg shadow-blue-200">
                        <HelpCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-white to-slate-50 border border-blue-100 p-6 rounded-2xl rounded-br-none shadow-xl shadow-blue-900/5 relative transition-all hover:shadow-2xl hover:translate-y-[-2px]">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold text-[var(--brand-blue)] uppercase tracking-widest leading-none">Specialist Answer</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]/20"></div>
                        <span className="text-[10px] text-slate-400 font-semibold">{faq.author}</span>
                      </div>
                      <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line text-[15px] font-normal">
                          {faq.answer}
                        </p>
                      </div>

                      
                      <div className="absolute  -right-2 w-4 h-4 bg-white border-r border-t border-blue-50 rotate-45 -translate-y-1/2 hidden md:block" />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          ))}
        </div>

        <FadeInSection delay={0.8}>
          <div className="mt-16 text-center bg-[var(--brand-blue)] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group">
            {/* Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>

            <h2 className="text-2xl font-bold mb-4 relative z-10">ยังมีคำถามอื่นอยู่ใช่ไหม?</h2>
            <p className="text-blue-50 mb-8 relative z-10 opacity-90">ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและตอบทุกข้อสงสัยของคุณ</p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--brand-blue)] font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl relative z-10 shadow-lg"
            >
              ติดต่อฝ่ายบริการลูกค้า
            </a>
          </div>
        </FadeInSection>
      </div>

      <style jsx global>{`
        body {
          background-color: #f8fafc;
        }
      `}</style>
    </div>
  );
}