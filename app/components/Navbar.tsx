"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import FloatingIcons from "./FloatingIcons";
import LoginModal from "./LoginModal";
import AIRegistrationModal from "./AIRegistrationModal";
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, LogOut, User, ChevronDown, Settings } from 'lucide-react';

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
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading, logout } = useAuth();

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

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-2 ml-2">
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-slate-300 border-t-transparent rounded-full animate-spin" />
              ) : isAuthenticated && user ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all hover:bg-black/5 ${isTransparent ? 'text-white/90 ring-1 ring-white/20' : 'text-slate-700 bg-slate-50 border border-slate-100'}`}
                  >
                    <div className="w-7 h-7 bg-linear-to-tr from-[#0e9aef] to-[#0a82cc] rounded-lg flex items-center justify-center text-white shadow-sm">
                      <User size={14} />
                    </div>
                    <span className="text-sm font-bold font-kanit">
                      {user.contact_name || user.username}
                    </span>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <>
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setShowUserMenu(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 font-kanit"
                        >
                          <div className="p-3 border-b border-slate-50 bg-slate-50/50">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">Account</p>
                            <p className="text-xs text-slate-600 px-2 mt-1 truncate font-medium">{user.contact_name || user.username}</p>
                          </div>
                          <div className="p-1">
                            <button
                              onClick={() => {
                                logout();
                                setShowUserMenu(false);
                              }}
                              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-colors group text-left font-bold"
                            >
                              <LogOut size={16} className="text-red-300 group-hover:text-red-500" />
                              <span>ออกจากระบบ</span>
                            </button>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className={`text-sm font-bold font-kanit px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                    isTransparent
                      ? 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                      : 'bg-[#0e9aef] text-white shadow-sm hover:bg-[#0c86d1]'
                  }`}
                >
                  <LogIn size={14} />
                  เข้าสู่ระบบ
                </button>
              )}
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
              {isAuthenticated && user ? (
                <div className="mt-4 pt-4 border-t border-slate-100 px-2">
                  <div className="flex items-center gap-3 px-2 mb-4">
                    <div className="w-10 h-10 bg-linear-to-tr from-[#0e9aef] to-[#0a82cc] rounded-xl flex items-center justify-center text-white shadow-md">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{user.contact_name || user.username}</p>
                      <p className="text-[10px] text-slate-500 truncate max-w-[200px]">{user.contact_name || user.username}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-bold text-red-500 bg-red-50 hover:bg-red-100 rounded-xl transition-all"
                  >
                    <LogOut size={18} />
                    <span>ออกจากระบบ</span>
                  </button>
                </div>
              ) : (
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setOpen(false);
                    }}
                    className="w-full py-3 text-sm font-bold text-slate-600 bg-slate-50 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-all underline decoration-slate-200"
                  >
                    <LogIn size={18} />
                    เข้าสู่ระบบ
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />
      <AIRegistrationModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </header>
  );
}

