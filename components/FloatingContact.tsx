'use client';
import { useState } from 'react';
import { Headphones, X, Phone, Mail, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Menu */}
      {open && (
        <div className="flex flex-col gap-2 items-end">
          <a
            href="tel:020000000"
            className="flex items-center gap-3 bg-white shadow-lg rounded-full px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <span>02-0000-0000</span>
            <span className="w-8 h-8 bg-[#d40511] rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-white" />
            </span>
          </a>
          <a
            href="mailto:info@tranova.co.kr"
            className="flex items-center gap-3 bg-white shadow-lg rounded-full px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <span>이메일 문의</span>
            <span className="w-8 h-8 bg-[#d40511] rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-white" />
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 bg-white shadow-lg rounded-full px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <span>카카오 채널</span>
            <span className="w-8 h-8 bg-[#FEE500] rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-black" />
            </span>
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#d40511] hover:bg-[#ba040f] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
        style={{ transform: open ? 'rotate(0deg)' : 'rotate(0deg)' }}
      >
        {open
          ? <X className="w-6 h-6" />
          : <Headphones className="w-6 h-6" />
        }
      </button>
    </div>
  );
}
