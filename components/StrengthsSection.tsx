'use client';

import { useState } from 'react';
import FadeUp from './FadeUp';

const strengths = [
  {
    id: 1,
    category: '직영 운영',
    title: '직영 네트워크',
    description: 'KR·CN·AU 3개국 직영 거점을 운영합니다. 중간 대리점 없이 직접 처리하여 불필요한 비용과 지연을 없애고 일관된 서비스 품질을 보장합니다.',
    features: ['한국 직영', '중국 직영', '호주 직영'],
    image: 'https://img.freepik.com/premium-photo/data-exchange-global-network-world-earth-night-city-lights-from-orbit-elements-this-image-furnished-by-nasa_112293-1147.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 2,
    category: '통관 서비스',
    title: '통관 지원',
    description: '한국·중국·호주 현지 통관 전문 인력이 수출입 서류 작성부터 세관 신고까지 전 과정을 대행합니다. 복잡한 통관 절차를 고객 대신 책임집니다.',
    features: ['수출 통관', '수입 통관', '서류 대행'],
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxODEyMTJfOTYg/MDAxNTQ0NTgxNDk5NTUx.ttEGa_ewEgYNzN_OOvEen8_6XSAidW1DfAAznSxV3Cog.ZQGLASWCaVl4S3N0bKhfUhLk610nDCz0Ofo5h76yFAog.JPEG.prkac/1.jpg?type=w800',
  },
  {
    id: 3,
    category: '화물 추적',
    title: '실시간 추적',
    description: '화물 접수부터 최종 배달까지 모든 이동 경로를 실시간으로 확인할 수 있습니다. 운송장 번호 하나로 언제 어디서든 배송 현황을 투명하게 조회하세요.',
    features: ['운송장 추적', '실시간 알림', '투명 공개'],
    image: 'https://jillamy.com/fileadmin/templates/images/blog/2024/air-freight-costs-01.jpg',
  },
];

export default function StrengthsSection() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="w-full font-sans">
      {/* Transition watermark */}
      <div className="w-full bg-white px-12 overflow-hidden">
        <p className="text-[clamp(72px,11vw,160px)] font-black leading-none tracking-[0.08em] whitespace-nowrap text-center select-none text-[#f6f6f6]">
          TRANOVA EXPRESS
        </p>
      </div>

      {/* Gray content section */}
      <div className="w-full bg-[#f6f6f6] -mt-6 pt-24 pb-40">
        <div className="max-w-6xl mx-auto px-8">
          {/* Header */}
          <FadeUp className="mb-10">
            <p className="text-xs font-bold text-[#d40511] uppercase tracking-widest mb-2">Why Tranova</p>
            <h2 className="text-4xl font-extrabold text-black tracking-tight">트라노바를 선택하는 이유</h2>
          </FadeUp>

          {/* Horizontal accordion */}
          <FadeUp>
            <div className="flex gap-3 h-[500px]">
              {strengths.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${isActive ? 'flex-[3]' : 'flex-[1]'
                      }`}
                  >
                    {/* Background image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out"
                      style={{ transform: isActive ? 'scale(1.03)' : 'scale(1)' }}
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background: isActive
                          ? 'linear-gradient(to top, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 100%)'
                          : 'linear-gradient(to top, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.4) 100%)',
                      }}
                    />

                    {/* Collapsed: vertical title */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}
                    >
                      <span className="text-white font-black text-3xl tracking-widest select-none break-words text-center px-2">
                        {item.title}
                      </span>
                    </div>

                    {/* Expanded: full content */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-300 ${isActive ? 'opacity-100 delay-150' : 'opacity-0'
                        }`}
                    >
                      <p className="text-xs font-bold text-[#ffcc00] uppercase tracking-widest mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed mb-5">
                        {item.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {item.features.map((f) => (
                          <span
                            key={f}
                            className="border border-white/50 rounded-full px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Index number — always visible */}
                    <div className="absolute top-5 left-5">
                      <span className="text-white/40 font-black text-sm">0{item.id}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
