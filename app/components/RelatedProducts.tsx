"use client";

import Link from "next/link";
import { Package, ArrowUpRight, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface RelatedProductsProps {
    color?: "emerald" | "blue" | "orange" | "purple" | "fuchsia" | "violet" | "rose" | "teal" | "pink" | "cyan" | "gray";
}

export default function RelatedProducts({ color = "emerald" }: RelatedProductsProps) {
    const products = [
        { label: "MRP", href: "/mrp", name: "Material Requirement" },
        { label: "APS", href: "/aps", name: "Advanced Planning" },
        { label: "PM", href: "/pm", name: "Preventive Maint." },
        { label: "POS", href: "/pos", name: "Point of Sale" },
        { label: "WMS", href: "/wms", name: "Warehouse Mgmt" },
        { label: "VFS", href: "/vfs", name: "Vehicle Fleet" },
        { label: "Restaurant", href: "/restaurant", name: "Restaurant" },
        { label: "Service", href: "/service", name: "Service System" },
        { label: "Winspeed", href: "/winspeed", name: "Winspeed" },
        { label: "myAccount", href: "/myaccount", name: "My Account" },
        { label: "HRMI", href: "/hrmi", name: "HRMI" },
        { label: "IIoT", href: "/iiot", name: "IIoT" },
        { label: "MBS", href: "/mbs", name: "MBS" },
        { label: "HFD", href: "/hfd", name: "HFD" },
    ];

    const theme = {
        emerald: {
            titleIcon: "text-emerald-600",
            titleBg: "bg-emerald-100/50",
            hoverBorder: "hover:border-emerald-200",
            hoverShadow: "hover:shadow-emerald-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-emerald-600",
            textActive: "group-hover:text-emerald-700",
            bgGradient: "from-emerald-50 to-teal-50",
            arrowColor: "text-emerald-400",
            btnHover: "hover:bg-emerald-100 text-emerald-600"
        },
        blue: {
            titleIcon: "text-blue-600",
            titleBg: "bg-blue-100/50",
            hoverBorder: "hover:border-blue-200",
            hoverShadow: "hover:shadow-blue-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-blue-600",
            textActive: "group-hover:text-blue-700",
            bgGradient: "from-blue-50 to-indigo-50",
            arrowColor: "text-blue-400",
            btnHover: "hover:bg-blue-100 text-blue-600"
        },
        orange: {
            titleIcon: "text-orange-600",
            titleBg: "bg-orange-100/50",
            hoverBorder: "hover:border-orange-200",
            hoverShadow: "hover:shadow-orange-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-orange-600",
            textActive: "group-hover:text-orange-700",
            bgGradient: "from-orange-50 to-amber-50",
            arrowColor: "text-orange-400",
            btnHover: "hover:bg-orange-100 text-orange-600"
        },
        purple: {
            titleIcon: "text-purple-600",
            titleBg: "bg-purple-100/50",
            hoverBorder: "hover:border-purple-200",
            hoverShadow: "hover:shadow-purple-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-purple-600",
            textActive: "group-hover:text-purple-700",
            bgGradient: "from-purple-50 to-sky-50",
            arrowColor: "text-purple-400",
            btnHover: "hover:bg-purple-100 text-purple-600"
        },
        fuchsia: {
            titleIcon: "text-fuchsia-600",
            titleBg: "bg-fuchsia-100/50",
            hoverBorder: "hover:border-fuchsia-200",
            hoverShadow: "hover:shadow-fuchsia-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-fuchsia-600",
            textActive: "group-hover:text-fuchsia-700",
            bgGradient: "from-fuchsia-50 to-fuchsia-50",
            arrowColor: "text-fuchsia-400",
            btnHover: "hover:bg-fuchsia-100 text-fuchsia-600"
        },
        violet: {
            titleIcon: "text-violet-600",
            titleBg: "bg-violet-100/50",
            hoverBorder: "hover:border-violet-200",
            hoverShadow: "hover:shadow-violet-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-violet-600",
            textActive: "group-hover:text-violet-700",
            bgGradient: "from-violet-50 to-violet-50",
            arrowColor: "text-violet-400",
            btnHover: "hover:bg-violet-100 text-violet-600"
        },
        rose: {
            titleIcon: "text-rose-600",
            titleBg: "bg-rose-100/50",
            hoverBorder: "hover:border-rose-200",
            hoverShadow: "hover:shadow-rose-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-rose-600",
            textActive: "group-hover:text-rose-700",
            bgGradient: "from-rose-50 to-rose-50",
            arrowColor: "text-rose-400",
            btnHover: "hover:bg-rose-100 text-rose-600"
        },
        teal: {
            titleIcon: "text-teal-600",
            titleBg: "bg-teal-100/50",
            hoverBorder: "hover:border-teal-200",
            hoverShadow: "hover:shadow-teal-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-teal-600",
            textActive: "group-hover:text-teal-700",
            bgGradient: "from-teal-50 to-teal-50",
            arrowColor: "text-teal-400",
            btnHover: "hover:bg-teal-100 text-teal-600"
        },
        pink: {
            titleIcon: "text-pink-600",
            titleBg: "bg-pink-100/50",
            hoverBorder: "hover:border-pink-200",
            hoverShadow: "hover:shadow-pink-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-pink-600",
            textActive: "group-hover:text-pink-700",
            bgGradient: "from-pink-50 to-pink-50",
            arrowColor: "text-pink-400",
            btnHover: "hover:bg-pink-100 text-pink-600"
        },
        cyan: {
            titleIcon: "text-cyan-600",
            titleBg: "bg-cyan-100/50",
            hoverBorder: "hover:border-cyan-200",
            hoverShadow: "hover:shadow-cyan-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-cyan-600",
            textActive: "group-hover:text-cyan-700",
            bgGradient: "from-cyan-50 to-cyan-50",
            arrowColor: "text-cyan-400",
            btnHover: "hover:bg-cyan-100 text-cyan-600"
        },
        gray: {
            titleIcon: "text-gray-600",
            titleBg: "bg-gray-100/50",
            hoverBorder: "hover:border-gray-200",
            hoverShadow: "hover:shadow-gray-500/10",
            iconActive: "group-hover:scale-110 group-hover:text-gray-600",
            textActive: "group-hover:text-gray-700",
            bgGradient: "from-gray-50 to-gray-50",
            arrowColor: "text-gray-400",
            btnHover: "hover:bg-gray-100 text-gray-600"
        }
    };

    const t = theme[color] || theme.emerald;
    const x = useMotionValue(0);
    const constraintsRef = useRef<HTMLDivElement>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    useEffect(() => {
        const updateConstraints = () => {
            // 180px item + 20px gap
            const itemWidth = 200;
            const totalWidth = products.length * itemWidth;
            const visibleWidth = constraintsRef.current?.offsetWidth || 0;
            // Calculate how much we can scroll left (negative value)
            const maxScroll = Math.min(0, -(totalWidth - visibleWidth) - 20); // Extra padding

            setConstraints({ left: maxScroll, right: 0 });
        };

        // Initial setup and on resize
        updateConstraints();
        const resizeObserver = new ResizeObserver(updateConstraints);
        if (constraintsRef.current) {
            resizeObserver.observe(constraintsRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [products.length]);

    const slide = (direction: "left" | "right" | "start" | "end") => {
        const currentX = x.get();
        const moveAmount = 200; // Move by one item width
        let newX = currentX;

        if (direction === "start") {
            newX = 0; // Move to start
        } else if (direction === "end") {
            newX = constraints.left; // Move to end
        } else if (direction === "right") {
            newX = currentX - moveAmount;
        } else {
            newX = currentX + moveAmount;
        }

        // Clamp values
        newX = Math.max(Math.min(newX, constraints.right), constraints.left);

        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30
        });
    };

    return (
        <section className="pb-12 overflow-hidden">
            <div className="flex items-center justify-between mb-8 pr-1">
                <div className="flex items-center gap-4">
                    <Package className={`w-10 h-10 ${t.titleIcon}`} />
                    <div>
                        <h3 className="text-2xl font-black text-slate-900">
                          โปรแกรมที่เกี่ยวข้อง
                          <span className="ml-2 text-base font-semibold text-slate-400 align-middle">({products.length})</span>
                        </h3>
                        <p className="text-slate-500 text-sm font-medium">โซลูชั่นอื่นๆ ที่ช่วยยกระดับธุรกิจของคุณ</p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => slide("start")}
                        aria-label="First"
                        className={`hidden sm:flex p-2 rounded-full border border-slate-200 bg-white text-slate-400 hover:border-transparent transition-all duration-300 ${t.btnHover}`}
                    >
                        <ChevronsLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => slide("left")}
                        aria-label="Previous"
                        className={`p-2 rounded-full border border-slate-200 bg-white text-slate-400 hover:border-transparent transition-all duration-300 ${t.btnHover}`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => slide("right")}
                        aria-label="Next"
                        className={`p-2 rounded-full border border-slate-200 bg-white text-slate-400 hover:border-transparent transition-all duration-300 ${t.btnHover}`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => slide("end")}
                        aria-label="Last"
                        className={`hidden sm:flex p-2 rounded-full border border-slate-200 bg-white text-slate-400 hover:border-transparent transition-all duration-300 ${t.btnHover}`}
                    >
                        <ChevronsRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Draggable Scroll Container Wrapper */}
            <div ref={constraintsRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                    className="flex gap-5 px-1 py-4"
                    drag="x"
                    dragConstraints={constraints}
                    style={{ x }}
                    dragElastic={0.1}
                >
                    {products.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="min-w-[180px] w-[180px]"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Link
                                href={item.href}
                                draggable={false}
                                className={`
                                    group relative flex flex-col items-center justify-between p-4 h-[180px]
                                    rounded-[2rem] border border-transparent
                                    transition-all duration-500 ease-out select-none
                                    hover:-translate-y-2
                                    overflow-hidden
                                `}
                            >
                                <div className={`
                                    relative w-full flex-1 mb-2
                                    flex items-center justify-center
                                    text-slate-400
                                    transition-all duration-500
                                    ${t.iconActive}
                                `}>
                                    <span className="font-black text-lg tracking-tighter">
                                        {item.label}
                                    </span>
                                </div>

                                <div className="relative text-center z-10 w-full">
                                    <span className={`block text-[12px] font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 ${t.textActive} truncate`}>
                                        {item.name}
                                    </span>
                                </div>

                                <div className={`
                                    absolute top-2 right-2 
                                    opacity-0 -translate-x-2 translate-y-2
                                    group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0
                                    transition-all duration-500
                                    ${t.arrowColor}
                                `}>
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
