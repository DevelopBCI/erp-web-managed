"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Clock,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  ChevronDown,

  Tag
} from "lucide-react";

type Props = {
  data: {
    title: string;
    positions: number;
    description: string;
    workType: string;
    responsibilities: string;
    benefits: string;
    qualifications: string;
    contact: string;
    status: string;
    image: string;
    tags?: string[] | string;
  };
  index?: number;
};

export default function CareerCard({ data, index = 0 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isReverse = index % 2 === 1;

  return (
    <div className={`relative rounded-3xl shadow-sm border overflow-hidden hover:shadow-xl transition-all duration-500 group ${isReverse
      ? "bg-gradient-to-br from-[var(--brand-blue)] to-[#0c86d1] border-blue-400 text-white"
      : "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-100"
      }`}>
      {/* Decorative elements */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none ${isReverse ? "bg-white/10" : "bg-blue-200/10"}`}></div>
      <div className={`absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none ${isReverse ? "bg-white/10" : "bg-blue-100/10"}`}></div>

      {/* STATUS BADGE */}
      <div className={`absolute top-0 z-20 ${isReverse ? "left-0" : "right-0"}`}>
        <div
          className={`bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 shadow-sm ${isReverse ? "rounded-br-2xl" : "rounded-bl-2xl"
            }`}
        >
          {data.status}
        </div>
      </div>

      {/* ================= TOP SECTION ================= */}
      <div
        className={`flex flex-col md:flex-row ${isReverse ? "md:flex-row-reverse" : ""
          }`}
        style={{ alignItems: "stretch" }}
      >
        {/* IMAGE */}
        <div className={`relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden flex items-center justify-center p-6 flex-shrink-0 ${isReverse ? "bg-white/10" : "bg-white/60"
          }`}>
          <img
            src={data.image}
            alt={data.title}
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* CONTENT */}
        <div className="p-10 flex-1 flex flex-col md:w-2/3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
            <h3 className={`text-2xl font-bold transition-colors ${isReverse ? "text-white" : "text-slate-800 group-hover:text-[var(--brand-blue)]"
              }`}>
              {data.title}
            </h3>
            <a
              href={`mailto:${data.contact?.split(',')[0]?.trim() || 'hr@bcicompany.com'}?subject=สมัครงานตำแหน่ง ${data.title}`}
              className={`w-fit px-6 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${isReverse
                ? "bg-white text-[var(--brand-blue)] shadow-blue-900/20 hover:bg-blue-50"
                : "bg-[var(--brand-blue)] text-white shadow-blue-200"
                }`}
            >
              <Mail className="w-5 h-5" />
              สมัครตำแหน่งนี้
            </a>
          </div>

          <div className={`flex items-center gap-2 text-sm mb-8 ${isReverse ? "text-blue-100" : "text-slate-500"}`}>
            <Users className="w-4 h-4" />
            <span>{data.positions} ตำแหน่ง</span>
            <span className={`mx-2 ${isReverse ? "text-white/30" : "text-slate-300"}`}>|</span>
            <Clock className="w-4 h-4" />
            <span>{data.workType?.split("/")[1]?.trim() || data.workType || '-'}</span>
          </div>

          <p className={`leading-relaxed text-sm mb-6 ${isReverse ? "text-white/90" : "text-slate-600"}`}>
            {data.description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(() => {
              const tagsArray = Array.isArray(data.tags)
                ? data.tags
                : (typeof data.tags === 'string' ? data.tags.split(',').map(t => t.trim()).filter(Boolean) : []);

              return tagsArray.map((tag: string, i: number) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 text-[10px] rounded-lg font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105 ${isReverse
                    ? "bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                    : "bg-blue-50 text-[var(--brand-blue)] border border-blue-100"
                    }`}
                >
                  #{tag}
                </span>
              ));
            })()}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`mt-auto flex items-center justify-between py-3 px-4 rounded-xl font-bold transition-all ${isReverse
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-blue-100 text-[var(--brand-blue)] hover:bg-blue-200"
              }`}
          >
            <span>{isExpanded ? "ย่อรายละเอียด" : "ดูรายละเอียดงาน"}</span>
            <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      {/* ================= FULL WIDTH DETAIL ================= */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200"
          >
            <div className={`py-12 px-10 text-sm ${isReverse
              ? "bg-slate-900/50 text-white"
              : "bg-blue-50/50"
              }`}>
              <div className="flex flex-col md:flex-row gap-12">
                {/* LEFT */}
                <div className="flex-1 space-y-10">
                  <section>
                    <h4 className={`flex items-center gap-3 font-bold text-base mb-5 ${isReverse ? "text-white" : "text-slate-900"
                      }`}>
                      <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      </div>
                      หน้าที่และความรับผิดชอบ
                    </h4>
                    <div className="space-y-2">
                      {data.responsibilities.split("\n").filter(line => line.trim()).map((line, i) => (
                        <p key={i} className={`ml-10 flex items-start ${isReverse ? "text-white/90" : "text-slate-600"}`}>
                          <span className="text-blue-400 mr-3 font-bold">•</span>
                          <span className="leading-relaxed">{line.trim()}</span>
                        </p>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className={`flex items-center gap-3 font-bold text-base mb-5 ${isReverse ? "text-white" : "text-slate-900"
                      }`}>
                      <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-orange-500" />
                      </div>
                      คุณสมบัติ
                    </h4>
                    <div className="space-y-2">
                      {data.qualifications.split("\n").filter(line => line.trim()).map((line, i) => (
                        <p key={i} className={`ml-10 flex items-start ${isReverse ? "text-white/90" : "text-slate-600"}`}>
                          <span className="text-orange-400 mr-3 font-bold">•</span>
                          <span className="leading-relaxed">{line.trim()}</span>
                        </p>
                      ))}
                    </div>
                  </section>
                </div>

                {/* DIVIDER */}
                <div className="hidden md:flex w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent" />

                {/* RIGHT */}
                <div className="flex-1 space-y-10">
                  <section>
                    <h4 className={`flex items-center gap-3 font-bold text-base mb-5 ${isReverse ? "text-white" : "text-slate-900"
                      }`}>
                      <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Tag className="w-5 h-5 text-green-500" />
                      </div>
                      สวัสดิการ
                    </h4>
                    <div className="space-y-2">
                      {data.benefits.split("\n").filter(line => line.trim()).map((line, i) => (
                        <p key={i} className={`ml-10 flex items-start ${isReverse ? "text-white/90" : "text-slate-600"}`}>
                          <span className="text-green-400 mr-3 font-bold">•</span>
                          <span className="leading-relaxed">{line.trim()}</span>
                        </p>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className={`flex items-center gap-3 font-bold text-base mb-4 ${isReverse ? "text-white" : "text-slate-900"
                      }`}>
                      <div className="w-7 h-7 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      ติดต่อ
                    </h4>
                    <div className={`space-y-3 ml-10 ${isReverse ? "text-white/90" : "text-slate-700"}`}>
                      {data.contact?.split(',').map((c, i) => {
                        const contact = c.trim();
                        const isEmail = contact.includes('@');
                        return (
                          <div key={i} className="flex items-center gap-3 transition-colors hover:text-brand">
                            {isEmail ? (
                              <Mail className={`w-4 h-4 flex-shrink-0 ${isReverse ? "text-blue-200" : "text-blue-500"}`} />
                            ) : (
                              <Phone className={`w-4 h-4 flex-shrink-0 ${isReverse ? "text-blue-200" : "text-blue-500"}`} />
                            )}
                            <span className="text-sm font-medium">{contact}</span>
                          </div>
                        );
                      })}
                      {!data.contact && <p className="text-slate-400 italic">ไม่ได้ระบุข้อมูลติดต่อ</p>}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
