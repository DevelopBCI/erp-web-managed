"use client";

import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <main
            className={isHome ? "w-full p-0" : "flex-1 p-6 pt-[120px]"}
        >
            {children}
        </main>
    );
}
