"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Package, Sparkles, Star, Users, Zap, } from "lucide-react";
import FadeInSection from "../components/FadeInSection";

const navItems = [
  { label: "Q.soft", key: "qsoft" },
  { label: "Winspeed", key: "winspeed" },
  { label: "HRM", key: "hrm" },
  { label: "AI", key: "ai" },
  { label: "Consultancy / Training", key: "consulting" },
  { label: "อื่น ๆ", key: "others" },
] as const;

const Tooltip = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onTouchEnd={() => setTimeout(() => setShow(false), 1000)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
          >
            {title}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type SectionKey = (typeof navItems)[number]["key"];

interface Client {
  name: string;
  logo?: string;
}

const qsoftSubcategories = ["MRP", "APS", "WMS", "PM"] as const;
type QsoftSubcategory = (typeof qsoftSubcategories)[number];

const qsoftColors: Record<QsoftSubcategory, { bg: string; dot: string }> = {
  MRP: { bg: "#3b9eff", dot: "#3b9eff" },
  APS: { bg: "#52c41a", dot: "#52c41a" },
  WMS: { bg: "#ff4d4f", dot: "#ff4d4f" },
  PM: { bg: "#faad14", dot: "#faad14" },
};

const clientsByQsoftCategory: Record<QsoftSubcategory, Client[]> = {
  MRP: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท ซี.อี. คราฟท์แมน จำกัด", logo: "/img/site/ce_logo.jpg" },
    { name: "บริษัท มินามิดะ (ไทยแลนด์) จำกัด", logo: "/img/site/minamida_logo.jpg" },
    { name: "บริษัท เทคโนพลาส อุตสาหกรรม (ประเทศไทย) จำกัด", logo: "/img/site/technoplast_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท ทีเบลโก้ จำกัด", logo: "/img/site/tbelco.jpg" },
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vc.png" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
  ],
  APS: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท ซี.อี. คราฟท์แมน จำกัด", logo: "/img/site/ce_logo.jpg" },
    { name: "บริษัท มินามิดะ (ไทยแลนด์) จำกัด", logo: "/img/site/minamida_logo.jpg" },
    { name: "บริษัท เทคโนพลาส อุตสาหกรรม (ประเทศไทย) จำกัด", logo: "/img/site/technoplast_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท ทีเบลโก้ จำกัด", logo: "/img/site/tbelco.jpg" },
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vc.png" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
  ],
  WMS: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vc.png" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
  ],
  PM: [
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
  ],
};

