"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  // Mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Aura (ช้ากว่า มี trail)
  const auraSpringConfig = { damping: 25, stiffness: 160, mass: 0.6 };
  const auraX = useSpring(cursorX, auraSpringConfig);
  const auraY = useSpring(cursorY, auraSpringConfig);

  // Dot / Ring (เร็ว ติดเมาส์)
  const dotSpringConfig = { damping: 30, stiffness: 1800, mass: 0.4 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // ซ่อน cursor บน map / iframe
      setHideCursor(!!target.closest("[data-hide-cursor]"));

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button";

      setIsHovering(!!isClickable);
    };



    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  if (!mounted) return null;



  return (
    <div className={`hidden lg:block fixed inset-0 pointer-events-none z-[99999] overflow-hidden
    transition-opacity duration-300
    ${hideCursor ? "opacity-0" : "opacity-100"}`} >
      {/* 🌊 Ripple Effect */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ left: ripple.x, top: ripple.y }}
          className="fixed w-6 h-6 -translate-x-1/2 -translate-y-1/2
            rounded-full border border-[rgba(var(--brand-blue)ม,0.6)]
            pointer-events-none"
        />
      ))}

      {/* 💠 Aura Glow */}
      <motion.div
        style={{
          translateX: auraX,
          translateY: auraY,
          x: "-50%",
          y: "-50%",
        }}
        className="fixed top-0 left-0 w-[80px] h-[80px]"
      >
        <div
          className={`w-full h-full bg-[var(--brand-blue)] rounded-full 
          blur-[0px] transition-opacity duration-200
          ${isHovering ? "opacity-18" : "opacity-10"}`}
        />
      </motion.div>

      {/* ⭕ Outer Ring */}
      <motion.div
        style={{
          translateX: dotX,
          translateY: dotY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering
            ? "rgba(var(--brand-blue),0.6)"
            : "rgba(var(--brand-blue), 0.25)",
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border
          transition-colors duration-300"
      />

      {/* 🎯 Center Dot */}
      <motion.div
        style={{
          translateX: dotX,
          translateY: dotY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{ scale: isHovering ? 0.5 : 1 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full
          bg-[var(--brand-blue)]
          shadow-[0_0_15px_rgba(var(--brand-blue),0.8)]"
      />
    </div>
  );
}
