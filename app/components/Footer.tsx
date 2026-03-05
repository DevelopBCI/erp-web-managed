import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-kanit bg-slate-950 text-slate-400 border-t border-slate-900 overflow-hidden relative">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo & About */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <Image
                  src="/img/bci_logo.png"
                  alt="BCI Logo"
                  width={50}
                  height={50}
                  className="w-8 h-auto"
                />
              </div>
              <span className="text-white font-black text-lg tracking-tight">
                <span className="text-[var(--brand-blue)]">BCI</span> COMPANY
              </span>
            </div>
            <p className="max-w-md text-xs md:text-sm leading-relaxed font-medium">
              ผู้นำด้านการพัฒนาซอฟต์แวร์บริหารจัดการองค์กร (ERP) และโซลูชั่น AI
              สำหรับภาคอุตสาหกรรมไทย ด้วยประสบการณ์และความเชี่ยวชาญกว่า 19 ปี
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest border-l-2 border-[var(--brand-blue)] pl-3">
              ช่วยเหลือ & นโยบาย
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacypolicy" className="text-[13px] hover:text-[var(--brand-blue)] transition-colors duration-300 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-[13px] hover:text-[var(--brand-blue)] transition-colors duration-300 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest border-l-2 border-[var(--brand-blue)] pl-3">
              ช่องทางการติดตาม
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/q.soft/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-all duration-500 group"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook text-base transform group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-wide">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-white">Copyright © 2014–{currentYear}</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-700" />
            <span className="uppercase text-slate-500">Business Competitive Intelligence Co., Ltd.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

