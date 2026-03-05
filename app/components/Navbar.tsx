"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import FloatingIcons from "./FloatingIcons";

const navItems = [
  { label: "คุณสมบัติ", href: "/#features" },
  { label: "ติดต่อเรา", href: "/#contact" },
  { label: "บริการ", href: "/service" },
  { label: "ดาวน์โหลด", href: "/document" },
  { label: "ผลงานเรา", href: "/site" },
  { label: "คำรับรองลูกค้า", href: "/testimonials" },
  { label: "บทความ", href: "/blog" },
  { label: "COURSE อบรม", href: "/course" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ถาม-ตอบ", href: "/faqs" },
  { label: "Job Opportunities", href: "/career" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/" || pathname === "";

  // Decide navbar appearance based on scroll and page
  // On Home: Transparent at top, White when scrolled.
  // On Other pages: Always white (standard practice if no hero image, but if we want consistent ERP style which implies hero everywhere, we might stick to transparency. 
  // However, looking at the file list (e.g. about.html), they likely have headers. 
  // For safety in this Next.js app without knowing all page layouts, I'll default to 'White' on non-home pages unless scrolled.
  // Actually, ERP site seems to share the header style. Let's stick to the scroll rule for Home. For others, let's keep it white to be safe, or check requirements. 
  // The plan said: "If !isScrolled && isHome: Background transparent... If isScrolled || !isHome: Background white"
  const isTransparent = isHome && !isScrolled;

  const navbarClasses = isTransparent
    ? "bg-transparent border-transparent text-white"
    : "bg-white border-b border-[#e7eaec] text-[#676a6c]";

  const mainLinks = navItems.slice(0, 2);
  const otherLinks = navItems.slice(2, 7);
  const moreLinks = navItems.slice(7);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] ${navbarClasses}`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex items-start justify-between">
          <FloatingIcons />
          {/* Logo - Hanging Tab Style with Animation */}
          <div className="navbar-header">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-center bg-[var(--brand-blue)] text-white font-bold font-kanit shadow-sm
                ${isTransparent
                  ? "px-5 py-4 text-sm rounded-b-md"
                  : "mt-[10px] px-4 py-3 text-sm rounded-md"
                }
              `}
            >
              BCI
            </Link>
          </div>


          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            {isHome ? (
              <>
                {mainLinks.map((item) => {
                  const isActive = pathname === item.href;
                  // ERP Active style: border-top 6px solid #0e9aef
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium font-kanit uppercase tracking-wider border-t-[6px] transition-all duration-300 ease-in-out
                        ${isTransparent ? "px-3 pt-[25px] pb-[15px]" : "px-3 py-[20px]"}
                        ${isActive
                          ? "border-[var(--brand-blue)] bg-transparent"
                          : "border-transparent hover:text-[var(--brand-blue)]"
                        }
                        ${!isTransparent && !isActive && "text-[#676a6c]"}
                        ${isTransparent && !isActive && "text-white hover:text-[var(--brand-blue)]"}
                      `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </>
            ) : (
              <Link
                href="/"
                className={`text-sm font-medium font-kanit uppercase tracking-wider border-t-[6px] border-transparent hover:text-[var(--brand-blue)] transition-all duration-300 ease-in-out
                 ${isTransparent ? "px-3 pt-[25px] pb-[15px] text-white" : "px-3 py-[20px] text-[#676a6c]"}
                 `}
              >
                กลับหน้าหลัก
              </Link>
            )}

            {otherLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium font-kanit uppercase tracking-wider border-t-[6px] transition-all duration-300 ease-in-out
                    ${isTransparent ? "px-3 pt-[25px] pb-[15px]" : "px-3 py-[20px]"}
                    ${isActive
                      ? "border-[var(--brand-blue)] bg-transparent"
                      : "border-transparent hover:text-[var(--brand-blue)]"
                    }
                     ${!isTransparent && !isActive && "text-[#676a6c]"}
                     ${isTransparent && !isActive && "text-white hover:text-[var(--brand-blue)]"}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className={`text-sm font-medium font-kanit uppercase tracking-wider border-t-[6px] border-transparent transition-all duration-300 ease-in-out hover:text-[var(--brand-blue)] outline-none
                 ${isTransparent ? "px-3 pt-[25px] pb-[15px] text-white" : "px-3 py-[20px] text-[#676a6c]"}
                 `}
              >
                เพิ่มเติม ▾
              </button>

              {/* Hover/Click Dropdown */}
              <div
                className={`absolute right-0 top-full mt-0 w-52 rounded-b-lg border border-slate-200
                  bg-white shadow-lg
                  ${dropdownOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                  } group-hover:visible group-hover:opacity-100`}
              >
                {moreLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-3 text-sm font-kanit border-l-4
                        hover:bg-slate-50 hover:text-[var(--brand-blue)] hover:border-[var(--brand-blue)]
                        ${isActive
                          ? "bg-blue-50 text-[var(--brand-blue)] border-[var(--brand-blue)]"
                          : "text-[#676a6c] border-transparent"
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Mobile button */}
          <div className="lg:hidden flex items-center h-16">
            <button
              onClick={() => setOpen((v) => !v)}
              className={`rounded border px-4 py-2 text-sm font-semibold font-kanit transition
                ${isTransparent
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-slate-200 text-[#676a6c] hover:bg-slate-100"
                }`}
            >
              {open ? "ปิดเมนู" : "เมนู"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <nav className="mt-2 grid gap-1 rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
              {[...mainLinks, ...otherLinks, ...moreLinks].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium font-kanit
                      hover:bg-slate-50 hover:text-[var(--brand-blue)]
                      ${isActive
                        ? "bg-[var(--brand-blue)]/50 text-[var(--brand-blue)] font-bold"
                        : "text-[#676a6c]"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

