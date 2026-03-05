
'use client';

const sections = [
  {
    id: "client-a",
    title: "ลิฟเบทเทอร์อินดัสตรีส์ จำกัด",
    person: "คุณสมศักดิ์ จันอินทร์",
    role: "กรรมการผู้จัดการบริษัท",
    image: "/img/testimonials/Liv.png",
    quote: '"Software และ Hardware มีความเกี่ยวข้องกับ Productivity เราต้องยอมรับว่า Productivity เป็นสิ่งสำคัญ เราต้องทำอย่างต่อเนื่อง เพราะว่าคุณภาพเป็นการพัฒนาที่ไม่มีคำว่าสิ้นสุด"',
    videoId: "g_a1QBpl3pI",
  },
  {
    id: "client-b",
    title: "สยามแฟชั่น จิวเวอร์รี่ จำกัด",
    person: "คุณหรรษา วรัญญูวงศ์ & คุณปิยนุช วรัญญูวงศ์",
    role: "รองกรรมการผู้จัดการ & ผู้จัดการโรงงาน",
    image: "/img/testimonials/Siam.png",
    quote: '"ตอบโจทย์ ราคาสมเหตุสมผล ซึ่งเดิมทีระบบ Manual ทำให้เกิด Human Error การคำนวณผิด ข้อมูลเกิดความผิดพลาด แต่หลังจากใช้โปรแกรม โปรแกรมเข้ามาช่วยเช็คความผิดพลาดต่างๆ ทำให้ Monitor ได้ทัน ข้อมูลถูกต้องครบถ้วน และยังลดต้นทุนในส่วนของการผลิต"',
    videoId: "PFLGCux2UPg",
  },
  {
    id: "client-c",
    title: "ยูโรเซีย ฟู้ดส์เทรดดิ้ง แอนด์เอเจนซี่ จำกัด",
    person: "คุณสุนีย์ รุ่งเรืองไพฑูรย์",
    role: "กรรมการผู้จัดการบริษัท",
    image: "/img/testimonials/foodding.jpg",
    quote: '"รู้สึกเลยว่า เราเข้าใจในส่วนของเทคโนโลยีได้ง่ายขึ้น เพราะมีผู้เชียวชาญเข้ามาสอนการใช้งาน ทำให้เราเปิดกว้างในเรื่องของการใช้งานซอฟท์แวร์นี้"',
    videoId: "zmi6ViYoxR4",
  },
  {
    id: "client-d",
    title: "ร่วมกำชัย จำกัด",
    person: "คุณนิชฌาน ศิริสกุลงาม",
    role: "กรรมการผู้จัดการ",
    image: "/img/testimonials/rkc.png",
    quote: '"นอกจากซอฟต์แวร์สำเร็จรูปที่ขึ้นระบบได้เร็วแล้ว ยัง Customize งานให้ฝ่ายขายสามารถส่ง order ได้ real time, สะดวกขึ้น ประหยัดเวลา และมีความแม่นยำ"',
    videoId: null,
  },
  {
    id: "client-e",
    title: "ทีเบลโก้ จำกัด",
    person: "คุณณรงค์ศักดิ์ ภาคภพ",
    role: "รองประธานบริหารและผู้จัดการทั่วไป",
    image: "/img/testimonials/narongsak.jpg",
    quote: '"ในประเทศไทยเรามีสมาคม เรามีผู้เชี่ยวชาญเรื่องซอฟต์แวร์มากมาย โปรแกรมเมอร์ของคนไทยเก่งครับ และที่สำคัญการเป็นคนไทย สื่อสารกับคนไทย เราก็จะได้ซอฟต์แวร์ตรงความต้องการของคนไทยจริงๆด้วยเช่นกันครับ"',
    videoId: "_B5Txxu0aAs",
  },
  {
    id: "client-f",
    title: "สยามอุตสาหกรรมเทปกาว จำกัด",
    person: "คุณสรณี มะลิรักษ์",
    role: "ผู้จัดการทั่วไป",
    image: "/img/testimonials/siamtab.png",
    quote: '"การใช้ซอฟต์แวร์ของ BCI นำมาซึ่งการเพิ่มประสิทธิภาพขององค์กร ไม่ว่าจะเป็นการวางแผนการผลิตที่แม่นยำขึ้น ทำให้ลดต้นทุนการจัดเก็บสินค้า ลดปัญหาของเสียจากการผลิต"',
    videoId: "ahY3MGDZUx0",
  },
];

import FadeInSection from "../components/FadeInSection";

export default function TestimonialsPage() {

  return (
    <div className="font-kanit bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12 p-6 md:p-12 max-w-7xl mx-auto">
        {/* ===== LEFT + CENTER ===== */}
        <main>
          <FadeInSection>
            <div className="mb-16">
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[var(--brand-blue)] transition-colors group-hover:bg-blue-100">
                  <i style={{ fontSize: 32 }} className="fa fa-comments-o" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                    Customers Testimonials
                  </h1>
                  <p className="text-lg text-slate-500 font-medium tracking-wide">
                    คำรับรองจากลูกค้า
                  </p>
                </div>
              </div>
              <div className="h-1 w-20 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }}></div>
            </div>
          </FadeInSection>

          <div className="space-y-0">
            {sections.map((s, idx) => (
              <FadeInSection key={s.id} delay={idx * 0.1}>
                <section
                  id={s.id}
                  className={`scroll-mt-24 py-16 ${idx !== sections.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
                    {/* ===== LEFT: PERSON IMAGE ===== */}
                    <div className="text-center md:text-left">
                      <div className="relative inline-block mb-6 group">
                        <img
                          src={s.image}
                          alt={s.person}
                          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-full border-2 opacity-20 border-slate-300 pointer-events-none"></div>
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-lg font-bold" style={{ color: "var(--brand-blue)" }}>
                          {s.person}
                        </strong>
                        <p className="text-sm text-slate-500 font-medium">
                          {s.role}
                        </p>
                      </div>
                    </div>

                    {/* ===== CENTER: CONTENT ===== */}
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <span className="w-1 h-6 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }}></span>
                        {s.title}
                      </h2>

                      <div className="relative mb-8">
                        <i
                          className="fa fa-quote-left absolute -left-8 -top-4 opacity-10 text-6xl"
                          style={{ color: "var(--brand-blue)" }}
                        ></i>
                        <p className="text-xl text-slate-600 leading-relaxed italic pl-0 md:pl-2 relative z-10">
                          {s.quote}
                        </p>
                      </div>

                      {s.videoId && (
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-100 mt-auto">
                          <iframe
                            src={`https://www.youtube.com/embed/${s.videoId}`}
                            title={s.title}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </FadeInSection>
            ))}
          </div>
        </main>


        {/* ===== RIGHT: TOC ===== */}
        <aside className="hidden lg:block relative">
          <div className="sticky top-24 pt-4 border-l border-slate-100 pl-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
              รายชื่อลูกค้า
            </p>

            <ul className="space-y-4">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center text-sm text-slate-500 hover:text-[var(--brand-blue)] transition-all duration-300"
                  >
                    <span
                      className="w-0 h-[2px] mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"
                      style={{ backgroundColor: "var(--brand-blue)" }}
                    ></span>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {s.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <style jsx global>{`
          html { scroll-behavior: smooth; }
        `}</style>
      </div>
    </div>
  );
}
