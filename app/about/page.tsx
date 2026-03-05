'use client';

import Image from "next/image";
import {
  Briefcase,
  Star,
  Network,
  BarChart,
  UserRoundCheck,
  Award,
  Users,
  Package,
  Target,
  CheckCircle2
} from "lucide-react";
import { motion} from "framer-motion";
import FadeInSection from "../components/FadeInSection";

export default function AboutPage() {

  const products = [
    { img: 'q-soft-logo-50.png', name: 'Q.Soft', desc: 'โซลูชั่นการจัดการทรัพยากรระดับองค์กร' },
    { img: 'smart-soft-logo-50.png', name: 'Smart-Soft', desc: 'นวัตกรรมซอฟต์แวร์สำหรับการผลิตที่ชาญฉลาด' },
    { img: 'smile-soft-logo-50.png', name: 'Smile-Soft', desc: 'ระบบที่เน้นความง่ายและรอยยิ้มในการทำงาน' },
  ];


  const infoSections = [
    {
      icon: Briefcase,
      title: "งานของเรา",
      color: "blue",
      items: [
        "เราจะพัฒนาศักยภาพของโปรแกรมอย่างต่อเนื่อง",
        "เราจะสร้างสรรค์โปรแกรมใหม่ๆเพื่อตอบสนองความต้องการของภาคอุตสาหกรรม",
        "เราจะศึกษาเทคโนโลยีใหม่ๆ เพื่อนำมาสร้างสรรค์โปรแกรมที่มีคุณภาพ",
        "เราจะพัฒนาระบบบริการหลังการขาย เพื่อสร้างความประทับใจแก่ลูกค้า"
      ]
    },
    {
      icon: Star,
      title: "วัตถุประสงค์",
      color: "amber",
      content: "บริษัทของเรามีวัตถุประสงค์หลัก ที่จะเป็นผู้นำเสนอโซลูชั่นสำหรับอุตสาหกรรมการผลิตโดย ทางบริษัทมีความมุ่งมั่น ที่จะให้บริการที่มีคุณภาพสูงสุด เพื่อสร้างความพึ่งพอใจให้กับลูกค้า อีกทั้งความเป็นเลิศในการปฏิบัติงานภายในแผนงาน และสามารถแก้ไขปัญหาการบริหารงานให้กับผู้ประกอบการณ์ที่เลือกใช้ระบบทำให้ลูกค้าของเราก้าวไปสู่การพัฒนาศักยภาพ ในการแข่งขันขององค์กรในธุรกิจของเขาได้เป็นอย่างดี"
    },
    {
      icon: Network,
      title: "ลักษณะขององค์กร",
      color: "emerald",
      content: "บริษัทมีการพัฒนาศักยภาพและพัฒนาระบบการทำงานอย่างต่อเนื่อง หลังจากที่ได้ก่อตั้งบริษัทขึ้นตั้งแต่ ปี พ.ศ.2545 และด้วยประสบการณ์มากกว่า 19 ปี ทำให้ทางบริษัทมีระบบที่มีประสิทธิภาพ มี Solution ที่ตรงตามความต้องการสำหรับ ธุระกิจการผลิต และการจัดจำหน่าย อีกทั้งมีความเชี่ยวชาญในด้านการวางแผนการผลิต MRP (Manufacturing Resource Planning), การวางระบบบริหารองค์กร ERP (Enterprise Resource Planning), การบริหารตารางการผลิต APS (Advanced Planning and Scheduling), การบริหารลูกค้าสัมพันธ์ CRM (Customer Relationship Management), การดูแลบริหาร จัดการอพาร์ทเม้นท์ ADM (Apartment & Dormitory Management) และระบบ Logistics Planning ระบบเหล่านี้ครอบ คลุมการจัดการของการผลิตข้อมูลด้านการเงิน, การขายและการสนับสนุนการบริการลูกค้า การจัดจำหน่าย และการบริการ หลังการขาย",
      subContent: "วันนี้บริษัทของเราได้รวบรวมโซลูชั่นเฉพาะทาง สำหรับธุรกิจต่างๆ เช่น ธุรกิจการผลิตอะไหล่ และชิ้นส่วนของรถยนต์, ธุรกิจการฉีดพลาสติก, ธุรกิจการขึ้นรูปเหล็ก และสแตนเลส, ธุรกิจหล่อโลหะ, ธุรกิจเครื่องประดับ, ธุรกิจประกอบเครื่องจักร เครื่องกลต่างๆ ,ธุรกิจร้านค้า วัตถุก่อสร้าง, ธุรกิจ นำเข้า / ส่งออก ซึ่งทั้งหมดนี้ที่พัฒนาขึ้นโดย ทีมงาน บุคลากรที่มีคุณภาพ ความรู้ ความสามารถเฉพาะตัวและทักษะใน การดำเนินธุรกิจ ด้านการบริหาร การบัญชี เศรษฐศาสตร์ วิศวกรรมอุตสาหกรรม วิทยาศาสตร์คอมพิวเตอร์ วิศวกรรมคอมพิวเตอร์ เทคโนโลยีสารสนเทศ วิทยาศาสตร์การจัดการ การวิจัยดำเนินงาน การออกแบบและวางระบบให้ภาคอุตสาหกรรมที่หลากหลาย ทำให้ทางบริษัทเชื่อมั่นว่าโซลูชั่นที่เรานำเสนอ จะสามารถแก้ไขปัญหาการบริหารงานให้กับผู้ประกอบการที่เลือกใช้ระบบได้อย่างลงตัว"
    },
    {
      icon: BarChart,
      title: "ข้อได้เปรียบเชิงกลยุทธ์",
      color: "indigo",
      content: "บริษัทมีความมุ่งมั่นที่จะตอบโจทย์ความต้องการของลูกค้า การให้บริการลูกค้าและการพัฒนา ด้วย Solution ที่ดีเยี่ยม และมีประสิทธิภาพ อีกทั้งทางบริษัทมีบริการจากวิทยากร และผู้พัฒนาระบบ ที่มีคุณสมบัติเหมาะสม ครบถ้วนซึ่งจะช่วยให้ลูกค้า ได้รับประโยชน์ และประสบการณ์อย่างกว้างขวาง โดยละเอียด ของ solution ที่มีความหลายหลายต่างๆ และระบบของทางบริษัท"
    },
    {
      icon: UserRoundCheck,
      title: "บริการให้คำปรึกษาการดำเนินงาน",
      color: "orange",
      content: "บริษัทฯเป็นผู้เชี่ยวชาญการวางระบบ ERP (Enterprise Resource Planning) โดยเฉพาะด้านอุตสาหกรรม มีความชำนาญการวางระบบบริหารการผลิต, จัดทำต้นทุนการผลิต, บัญชี-การเงิน, การกระจายสินค้า ด้วยประสบการณ์การทำงานกว่า 10 ปี ความรู้และความเชี่ยวชาญเฉพาะทางในเชิงลึก รวมถึงซอฟต์แวร์การผลิต การจัด จำหน่าย บัญชีและการเงิน ขายหน้าร้าน ระบบการจัดการภาษี ระบบการบริหารธุรกิจ ระบบบริหารงานบุคคล รองรับในเรื่อง ของการคำนวณ การวางแผนการขนส่งและการกำหนดเวลา การจำลองสถานะการณ์ และการเพิ่มประสิทธิภาพ ทักษะเหล่านี้ ล้วนแต่ถูกพัฒนา และปรับปรุง เพื่อให้มั่นใจได้ว่า Solution ของคุณจะทำงานได้อย่างมีประสิทธิภาพ บริษัทฯยังบริการ ให้คำปรึกษาเพื่อวิเคราะห์ และปรับปรุงการทำงาน เพื่อให้การทำงานอย่างเป็นระบบของลูกค้าทำงานได้ เต็มประสิทธิภาพ",
      subContent: "บริษัทฯมีศูนย์ให้คำปรึกษา (Call Center), e-Learning, ศูนย์ฝึกอบรม, การอบรมการใช้งานโปรแกรมถึงสถานที่ ให้กับองค์กรที่ใช้ Software ของเราเพื่อให้ลูกค้าสามารถใช้งาน โปรแกรมได้อย่างมีประสิทธิภาพ ตอบข้อซักถามต่างๆ ในการใช้งานโปรแกรมรวมถึงการสาธิต ซึ่งจะประกบติดกับ Users ผู้ทำงานให้มีความเข้าใจในการทำงานมากที่สุด\n\nในส่วนขององค์กรขนาดเล็กที่ยังไม่พร้อมจะมีผู้ดูแลระบบ Network ภายในองค์กรของตนเอง ทางบริษัทฯ มีบุคลากรที่มีความรู้ความสามารถที่จะช่วยออกแบบ และดูแลระบบเครือข่ายของท่านให้มีเสถียรภาพ และความปลอดภัยสูงสุด"
    },
  ];

  const colorMap: { [key: string]: string } = {
    // use solid hex bases so we can append alpha suffixes for gradients/shadows
    blue: "#0ea5e9",
    amber: "#f59e0b",
    emerald: "#10b981",
    indigo: "#6366f1",
    orange: "#f97316",
  };

  const highlightText = (text: string) => {
    const keywords = [
      { term: "MRP (Manufacturing Resource Planning)", color: "text-emerald-500" },
      { term: "ERP (Enterprise Resource Planning)", color: "text-blue-500" },
      { term: "APS (Advanced Planning and Scheduling)", color: "text-indigo-500" },
      { term: "CRM (Customer Relationship Management)", color: "text-rose-500" },
      { term: "ADM (Apartment & Dormitory Management)", color: "text-amber-500" },
      { term: "Logistics Planning", color: "text-slate-500" },
    ];

    let highlighted = text;
    // Simple replacement for demonstration. For complex content, a more robust parser might be needed.
    // However, since we define the content, we can use React elements instead of dangerouslySetInnerHTML.
    return text.split(/(MRP \(Manufacturing Resource Planning\)|ERP \(Enterprise Resource Planning\)|APS \(Advanced Planning and Scheduling\)|CRM \(Customer Relationship Management\)|ADM \(Apartment & Dormitory Management\)|Logistics Planning)/).map((part, i) => {
      const match = keywords.find(k => k.term === part);
      if (match) {
        return <span key={i} className={`font-bold ${match.color}`}>{part}</span>;
      }
      return part;
    });
  };

  const awards = [
    "Pre ISO_IEC 29110-certificate.jpg",
    "FINAL-ISO29110_BCI.jpg",
    "cer_qsoft.jpg",
    "Consultants.jpg",
    "DSCF7800.JPG",
    "image_2020_11_25T02_34_54_878Z.png",
    "image_2020_11_25T02_35_09_271Z.png",
    "image_2020_11_25T02_35_16_410Z.png",
    "image_2020_11_25T02_35_21_527Z.png",
    "image_2020_11_25T02_35_29_944Z.png",
    "image_2020_11_25T02_35_35_652Z.png",
    "image_2020_11_25T02_35_41_627Z.png",
    "image_2020_11_25T02_35_46_458Z.png",
    "IMG_2004_.jpg",
  ];

  return (
    <div className="font-kanit bg-white min-h-screen">
      {/* Hero Section - Modern & Dynamic */}
      <div
        className="relative overflow-hidden pb-9 pt-8 md:pt-15 w-full"
        style={{
          background: 'linear-gradient(90deg, #18181b 0%, #fff 55%, #38bdf8 100%)',
          backgroundSize: '120% 100%',
          backgroundPosition: '80% 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-3 relative z-10">
          <FadeInSection>
            <div className="text-center">
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[var(--brand-blue)]/10 to-purple-500/10 border border-[var(--brand-blue)]/20 rounded-full mb-7"
              >
                <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full animate-pulse"></div>
                <span className="text-sm font-black text-[var(--brand-blue)] tracking-widest uppercase">About Company</span>
              </motion.div>

              {/* Main Title with Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-7xl font-black mb-4 leading-none tracking-tighter"
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)',
                  }}
                >
                  About{" "}
                </span>
                <span className="relative inline-block">
                  <span
                    className="bg-clip-text text-transparent leading-[1.1] pb-1 pr-1 min-w-[2.5ch] inline-block"
                    style={{
                      color: '#18181b',
                      backgroundImage: 'none',
                    }}
                  >
                    Us
                  </span>
                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[var(--brand-blue)] to-cyan-500 rounded-full origin-left"
                  ></motion.div>
                </span>
              </motion.h1>

              {/* Subtitle with Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8"
              >
                <p className="text-lg md:text-2xl text-slate-600 font-bold">
                  เกี่ยวกับบริษัทของเรา
                </p>
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full"></div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Since 2014</span>
                </div>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mt-10"
              >
                {[
                  { icon: Target, label: "ประสบการณ์", value: "10+", unit: "ปี" },
                  { icon: Users, label: "ลูกค้า", value: "500+", unit: "บริษัท" },
                  { icon: Award, label: "รางวัล", value: "15+", unit: "รางวัล" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 "
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-blue)] to-cyan-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-black text-slate-900 mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-[var(--brand-blue)] mb-0.5">{stat.unit}</div>
                      <div className="text-xs font-semibold text-slate-500">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Video Section - separated from Hero Section */}
      <div className="w-full relative mt-12 md:mt-16 group ">
        <FadeInSection delay={0.2}>
          <div data-hide-cursor className="relative w-full aspect-video md:aspect-[25/9] max-w-7xl mx-auto rounded-none md:rounded-3xl overflow-hidden shadow-2xl" style={{marginTop: 0, paddingTop: 0}}>
            <iframe
              src="https://www.youtube.com/embed/YR_aeSKM-FQ?si=hkYktBerRij5oMso"
              title="BCI Corporate Video"
              className="absolute inset-0 w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeInSection>
      </div>

      {/* Product Showcase Section - Enhanced */}
      <div className="relative bg-slate-50/50 py-24 border-y border-slate-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-blue) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
          <FadeInSection>
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full mb-8 shadow-md border border-slate-200"
            >
              <Package className="w-4 h-4 text-[var(--brand-blue)]" />
              <span className="text-xs font-black text-slate-600 tracking-widest uppercase">Our Solutions</span>
            </motion.div>

            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              ผลิตภัณฑ์{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-blue)] to-cyan-500">
                และโซลูชั่น
              </span>
            </h3>
            <p className="text-slate-500 font-semibold text-lg max-w-2xl mx-auto">
              โซลูชั่นซอฟต์แวร์ที่ครบวงจรสำหรับธุรกิจของคุณ
            </p>
          </FadeInSection>
        </div>

        {/* Simple 3-Column Display */}
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center"
              >
                {/* Logo */}
                <div className="mb-4">
                  <div className="w-full max-w-[120px] mx-auto">
                    <img
                      src={`/img/feature/${prod.img}`}
                      alt={prod.name}
                      className="w-full h-auto object-contain transition-transform duration-400 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-black text-xl md:text-2xl text-slate-900 tracking-tighter uppercase mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm md:text-sm leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Sections - Totally Redesigned */}
      <div className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Watermark Tech SVG BG */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g opacity="0.13">
              <rect x="100" y="100" width="1240" height="600" rx="60" fill="#e0f2fe" />
              <g stroke="#38bdf8" strokeWidth="2">
                <circle cx="300" cy="200" r="40" />
                <circle cx="1200" cy="600" r="32" />
                <rect x="600" y="400" width="120" height="120" rx="24" />
                <rect x="900" y="180" width="80" height="80" rx="16" />
                <path d="M340 200 Q400 300 600 200 T900 200" fill="none" />
                <path d="M700 460 Q800 600 1200 600" fill="none" />
                <path d="M640 400 Q700 300 900 220" fill="none" />
              </g>
              <g stroke="#bae6fd" strokeWidth="1.5">
                <circle cx="400" cy="600" r="18" />
                <circle cx="1100" cy="300" r="14" />
                <rect x="250" y="500" width="60" height="60" rx="12" />
                <rect x="1300" y="200" width="40" height="40" rx="8" />
                <path d="M418 600 Q500 700 900 600" fill="none" />
                <path d="M280 540 Q350 400 700 420" fill="none" />
              </g>
              <g fill="#bae6fd">
                <circle cx="320" cy="220" r="4" />
                <circle cx="1180" cy="620" r="3" />
                <circle cx="950" cy="210" r="2.5" />
                <circle cx="650" cy="420" r="3" />
                <circle cx="270" cy="530" r="2.5" />
                <circle cx="1320" cy="220" r="2" />
              </g>
            </g>
          </svg>
        </div>

        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[var(--brand-blue)]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                บริษัท <span className="text-[var(--brand-blue)]">BCI</span>
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-[var(--brand-blue)] to-cyan-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                เรามุ่งมั่นในการนำเสนอโซลูชั่นที่มีคุณภาพสูงสุด เพื่อขับเคลื่อนธุรกิจของคุณไปสู่ความสำเร็จด้วยเทคโนโลยีที่ทันสมัย
              </p>
            </div>
          </FadeInSection>

          {/* Part 1: Grid Cards (Work, Objectives, Advantage) */}
          {/* Using a clean 3-column grid layout instead of staggered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[infoSections[0], infoSections[1], infoSections[3]].map((section, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div
                  className={`group relative h-full bg-white rounded-[2rem] p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-slate-100 ${idx === 0 ? 'md:mt-12 lg:mt-16' : idx === 1 ? 'md:mt-6 lg:mt-8' : ''} ${idx === 2 ? 'z-30' : idx === 1 ? 'z-20' : 'z-10'}`}
                >
                  {/* Hover Gradient Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-[var(--brand-blue)]/20 rounded-[2rem]"></div>

                  {/* Subtle Background Icon */}
                  <div className="absolute -bottom-6 -right-6 text-slate-50 group-hover:text-[var(--brand-blue)]/5 transition-colors duration-500">
                    <section.icon className="w-48 h-48 opacity-50 transform -rotate-12" />
                  </div>

                  {/* Header */}
                  <div className="relative z-10 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100">
                      <section.icon className="w-8 h-8" style={{ color: colorMap[section.color] }} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{section.title}</h3>
                    <div className="w-12 h-1 rounded-full bg-slate-200 group-hover:bg-[var(--brand-blue)] group-hover:w-20 transition-all duration-500"></div>
                  </div>

                  {/* Body */}
                  <div className="relative z-10">
                    {section.items ? (
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colorMap[section.color] }} />
                            <span className="text-[15px] font-medium leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-600 text-[16px] font-medium leading-relaxed">
                        {highlightText(section.content || "")}
                      </p>
                    )}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Part 2: Detailed Feature Sections (Organization, Consulting) */}
          <div className="space-y-32">
            {[infoSections[2], infoSections[4]].map((section, idx) => (
              <FadeInSection key={idx} delay={0.2}>
                <div className={`flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-20 items-start`}>

                  {/* Main Narrative Column */}
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-full">
                      <section.icon className="w-5 h-5" style={{ color: colorMap[section.color] }} />
                      <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">{section.title}</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-2">
                        {idx === 0 ? "ผู้นำด้านเทคโนโลยี" : "ผู้เชี่ยวชาญตัวจริง"}
                      </span>
                      {section.title}
                    </h3>

                    <div className="prose prose-lg text-slate-600 font-medium leading-relaxed">
                      <p>{highlightText(section.content || "")}</p>

                    </div>


                  </div>

                  {/* Highlight/Insight Box Column */}
                  <div className="flex-1 w-full">
                    <div
                      className="relative p-10 rounded-[2.5rem] overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${colorMap[section.color]}08 0%, #fff 100%)`,
                        boxShadow: `0 20px 60px -10px ${colorMap[section.color]}20`
                      }}
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--brand-blue)]/5 rounded-full blur-2xl -ml-10 -mb-10"></div>

                      {/* Overlay Watermark */}
                      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[2.5rem]">
                        {/* Top Right Shape */}
                        <div
                          className="absolute -top-6 -right-6 w-28 h-28 rounded-3xl rotate-12"
                          style={{ backgroundColor: colorMap[section.color], opacity: 0.5 }}
                        ></div>
                        {/* Bottom Left Shape */}
                        <div
                          className="absolute -bottom-8 -left-8 w-20 h-20 rounded-2xl rotate-[-12deg]"
                          style={{ backgroundColor: colorMap[section.color], opacity: 0.5 }}
                        ></div>
                      </div>

                      {/* Watermark Circle SVG */}
                      <svg
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                        width="220" height="220" viewBox="0 0 220 220" fill="none"
                        style={{ opacity: 0.18 }}
                        aria-hidden="true"
                      >
                        <circle cx="110" cy="110" r="90" stroke="#38bdf8" strokeWidth="3" fill="#e0f2fe" />
                        <circle cx="110" cy="110" r="60" stroke="#bae6fd" strokeWidth="2" fill="none" />
                        <circle cx="110" cy="110" r="30" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
                        <circle cx="110" cy="110" r="6" fill="#bae6fd" />
                      </svg>

                      <div className="relative z-10">
                        <div className="mb-8">
                          <h4 className="text-xl font-extrabold text-slate-900 mb-2">
                            {idx === 0 ? "ความเชี่ยวชาญเฉพาะทาง" : "บริการครบวงจร"}
                          </h4>
                          <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: colorMap[section.color] }}></div>
                        </div>

                        <div className="text-slate-600 text-base md:text-lg font-medium leading-relaxed whitespace-pre-wrap">
                          {highlightText(section.subContent || "")}
                        </div>

                        {idx === 1 && (
                          <div className="mt-8 pt-8 border-t border-slate-200/60">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <UserRoundCheck className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">ทีมงานมืออาชีพ</div>
                                <div className="text-sm text-slate-500">พร้อมดูแลระบบ Network ของท่าน</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </FadeInSection>
            ))}
          </div>

        </div>
      </div>

      {/* Company Description Summary */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 italic text-center">Company <span className="text-[var(--brand-blue)]">description</span></h2>
            <div className="mb-12 inline-block">
              <Image
                src="/img/bci_logo.png"
                alt="BCI Logo"
                width={250}
                height={250}
                className="mx-auto w-[150px] md:w-[150px] h-auto"
              />
            </div>
            <div className="space-y-5 text-base md:text-lg text-slate-600 font-medium italic leading-relaxed text-center">
              <p>
                ด้วยประสบการณ์กว่า 19 ปี โดยทีมงานมืออาชืพที่มีความสามารถ ความเชี่ยวชาญ ในการให้คำปรึกษาและฝึกอบรม
              </p>
              <p>
                อันจะนำท่านไปสู่การพัฒนาศักยภาพในการแข่งขันขององค์กร และพัฒนาระบบการทำงานให้เจริญเติบโตอย่างต่อเนื่องและยั่งยืน
              </p>
            </div>
            <div className="mt-15 inline-block px-8 py-6 bg-[var(--brand-blue)]/80 text-white rounded-[2rem] shadow-xl shadow-blue-200/40 relative overflow-hidden group">
              <p className="text-lg md:text-xl font-bold italic leading-tight tracking-tight relative z-10">
                "เราจึงมีความเชื่อมั่นว่า เราจะสามารถแก้ปัญหาให้ท่านได้อย่างตรงจุด <br className="hidden md:block" /> ภายในระยะเวลาอันสั้น"
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Awards & Recognition Gallery */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-16 text-center md:text-left">
              <div className="hidden md:flex items-center gap-3">
                <div className="hidden md:flex p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 italic">รางวัลและการยกย่อง</h2>
              </div>
              <p className="text-slate-500 font-medium italic capitalize mt-2 md:mt-0">ความภูมิใจและการรับรองมาตรฐานระดับสากล</p>
            </div>
          </FadeInSection>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-6">
            {awards.map((award, idx) => (
              <FadeInSection key={idx} delay={idx * 0.05}>
                <div className="break-inside-avoid mb-6">
                  <a
                    href={`/img/award/${award}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-zoom-in transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={`/img/award/${award}`}
                        alt="BCI Award"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                    </div>
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}