const clients: Record<SectionKey, Client[]> = {
  qsoft: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท ซี.อี. คราฟท์แมน จำกัด", logo: "/img/site/ce_logo.jpg" },
    { name: "บริษัท มินามิดะ (ไทยแลนด์) จำกัด", logo: "/img/site/minamida_logo.jpg" },
    { name: "บริษัท เทคโนพลาส อุตสาหกรรม (ประเทศไทย) จำกัด", logo: "/img/site/technoplast_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท ทีเบลโก้ จำกัด", logo: "/img/site/tbelco.jpg" },
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vc.png" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
    { name: "บริษัท สยามบาร์เดอร์ จำกัด", logo: "/img/site/siam-brothers.png" },
    { name: "บริษัท สยามบราเดอร์ เน็ต จำกัด", logo: "/img/site/siam-net.jpg" },
    { name: "บริษัท โตเกียว เคอิโซ (ไทยแลนด์) จำกัด", logo: "/img/site/tokyo-keiso.png" },
    { name: "บริษัท บางชัน เยนเนอร์เรล เเซมบลี จำกัด", logo: "/img/site/bangna.png" },
    { name: "บริษัท ไมโครไฟเบอร์อุตสาหกรรม จำกัด", logo: "/img/site/microfiber.png" },
    { name: "บริษัท ร่วมกำชัย จำกัด", logo: "/img/site/rkc.png" },
    { name: "บริษัท วันเดอร์ฟูล พลาสติก จำกัด", logo: "/img/site/wonderful.png" },
    { name: "บริษัท ไทยรุ่ง อินเตอร์ บิส จำกัด", logo: "/img/site/thairoong.png" },
    { name: "บริษัท ไทยสแตนดาร์ด เมทัล โปรดักส์ จำกัด", logo: "/img/site/thaimetal.png" },
  ],
  winspeed: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท ซี.อี. คราฟท์แมน จำกัด", logo: "/img/site/ce_logo.jpg" },
    { name: "บริษัท มินามิดะ (ไทยแลนด์) จำกัด", logo: "/img/site/minamida_logo.jpg" },
    { name: "บริษัท เทคโนพลาส อุตสาหกรรม (ประเทศไทย) จำกัด", logo: "/img/site/technoplast_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท ทีเบลโก้ จำกัด", logo: "/img/site/tbelco.jpg" },
    { name: "บริษัท สยามบาร์เดอร์ จำกัด", logo: "/img/site/siam-brothers.png" },
    { name: "บริษัท สยามบราเดอร์ เน็ต จำกัด", logo: "/img/site/siam-net.jpg" },
    { name: "บริษัท บางชัน เยนเนอร์เรล เอเซมบลี จำกัด", logo: "/img/site/bangna.png" },
    { name: "บริษัท ไมโครไฟเบอร์อุตสาหกรรม จำกัด", logo: "/img/site/microfiber.png" },
    { name: "บริษัท โตเกียว เคอิโซ (ไทยแลนด์) จำกัด", logo: "/img/site/tokyo-keiso.png" },
    { name: "บริษัท ร่วมกำชัย จำกัด", logo: "/img/site/rkc.png" },
    { name: "บริษัท เจแปน ออโตเมติก แมชชีน (ไทยแลนด์) จำกัด", logo: "/img/site/japan-auto.jpg" },
  ],
  hrm: [],
  ai: [
    { name: "บริษัท ไทย เคียววะ จีเอ็มบี จำกัด", logo: "/img/site/TKG-logo.png" },
  ],
  consulting: [
    { name: "Future Skill", logo: "/img/site/futureskill.jpg" },
    { name: "กรมพัฒนาฝีมือแรงงาน", logo: "/img/site/develop.jpg" },
    { name: "สถาบันพัฒนาฝีมือแรงงาน1 สมุทรปราการ", logo: "/img/site/develop1.jpg" },
    { name: "มูลนิธิครูดีของแผ่นดิน", logo: "/img/site/bestTeacher.png" },
    { name: "สถาบันพัฒนาบุคลากรดิจิทัล", logo: "/img/site/DiSDA.png" },
    { name: "บริษัท ไทย-ซีโน แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/TSM-logo.png" },
    { name: "บริษัท แก้วกรุงไทย จำกัด", logo: "/img/site/GTG.png" },
  ],
  others: [
    { name: "บริษัท พ.ศ.ช. ผลิตภัณฑ์อาหาร จำกัด", logo: "/img/site/psch.png" },
    { name: "บริษัท สยามอุตสาหกรรมเทปกาว จำกัด", logo: "/img/site/siat.png" },
    { name: "บริษัท เจแปน ออโตเมติก แมชชีน (ไทยแลนด์) จำกัด", logo: "/img/site/jam.png" },
    { name: "บริษัท ยูโรเซีย ฟู๊ด จำกัด", logo: "/img/site/ursf.png" },
    { name: "บริษัท ฟูจิกิเคน จำกัด", logo: "/img/site/image_2023_01_28T10_28_37_862Z.png" },
    { name: "บริษัท อมาเบลล์ จำกัด", logo: "/img/site/image_2023_01_28T10_28_42_599Z.png" },
    { name: "บริษัท นครดีซี จำกัด", logo: "/img/site/image_2023_01_28T10_32_15_891Z.png" },
    { name: "บริษัท นครดีซี นครศรีธรรมราช จำกัด", logo: "/img/site/image_2023_01_28T10_32_26_456Z.png" },
    { name: "บริษัท ร่วมกำชัย จำกัด", logo: "/img/site/rkc.png" },
  ],
};

