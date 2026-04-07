'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Search, User, ExternalLink, Globe } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const navItems = [
    {
      title: '조회',
      links: [
        { name: '화물 추적', href: '#' },
        { name: '서비스 지점 안내', href: '#' },
      ],
    },
    {
      title: '발송',
      links: [
        { name: '온라인 예약(접수)', href: '#' },
        { name: '운송장 재출력', href: '#' },
      ],
    },
    {
      title: '운임',
      links: [
        { name: '실시간 견적 산출', href: '#' },
        { name: '요율표 안내', href: '#' },
      ],
    },
    {
      title: '고객지원',
      links: [
        { name: '공지사항', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: '통관안내', href: '#' },
        { name: '금지품목', href: '#' },
      ],
    },
    {
      title: '회사소개',
      links: [
        { name: '회사 개요', href: '#' },
        { name: '네트워크(KR/CN/AU)', href: '#' },
      ],
    },
  ];

  return (
    <>
      {/* Sticky Yellow Nav Bar */}
      <nav className="bg-[#ffcc00] w-full sticky top-0 z-[60] font-sans shadow-sm h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-sm font-semibold">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="text-[#d40511] text-3xl font-black italic tracking-tighter leading-[0.7]">
              Tranova
              <span className="ml-[2px] block h-0.5 w-full bg-[#d40511] mt-0.5"></span>
              <span className="block h-0.5 w-full bg-[#d40511] mt-0.5"></span>
              <span className="block h-0.5 w-full bg-[#d40511] mt-0.5"></span>
            </Link>
          </div>

          {/* Desktop Center Menus */}
          <div className="hidden md:flex space-x-8 items-center h-full">
            {navItems.map((item) => (
              <div key={item.title} className="group relative h-full flex items-center">
                <div className="flex items-center text-black hover:text-[#d40511] cursor-pointer h-full px-2 transition-colors">
                  {item.title} <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </div>
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-xl min-w-[200px] hidden group-hover:flex flex-col z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2.5 text-black hover:bg-gray-50 hover:text-[#d40511] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 text-black flex-shrink-0">
            <Link href="#" className="hover:underline font-semibold">로그인</Link>
            <div className="flex font-bold">
              <span className="text-gray-600 px-2 cursor-pointer hover:underline border-r border-black/10">EN</span>
              <span className="px-2 cursor-pointer hover:underline text-[#d40511]">KO</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#d40511] p-1 bg-white rounded-full shadow-sm hover:scale-105 transition-transform border border-red-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-8 h-8 p-1" /> : <Menu className="w-8 h-8 p-1.5 text-black" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - DHL Style Full Page Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[55] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Main List items */}
          <div className="flex flex-col border-t border-gray-200">
            {navItems.map((item) => (
              <div key={item.title} className="w-full border-b border-gray-200 flex flex-col">
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className="w-full px-6 py-4 flex justify-between items-center text-[17px] font-bold text-black hover:bg-gray-50"
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-black transition-transform duration-200 ${
                      openSubmenu === item.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`bg-gray-50/50 overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                    openSubmenu === item.title ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  {item.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-10 py-3 text-black text-[15px] border-b border-gray-100/50 hover:text-[#d40511]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Specialized Bottom Items */}
            <div className="flex flex-col">
              {/* Customer Portal Login */}
              <Link
                href="#"
                className="w-full px-6 py-4 border-b border-gray-200 flex items-center text-[17px] font-bold text-black hover:bg-gray-50 group"
              >
                <User className="w-5 h-5 mr-3 text-black group-hover:text-[#d40511]" />
                <span>고객 포털 로그인</span>
                <ChevronDown className="ml-auto w-4 h-4 -rotate-90 text-[#d40511]" />
              </Link>

              {/* Find Service Point */}
              <Link
                href="#"
                className="w-full px-6 py-4 border-b border-gray-200 flex items-center text-[17px] font-bold text-black hover:bg-gray-50 group"
              >
                <ExternalLink className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#d40511]" />
                <span className="flex-1">서비스 지점 찾기</span>
                <ExternalLink className="w-4 h-4 text-[#d40511] ml-1" />
              </Link>

              {/* Search */}
              <button className="w-full px-6 py-4 border-b border-gray-200 flex items-center text-[17px] font-bold text-black hover:bg-gray-50">
                <Search className="w-5 h-5 mr-3 text-gray-400" />
                <span>검색</span>
              </button>

              {/* Location Switcher */}
              <button className="w-full px-6 py-4 border-b border-gray-200 flex items-center text-[17px] font-medium text-black hover:bg-gray-50">
                <span className="mr-3 text-lg">🇰🇷</span>
                <span>위치를 바꾸다 (KR)</span>
              </button>

              {/* Language Selection */}
              <div className="w-full px-6 py-4 border-b border-gray-200 flex items-center justify-between text-[17px] font-medium text-black hover:bg-gray-50 group">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-gray-400 invisible" />
                  <span>언어 선택</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-600 hover:text-black">EN</button>
                  <span className="w-px h-4 bg-gray-300"></span>
                  <button className="text-[#d40511] font-bold">KO</button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-20 bg-white"></div>
        </div>
      </div>
    </>
  );
}
