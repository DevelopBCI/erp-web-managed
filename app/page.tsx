"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Youtube, Facebook, Send, Building2, Settings, BarChart3, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/app/components/FadeInSection";
import FloatingIcons from "@/app/components/FloatingIcons";

export default function Home() {
  //ข้อมูลสไลด์ 
  const slides = [
    {
      id: 1,
      title: "SOFTWARE ERP\nQSOFT, MRP, APS, PM, POS, WMS\nและ USER INTERFACE ที่ดูง่ายต่อการใช้งาน\nเราพร้อมที่จะให้บริการคุณ",
      description: "ด้วยประสบการณ์กว่า 10 ปี โดยทีมงานมืออาชืพที่มีความสามารถ ความเชี่ยวชาญ ในการให้คำปรึกษาและฝึกอบรม",
      imageUrl: "/img/placeholder/header_one.jpg",
      link: "/about",
      linkText: "อ่านเพิ่มเติม",
      showLaptop: true,
    },
    {
      id: 2,
      title: "เรามีความเชื่อมั่น\nว่าเราจะสามารถแก้ปัญหาให้ท่านได้อย่างตรงจุด\nภายในระยะเวลาอันสั้น",
      description: "เพื่อนำท่านไปสู่การพัฒนาศักยภาพในการแข่งขันขององค์กร\nและพัฒนาระบบการทำงานให้เจริญเติบโตอย่างต่อเนื่องและยั่งยืน",
      imageUrl: "/img/placeholder/header_three.jpg",
      link: "/about",
      linkText: "อ่านเพิ่มเติม",
    },
    {
      id: 3,
      title: "อบรม Power BI\nสำหรับโปรแกรมบัญชี WINSpeed\nและ myAccount",
      description: "รับลงทะเบียนล่วงหน้าจำนวน 20 คน จนกว่าจะครบ",
      imageUrl: "/img/placeholder/header_two.jpg",
      link: "/resgiter-bi",
      linkText: "ลงทะเบียน",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [contactData, setContactData] = useState({
    company_name: "",
    address: "",
    sales_phone: "",
    support_phone: "",
    facebook: "",
    youtube: "",
    google_maps: ""
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        // เปลี่ยน URL ให้ตรงกับ backend จริง เช่น http://localhost/backend/contact.php
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact.php`);
        const data = await res.json();
        if (!data.error) setContactData(data);
      } catch (e) {
        console.error("API Error:", e);
      }
    };
    fetchContact();
  }, []);

  const services = [
    { id: "1", label: "Q.Soft MRP - Manufacturing Resource Planning" },
    { id: "2", label: "Q.Soft APS - Advanced Planning and Scheduling" },
    { id: "3", label: "Q.Soft PM - Plant Maintenance" },
    { id: "4", label: "Q.Soft POS - Point of Sale" },
    { id: "5", label: "Q.Soft WMS - Warehouse Management System" },
    { id: "6", label: "Q.Soft VFS - Village Fund System" },
    { id: "7", label: "Q.Soft POS for Restaurant" },
    { id: "8", label: "WINSPEED" },
    { id: "9", label: "myAccount" },
    { id: "10", label: "HRMI" },
    { id: "11", label: "Industrial Internet of things" },
  ];

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (i: number) => {
    if (isTransitioning || i === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex(i);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000); // 6 วินาที

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="font-kanit">
      <FloatingIcons />
      {/* ===== Slide ===== */}
      <div className="relative overflow-hidden w-full h-[470px] text-white">
        {/* Background Images with Fade Transition */}
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover brightness-75"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center px-6 md:px-20 lg:px-32 z-10">
          {/* Text Container */}
          <div
            className={`flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
          >
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 md:mb-5 leading-tight drop-shadow-2xl whitespace-normal md:whitespace-pre-line break-words max-w-2xl">
              {slides[index].title}
            </h1>
            <p className="text-sm md:text-base lg:text-base mb-6 md:mb-8 leading-relaxed drop-shadow-lg whitespace-normal md:whitespace-pre-line break-words max-w-xl text-white/90">
              {slides[index].description}
            </p>
            <Link
              href={slides[index].link}
              className="inline-block bg-[var(--brand-blue)] text-white px-7 py-2.5 md:px-9 md:py-3.5 rounded-xl text-sm md:text-base font-semibold hover:bg-gray-50 hover:text-[var(--brand-blue)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              {slides[index].linkText}
            </Link>
          </div>

          {/* Fixed Laptop Image logic: No unmounting */}
          <div
            className={`hidden lg:flex flex-1 justify-center items-center relative h-full w-full max-h-[350px] transition-all duration-700 ease-out transform ${!isTransitioning && slides[index].showLaptop
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-90 translate-x-10 pointer-events-none"
              }`}
          >
            <div className="relative w-full h-full max-w-[500px]">
              <Image
                src="/img/laptop.png"
                alt="Laptop UI"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center z-20 hover:bg-white/40 transition-all duration-300 shadow-xl hover:scale-110 border-2 border-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center z-20 hover:bg-white/40 transition-all duration-300 shadow-xl hover:scale-110 border-2 border-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${i === index
                ? "w-6 h-2 md:w-8 md:h-2.5 bg-white scale-100 shadow-lg"
                : "w-2 h-2 md:w-2.5 md:h-2.5 bg-white/60 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="space-y-16">

        <div className="relative z-10">
          <section id="features" className="scroll-mt-24 mb-16">
            <section className="my-12 flex flex-col items-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {[
                  { imageUrl: "/img/feature/qsoft_mrp.png", alt: "MRP", label: "Q.Soft MRP", href: "/mrp" },
                  { imageUrl: "/img/feature/qsoft_aps.png", alt: "APS", label: "Q.Soft APS", href: "/aps" },
                  { imageUrl: "/img/feature/qsoft_pm.png", alt: "PM", label: "Q.Soft PM", href: "/pm" },
                  { imageUrl: "/img/feature/qsoft_pos.png", alt: "POS", label: "Q.Soft POS", href: "/pos" },
                  { imageUrl: "/img/feature/qsoft_wms.png", alt: "WMS", label: "Q.Soft WMS", href: "/wms" },
                  { imageUrl: "/img/feature/qsoft_vfs.png", alt: "VFS", label: "Q.Soft VFS", href: "/vfs" },
                  { imageUrl: "/img/feature/qsoft_restaurant.png", alt: "RESTURANT", label: "Q.Soft Restaurant", href: "/restaurant" },
                  { imageUrl: "/img/feature/services_maintenance.png", alt: "Services", label: "Services", href: "/service" },
                  { imageUrl: "/img/feature/RBD-logo.jpg", alt: "RBD", label: "RBD", href: "" },
                  { imageUrl: "/img/feature/win-speed.png", alt: "WINSPEED", label: "WINSpeed", href: "/winspeed" },
                  { imageUrl: "/img/feature/myAccount.png", alt: "MyAccount", label: "myAccount", href: "/myaccount" },
                  { imageUrl: "/img/feature/HRMI.png", alt: "HRMI", label: "HRMI", href: "/hrmi" },
                  { imageUrl: "/img/feature/IoT box final.png", alt: "IoT", label: "IoT", href: "/iiot" },
                ].map((item, idx) => (
                  <FadeInSection key={item.alt + idx} delay={idx * 0.1}>
                    <Link
                      href={item.href || "#"}
                      onClick={(e) => {
                        if (!item.href) e.preventDefault();
                      }}
                      className={`group block ${item.href ? "cursor-pointer" : "cursor-default"}`}
                    >
                      <div className="flex flex-col items-center">
                        <h2 className={`text-xl md:text-2xl font-semibold text-[#676a6c] mb-4 transition-colors ${item.href ? "group-hover:text-[var(--brand-blue)]" : ""}`}>
                          {item.label}
                        </h2>
                        <div className="relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-40 mb-2">
                          <Image
                            src={item.imageUrl}
                            alt={item.alt}
                            fill
                            className={`object-contain transition-transform duration-300 ${item.href ? "group-hover:scale-105" : ""}`}
                            sizes="(max-width: 768px) 100vw, 250px"
                          />
                        </div>
                      </div>
                    </Link>
                  </FadeInSection>
                ))}
              </div>
            </section>
          </section>

          {/* ===== Software Q.Soft Information Section ===== */}
          <section
            id="highlight"
            className="scroll-mt-24 py-12 md:py-16"
          >
            <FadeInSection>
              <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                  <div className="w-[50px] h-[1px] border-b-2 border-[var(--brand-blue)] mx-auto mb-8"></div>
                  <h1 className="text-2xl md:text-3xl font-light text-[#676a6c] mb-3">
                    Software Q.Soft
                    <br />
                    <span className="text-[var(--brand-blue)] font-semibold text-3xl md:text-4xl"> ระบบบริหารโรงงานอุตสาหกรรมและคลังสินค้ารับฝาก</span>
                  </h1>
                  <p className="text-[#aeaeae] text-xs md:text-sm mt-3">
                    We are confident that we can solve the problem, you have a point. Within a short time
                  </p>
                </div>

                {/* Features Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                  {/* Left Column */}
                  <FadeInSection delay={0.1}>
                    <div className="space-y-6">
                      <div className="text-center group p-6 md:p-7 rounded-[2rem] transition-all duration-500 hover:bg-[var(--brand-blue)]/5 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-slate-100/50">
                        <div className="inline-flex items-center justify-center p-3.5 bg-white shadow-sm border border-slate-100 rounded-2xl mb-5 transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white text-[var(--brand-blue)] group-hover:shadow-blue-200">
                          <Building2 className="w-10 h-10" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-3 transition-colors group-hover:text-[var(--brand-blue)]">
                          Q.Soft MRP
                        </h2>
                        <p className="text-slate-500 leading-relaxed font-light text-sm">
                          ผู้ประกอบการภาคอุตสาหกรรมที่กำลังมองหาโปรแกรมบริหารและวางแผนการผลิต (MRP) ที่มีคุณภาพ
                          รับรู้ต้นทุนที่แท้จริง (Actual Cost) ใช้งานง่าย ราคาไม่สูงจนเกินไป เมื่อเทียบกับความสามารถที่ได้รับ q.soft mrp ของเราตอบโจทย์คุณได้
                        </p>
                      </div>
                      <div className="text-center group p-6 md:p-7 rounded-[2rem] transition-all duration-500 hover:bg-[var(--brand-blue)]/5 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-slate-100/50">
                        <div className="inline-flex items-center justify-center p-3.5 bg-white shadow-sm border border-slate-100 rounded-2xl mb-5 transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white text-[var(--brand-blue)] group-hover:shadow-[var(--brand-blue)]-200">
                          <Settings className="w-10 h-10" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-3 transition-colors group-hover:text-[var(--brand-blue)]">
                          Q.Soft PM
                        </h2>
                        <p className="text-slate-500 leading-relaxed font-light text-sm">
                          ระบบที่จะช่วยให้คุณกำหนดแผนการซ่อมบำรุงให้กับเครื่องจักร หรือทรัพย์สินต่างๆ
                          รวมไปถึงการบันทึกและติดตามงานซ่อมบำรุงในเครื่องจักรของคุณได้
                        </p>
                      </div>
                    </div>
                  </FadeInSection>

                  {/* Center Column - Image */}
                  <FadeInSection delay={0.2}>
                    <div className="flex items-center justify-center h-full group cursor-pointer p-4">
                      <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                        <Image
                          src="/img/perspective.png"
                          alt="Q.Soft Dashboard"
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    </div>
                  </FadeInSection>

                  {/* Right Column */}
                  <FadeInSection delay={0.3}>
                    <div className="space-y-6">
                      <div className="text-center group p-6 md:p-7 rounded-[2rem] transition-all duration-500 hover:bg-[var(--brand-blue)]/5 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-slate-100/50">
                        <div className="inline-flex items-center justify-center p-3.5 bg-white shadow-sm border border-slate-100 rounded-2xl mb-5 transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white text-[var(--brand-blue)] group-hover:shadow-blue-200">
                          <BarChart3 className="w-10 h-10" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-3 transition-colors group-hover:text-[var(--brand-blue)]">
                          Q.Soft APS
                        </h2>
                        <p className="text-slate-500 leading-relaxed font-light text-sm">
                          โปรแกรมบริหารการผลิต
                          ที่จะช่วยให้คุณจัดการแผนการผลิตสินค้าที่มีความซับซ้อนในกระบวนการผลิตได้อย่างรวดเร็ว
                          และโปรแกรมสามารถแสดงผลการผลิตให้อยู่ในรูปแบบของกราฟฟิกเพื่อให้ง่ายต่อการบริหารจัดการอีกด้วย
                        </p>
                      </div>
                      <div className="text-center group p-6 md:p-7 rounded-[2rem] transition-all duration-500 hover:bg-[var(--brand-blue)]/5 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-slate-100/50">
                        <div className="inline-flex items-center justify-center p-3.5 bg-white shadow-sm border border-slate-100 rounded-2xl mb-5 transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white text-[var(--brand-blue)] group-hover:shadow-[var(--brand-blue)]-200">
                          <Truck className="w-10 h-10" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-3 transition-colors group-hover:text-[var(--brand-blue)]">
                          Q.Soft WMS
                        </h2>
                        <p className="text-slate-500 leading-relaxed font-light text-sm">
                          การจัดเก็บสินค้าสำหรับธุรกิจรับฝากสินค้า ไม่ว่าจะเป็นสินค้าพิเศษ หรือสินค้าทั่วไป
                          ระบบของเราสามารถบริหารพื้นที่จัดเก็บได้อย่างมีประสิทธิภาพสูงสุด
                        </p>
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              </div>
            </FadeInSection>
          </section>

          {/* ===== Divider Before Contact ===== */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-24"></div>
          </div>

          {/* ===== Contact Us Section ===== */}
          <section
            id="contact"
            className="scroll-mt-24 pb-24 relative"
          >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              {/* Header */}
              <FadeInSection>
                <div className="text-left mb-20">
                  <div className="inline-block px-4 py-1.5 mb-4 text-[11px] font-bold tracking-[0.2em] text-[var(--brand-blue)] uppercase bg-blue-50 rounded-full border border-blue-100 ml-10">
                    Contact Us
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-10 pl-10">
                    ติดต่อเรา
                  </h1>
                  <p className="text-slate-500 text-lg max-w-2xl font-light pl-10">
                    เรามีความเชื่อมั่นว่าเราจะสามารถแก้ปัญหาให้ท่านได้อย่างตรงจุด ภายในระยะเวลาอันสั้น
                  </p>
                  <div className="w-24 h-1.5 bg-[var(--brand-blue)] mt-8 rounded-full ml-10"></div>
                </div>
              </FadeInSection>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
                {/* ===== Left: Contact Info (5 Cols) ===== */}
                <div className="lg:col-span-5 flex flex-col space-y-12">

                  {/* ===== Office Address (NO BOX) ===== */}
                  <FadeInSection delay={0.1}>
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-50 text-[var(--brand-blue)] rounded-xl flex items-center justify-center border border-blue-100 shadow-sm">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">
                          ที่อยู่สำนักงาน
                        </h3>
                      </div>

                      <address className="not-italic text-slate-600 leading-relaxed font-light text-[15px] pl-16">
                        <p className="mb-4 text-slate-500 leading-relaxed">
                          บริการให้คำปรึกษา การเพิ่มประสิทธิภาพภาคการผลิต <br />
                          <span className="font-medium text-slate-700">Q. Soft</span> เป็น Software
                          ที่พัฒนาขึ้นโดยทีมงานที่มีประสบการณ์ด้านการวิเคราะห์ และพัฒนาระบบบริหารการผลิตในภาคอุตสาหกรรมที่หลากหลายผนวกกับทีมงานที่มีประสบการณ์ในการพัฒนา Database Application (โปรแกรมที่มีระบบการจัดเก็บฐานข้อมูลจำนวนมาก)
                        </p>

                        <strong className="block mb-2 text-[var(--brand-blue)] text-[17px]">
                          {contactData.company_name}
                        </strong>

                        {contactData.address} <br />
                        หมายเลขประจำตัวของผู้เสียภาษี 0105545127622
                      </address>
                    </div>
                  </FadeInSection>


                  {/* ===== Sales & Support (NO BOX) ===== */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

                    {/* ===== Sales ===== */}
                    <FadeInSection delay={0.2}>
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center border border-amber-100 shadow-sm">
                            <Phone className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-slate-800">
                            ฝ่ายขาย
                          </h4>
                        </div>

                        <ul className="space-y-2 text-slate-600 font-light text-sm pl-14">
                          {contactData.sales_phone.split(',').map((phone, i) => (
                            <li key={i}>
                              <a href={`tel:${phone.trim().replace(/-/g, '')}`} className="hover:text-[var(--brand-blue)] transition-colors">
                                {phone.trim()}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeInSection>

                    {/* ===== Support ===== */}
                    <FadeInSection delay={0.3}>
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center border border-emerald-100 shadow-sm">
                            <Phone className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-slate-800">
                            ฝ่าย Support
                          </h4>
                        </div>

                        <ul className="space-y-2 text-slate-600 font-light text-sm pl-14">
                          {contactData.support_phone.split(',').map((phone, i) => (
                            <li key={i}>
                              <a href={`tel:${phone.trim().replace(/-/g, '')}`} className="hover:text-[var(--brand-blue)] transition-colors">
                                {phone.trim()}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeInSection>

                  </div>

                  <FadeInSection delay={0.4}>
                    <div className="flex flex-col items-center gap-6 pt-10 border-t border-slate-200 mt-8">
                      <a
                        href="mailto:chopaka_m@q-softthai.com;nurng.t072@gmail.com;chopaka1817@gmail.com"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-gray-50 hover:text-[var(--brand-blue)] transition-all duration-300 hover:scale-105"
                      >
                        <Mail className="w-5 h-5" />
                        ส่งอีเมลถึงเรา
                      </a>
                      <div className="flex gap-6 justify-center">
                        <a href={contactData.facebook} target="_blank" className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm group">
                          <Facebook className="w-7 h-7" />
                        </a>
                        <a href={contactData.youtube} target="_blank" className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300 shadow-sm group">
                          <Youtube className="w-7 h-7" />
                        </a>
                      </div>
                    </div>
                  </FadeInSection>
                </div>

                {/* ===== Right: Modern Form (7 Cols) ===== */}
                <div className="lg:col-span-7">
                  <FadeInSection delay={0.2}>
                    <motion.div
                      whileHover={{
                        y: -5,
                        backgroundColor: "rgba(239, 246, 255, 0.3)",
                        borderColor: "rgba(14, 154, 239, 0.4)",
                        boxShadow: "0 25px 50px -12px rgba(14, 154, 239, 0.15)"
                      }}
                      className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-50 relative transition-all duration-500"
                    >
                      {/* Overlay Watermark */}
                      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[2.5rem]">
                        {/* Top Right Shape */}
                        <div className="absolute -top-6 -right-6 w-28 h-28 bg-[var(--brand-blue)]/50 rounded-3xl rotate-12"></div>
                        {/* Bottom Left Shape */}
                        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[var(--brand-blue)]/50 rounded-2xl rotate-[-12deg]"></div>
                      </div>


                      <h2 className="text-2xl font-bold text-slate-800 mb-10">ติดต่อผู้เชี่ยวชาญของเรา</h2>

                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const form = e.currentTarget as HTMLFormElement;
                          const formData = new FormData(form);

                          const payload = {
                            name: formData.get("name"),
                            phone: formData.get("phone"),
                            email: formData.get("email"),
                            company: formData.get("company"),
                            service: services.find(s => s.id === selectedService)?.label || ""
                          };

                          try {
                            const res = await fetch("http://localhost/api/messages.php", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(payload)
                            });
                            const result = await res.json();
                            if (result.success) {
                              alert(result.message);
                              form.reset();
                              setSelectedService("");
                            } else {
                              alert("เกิดข้อผิดพลาด: " + (result.message || "ไม่สามารถบันทึกข้อมูลได้"));
                            }
                          } catch (error) {
                            console.error("Error:", error);
                            alert("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาลองใหม่ภายหลัง");
                          }
                        }}
                        className="space-y-4"
                      >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Name Input */}
                          <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent rounded-xl"
                              placeholder="ชื่อ-สกุล"
                            />
                            <label
                              htmlFor="name"
                              className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                       peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[var(--brand-blue)] peer-focus:font-bold
                                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                            >
                              ชื่อ-สกุล
                            </label>
                          </div>

                          {/* Phone Input */}
                          <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              required
                              className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent rounded-xl"
                              placeholder="เบอร์โทรศัพท์"
                            />
                            <label
                              htmlFor="phone"
                              className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                       peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                            >
                              เบอร์โทรศัพท์
                            </label>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Email Input */}
                          <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent rounded-xl"
                              placeholder="อีเมล"
                            />
                            <label
                              htmlFor="email"
                              className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                       peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                            >
                              อีเมล
                            </label>
                          </div>

                          {/* Company Input */}
                          <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                            <input
                              type="text"
                              id="company"
                              name="company"
                              required
                              className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent rounded-xl"
                              placeholder="บริษัท"
                            />
                            <label
                              htmlFor="company"
                              className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                       peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[var(--brand-blue)] peer-focus:font-bold
                                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                            >
                              บริษัท
                            </label>
                          </div>
                        </div>

                        {/* Custom Animated Dropdown */}
                        <div className="relative group/field">
                          <div
                            onClick={() => setIsServiceOpen(!isServiceOpen)}
                            className={`relative h-16 bg-slate-50 border border-slate-200 cursor-pointer transition-all duration-300 ${isServiceOpen ? "border-[var(--brand-blue)] bg-white ring-4 ring-[var(--brand-blue)]/50 shadow-xl rounded-t-xl rounded-b-none z-[60]" : "hover:border-[var(--brand-blue)]/50 rounded-xl"}`}
                          >
                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-kanit ${selectedService || isServiceOpen ? "top-1.5 text-[10px] text-[var(--brand-blue)] font-bold" : "top-1/2 -translate-y-1/2 text-sm text-slate-400"}`}>
                              เลือกบริการที่ท่านสนใจ
                            </label>
                            <div className="px-5 pt-6 pb-2 text-slate-900 font-kanit text-sm">
                              {selectedService ? services.find(s => s.id === selectedService)?.label : <span className="text-slate-400"></span>}
                            </div>
                            <div className={`absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 text-slate-400 ${isServiceOpen ? "rotate-180" : ""}`}>
                              <ChevronRight className="w-4 h-4 rotate-90" />
                            </div>
                          </div>

                          {/* Dropdown Menu */}
                          <AnimatePresence>
                            {isServiceOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute left-0 right-0 top-full z-50 bg-white border-2 border-t-0 border-[var(--brand-blue)] shadow-2xl rounded-b-2xl overflow-hidden"
                              >
                                <motion.div
                                  initial="hidden"
                                  animate="visible"
                                  variants={{
                                    visible: { transition: { staggerChildren: 0.05 } }
                                  }}
                                  className="max-h-[165px] overflow-y-auto custom-scrollbar"
                                >
                                  {services.map((service) => (
                                    <motion.div
                                      key={service.id}
                                      variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                      }}
                                      onClick={() => {
                                        setSelectedService(service.id);
                                        setIsServiceOpen(false);
                                      }}
                                      className={`px-5 py-4 text-sm font-kanit cursor-pointer transition-all duration-200 flex items-center gap-3 ${selectedService === service.id ? "bg-[var(--brand-blue)] text-white" : "text-slate-600 hover:bg-blue-50/50 hover:text-[var(--brand-blue)]"}`}
                                    >
                                      {service.label}
                                    </motion.div>
                                  ))}
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Hidden Input for Form Submission */}
                          <input type="hidden" name="service" value={selectedService} />
                        </div>

                        <div className="pt-4">
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[var(--brand-blue)] text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-blue-500/20 hover:bg-white hover:text-[var(--brand-blue)] border-2 border-transparent hover:border-[var(--brand-blue)] transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden"
                          >
                            {/* Simple shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover/btn:translate-x-[200%] transition-transform duration-1000 ease-in-out"
                            />

                            <Send className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12" />
                            <span className="relative z-10 tracking-widest">SUBMIT</span>
                          </motion.button>
                        </div>
                      </form>
                    </motion.div>
                  </FadeInSection>

                  {/* Separate Google Maps Card */}
                  <FadeInSection delay={0.3}>
                    <div className="mt-8 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl h-[400px] relative bg-white p-4">
                      <div data-hide-cursor className="absolute inset-4 rounded-[2rem] overflow-hidden">
                        <iframe
                          src={contactData.google_maps}
                          className="absolute inset-0 w-full h-full border-0"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              </div>

              {/* Bottom Slogan Section */}
              <FadeInSection delay={0.5}>
                <div className="mt-12 text-center border-t border-slate-200 pt-16">
                  <p className="text-slate-400 font-light text-[15px] italic">
                    "เราจะพาคุณไปสู่การพัฒนาศักยภาพในการแข่งขันขององค์กร พัฒนาระบบการทำงานให้เจริญเติบโตอย่างต่อเนื่องและยั่งยืน"
                  </p>
                </div>
              </FadeInSection>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
