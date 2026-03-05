"use client";

import { GraduationCap, Clock, BarChart, ChevronRight } from "lucide-react";
import FadeInSection from "@/app/components/FadeInSection";
import Link from "next/link";

const courses = [
  {
    title: "AI for Executive Course",
    desc: "หลักสูตร AI สำหรับผู้บริหาร เพื่อสร้างความเข้าใจในการนำ AI ไปประยุกต์ใช้ในการวางแผนกลยุทธ์และการบริหารองค์กรในยุคดิจิทัล",
    duration: "2 วัน",
    level: "Executive",
    image: "/img/course/Executive.jpg",
    href: "/executive",
    color: "bg-blue-600"
  },
  {
    title: "Utilizing Generative AI for your jobs",
    desc: "เจาะลึกการใช้ Generative AI ในการทำงานประจำวัน เพื่อเพิ่มประสิทธิภาพ ความคิดสร้างสรรค์ และความรวดเร็วในการทำงานอย่างก้าวกระโดด",
    duration: "1 วัน",
    level: "All Level",
    image: "/img/course/Utilizing.jpg",
    href: "/utilizing",
    color: "bg-purple-600"
  },
  {
    title: "LLMs in your organization",
    desc: "เรียนรู้การนำ Large Language Models (LLMs) มาติดตั้งและใช้งานภายในองค์กร เพื่อสร้างระบบฐานความรู้และความปลอดภัยของข้อมูลขั้นสูง",
    duration: "2 วัน",
    level: "Intermediate",
    image: "/img/course/LLMs.jpg",
    href: "/llms",
    color: "bg-pink-500"
  },
];

export default function CoursePage() {
  return (
    <div className="min-h-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-kanit">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[var(--brand-blue)] mb-4">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4 uppercase tracking-tight">Course อบรม</h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              ยกระดับศักยภาพบุคลากรและองค์กรของคุณด้วยหลักสูตรอบรมด้านเทคโนโลยีและ AI ที่ออกแบบมาเป็นพิเศษเพื่อการใช้งานจริง
            </p>
            <div className="w-24 h-1.5 bg-[var(--brand-blue)] mx-auto mt-8 rounded-full"></div>
          </div>
        </FadeInSection>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <FadeInSection key={course.title} delay={index * 0.1}>
              <Link href={course.href} className="block group h-full">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-sm font-medium flex items-center gap-2">
                        ดูรายละเอียด <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className={`absolute top-4 left-4 ${course.color} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
                      {course.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[var(--brand-blue)] transition-colors leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                      {course.desc}
                    </p>

                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                          <Clock className="w-3.5 h-3.5 text-[var(--brand-blue)]" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                          <BarChart className="w-3.5 h-3.5 text-[var(--brand-blue)]" />
                          <span>{course.level}</span>
                        </div>
                      </div>

                      <div
                        className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all duration-300"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        {/* Contact Info */}

      </div>
    </div>
  );
}
