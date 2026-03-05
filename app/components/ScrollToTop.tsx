"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollY / windowHeight) * 100;

      setProgress(scrollProgress);
      setShow(scrollY > 800);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed right-6 bottom-28 z-[9999]"
        >
          <button
            onClick={handleClick}
            className="group relative w-16 h-16 flex items-center justify-center bg-white border-2 border-slate-100 rounded-full shadow-2xl transition-all duration-500 overflow-hidden"
            aria-label="Back to top"
          >
            {/* Liquid Fill Effect */}
            <div
              className="absolute bottom-0 left-0 w-full transition-all duration-300 ease-out overflow-hidden"
              style={{
                height: `${progress}%`,
                background: progress > 90
                  ? "var(--brand-blue)"
                  : `linear-gradient(to top, var(--brand-blue), #60a5fa)`
              }}
            >
              {/* Wave Animation */}
              <motion.div
                animate={{
                  x: ["0%", "-50%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 left-0 w-[200%] h-8 -translate-y-1/2 opacity-50"
              >
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full fill-current text-white/30">
                  <path d="M0 10 Q 25 0, 50 10 T 100 10 V 20 H 0 Z" />
                </svg>
              </motion.div>
              <motion.div
                animate={{
                  x: ["-50%", "0%", "-50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 left-0 w-[200%] h-6 -translate-y-1/2 opacity-30"
              >
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full fill-current text-white/40">
                  <path d="M0 10 Q 25 20, 50 10 T 100 10 V 20 H 0 Z" />
                </svg>
              </motion.div>
            </div>

            {/* Icon */}
            <div className={`relative z-10 transition-colors duration-500 ${progress > 50 ? 'text-white' : 'text-[var(--brand-blue)]'}`}>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronUp className="w-7 h-7 stroke-[3px]" />
              </motion.div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

