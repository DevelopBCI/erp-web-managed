'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';
import AIRegistrationModal from "./AIRegistrationModal";

type Role = 'user' | 'assistant';

interface ChatMessage {
  id: string;
  content: string;
  role: Role;
  timestamp: Date;
};

function uid() {
  return Math.random().toString(16).slice(2) + '-' + Date.now().toString(16);
}

export default function FloatChatGemini(props: {
  title?: string;
  subtitle?: string;
  storageKey?: string;
  initialOpen?: boolean;
//   onSend?: (messages: ChatMessage[], userText: string) => Promise<string>;
}) {
  const {
    title = 'BCI Chat',
    subtitle = 'Ask anything by Gemini AI',
    storageKey = 'floatchat-gemini:v1',
    initialOpen = false,
    // onSend,
  } = props;

  const {isAuthenticated} = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAIRegistrationModalOpen, setIsAIRegistrationModalOpen] = useState(false);
  const [open, setOpen] = useState(initialOpen);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as ChatMessage[];
      if (Array.isArray(parsed)) setMessages(parsed);
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages, storageKey]);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [open, messages, busy]);

  const canSend = useMemo(() => input.trim().length > 0 && !busy, [input, busy]);

  async function handleSend() {
    const text = input.trim();
    if (!text || busy) return;

    setInput('');
    setBusy(true);

    const userMsg: ChatMessage = {
      id: uid(),
      content: text,
      role: 'user',
      timestamp: new Date(),
    };

    const botMsgId = uid();
    setMessages((prev) => [...prev, userMsg]);

    try {
      let reply = ``;

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            messages: [...messages, userMsg],
        }),
      });

      // --- แบบเดิมที่รอให้ได้ข้อความทั้งหมดก่อนค่อยอัปเดต (ไม่ใช้แล้ว) ---
      if (!response.ok) {
        reply = 'เกิดข้อผิดพลาดในการเชื่อมต่อ';
      } else {
        let data = await response.json();
        reply = data.content;
      }
      const botMsg: ChatMessage = {
        id: uid(),
        content: reply,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);

      // // เตรียมสร้าง Message stream โดยเริ่มจาก Message เปล่าของ Bot ก่อน
      // const initialBotMsg: ChatMessage = {
      //   id: botMsgId,
      //   content: '',
      //   role: 'assistant',
      //   timestamp: new Date(),
      // };
      // setMessages((prev) => [...prev, initialBotMsg]);

      // // --- เริ่มต้นการอ่าน Stream ---
      // const reader = response.body?.getReader();
      // const decoder = new TextDecoder();
      // let accumulatedText = '';

      // if (reader) {
      //   setBusy(false);
      //   while (true) {
      //     const { done, value } = await reader.read();
      //     if (done) break;

      //     // แปลง Chunk ที่ได้เป็น Text
      //     const chunkText = decoder.decode(value, { stream: true });
      //     accumulatedText += chunkText;

      //     // อัปเดตเฉพาะ Message ของ Bot ตัวล่าสุดด้วย Text ที่ค่อยๆ ไหลมา
      //     setMessages((prev) =>
      //       prev.map((msg) =>
      //         msg.id === botMsgId ? { ...msg, content: accumulatedText } : msg
      //       )
      //     );
      //   }
      // }
    } catch (error) {
      console.error('Error:', error);
      const errMsg: ChatMessage = {
        id: uid(),
        content: `ขออภัยครับ เกิดข้อผิดพลาดในการเชื่อมต่อ`,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setBusy(false);
    }
  }

  function clearChat() {
    setMessages([]);
  }

  return (
    <>
      <style>{`
        @keyframes fc-aurora {
          0%   { transform: translate3d(-18%, -10%, 0) scale(1.02); filter: blur(18px); opacity: 0.75; }
          50%  { transform: translate3d( 10%,  12%, 0) scale(1.08); filter: blur(22px); opacity: 0.85; }
          100% { transform: translate3d(-18%, -10%, 0) scale(1.02); filter: blur(18px); opacity: 0.75; }
        }
        @keyframes fc-spark {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(10deg) scale(1.05); }
          100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes fc-dot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }

        .thinking-dot {
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #ff50aa, #786eff);
          border-radius: 50%;
          display: inline-block;
          animation: fc-dot-bounce 1.4s infinite ease-in-out both;
        }

        .thinking-dot:nth-child(2) { animation-delay: 0.2s; }
        .thinking-dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      {/* Floating button stays colorful */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed',
          right: 18,
          bottom: 18,
          width: 58,
          height: 58,
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.16)',
          background:
            'linear-gradient(135deg, rgba(255,80,170,0.85), rgba(120,110,255,0.85), rgba(70,220,255,0.85))',
          boxShadow: '0 18px 50px rgba(20, 0, 40, 0.45)',
          display: 'grid',
          placeItems: 'center',
          zIndex: 9999,
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            width: 52,
            height: 52,
            borderRadius: 999,
            display: 'grid',
            placeItems: 'center',
            background:
              'radial-gradient(60% 60% at 30% 30%, rgba(255,255,255,0.65), rgba(255,255,255,0.0) 65%), rgba(0,0,0,0.10)',
            border: '1px solid rgba(255,255,255,0.22)',
            color: 'white',
            fontSize: 20,
            lineHeight: 1,
            textShadow: '0 8px 18px rgba(0,0,0,0.35)',
            animation: 'fc-spark 2.2s ease-in-out infinite',
          }}
        >
          ✦
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            right: 18,
            bottom: 88,
            width: 380,
            maxWidth: 'calc(100vw - 36px)',
            height: 540,
            maxHeight: 'calc(100vh - 120px)',
            borderRadius: 20,
            border: '1px solid rgba(0,0,0,0.10)',
            background: '#ffffff', // ✅ white chat background
            boxShadow: '0 26px 90px rgba(0,0,0,0.22)',
            color: '#0b0b10', // ✅ dark text for white background
            zIndex: 9999,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Soft aurora (still colorful) but toned down for white surface */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: -90,
              background:
                'radial-gradient(55% 45% at 20% 15%, rgba(255,80,170,0.20), rgba(255,80,170,0) 62%),' +
                'radial-gradient(55% 45% at 80% 20%, rgba(90,120,255,0.18), rgba(90,120,255,0) 62%),' +
                'radial-gradient(50% 45% at 55% 85%, rgba(70,220,255,0.16), rgba(70,220,255,0) 62%),' +
                'radial-gradient(50% 45% at 15% 85%, rgba(140,255,120,0.12), rgba(140,255,120,0) 62%)',
              animation: 'fc-aurora 10s ease-in-out infinite',
              pointerEvents: 'none',
              opacity: 0.9,
            }}
          />

          {/* Header */}
          <div
            style={{
              position: 'relative',
              padding: '12px 12px 10px',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              background:
                'linear-gradient(90deg, rgba(255,80,170,0.10), rgba(120,110,255,0.08), rgba(70,220,255,0.10))',
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.2 }}>{title}</div>
              <div
                style={{
                  fontSize: 12,
                  opacity: 0.75,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {subtitle}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button type="button" onClick={clearChat} style={headerBtnStyleWhite} title="Clear">
                Clear
              </button>
              <button type="button" onClick={() => setOpen(false)} style={headerBtnStyleWhite} title="Close">
                ✕
              </button>
            </div>
          </div>

          {/* Messages - Not authenticated */}
          {!isAuthenticated && (<div
            ref={scrollRef}
            style={{
              position: 'relative',
              flex: 1,
              padding: 12,
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div
                style={{
                  marginTop: 24,
                  padding: 14,
                  borderRadius: 16,
                  border: '1px dashed rgba(0,0,0,0.18)',
                  background: 'rgba(255,255,255,0.65)',
                  fontSize: 13,
                  lineHeight: 1.35,
                }}
              >
                <p>สวัสดีครับ! ยินดีต้อนรับสู่ BCI AI Chat👋</p>
                <p>ขออภัยด้วยครับ ฟังก์ชัน BCI AI Chat จะเปิดให้ใช้งานสำหรับสมาชิกเท่านั้น!!</p>
                <p>ให้ผู้ช่วย AI ของเราดูแลและตอบข้อสงสัยให้คุณได้เลยครับ</p>
            </div>
          </div>)}    

          {/* Messages */}
          {isAuthenticated && (<div
            ref={scrollRef}
            style={{
              position: 'relative',
              flex: 1,
              padding: 12,
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {messages.length === 0 ? (
              <div
                style={{
                  marginTop: 24,
                  padding: 14,
                  borderRadius: 16,
                  border: '1px dashed rgba(0,0,0,0.18)',
                  background: 'rgba(255,255,255,0.65)',
                  fontSize: 13,
                  lineHeight: 1.35,
                }}
              >
                <p>สวัสดีครับ! ยินดีต้อนรับสู่ BCI AI Chat👋</p>
                <p>มีคำถามไหมครับ?</p>
                <p>ให้ผู้ช่วย AI ของเราดูแลและตอบข้อสงสัยให้คุณได้เลยครับ</p>
              </div>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  style={{
                    alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '88%',
                    padding: '10px 12px',
                    borderRadius: 16,
                    border: '1px solid rgba(0,0,0,0.08)',
                    background:
                      m.role === 'user'
                        ? 'linear-gradient(135deg, rgba(255,80,170,0.25), rgba(120,110,255,0.18), rgba(70,220,255,0.18))'
                        : 'rgba(255,255,255,0.85)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    fontSize: 13,
                    lineHeight: 1.4,
                    boxShadow: '0 10px 26px rgba(0,0,0,0.08)',
                  }}
                >
                  {m.content}
                </div>
              ))
            )}

            {busy && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '12px 16px',
                  borderRadius: '16px 16px 16px 4px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  background: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <span style={{ 
                  marginLeft: 8, 
                  fontSize: 12, 
                  fontWeight: 600, 
                  color: '#786eff',
                  letterSpacing: '0.5px'
                }}>
                  กำลังประมวลผล
                </span>
                <span className="thinking-dot"></span>
                <span className="thinking-dot"></span>
                <span className="thinking-dot"></span>
              </div>
            )}
          </div>
          )}

          {/* Composer  - Not authenticated */}
          {!isAuthenticated && (<div style={{
              position: 'relative',
              padding: 12,
              borderTop: '1px solid rgba(0,0,0,0.08)',
              background: 'rgba(255,255,255,0.75)',
            }}>
                <div className="p-4 bg-white border-t border-slate-100 shrink-0 flex flex-col gap-2">
                    <button
                        className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-lg font-medium text-sm transition-colors shadow-sm"
                        onClick={() => setIsLoginModalOpen(true)}
                    >
                        เข้าสู่ระบบ
                    </button>
                    <button
                        className="w-full py-2.5 bg-white hover:bg-slate-50 hover:cursor-pointer text-blue-600 border border-slate-200 rounded-lg font-medium text-sm transition-colors"
                        onClick={() => setIsAIRegistrationModalOpen(true)}
                    >
                        สมัครสมาชิกใหม่
                    </button>
                </div>
            </div>
          )}

          {/* Composer */}
          {isAuthenticated && (<div
            style={{
              position: 'relative',
              padding: 12,
              borderTop: '1px solid rgba(0,0,0,0.08)',
              display: 'flex',
              gap: 10,
              alignItems: 'flex-end',
              background: 'rgba(255,255,255,0.75)',
            }}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  void handleSend();
                }
              }}
              placeholder="Message…"
              rows={1}
              style={{
                flex: 1,
                resize: 'none',
                borderRadius: 16,
                padding: '10px 12px',
                border: '1px solid rgba(0,0,0,0.12)',
                background: '#ffffff',
                color: '#0b0b10',
                outline: 'none',
                fontSize: 13,
                lineHeight: 1.35,
                minHeight: 42,
                maxHeight: 120,
                boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
              }}
            />

            <button
              type="button"
              onClick={() => void handleSend()}
              disabled={!canSend}
              style={{
                height: 42,
                padding: '0 14px',
                borderRadius: 16,
                border: '1px solid rgba(0,0,0,0.10)',
                background: canSend
                  ? 'linear-gradient(135deg, rgba(255,80,170,0.95), rgba(120,110,255,0.88), rgba(70,220,255,0.88))'
                  : 'rgba(0,0,0,0.06)',
                color: canSend ? '#ffffff' : 'rgba(0,0,0,0.45)',
                cursor: canSend ? 'pointer' : 'not-allowed',
                fontSize: 13,
                fontWeight: 900,
                boxShadow: canSend ? '0 16px 40px rgba(40,0,60,0.18)' : undefined,
              }}
            >
              Send
            </button>
          </div>
          )}
        </div>
      )}
      
      {isLoginModalOpen && (
        <LoginModal 
            isOpen={isLoginModalOpen} 
            onClose={() => setIsLoginModalOpen(false)} 
            onSwitchToRegister={() => {
                setIsLoginModalOpen(false);
                setIsAIRegistrationModalOpen(true);
            }}
        />
       )}

      {isAIRegistrationModalOpen && (
        <AIRegistrationModal 
            isOpen={isAIRegistrationModalOpen} 
            onClose={() => setIsAIRegistrationModalOpen(false)} 
            onSwitchToLogin={() => {
                setIsAIRegistrationModalOpen(false);
                setIsLoginModalOpen(true);
            }}
        />
      )}
    </>
  );
}

const headerBtnStyleWhite: React.CSSProperties = {
  borderRadius: 14,
  padding: '8px 10px',
  border: '1px solid rgba(0,0,0,0.12)',
  background: 'rgba(255,255,255,0.75)',
  color: '#0b0b10',
  cursor: 'pointer',
  fontSize: 12,
};