export default function SitePage() {
  const [active, setActive] = useState<SectionKey>("qsoft");

  const getQsoftClientsWithTags = () => {
    return clients.qsoft.map((client) => {
      const categories: QsoftSubcategory[] = [];
      (qsoftSubcategories as readonly QsoftSubcategory[]).forEach((cat) => {
        if (clientsByQsoftCategory[cat].some(c => c.name === client.name)) {
          categories.push(cat);
        }
      });
      return {
        ...client,
        categories,
      };
    });
  };

  const displayClients = active === "qsoft" ? getQsoftClientsWithTags() : clients[active];

  const prevTab = useRef(active);
  // Scroll disabled - no auto scroll when menu changes
  // useEffect(() => {
  //   if (prevTab.current !== active) {
  //     const element = document.getElementById('client-grid');
  //     if (element) {
  //       const yOffset = -80;
  //       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //       window.scrollTo({ top: y, behavior: 'smooth' });
  //     }
  //     prevTab.current = active;
  //   }
  // }, [active]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Increased stagger for better visibility
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60, // Higher jump
      scale: 0.9,
      rotateX: 15 // Add slight tilt for 'fresh' look
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
  };

  return (
    <div className="font-kanit bg-gray-50/50 min-h-screen pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">

        {/* Header Grid: Responsive stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-16 md:mb-24 items-start">

          {/* LEFT: Title & Intro */}
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8">
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                <Image
                  src="/img/best_seller.png"
                  alt="Business Client Groups"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-3">
                <div className="w-12 h-1 bg-[var(--brand-blue)] rounded-full mb-2 hidden md:block" />
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  กลุ่มลูกค้าที่
                  <span className="text-[var(--brand-blue)] block sm:inline px-1">ที่ใช้บริการ</span>
                  โปรแกรม
                </h1>
                <p className="text-slate-500 text-base md:text-lg font-medium max-w-xl">
                  Q.Soft, WINSpeed, HRM, AI และอื่น ๆ
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT: Stats Section */}
          <FadeInSection delay={0.2}>
            <div className="relative z-10 py-2 lg:pl-12 min-w-full sm:min-w-[340px]">

              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 leading-tight">26</span>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--brand-blue)] font-bold">All Site</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-800 leading-tight">8+</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Q.Soft</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-800 leading-tight">6+</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">WINSpeed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-800 leading-tight">0</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">HRM</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-800 leading-tight">5+</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">AI</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-800 leading-tight">13+</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">อื่น ๆ</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-300 tracking-tight uppercase whitespace-nowrap">
                  Last update 13.02.2025 14:53
                </span>
              </div>
            </div>
          </FadeInSection>
        </div>


        <div className="sticky top-[80px] md:top-[80px] z-40 mb-8 md:mb-12 px-4 flex justify-center bg-gray-50/50 backdrop-blur-sm">
          <div className="overflow-x-auto scrollbar-hide w-full md:w-max">
            <div className="flex justify-start md:justify-center gap-1 md:gap-2 min-w-max p-5">
              {navItems.map((item) => {
                const isActive = active === item.key;

                // Color theme mapping for buttons
                const buttonThemes: Record<string, { active: string, text: string, shadow: string, hover: string }> = {
                  qsoft: { active: "bg-blue-600", text: "text-blue-600", shadow: "shadow-blue-200/50", hover: "hover:bg-blue-50 hover:text-blue-600" },
                  winspeed: { active: "bg-amber-500", text: "text-amber-500", shadow: "shadow-amber-200/50", hover: "hover:bg-amber-50 hover:text-amber-500" },
                  hrm: { active: "bg-indigo-500", text: "text-indigo-500", shadow: "shadow-indigo-200/50", hover: "hover:bg-indigo-50 hover:text-indigo-500" },
                  ai: { active: "bg-sky-500", text: "text-sky-500", shadow: "shadow-sky-200/50", hover: "hover:bg-sky-50 hover:text-sky-500" },
                  consulting: { active: "bg-emerald-600", text: "text-emerald-600", shadow: "shadow-emerald-200/50", hover: "hover:bg-emerald-50 hover:text-emerald-600" },
                  others: { active: "bg-slate-700", text: "text-slate-700", shadow: "shadow-slate-300/50", hover: "hover:bg-slate-100 hover:text-slate-800" },
                };

                const theme = buttonThemes[item.key] || buttonThemes.qsoft;

                const Icon = () => {
                  const iconProps = { className: "w-4 h-4" };
                  const getIcon = () => {
                    switch (item.key) {
                      case 'qsoft': return <Package {...iconProps} />;
                      case 'winspeed': return <Zap {...iconProps} />;
                      case 'hrm': return <Users {...iconProps} />;
                      case 'ai': return <Sparkles {...iconProps} />;
                      case 'consulting': return <Briefcase {...iconProps} />;
                      case 'others': return <Star {...iconProps} />;
                      default: return null;
                    }
                  };

                  return (
                    <motion.div
                      animate={isActive ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      } : { scale: 1, rotate: 0 }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                      className="flex items-center justify-center shrink-0"
                    >
                      {getIcon()}
                    </motion.div>
                  );
                };

                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setActive(item.key);
                    }}
                    className={`
                      flex items-center gap-2.5 px-5 py-3 rounded-2xl md:rounded-3xl text-xs md:text-sm font-bold 
                      transition-all duration-300 shadow-lg
                      ${isActive
                        ? `${theme.active} text-white ${theme.shadow} translate-y-[-2px]`
                        : `bg-white text-slate-500 ${theme.hover} hover:shadow-xl`
                      }
                    `}
                  >
                    <Icon />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend for Q.soft - Floating Pill Style */}
        <div className="flex justify-center mb-6 px-4">
          <AnimatePresence>
            {active === "qsoft" && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                className="bg-white/70 backdrop-blur-md border border-white/60 rounded-full px-6 py-2.5 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-5 whitespace-nowrap">
                  <span className="text-[10px] font-bold text-[var(--brand-blue)] uppercase tracking-wider">Technology:</span>
                  <div className="flex gap-4">
                    {qsoftSubcategories.map((subcat) => (
                      <div key={subcat} className="flex items-center gap-2 group cursor-default">
                        <div className="w-2 h-2 rounded-full shadow-sm ring-1 ring-white" style={{ background: qsoftColors[subcat].dot }} />
                        <span className="text-[10px] font-bold text-slate-500">{subcat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Client Grid */}
        <div id="client-grid">
          <AnimatePresence>
            <motion.div
              key={active}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-8"
            >
              {displayClients.length > 0 ? (
                displayClients.map((company, idx) => (
                  <motion.div
                    key={`${active}-${company.name}-${idx}`}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="p-2 md:p-4 hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col items-center">
                      <div className="relative w-full aspect-square md:aspect-video mb-4 md:mb-6">
                        {company.logo ? (
                          <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-105">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full bg-slate-50 flex items-center justify-center rounded-2xl">
                            <Users className="w-8 h-8 text-slate-200" />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-center text-center gap-2">
                        {active === "qsoft" && "categories" in company && (
                          <div className="flex gap-1.5 mb-1">
                            {(company as any).categories.map((cat: QsoftSubcategory) => (
                              <Tooltip key={cat} title={`Q.Soft ${cat}`}>
                                <div
                                  className="w-2 h-2 rounded-full shadow-sm ring-1 ring-white"
                                  style={{ background: qsoftColors[cat].dot }}
                                />
                              </Tooltip>
                            ))}
                          </div>
                        )}
                        <h3 className="text-[10px] md:text-sm font-bold text-slate-800 group-hover:text-[var(--brand-blue)] transition-colors leading-tight">
                          {company.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-24 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                    <Users className="w-10 h-10 text-slate-300" />
                  </div>
                  <p className="text-slate-400 font-medium italic">
                    ยังไม่มีข้อมูลในหมวดหมู่นี้
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}