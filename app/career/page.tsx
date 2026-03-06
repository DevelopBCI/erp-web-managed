"use client";
import React, { useState, useEffect } from "react";
import CareerCard from "./CareerCard";
import FadeInSection from "@/app/components/FadeInSection";
import { Briefcase, Loader2 } from "lucide-react";

export default function CareerPage() {
  const [careerData, setCareerData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs.php`);
        const data = await response.json();
        if (Array.isArray(data)) {
          // Only show visible jobs on the public career page and sort them
          const visibleJobs = data
            .filter((job: any) => Number(job.is_visible) === 1)
            .sort((a: any, b: any) => Number(a.sort_order || 0) - Number(b.sort_order || 0));
          setCareerData(visibleJobs);
        }
      } catch (error) {
        console.error("Error fetching careers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return (
    <div className="font-kanit bg-[#f8fafc] min-h-screen pb-20">
      {/* Hero Header Section */}
      <div className="bg-white border-b mb-10 overflow-hidden relative">
        <div className="absolute right-0 w-1/3 h-full bg-[var(--brand-blue)]/10 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-8 relative z-10">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="p-3 rounded-xl text-white shadow-lg"
                style={{ backgroundColor: "var(--brand-blue)", boxShadow: `0 10px 20px rgba(14, 154, 239, 0.2)` }}
              >
                <Briefcase className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
              Job <span style={{ color: "var(--brand-blue)" }}>Opportunities</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              ร่วมเป็นส่วนหนึ่งของครอบครัว BCI เรากำลังทีมที่มีความสามารถ
              และพร้อมที่จะเติบโตไปพร้อมกับนวัตกรรมเทคโนโลยีระดับสากล
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-brand animate-spin mb-4" />
            <p className="text-slate-400 font-bold">กำลังโหลดข้อมูลตำแหน่งงาน...</p>
          </div>
        ) : careerData.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {careerData.map((item, idx) => (
              <FadeInSection key={item.id} delay={idx * 0.1}>
                <CareerCard data={item} index={idx} />
              </FadeInSection>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 italic text-slate-400 font-medium">
            ขออภัย ปัจจุบันยังไม่มีตำแหน่งงานว่างที่เปิดรับสมัคร
          </div>
        )}
      </div>
    </div>
  );
}

