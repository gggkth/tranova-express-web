import Link from 'next/link';
import FadeUp from './FadeUp';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 font-sans">
      <FadeUp><div className="max-w-6xl mx-auto px-8 py-14">
        <div className="grid grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-[#d40511] text-2xl font-black italic tracking-tighter mb-1">
              Tranova
              <span className="block h-[3px] w-full bg-[#d40511] mt-0.5"></span>
              <span className="block h-[3px] w-full bg-[#d40511] mt-0.5"></span>
              <span className="block h-[3px] w-full bg-[#d40511] mt-0.5"></span>
            </div>
            <p className="text-xs mt-4 leading-relaxed">
              한국 · 중국 · 호주를 잇는<br />직영 국제 특송 서비스
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">항공 특송</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">항공 운송</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">해상 운송</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">통관 지원</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">배송 조회</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">온라인 예약</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">견적 문의</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>대표전화: 02-0000-0000</li>
              <li>이메일: info@tranova.co.kr</li>
              <li className="pt-2 text-xs leading-relaxed">
                서울특별시 강남구 테헤란로 123<br />트라노바빌딩 7층
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex justify-between items-center text-xs">
          <p>© 2026 Tranova Express. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
            <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
          </div>
        </div>
      </div></FadeUp>
    </footer>
  );
}
