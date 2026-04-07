'use client';

import { CalendarHeart, ClipboardList, Building2 } from 'lucide-react';
import FadeUp from './FadeUp';
import { useEffect, useState } from 'react';

const TYPING_TEXT = 'Tranova connects the world';

function TypingTitle({ onDone }: { onDone: () => void }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (displayed.length < TYPING_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed(TYPING_TEXT.slice(0, displayed.length + 1));
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
      onDone();
    }
  }, [displayed, done, onDone]);

  return (
    <div className="mb-6 w-full text-left">
      <h1
        className="font-black text-white tracking-tight leading-none"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', height: 'clamp(3rem, 8.4vw, 7.2rem)' }}
      >
        {displayed}
        <span className="inline-block w-[3px] h-[0.85em] bg-[#ffcc00] ml-1 align-middle animate-[blink_1s_step-start_infinite]" />
      </h1>
    </div>
  );
}

export default function Hero() {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section className="relative w-full font-sans mb-28 -mt-16">
      {/* Background Image */}
      <div
        className="absolute inset-x-0 top-0 bg-[url('/hero-bg-logistics.png')] bg-cover bg-center bg-no-repeat"
        style={{ height: '100vh', minHeight: '450px' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center gap-16 px-8 max-w-6xl mx-auto w-full translate-y-8"
        style={{ height: '100vh', minHeight: '450px' }}
      >
        <FadeUp className="w-full max-w-4xl flex flex-col items-start" delay={100}>
          <TypingTitle onDone={() => setTypingDone(true)} />
        </FadeUp>

        <div
          className="w-full max-w-2xl flex flex-col items-center mt-16 transition-all duration-700"
          style={{
            opacity: typingDone ? 1 : 0,
            transform: typingDone ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          {/* Search Box */}
          <div className="w-full flex items-center bg-white rounded-full shadow-xl p-1.5 overflow-hidden border border-gray-200">
            <input
              type="text"
              placeholder="운송장 번호를 입력해 주세요"
              className="flex-1 px-5 py-3 outline-none text-gray-800 text-base placeholder-gray-500 bg-transparent"
            />
            <button className="bg-[#d40511] hover:bg-[#ba040f] transition-colors text-white font-bold px-8 py-3 rounded-full text-base cursor-pointer flex-shrink-0 shadow-sm">
              배송 조회
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="relative z-20 max-w-4xl mx-auto w-full px-8 -mt-[140px] transition-all duration-700 delay-300"
        style={{
          opacity: typingDone ? 1 : 0,
          transform: typingDone ? 'translateY(0)' : 'translateY(16px)',
        }}
      >
        <div className="bg-white rounded-[32px] shadow-2xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100 relative overflow-hidden">
          {/* Top right Yellow Notch */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#ffcc00] -mr-8 -mt-8 transform rotate-45 pointer-events-none"></div>

          {/* Card 1 */}
          <div className="flex-1 flex flex-col items-center text-center p-8 cursor-pointer hover:bg-gray-50 transition-colors group">
            <CalendarHeart className="w-10 h-10 text-[#d40511] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-base mb-1 text-black">온라인 예약</h3>
            <p className="text-xs text-gray-500">맞춤 서비스 조회하기</p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 flex flex-col items-center text-center p-8 cursor-pointer hover:bg-gray-50 transition-colors group">
            <Building2 className="w-10 h-10 text-[#d40511] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-base mb-1 text-black">회사 소개</h3>
            <p className="text-xs text-gray-500">트라노바 익스프레스 소개</p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 flex flex-col items-center text-center p-8 cursor-pointer hover:bg-gray-50 transition-colors group relative z-10">
            <ClipboardList className="w-10 h-10 text-[#d40511] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-base mb-1 text-black">견적 받기</h3>
            <p className="text-xs text-gray-500">운송 품목에 따른 견적 받기</p>
          </div>
        </div>
      </div>
    </section>
  );
}
