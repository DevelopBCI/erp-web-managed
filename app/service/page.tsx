"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Shield,
  Calendar,
  Star,
  Briefcase,
  Camera,
  AlertTriangle,
  Wrench,
  Gauge,
  Headphones,
  Code,
  ChevronDown,
  Globe,
  Network,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../components/FadeInSection";

const PowerBIIcon = ({ className }: { className?: string }) => (
  <svg height="30" viewBox=".8 0 32.3 34" width="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <g fill="currentColor">
      <path d="m11.1 27.3c0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1v-9c0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1zm6 2.4c0 1.1-.9 2.1-2.1 2.1s-2-.9-2-2.1v-13.7c0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1v13.7zm-12.1-4.4c0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1v-4.9c0-1.1.9-2.1 2.1-2.1s2.1 1 2.1 2.1zm18.1 6.6c0 1.1-.9 2.1-2.1 2.1-1.1 0-2-1-2-2.1v-18.2c0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1v18.2z" />
      <path d="m29.7 31c-.4 0-.7-.1-1.1-.2l-2.5-.8c-.4-.1-.7-.6-.5-1 .1-.4.6-.7 1-.5l2.6.8c.5.2 1.1.1 1.6-.3.5-.3.7-.9.7-1.4v-16.7c0-.8-.5-1.5-1.2-1.7l-24.5-7.4c-.5-.2-1.1-.1-1.6.2-.4.4-.7.9-.7 1.5v11.5c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8v-11.5c0-1.1.5-2.1 1.4-2.7.9-.7 2-.8 3-.5l24.4 7.4c1.4.4 2.4 1.8 2.4 3.3v16.7c0 1.1-.5 2.1-1.4 2.8-.6.2-1.3.5-2 .5" />
    </g>
  </svg>
);

type SectionBlock = {
  heading: string;
  bullets: string[];
};

type ChildItem = {
  label: string;
  icon: React.ReactNode;
  desc?: string;
  href?: string;
  sections?: SectionBlock[];
  color?: string; // Add color property
};

type ServiceItem = {
  title: string;
  subtitle: string;
  children: ChildItem[];
};

