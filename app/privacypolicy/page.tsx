"use client";
import { ShieldCheck, Mail, Phone, MapPin, ChevronRight, Info, ExternalLink } from "lucide-react";
import React from "react";

export default function PrivacyPolicy() {

    const tableOfContents = [
        { title: "สิทธิเกี่ยวกับข้อมูลส่วนบุคคล", id: "section-1" },
        { title: "การจัดเก็บข้อมูลส่วนบุคคล", id: "section-2" },
        { title: "จุดประสงค์การใช้และการเปิดเผยข้อมูล", id: "section-3" },
        { title: "ข้อจำกัดในการใช้และเปิดเผยข้อมูล", id: "section-4" },
        { title: "การเปลี่ยนแปลงหรือลบข้อมูล", id: "section-5" },
        { title: "การโอนข้อมูลไปยังต่างประเทศ", id: "section-6" },
        { title: "คุกกี้ พิกเซล ไอพี แอดเดรส", id: "section-7" },
        { title: "ระยะเวลาในการเก็บข้อมูล", id: "section-8" },
        { title: "การคุ้มครองข้อมูลการเงิน", id: "section-9" },
        { title: "ความปลอดภัยของข้อมูลส่วนบุคคล", id: "section-10" },
        { title: "การเปลี่ยนแปลงนโยบาย", id: "section-11" },
        { title: "เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล", id: "section-12" },
        { title: "ช่องทางการติดต่อบริษัท", id: "section-13" },
    ];

    return (
        <div className="font-kanit bg-[#f8fafc] min-h-screen">
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: var(--brand-blue);
                }
            `}</style>
            {/* Hero Header */}
            <div className="bg-slate-900 pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--brand-blue)]/10 blur-3xl rounded-full -mr-20"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/10 blur-3xl rounded-full -ml-20"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] rounded-full text-xs font-bold mb-6 tracking-wider">
                        <ShieldCheck className="w-4 h-4" /> PRIVACY PROTECTION
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        นโยบายคุ้มครอง <br />
                        <span className="text-[var(--brand-blue)]">ข้อมูลส่วนบุคคล</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        เราให้ความสำคัญอย่างยิ่งในการรักษาความลับและมาตรฐานความปลอดภัยของข้อมูลส่วนบุคคลของคุณ
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-10 pb-24 relative z-20 flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    {/* Introduction */}
                    <div className="p-8 md:p-16 border-b border-slate-50 bg-gradient-to-b from-blue-50/20 to-transparent">
                        <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                            <span className="w-1 h-8 bg-[var(--brand-blue)] rounded-full inline-block"></span>
                            บริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-loose text-lg font-medium opacity-90">
                            <p>
                                บริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด ทราบเป็นอย่างดีว่า ท่านให้ความสำคัญกับข้อมูลส่วนบุคคลของท่านมากเพียงใด และบริษัทมีความยินดีเป็นอย่างยิ่งที่ท่านให้ความสนใจในการใช้บริการของบริษัท จึงขอเรียนให้ท่านทราบถึงนโยบายคุ้มครองข้อมูลส่วนบุคคลของลูกค้าหรือผู้เยี่ยมชม ดังนี้
                            </p>
                            <div className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-[var(--brand-blue)]">
                                <p className="italic text-base text-slate-600">
                                    "นโยบายส่วนบุคคลฉบับนี้ครอบคลุมผลิตภัณฑ์และบริการของบริษัท ได้แก่ เว็บไซต์, โซเชียลมีเดีย (Social Media), เว็บแอปพลิเคชัน และช่องทางอื่นๆ ในอนาคต"
                                </p>
                            </div>
                            <p>
                                ทั้งนี้ เนื่องจากบริษัทมีนโยบายพัฒนาและปรับปรุงบริการอย่างต่อเนื่อง ดังนั้น นโยบายคุ้มครองข้อมูลส่วนบุคคลฉบับนี้ อาจแก้ไขเปลี่ยนแปลงเป็นครั้งคราว บริษัทจึงขอแนะนำให้ท่านตรวจสอบนโยบายดังกล่าวนี้เป็นระยะ ๆ เพื่อท่านจะได้เข้าใจนโยบายคุ้มครองข้อมูลส่วนบุคคลล่าสุด
                            </p>
                        </div>
                    </div>

                    {/* Mobile Table of Contents - Hidden on lg */}
                    <div className="p-8 md:p-12 bg-slate-50/50 lg:hidden">
                        <div className="inline-flex items-center gap-2 mb-8 text-slate-400 font-bold text-sm tracking-widest uppercase">
                            <Info className="w-4 h-4" /> สารบัญเนื้อหา
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tableOfContents.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.id}`}
                                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-[var(--brand-blue)]/30 hover:shadow-md hover:translate-x-1 transition-all group decoration-transparent"
                                >
                                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 text-slate-400 group-hover:bg-[var(--brand-blue)]/10 group-hover:text-[var(--brand-blue)] flex items-center justify-center text-xs font-black transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-slate-700 font-bold text-[13px] leading-tight">{item.title}</span>
                                    <ChevronRight className="w-4 h-4 ml-auto text-slate-200 group-hover:text-[var(--brand-blue)] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="p-8 md:p-16 space-y-20 scroll-smooth">
                        {/* Section 1 */}
                        <section id="section-1" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">1</div>
                                <h3 className="text-2xl font-extrabold text-slate-800">สิทธิเกี่ยวกับข้อมูลส่วนบุคคลของท่าน</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { id: "1.1", text: "ท่านมีสิทธิที่จะเพิกถอนความยินยอมของท่านในเวลาใดก็ได้ สำหรับวัตถุประสงค์ที่ท่านได้ให้ความยินยอมให้บริษัทเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน" },
                                    { id: "1.2", text: "ท่านสามารถขอเข้าถึง ขอรับสำเนาข้อมูลส่วนบุคคลของท่าน หรือขอให้เปิดเผยการได้มาซึ่งข้อมูลส่วนบุคคล ทั้งนี้ บริษัทอาจปฏิเสธคำขอของท่านได้ตามที่กฎหมายกำหนด หรือตามคำสั่งศาล" },
                                    { id: "1.3", text: "ท่านมีสิทธิที่จะได้รับข้อมูลที่ได้ให้ไว้กับบริษัทในรูปแบบอิเล็กทรอนิกส์ และมีสิทธิในการถ่ายโอนข้อมูลของท่านสำหรับการใช้งานในบริการของบุคคลอื่น และในการใช้สิทธิดังกล่าวนี้ ท่านมีสิทธิที่จะให้บริษัทถ่ายโอนข้อมูลไปยังบุคคลอื่นๆ โดยตรง หากสามารถกระทำได้โดยทางเทคนิค" },
                                    { id: "1.4", text: "ท่านมีสิทธิคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลเกี่ยวกับท่าน ในกรณีดังนี้:" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-200 transition-colors">
                                        <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-[10px] font-black text-[var(--brand-blue)]">
                                            {item.id}
                                        </div>
                                        <p className="text-slate-600 font-medium leading-relaxed text-base">{item.text}</p>
                                    </div>
                                ))}
                                <div className="ml-12 space-y-3">
                                    {[
                                        "1. กรณีที่เป็นการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์เกี่ยวกับการตลาดแบบตรง",
                                        "2. กรณีที่เป็นการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์เกี่ยวกับการศึกษาวิจัยทางวิทยาศาสตร์ ประวัติศาสตร์ หรือสถิติ เว้นแต่กรณีจำเป็นเพื่อการดำเนินภารกิจเพื่อประโยชน์สาธารณะของบริษัท",
                                        "3. กรณีที่เป็นข้อมูลที่เก็บรวบรวมไว้ด้วยเหตุจำเป็น เพื่อการดำเนินภารกิจเพื่อประโยชน์สาธารณะของบริษัท หรือเหตุจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมายของบริษัท เว้นแต่บริษัทแสดงให้เห็นถึงเหตุอันชอบด้วยกฎหมายที่สำคัญยิ่งกว่า หรือเป็นไปเพื่อก่อตั้งสิทธิเรียกร้องตามกฎหมาย การปฏิบัติตาม หรือการใช้สิทธิเรียกร้องตามกฎหมาย หรือการยกขึ้นต่อสู้สิทธิเรียกร้องตามกฎหมาย"
                                    ].map((sub, sidx) => (
                                        <div key={sidx} className="p-4 bg-white rounded-xl border border-slate-100 text-slate-500 text-sm leading-relaxed">
                                            {sub}
                                        </div>
                                    ))}
                                </div>
                                {[
                                    { id: "1.5", text: "ท่านสามารถขอให้ลบทลาย หรือทำให้ข้อมูลส่วนบุคคลของท่านกลายเป็นข้อมูลที่ไม่ระบุตัวบุคคล เว้นแต่เป็นกรณีที่บริษัทต้องปฏิบัติตามกฎหมายที่เกี่ยวข้องในการเก็บรักษาข้อมูลดังกล่าว" },
                                    { id: "1.6", text: "ท่านสามารถขอให้บริษัทระงับการประมวลผลข้อมูลส่วนบุคคลของท่านทั้งหมด หรือบางส่วน เป็นการชั่วคราวหรือถาวร" },
                                    { id: "1.7", text: "ท่านสามารถขอแก้ไข หรือเปลี่ยนแปลงข้อมูลส่วนบุคคลของท่าน ในกรณีที่ข้อมูลส่วนบุคคลของท่านไม่ถูกต้องตามความเป็นจริง และทำให้ข้อมูลของท่านเป็นปัจจุบัน" },
                                    { id: "1.8", text: "ท่านมีสิทธิร้องเรียนต่อหน่วยงานของรัฐที่เกี่ยวข้อง ในกรณีที่ท่านเชื่อว่าการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของเรานั้น ฝ่าฝืนหรือไม่ปฏิบัติตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-200 transition-colors">
                                        <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-[10px] font-black text-[var(--brand-blue)]">
                                            {item.id}
                                        </div>
                                        <p className="text-slate-600 font-medium leading-relaxed text-base">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section id="section-2" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">2</div>
                                <h3 className="text-2xl font-extrabold text-slate-800">การจัดเก็บข้อมูลส่วนบุคคลของท่าน</h3>
                            </div>
                            <div className="space-y-6 text-slate-600 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm leading-loose text-lg font-medium opacity-90">
                                <p>บริษัทต้องการให้ข้อมูลและบริการของบริษัท เป็นที่ชื่นชอบและตรงกับความต้องการของท่าน บริษัทจึงต้องเก็บรวบรวมข้อมูลส่วนบุคคลของท่านบางส่วน เมื่อท่านลงทะเบียนเพื่อเป็นสมาชิกของบริษัท หรือทำสัญญา/ธุรกรรม กับบริษัท โดยข้อมูลที่บริษัทจัดเก็บอาจรวมถึงข้อมูลเหล่านี้:</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {[
                                        "1. ชื่อและนามสกุล", "2. เลขที่บัตรประจำตัวประชาชน", "3. วันเดือนปีเกิด", "4. เพศ", "5. ที่อยู่", "6. เบอร์โทรศัพท์", "7. อีเมล", "8. เนื้อหาที่คุณสนใจ"
                                    ].map(tag => (
                                        <span key={tag} className="px-4 py-3 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                                    <div className="font-bold text-[var(--brand-blue)] mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]"></div> Financial Data / ข้อมูลทางการเงิน
                                    </div>
                                    <p className="text-slate-400 text-base mb-6 leading-relaxed">ในกรณีที่ท่านทำธุรกรรมกับทางบริษัท จะมีการจัดเก็บข้อมูลทางการเงินเพิ่มเติม เช่น:</p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="px-5 py-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            <span className="text-sm font-bold">1. ข้อมูลบัตรเครดิต</span>
                                        </div>
                                        <div className="px-5 py-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            <span className="text-sm font-bold">2. เลขที่บัญชีธนาคาร</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-8 leading-relaxed italic border-t border-white/5 pt-6">
                                        รวมถึงข้อมูลส่วนตัวอื่นๆ เท่าที่จําเป็น โดยข้อมูลจะต้องเป็นข้อมูลที่ถูกต้อง ครบถ้วน ข้อมูลเป็นปัจจุบัน และไม่ก่อให้เกิดการเข้าใจผิด
                                    </p>
                                </div>
                                <div className="space-y-4 text-base">
                                    <p>นอกเหนือจากขั้นตอนการลงทะเบียนสมาชิกแล้ว บริษัทอาจสอบถามข้อมูลส่วนบุคคลอื่นเพิ่มเติมจากท่าน เช่น เมื่อท่านเข้าร่วมกิจกรรม หรือบริการที่บริษัทหรือพันธมิตรทางธุรกิจจัดขึ้น โดยท่านอาจต้องระบุข้อมูลเพิ่มเติม เช่น สินค้าที่ชื่นชอบ ความสนใจ พฤติกรรม ฯลฯ</p>
                                    <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                                        <h4 className="font-bold text-slate-800 mb-2">การเชื่อมโยงข้อมูลส่วนบุคคลกับเครื่องมือโซเชียลมีเดีย (Social Media)</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">หากท่านสมัครใจใช้บัญชีโซเชียลมีเดียในการสมัครสมาชิกเว็บไซต์ แอปพลิเคชัน หรือบริการของบริษัท บริษัทอาจเข้าถึงข้อมูลส่วนบุคคลของท่านที่ท่านให้ไว้โดยสมัครใจกับบัญชีโซเชียลมีเดียของท่าน ผ่านผู้ให้บริการรายนั้นๆ ภายใต้นโยบายต่างๆ ของผู้ให้บริการ</p>
                                    </div>
                                    <p className="text-slate-500 italic">บริษัทจะสามารถจัดเก็บข้อมูลส่วนบุคคลของท่านต่อเมื่อท่านสมัครใจเท่านั้น หากท่านเลือกที่จะไม่ยินยอมให้เก็บข้อมูลส่วนบุคคล ท่านสามารถส่งข้อมูลเพื่อเพิกถอนความยินยอมการใช้ข้อมูลส่วนบุคคลของท่านให้กับบริษัท ทั้งนี้ บริษัทอาจไม่สามารถให้บริการ หรือปรับปรุงประสบการณ์ให้ตรงกับความต้องการของท่านได้</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id="section-3" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">3</div>
                                <h3 className="text-2xl font-extrabold text-slate-800">จุดประสงค์การใช้และการเปิดเผยข้อมูล</h3>
                            </div>
                            <div className="space-y-8">
                                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                                    วัตถุประสงค์เบื้องต้นของบริษัทในการรวบรวมข้อมูลส่วนบุคคล คือ เพื่อให้ผู้ใช้บริการแต่ละรายของบริษัทได้รับสินค้าและบริการที่ดีจากบริษัทอย่างมีประสิทธิภาพ ทั้งนี้ท่านตกลงและยินยอมให้บริษัทสามารถใช้ข้อมูลส่วนบุคคลของท่านในการติดต่อ หรือส่งข้อมูลส่วนบุคคลของท่านทั้งหมดหรือบางส่วน ไปยังบริษัทในเครือของบริษัทหรือพันธมิตรในทางธุรกิจผ่านสื่ออิเล็กทรอนิกส์ทําการตลาด เพื่อให้เกิดประโยชน์สูงสุดแก่ท่าน โดยไม่จำเป็นต้องบอกกล่าวล่วงหน้าแก่ท่าน
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "1. เพื่อสนับสนุนการส่งมอบบริการ, โฆษณา, ผลิตภัณฑ์, สิทธิพิเศษ, กิจกรรมด้านการตลาดที่ตรงกับความต้องการของท่าน",
                                        "2. เพื่อวิจัยและวิเคราะห์ประสบการณ์ของผู้ใช้บริการเว็บไซต์, แอปพลิเคชัน และโซเชียลมีเดีย (Social Media)",
                                        "3. เพื่อปรับแต่งข้อเสนอ โฆษณา สิทธิพิเศษ กิจกรรมด้านการตลาด หรือเนื้อหาที่คุณสนใจ ผ่านช่องทาง อีเมล, การแจ้งเตือน หรือ โซเชียลมีเดีย",
                                        "4. เพื่อดำเนินการตามคำสั่งซื้อของท่านผ่านแพลตฟอร์มสำหรับสินค้า ไม่ว่าจะขายโดยบริษัท หรือบริษัทพันธมิตร",
                                        "5. เพื่อดำเนินการเกี่ยวกับการขนส่งสินค้าผ่านทางแพลตฟอร์ม ไม่ว่าจะดำเนินการโดยบริษัท หรือบุคคลภายนอก",
                                        "6. เพื่อติดต่อผู้ใช้งานสำหรับการให้บริการ และดูแลผู้ใช้งาน หรือสำหรับการสื่อสารด้านการตลาดที่ได้รับอนุญาต",
                                        "7. เพื่อดำเนินการตามวัตถุประสงค์ตามกฎหมาย",
                                        "8. เพื่อคุ้มครองสิทธิในทรัพย์สิน หรือความปลอดภัยของบริษัท หรือของผู้ใช้บริการ"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-[var(--brand-blue)]/20 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[var(--brand-blue)] transition-colors"></div>
                                            <span className="text-slate-600 font-bold text-sm leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 space-y-4">
                                    <p className="text-slate-600 text-base leading-relaxed">
                                        บริษัทอาจใช้ผู้ให้บริการที่เป็นบุคคลภายนอกในการช่วยเสนอบริการด้านต่างๆ รวมถึงอาจมีการจัดเก็บหรือประมวลผลข้อมูลในระบบคลาวด์ (Cloud) ในต่างประเทศ ซึ่งผู้ให้บริการนั้นไม่มีอำนาจในการใช้ข้อมูลส่วนบุคคลโดยอิสระ และต้องอยู่ภายใต้ข้อบังคับนโยบายความเป็นส่วนตัวนี้
                                    </p>
                                    <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
                                        <p className="text-sm text-orange-800 font-bold leading-relaxed italic">
                                            "นโยบายส่วนบุคคลนี้ไม่ครอบคลุมการรวบรวม และการใช้ข้อมูลส่วนบุคคลของบุคคลภายนอก ไม่ว่าจะเป็นผู้โฆษณา ผู้ให้บริการ หรือเว็บอื่นที่เชื่อมต่อ (Link) หากการกระทำใดๆ ขัดต่อกฎหมายและก่อความเสียหายแก่บริษัท ทางบริษัทจะไม่รับผิดชอบในความเสียหายใดๆ"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="section-4" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">4</div>
                                <h3 className="text-2xl font-extrabold text-slate-800">ข้อจำกัดในการใช้และ/หรือเปิดเผยข้อมูลส่วนบุคคล</h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    บริษัทจะใช้ หรือเปิดเผยข้อมูลส่วนบุคคลได้ตามความยินยอมของท่าน โดยต้องเป็นการใช้ตามวัตถุประสงค์ของการเก็บรวบรวมเท่านั้น และจะกำกับดูแลมิให้พนักงานเปิดเผยนอกเหนือวัตถุประสงค์ เว้นแต่:
                                </p>
                                <div className="grid gap-3">
                                    {[
                                        "1. เป็นการปฏิบัติตามกฎหมาย เช่น พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล, พ.ร.บ.ว่าด้วยธุรกรรมทางอิเล็กทรอนิกส์, พ.ร.บ.ป้องกันและปราบปรามการฟอกเงิน เป็นต้น",
                                        "2. เป็นไปเพื่อประโยชน์แก่การสอบสวนของพนักงานสอบสวน หรือการพิจารณาพิพากษาคดีของศาล",
                                        "3. เพื่อประโยชน์ของท่าน และการขอความยินยอมไม่อาจกระทำได้ในเวลานั้น",
                                        "4. เป็นการจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมายของบริษัท หรือของบุคคลหรือนิติบุคคลอื่นที่ไม่ใช่บริษัท",
                                        "5. เป็นการจำเป็นเพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล",
                                        "6. เป็นการจำเป็นเพื่อการปฏิบัติตามสัญญา ซึ่งเจ้าของข้อมูลเป็นคู่สัญญาหรือเพื่อดำเนินการตามคำขอของเจ้าของข้อมูลก่อนเข้าทำสัญญา",
                                        "7. เพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวกับจดหมายเหตุเพื่อประโยชน์สาธารณะ หรือเพื่อการศึกษา วิจัย การจัดทำสถิติ"
                                    ].map((point, pidx) => (
                                        <div key={pidx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-500 font-medium text-base">
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 5, 6 Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <section id="section-5" className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-lg scroll-mt-24">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] rounded-xl flex items-center justify-center font-bold">5</div>
                                    <h3 className="text-xl font-extrabold text-slate-800">การเปลี่ยนแปลงหรือลบข้อมูล</h3>
                                </div>
                                <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                                    <p>ผู้ใช้บริการทุกรายที่ลงทะเบียนสามารถเข้าถึงข้อมูลของตนเองได้ โดยท่านสามารถปรับปรุงแก้ไข หรือลบข้อมูลส่วนบุคคลได้ตลอดเวลาผ่านการเชื่อมต่อ อีเมล รหัสผ่าน และโซเชียลมีเดีย</p>
                                    <p className="p-4 bg-slate-50 rounded-xl italic">
                                        "ท่านอาจลบข้อมูลด้วยตนเองหรือแจ้งให้บริษัทดำเนินการให้ แต่การกระทำดังกล่าวอาจทําให้ท่านเสียโอกาสในการเข้าร่วมโปรโมชั่น หรือสิทธิพิเศษต่างๆ"
                                    </p>
                                </div>
                            </section>

                            <section id="section-6" className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-lg scroll-mt-24">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] rounded-xl flex items-center justify-center font-bold">6</div>
                                    <h3 className="text-xl font-extrabold text-slate-800">การโอนข้อมูลไปยังต่างประเทศ</h3>
                                </div>
                                <p className="text-slate-500 text-base leading-relaxed">
                                    บริษัทอาจเปิดเผย หรือโอนข้อมูลส่วนบุคคลไปยังบุคคลภายนอก หรือเซิร์ฟเวอร์ในต่างประเทศที่อาจมีระดับการคุ้มครองข้อมูลที่ไม่เท่ากัน ทั้งนี้บริษัทจะดำเนินตามขั้นตอนและมาตรการต่างๆ เพื่อมั่นใจได้ว่าการโอนข้อมูลจะปลอดภัยและได้รับความคุ้มครองที่เหมาะสม
                                </p>
                            </section>
                        </div>

                        {/* Section 7 - Cookies Expanded */}
                        <section id="section-7" className="bg-slate-900 p-8 md:p-16 rounded-[3rem] text-white relative overflow-hidden scroll-mt-24">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-blue)]/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 bg-[var(--brand-blue)] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-blue-500/20">7</div>
                                    <h3 className="text-3xl font-extrabold">คุกกี้ (Cookie) พิกเซล (Pixel) ไอพี แอดเดรส</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-12 text-slate-300 leading-relaxed">
                                    <div className="space-y-4">
                                        <p>นอกจากข้อมูลส่วนบุคคล บริษัทอาจเก็บรวบรวมข้อมูลผ่านเทคโนโลยี เช่น คุกกี้ พิกเซล ไอพี แอดเดรส (IP Address) และแหล่งเก็บข้อมูลบนเบราว์เซอร์ รวมถึงเครื่องมือเก็บข้อมูลของบุคคลภายนอก</p>
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                            <h4 className="text-[var(--brand-blue)] font-bold mb-2">คุกกี้ (Cookie)</h4>
                                            <p className="text-sm">คือไฟล์ข้อมูลตัวอักษรขนาดเล็กที่รวบรวมข้อมูลในเครื่องหรือมือถือของผู้ใช้ ทําให้บริษัททราบถึงบริการหรือสินค้าที่ท่านชื่นชอบ รวมถึงบริการที่ไม่อยู่ในความสนใจของท่าน</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                            <h4 className="text-[var(--brand-blue)] font-bold mb-2">พิกเซล (Pixel)</h4>
                                            <p className="text-sm">เป็นภาพขนาดเล็กที่เป็นส่วนหนึ่งของรหัสบนเว็บเพจ ทํางานร่วมกับคุกกี้เพื่อจดจำผู้ใช้ที่เคยเข้าชม ทราบจํานวนและวัตถุประสงค์เพื่อนำเสนอบริการ สิทธิพิเศษ หรือโฆษณาที่ตรงกับพฤติกรรม</p>
                                        </div>
                                        <p className="text-slate-400 font-bold italic">"คุณมีสิทธิตั้งค่าเบราว์เซอร์เพื่อปฏิเสธการเก็บคุกกี้ทั้งหมด แต่อาจทำให้การเข้าถึงบางเว็บไซต์ไม่มีประสิทธิภาพ"</p>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-white/10">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 text-center">Manage your settings for:</p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                        {[
                                            { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647?hl=th' },
                                            { name: 'Chrome (Android)', url: 'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=th&oco=0' },
                                            { name: 'Chrome (iOS)', url: 'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DiOS&hl=th&oco=0' },
                                            { name: 'Firefox', url: 'https://support.mozilla.org/th/kb/%E0%B8%84%E0%B8%B8%E0%B8%81%E0%B8%81%E0%B8%B5%E0%B9%89-%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%9A%E0%B8%9A%E0%B8%99%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93' },
                                            { name: 'Internet Explorer', url: 'https://privacy.microsoft.com/th-th/privacystatement#maincookiessimilartechnologiesmodule' },
                                            { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                                            { name: 'Safari (iOS)', url: 'https://support.apple.com/en-us/HT201265' }
                                        ].map(b => (
                                            <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-white/5 rounded-lg text-[10px] font-black tracking-wider uppercase border border-white/5 hover:bg-white/10 transition-colors text-center">
                                                {b.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Sections 8-12 */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { n: 8, t: "ระยะเวลาในการเก็บข้อมูล", c: "บริษัทจะเก็บรักษาข้อมูลส่วนบุคคลในระยะเวลาเท่าที่จำเป็นอย่างสมเหตุสมผล เพื่อให้บรรลุตามวัตถุประสงค์ที่บริษัทได้รับข้อมูลมา และเพื่อปฏิบัติตามภาระหน้าที่ทางกฎหมายและข้อบังคับต่างๆ อย่างไรก็ตาม บริษัทอาจเก็บข้อมูลนานขึ้นหากจำเป็นตามกฎหมายที่ใช้บังคับ" },
                                { n: 9, t: "การคุ้มครองข้อมูลการเงิน", c: "การรักษาความลับข้อมูลการเงินเป็นเรื่องสําคัญอย่างยิ่ง เราจะไม่เผยแพร่ต่อบุคคลภายนอก เว้นแต่ตามที่ระบุในนโยบายนี้ ข้อมูลหมายเลขบัตรเครดิตได้รับการรักษาความปลอดภัยโดยการเข้ารหัส (encryption) ที่ได้มาตรฐานสากลและปลอดภัย" },
                                { n: 11, t: "การเปลี่ยนแปลงนโยบาย", c: "บริษัทอาจแก้ไขเพิ่มเติมนโยบายคุ้มครองข้อมูลส่วนบุคคลฉบับนี้ได้ทุกเวลา โดยเผยแพร่ประกาศการแก้ไขเพิ่มเติมบนเว็บไซต์ การใช้บริการอย่างต่อเนื่องถือเป็นการยอมรับข้อกำหนดของการแก้ไขแต่ละครั้ง" },
                                { n: 12, t: "เจ้าหน้าที่คุ้มครองข้อมูล", c: "เราแต่งตั้ง Data Protection Office (DPO) เพื่อตรวจสอบการดำเนินการเกี่ยวกับการจัดเก็บ ใช้ และเปิดเผยข้อมูลให้สอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 รวมถึงกฎหมายความมั่นคงปลอดภัยไซเบอร์ที่เกี่ยวข้อง" }
                            ].map((item, i) => (
                                <div key={i} id={`section-${item.n}`} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 bg-[var(--brand-blue)] text-white rounded-xl flex items-center justify-center font-bold">{item.n}</div>
                                        <h3 className="text-lg font-extrabold text-slate-800">{item.t}</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.c}</p>
                                </div>
                            ))}
                        </div>

                        {/* Section 10 - Security Detailed */}
                        <section id="section-10" className="bg-blue-50 p-8 md:p-12 rounded-[3rem] border border-blue-100 shadow-inner scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">10</div>
                                <h3 className="text-2xl font-extrabold text-slate-800">ความปลอดภัยของข้อมูลส่วนบุคคลของท่าน</h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed font-medium">
                                    <p>บริษัทใช้ระบบรักษาความปลอดภัยแบบ <span className="text-[var(--brand-blue)] font-bold">SSL (Secure Socket Layer)</span> หรือ <span className="text-[var(--brand-blue)] font-bold">SET (Secure Electronic Transaction)</span> เพื่อคุ้มครองข้อมูลส่วนบุคคลและความเป็นส่วนตัวของท่าน โดยระบบดังกล่าวได้มาตรฐานสากล</p>
                                    <p>ท่านต้องระมัดระวังและรับผิดชอบดูแลรหัสผ่านด้วยตนเอง ไม่ควรเปิดเผยรหัสผ่านต่อบุคคลใด และท่านควรออกจากระบบ (Log Off) ทุกครั้งที่เลิกใช้งาน โดยเฉพาะอย่างยิ่งหากใช้คอมพิวเตอร์ร่วมกับผู้อื่นหรือในที่สาธารณะ</p>
                                    <p className="bg-white p-6 rounded-2xl border border-blue-200/50 text-sm italic">
                                        เพื่อความปลอดภัยของข้อมูลส่วนบุคคลของท่าน และผู้ใช้บริการท่านอื่น ท่านตกลงว่าจะไม่กระทำการใดอันเป็นการล่วงละเมิดทางสิทธิส่วนบุคคล สิทธิส่วนบุคคลของบุคคลภายนอก และทรัพย์สินทางปัญญาของบริษัท รวมทั้งไม่กระทำการใดๆ ที่ขัดต่อกฎหมาย โดยจะไม่ส่งเนื้อหา รูปภาพ ภาพเคลื่อนไหว หรือข้อมูลอื่นใดที่ไม่เหมาะสม ไม่สุภาพ ก่อให้เกิดความขัดแย้ง ข้อความที่เป็นเท็จ เผยแพร่บริการ หรือการกระทำใดๆ ก็ตามที่ขัดต่อกฎหมาย และก่อให้เกิดความเสียหายแก่บริษัท
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-blue-100 flex flex-col items-center text-center justify-center">
                                    <ShieldCheck className="w-16 h-16 text-[var(--brand-blue)] mb-4" />
                                    <h4 className="font-bold text-slate-800 text-xs uppercase tracking-tighter mb-2">Security Advice</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">หากข้อมูลส่วนบุคคล หรือข้อมูลที่เกี่ยวข้องของท่าน ไม่ว่าจะเป็นข้อมูลทั่วไป หรือข้อมูลส่วนบุคคลได้ถูกจารกรรมทางคอมพิวเตอร์จนสูญหายหรือเสียหาย ซึ่งมิใช่ความผิดของบริษัท บริษัทขอสงวนสิทธิที่จะปฏิเสธความรับผิดชอบใดๆ ที่เป็นผลมาจากการกระทำดังกล่าว</p>
                                </div>
                            </div>
                        </section>

                        {/* Footer Contact - Section 13 */}
                        <div id="section-13" className="pt-20 border-t border-slate-100 scroll-mt-24">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-14 h-14 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-900 font-bold text-2xl">13</div>
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 leading-none">ช่องทางการติดต่อบริษัท</h4>
                                    <p className="text-slate-400 text-sm mt-2 font-bold uppercase tracking-widest">Get in touch for more information</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-12">
                                <div className="md:col-span-2 space-y-8">
                                    <p className="text-slate-600 font-bold leading-relaxed text-lg italic">
                                        "หากท่านต้องการทราบข้อมูลเพิ่มเติมเกี่ยวกับการยกเลิกบัญชี แจ้งปัญหาการใช้งาน หรือความปลอดภัย ท่านสามารถติดต่อเราได้ทันที"
                                    </p>
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-2xl flex items-center justify-center text-white flex-shrink-0"><MapPin className="w-6 h-6" /></div>
                                        <div>
                                            <p className="text-slate-900 font-black text-xl mb-2">บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด</p>
                                            <p className="text-slate-500 text-lg leading-relaxed max-w-md">59/69 หมู่ 1 ซ.ติวานนท์ - ปากเกร็ด 56 ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี 11120</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-4">
                                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Quick Connect</h5>
                                        <div className="space-y-3">
                                            <a href="tel:+66863950364" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group">
                                                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-sm leading-none">
                                                    <Phone className="w-5 h-5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-1">Call Us</span>
                                                    <span className="text-slate-700 font-extrabold text-sm tracking-tight">+66 8 6395 0364</span>
                                                </div>
                                            </a>

                                            <a href="mailto:chopaka_m@hotmail.com" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 group">
                                                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-sm leading-none">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-1">Email Support</span>
                                                    <span className="text-slate-700 font-extrabold text-sm tracking-tight break-all">chopaka_m@hotmail.com</span>
                                                </div>
                                            </a>

                                            <a href="https://erptothai.com/#contact" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm leading-none">
                                                    <ExternalLink className="w-5 h-5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-1">Visit Website</span>
                                                    <span className="text-slate-700 font-extrabold text-sm tracking-tight italic break-all">erptothai.com/#contact</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-24 text-center border-t border-slate-50 pt-12">
                                <p className="text-[10px] font-black text-slate-300 tracking-[0.5em] uppercase">© 2024 Business Competitive Intelligence Co., Ltd. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Table of Contents - Desktop Only */}
                <aside className="hidden lg:block w-80 sticky top-32 shrink-0">
                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/30 border border-slate-100">
                        <div className="inline-flex items-center gap-2 mb-6 text-[var(--brand-blue)] font-bold text-xs tracking-widest uppercase">
                            <Info className="w-4 h-4" /> สารบัญเนื้อหา
                        </div>
                        <div className="max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                            <nav className="space-y-1">
                                {tableOfContents.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 p-2.5 text-slate-500 hover:text-[var(--brand-blue)] hover:bg-blue-50/50 rounded-xl transition-all group text-sm font-medium decoration-transparent"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-slate-100 text-slate-400 group-hover:bg-[var(--brand-blue)] group-hover:text-white flex items-center justify-center text-[10px] font-black transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="truncate">{item.title}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>

                    </div>
                </aside>
            </div>
        </div>
    );
}
