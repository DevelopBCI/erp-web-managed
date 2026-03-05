'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, Facebook, Mail, Phone, CheckCircle } from 'lucide-react';

interface RegistrationData {
  name: string;
  email: string;
  mobile: string;
  company: string;
  address: string;
}

// ⚠️ CHANGE THIS URL TO MATCH YOUR MAMP PORT (e.g., http://localhost:8888/api-contact/...)
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/powerbi.php`;

export default function RegisterBIPage() {
  const [loading, setLoading] = useState(false);
  const [countLoading, setCountLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [registrationCount, setRegistrationCount] = useState(0);

  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    email: '',
    mobile: '',
    company: '',
    address: '',
  });

  // Fetch Registration Count on Mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(`${API_URL}?action=count`);
        const data = await res.json();
        if (data.success) {
          setRegistrationCount(data.count);
        }
      } catch (err) {
        console.error("Failed to fetch count:", err);
      } finally {
        setCountLoading(false);
      }
    };

    fetchCount();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validate
    if (!formData.name.trim()) { setError('กรุณากรอกชื่อ-นามสกุล'); setLoading(false); return; }
    if (!formData.email.trim()) { setError('กรุณากรอกอีเมล'); setLoading(false); return; }
    if (!formData.mobile.trim()) { setError('กรุณากรอกเบอร์โทรศัพท์'); setLoading(false); return; }
    if (!formData.company.trim()) { setError('กรุณากรอกชื่อบริษัท'); setLoading(false); return; }
    if (!formData.address.trim()) { setError('กรุณากรอกที่อยู่บริษัท'); setLoading(false); return; }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setRegistrationCount(prev => prev + 1); // Increment count locally
        setFormData({ name: '', email: '', mobile: '', company: '', address: '' });

        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.message || 'เกิดข้อผิดพลาดในการลงทะเบียน');
      }

    } catch (err) {
      console.error("Submit Error:", err);
      setError('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-kanit">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Registration Count Card */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 text-center transition-all duration-500 hover:shadow-xl hover:bg-white/80">
              <h2 className="text-slate-500 mb-4 font-light tracking-wide">จำนวนคนที่ลงทะเบียนแล้วตอนนี้</h2>
              {countLoading ? (
                <div className="animate-pulse h-16 w-32 bg-slate-100 mx-auto rounded-xl"></div>
              ) : (
                <h1 className="text-6xl font-bold text-[#0e9aef] animate-in fade-in zoom-in duration-500">
                  {registrationCount}
                </h1>
              )}
              <p className="text-sm text-slate-400 mt-4 font-light">รับลงทะเบียนล่วงหน้าจำนวน <span className="font-bold text-slate-600">20 คน</span></p>
            </div>

            {/* Image Card */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden group">
              <img
                src="/img/bi/ads_bi.jpg"
                alt="Power BI Advertisement"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-50 overflow-hidden">
              {/* Card Header */}
              <div className="bg-[#0e9aef] px-8 py-6 text-center">
                <h3 className="text-xl font-bold text-white">ลงทะเบียนอบรม</h3>
              </div>

              {/* Card Body */}
              <div className="px-8 py-10">
                <h2 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">
                  อบรม Power BI
                </h2>
                <p className="text-[#0e9aef] font-medium mb-8 text-sm">
                  สำหรับโปรแกรมบัญชี WINSpeed และ myAccount
                </p>

                {/* Error Alert */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 animate-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600 text-sm font-light">{error}</p>
                  </div>
                )}

                {/* Success Alert */}
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-2xl flex items-start gap-3 animate-in slide-in-from-top-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-700 text-sm font-bold">ลงทะเบียนสำเร็จ!</p>
                      <p className="text-green-600 text-xs mt-1 font-light">เราได้รับข้อมูลของคุณเรียบร้อยแล้ว</p>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent rounded-2xl"
                      placeholder="ชื่อ-สกุล"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      ชื่อ-สกุล
                    </label>
                  </div>

                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent rounded-2xl"
                      placeholder="อีเมล"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      อีเมล
                    </label>
                  </div>

                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent rounded-2xl"
                      placeholder="เบอร์โทรศัพท์"
                    />
                    <label
                      htmlFor="mobile"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      เบอร์โทรศัพท์
                    </label>
                  </div>

                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent rounded-2xl"
                      placeholder="บริษัท"
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      บริษัท
                    </label>
                  </div>

                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[var(--brand-blue)] focus-within:bg-white focus-within:ring-4 focus-within:ring-[var(--brand-blue)]/50 transition-all overflow-hidden">
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent resize-none rounded-2xl"
                      placeholder="ที่อยู่บริษัท"
                    />
                    <label
                      htmlFor="address"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      ที่อยู่บริษัท
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#0e9aef] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-black transition-all duration-500 flex items-center justify-center gap-3 disabled:bg-gray-300 active:scale-95"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          กำลังบันทึก...
                        </>
                      ) : (
                        'ลงทะเบียนทันที'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