export default function ServicePage() {
  const items: ServiceItem[] = [
    {
      title: "General Services",
      subtitle: "บริการทั่วไปและที่ปรึกษาด้านซอฟต์แวร์",
      children: [
        {
          icon: <Zap className="w-6 h-6" />,
          label: "อบรมการใช้งานโปรแกรม Q.Soft",
          desc: "คือ การอบรมการใช้งานโปรแกรม (In House Training) ให้กับองค์กรที่ใช้ Software ของเรา เพื่อให้สามารถใช้งานโปรแกรมได้อย่างมีประสิทธิภาพ ตอบข้อซักถามต่างๆ รวมถึงการสาธิต Users ผู้ทำงานให้มีความเข้าใจในการทำงานมากที่สุด",
          color: "blue"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          label: "Implement โปรแกรม Q.Soft",
          desc: "คือ การวางระบบการทำงานขององค์กรโดยใช้โปรแกรม Q.Soft ของเราเป็นพื้นฐาน เพื่อวิเคราะห์และปรับปรุงประสิทธิภาพการทำงาน และทำให้ใช้งานโปรแกรมได้อย่างเต็มประสิทธิภาพ ประกอบไปด้วยการวิเคราะห์ระบบ, อบรมการใช้งาน, ดูแลการใช้งานจริง",
          color: "indigo"
        },
        {
          icon: <Calendar className="w-6 h-6" />,
          label: "Implement โปรแกรมบัญชี-การเงินชั้นนำ",
          desc: "จากประสบการณ์การวางระบบบัญชีด้วยโปรแกรมชั้นนำกว่า 7 ปี ทำให้เรามีความชำนาญการวางระบบบัญชี-การเงินด้วยซอฟแวร์ชั้นนำ และยังสามารถให้คำแนะนำในการวิเคราะห์และปรับปรุงระบบ, ฝึกอบรม และดูแลการใช้งานจนทุกฝ่ายที่เกี่ยวข้องทำงานได้สะดวกรวดเร็ว",
          color: "violet"
        },
        {
          icon: <Star className="w-6 h-6" />,
          label: "อบรมการใช้งานโปรแกรมบัญชีชั้นนำ",
          desc: "การอบรมการใช้งานโปรแกรม (In House Training) ให้กับองค์กรที่ใช้ Software ของเรา เพื่อให้สามารถใช้งานโปรแกรมได้อย่างมีประสิทธิภาพ ตอบข้อซักถามต่างๆ และสาธิตการใช้งาน โดยประกบติดกับ Users ให้เข้าใจการทำงานมากที่สุด",
          color: "amber"
        },
        {
          icon: <Briefcase className="w-6 h-6" />,
          label: "ให้คำปรึกษาในการวางระบบบริหารการผลิตและบัญชี",
          desc: "จากประสบการณ์ในการ Implement ของเรา เพื่อให้สามารถใช้งาน Software ได้จริงและมีประสิทธิภาพ ทำให้การให้คำปรึกษาอยู่บนพื้นฐานของการใช้งานจริงของ Users เป็นหลัก พร้อมผลลัพธ์ที่ถูกต้องตามต้องการ",
          color: "sky"
        },
        {
          icon: <PowerBIIcon className="w-6 h-6" />,
          label: "หลักสูตร Power BI",
          desc: "จากประสบการณ์ในการ Implement ของเรา เพื่อให้ลูกค้าสามารถใช้งาน Software ได้จริง และมีประสิทธิภาพ ทำให้คำปรึกษาอยู่บนพื้นฐานการใช้งานจริงของ Users พร้อมผลลัพธ์ที่ถูกต้องตามผู้บริหารต้องการ",
          href: "/powerbi",
          color: "yellow"
        },
      ],
    },
    {
      title: "AI สำหรับอุตสาหกรรมการผลิต",
      subtitle: "ยกระดับการผลิตด้วยเทคโนโลยีปัญญาประดิษฐ์",
      children: [
        {
          icon: <Camera className="w-6 h-6" />,
          label: "Vision Inspection System",
          desc: "ระบบ AI Vision ที่ช่วยตรวจจับข้อบกพร่องได้อย่างแม่นยำจากภาพในทุกขั้นตอนการผลิต รับประกันคุณภาพงานอย่างสม่ำเสมอ พร้อมยกระดับประสิทธิภาพและลดความสูญเสียในกระบวนการผลิต",
          color: "emerald"
        },
        {
          icon: <AlertTriangle className="w-6 h-6" />,
          label: "Monitoring for Safety",
          desc: "ระบบ AI ตรวจสอบความปลอดภัยที่สามารถระบุความเสี่ยงและพฤติกรรมไม่ปลอดภัยได้ทันที ลดโอกาสเกิดอุบัติเหตุ และสร้างสภาพแวดล้อมการทำงานที่ปลอดภัยและยั่งยืนมากขึ้น",
          color: "orange"
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          label: "AI - Predictive Maintenance",
          desc: "ใช้ AI วิเคราะห์ข้อมูลจากเครื่องจักรเพื่อคาดการณ์ปัญหาล่วงหน้า ช่วยวางแผนบำรุงรักษาเชิงรุก ลดเวลาหยุดเครื่อง และเพิ่มความต่อเนื่องในการผลิต",
          color: "rose"
        },
        {
          icon: <Gauge className="w-6 h-6" />,
          label: "Real-Time Throughput Bottleneck Detection",
          desc: "โซลูชัน AI สำหรับตรวจจับและจัดการจุดคอขวดในกระบวนการผลิตแบบเรียลไทม์ ใช้การวิเคราะห์ข้อมูลเพื่อระบุปัญหาทันที พร้อมแจ้งเตือนให้ผู้ใช้งานปรับแผน/การทำงาน เพื่อให้การผลิตราบรื่นและมีประสิทธิภาพมากขึ้น",
          color: "teal"
        },
        {
          icon: <Briefcase className="w-6 h-6" />,
          label: "Sales Enablement",
          desc: "ผู้ช่วยอัจฉริยะสำหรับทีมขาย (LLM-Powered Sales Assistant) ช่วยให้ทีมขายเข้าถึงข้อมูลกำลังการผลิตและข้อจำกัดของระบบได้ทันที ลดความเสี่ยงในการรับคำสั่งซื้อเกินศักยภาพจริง",
          color: "indigo",
          sections: [
            {
              heading: "ความสามารถหลัก",
              bullets: [
                "วิเคราะห์ผลกระทบของคำสั่งซื้อใหม่ต่อแผนการผลิต",
                "ช่วยประเมินความพร้อมในการส่งมอบสินค้า",
                'ตอบคำถามฝ่ายขายในรูปแบบ Chat เช่น “สามารถรับออเดอร์เพิ่มได้หรือไม่?”',
                "เพิ่มความแม่นยำในการเสนอราคาและกำหนดส่งมอบ",
              ],
            },
            {
              heading: "ประโยชน์ทางธุรกิจ",
              bullets: [
                "ลดความผิดพลาดจากการประเมินกำลังการผลิต",
                "เพิ่มความน่าเชื่อถือในการเจรจากับลูกค้า",
                "สนับสนุนการเติบโตของยอดขายอย่างยั่งยืน",
              ],
            },
          ],
        },
        {
          icon: <Headphones className="w-6 h-6" />,
          label: "Intelligent Customer Support Assistant",
          desc: "LLM ทำหน้าที่เป็นผู้ช่วยให้ทีม Support เข้าใจสถานการณ์การผลิตและปัญหาที่เกิดขึ้นได้รวดเร็ว พร้อมอธิบายข้อมูลให้ลูกค้าเข้าใจได้ง่ายและชัดเจน",
          color: "blue",
          sections: [
            {
              heading: "ความสามารถหลัก",
              bullets: [
                "ตอบคำถามลูกค้าเกี่ยวกับสถานะงานผลิตและการส่งมอบ",
                "วิเคราะห์สาเหตุของความล่าช้าหรือปัญหาที่เกิดขึ้น",
                "สรุปข้อมูลเป็นภาษาที่เหมาะกับการสื่อสารกับลูกค้า",
                "รองรับการใช้งานผ่าน Chatbot หรือระบบ Ticket",
              ],
            },
            {
              heading: "ประโยชน์ทางธุรกิจ",
              bullets: [
                "ลดระยะเวลาในการตอบสนองลูกค้า",
                "เพิ่มความพึงพอใจและความเชื่อมั่น",
                "ลดภาระงานซ้ำซ้อนของทีม Support",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Other Services",
      subtitle: "บริการอื่นๆ เพื่อสนับสนุนเทคโนโลยีในองค์กร",
      children: [
        {
          icon: <Network className="w-6 h-6" />,
          label: "รับดูแลระบบ Network ภายในองค์กร",
          desc: "สำหรับองค์กรขนาดเล็กที่ยังไม่พร้อมมีผู้ดูแลระบบ Network ภายในองค์กร ทางบริษัทฯ สามารถช่วยออกแบบและดูแล Network ให้มีเสถียรภาพและความปลอดภัย",
          color: "slate"
        },
        {
          icon: <Code className="w-6 h-6" />,
          label: "รับเขียนโปรแกรม และจัดทำ Web Application",
          desc: "รับจัดทำ/พัฒนาโปรแกรมทั้งในรูปแบบ Web Application หรือจัดทำ Web Service ตามความต้องการของลูกค้า",
          color: "cyan"
        },
      ],
    },
  ];

  const [openSections, setOpenSections] = useState<string[]>(
    items.map(item => item.title)
  );

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20 font-kanit">
      {/* Hero Header */}
      <div className="bg-white border-b mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--brand-blue)]/5 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-8 relative z-10">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[var(--brand-blue)] rounded-xl text-white shadow-lg shadow-blue-200">
                <Globe className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
              Services <span style={{ color: "var(--brand-blue)" }}>Center</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              บริการของพวกเรา
            </p>
          </FadeInSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {items.map((section, sIdx) => (
          <div key={section.title} className="mb-12">
            <FadeInSection delay={sIdx * 0.1}>
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left flex items-center justify-between group py-4 border-b-2 border-slate-200 hover:border-brand transition-all mb-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] flex items-center gap-3">
                    <span className="w-2 h-8 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }}></span>
                    {section.title}
                  </h2>
                  <p className="text-slate-500 mt-1 ml-5 font-medium">{section.subtitle}</p>
                </div>
                <div className={`p-2 rounded-full bg-white shadow-sm border transform transition-transform duration-300 ${openSections.includes(section.title) ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                </div>
              </button>

              <div
                className={` overflow-hidden transition-all duration-500 ease-in-out ${openSections.includes(section.title) ? "max-h-[2000px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  {section.children.map((service, cIdx) => {
                    const cardClasses = "group transition-all duration-300 flex flex-col h-full p-2";

                    // Color mapping for icons
                    const colorMap: Record<string, { bg: string, text: string, hover: string, shadow: string, hoverText: string }> = {
                      blue: { bg: "bg-blue-50", text: "text-blue-600", hover: "group-hover:bg-blue-600", shadow: "group-hover:shadow-blue-200", hoverText: "group-hover:text-blue-600" },
                      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", hover: "group-hover:bg-indigo-600", shadow: "group-hover:shadow-indigo-200", hoverText: "group-hover:text-indigo-600" },
                      violet: { bg: "bg-violet-50", text: "text-violet-600", hover: "group-hover:bg-violet-600", shadow: "group-hover:shadow-violet-200", hoverText: "group-hover:text-violet-600" },
                      amber: { bg: "bg-amber-50", text: "text-amber-500", hover: "group-hover:bg-amber-500", shadow: "group-hover:shadow-amber-100", hoverText: "group-hover:text-amber-500" },
                      sky: { bg: "bg-sky-50", text: "text-sky-500", hover: "group-hover:bg-sky-500", shadow: "group-hover:shadow-sky-100", hoverText: "group-hover:text-sky-500" },
                      yellow: { bg: "bg-yellow-50", text: "text-yellow-600", hover: "group-hover:bg-yellow-600", shadow: "group-hover:shadow-yellow-100", hoverText: "group-hover:text-yellow-600" },
                      emerald: { bg: "bg-emerald-50", text: "text-emerald-600", hover: "group-hover:bg-emerald-600", shadow: "group-hover:shadow-emerald-100", hoverText: "group-hover:text-emerald-600" },
                      orange: { bg: "bg-orange-50", text: "text-orange-500", hover: "group-hover:bg-orange-500", shadow: "group-hover:shadow-orange-100", hoverText: "group-hover:text-orange-500" },
                      rose: { bg: "bg-rose-50", text: "text-rose-500", hover: "group-hover:bg-rose-500", shadow: "group-hover:shadow-rose-100", hoverText: "group-hover:text-rose-500" },
                      teal: { bg: "bg-teal-50", text: "text-teal-500", hover: "group-hover:bg-teal-500", shadow: "group-hover:shadow-teal-100", hoverText: "group-hover:text-teal-500" },
                      slate: { bg: "bg-slate-50", text: "text-slate-600", hover: "group-hover:bg-slate-600", shadow: "group-hover:shadow-slate-200", hoverText: "group-hover:text-slate-600" },
                      cyan: { bg: "bg-cyan-50", text: "text-cyan-500", hover: "group-hover:bg-cyan-500", shadow: "group-hover:shadow-cyan-100", hoverText: "group-hover:text-cyan-500" },
                    };

                    const style = colorMap[service.color || "blue"] || colorMap.blue;

                    const cardContent = (
                      <>
                        <div className="mb-6 flex items-start justify-center">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm
                                       ${style.bg} ${style.text} 
                                       ${style.hover} group-hover:text-white group-hover:scale-110 group-hover:shadow-lg ${style.shadow}/50`}
                          >
                            {service.icon}
                          </div>
                        </div>

                        <h3 className={`text-lg font-bold text-[#1e293b] mb-3 transition-colors ${style.hoverText} font-kanit text-center`}>
                          {service.label}
                        </h3>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-kanit">
                          {service.desc}
                        </p>

                        {service.sections && (
                          <div className="space-y-4 pt-4 border-t border-slate-50 mt-auto">
                            {service.sections.map((s) => (
                              <div key={s.heading}>
                                <div className="flex items-center gap-2 mb-2">
                                  <span
                                    className={`w-1 h-4 rounded-full ${style.bg.replace('bg-', 'bg-').replace('-50', '-500')}`}
                                  />
                                  <div className="text-sm font-extrabold text-slate-700 tracking-wide font-kanit">
                                    {s.heading}
                                  </div>
                                </div>
                                <ul className="space-y-1.5 text-xs text-slate-500 font-kanit">
                                  {s.bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-2">
                                      <span className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${style.bg.replace('bg-', 'bg-').replace('-50', '-500')}`}></span>
                                      {b}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    );

                    if (service.href) {
                      return (
                        <Link key={service.label} href={service.href} className={cardClasses}>
                          {cardContent}
                        </Link>
                      );
                    }

                    return (
                      <div key={service.label} className={cardClasses}>
                        {cardContent}
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeInSection>
          </div>
        ))}
      </div>
    </div>
  );
}
