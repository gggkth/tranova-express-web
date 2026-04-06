import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      {/* Top Yellow Bar - normal flow, scrolls away */}
      <div className="bg-[#ffcc00] w-full font-sans">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-sm font-semibold">
          <div className="flex items-center">
            <Link href="/" className="text-[#d40511] text-3xl font-black italic tracking-tighter">
              Tranova
              <span className="ml-[2px] block h-1 w-full bg-[#d40511] mt-0.5"></span>
              <span className="block h-1 w-full bg-[#d40511] mt-0.5"></span>
              <span className="block h-1 w-full bg-[#d40511] mt-0.5"></span>
            </Link>
          </div>

          <div className="flex items-center space-x-4 text-black">
            <Link href="#" className="hover:underline font-semibold">로그인</Link>
            <div className="flex font-bold">
              <span className="text-gray-600 px-2 cursor-pointer hover:underline">EN</span>
              <span className="px-2 cursor-pointer hover:underline">KO</span>
            </div>
          </div>
        </div>
      </div>

      {/* White Nav Bar - sticky, sticks to top after yellow bar scrolls away */}
      <nav className="bg-white border-b border-gray-200 w-full sticky top-0 z-50 font-sans">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium">
          <div className="flex space-x-8">
            {/* 조회 */}
            <div className="group relative flex items-center">
              <div className="flex items-center text-black hover:text-[#d40511] cursor-pointer py-4">
                조회 <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg min-w-[200px] hidden group-hover:flex flex-col z-50 py-2 mt-[-1px]">
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">화물 추적</Link>
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">서비스 지점 안내</Link>
              </div>
            </div>

            {/* 발송 */}
            <div className="group relative flex items-center">
              <div className="flex items-center text-black hover:text-[#d40511] cursor-pointer py-4">
                발송 <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg min-w-[200px] hidden group-hover:flex flex-col z-50 py-2 mt-[-1px]">
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">온라인 예약(접수)</Link>
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">운송장 재출력</Link>
              </div>
            </div>

            {/* 운임 */}
            <div className="group relative flex items-center">
              <div className="flex items-center text-black hover:text-[#d40511] cursor-pointer py-4">
                운임 <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg min-w-[200px] hidden group-hover:flex flex-col z-50 py-2 mt-[-1px]">
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">실시간 견적 산출</Link>
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">요율표 안내</Link>
              </div>
            </div>

            {/* 고객지원 */}
            <div className="group relative flex items-center">
              <div className="flex items-center text-black hover:text-[#d40511] cursor-pointer py-4">
                고객지원 <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg min-w-[200px] hidden group-hover:flex flex-col z-50 py-2 mt-[-1px]">
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">공지사항</Link>
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">FAQ</Link>
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">통관안내</Link>
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">금지품목</Link>
              </div>
            </div>

            {/* 회사소개 */}
            <div className="group relative flex items-center">
              <div className="flex items-center text-black hover:text-[#d40511] cursor-pointer py-4">
                회사소개 <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg min-w-[200px] hidden group-hover:flex flex-col z-50 py-2 mt-[-1px]">
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">회사 개요</Link>
                <Link href="#" className="px-4 py-2 text-black hover:bg-gray-50 hover:text-[#d40511]">네트워크(KR/CN/AU)</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
