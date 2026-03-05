import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import "font-awesome/css/font-awesome.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";
import CookieModal from "./components/CookieModal";
import CustomCursor from "./components/CustomCursor";
import AIChatBot from "./components/AIChatBot";
const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "ERP Enterprise Resource Planning To THAILAND",
  description: "Business Competitive Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={kanit.variable}>
      <body className="font-kanit flex flex-col min-h-screen" style={{ backgroundColor: "#fff" }}>
        <CustomCursor />
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <ScrollToTop />
        <CookieModal />
        <AIChatBot />
        <Footer />
      </body>
    </html>
  );
}
