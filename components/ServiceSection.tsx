import { Plane, Wind, Ship, ArrowRight } from 'lucide-react';
import FadeUp from './FadeUp';

const services = [
  {
    id: 1,
    icon: Plane,
    category: '항공 특송',
    subtitle: '빠른 배송이 필요한 모든 고객님께',
    description: '트라노바 익스프레스의 항공특송 서비스는 KR·CN·AU 직영 네트워크를 기반으로 최단 경로를 통해 화물을 신속하게 배송합니다.',
    features: ['익일 도착 옵션', '실시간 화물 추적', '전용 통관 지원', '파손 보상 보험'],
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxODEyMTJfOTYg/MDAxNTQ0NTgxNDk5NTUx.ttEGa_ewEgYNzN_OOvEen8_6XSAidW1DfAAznSxV3Cog.ZQGLASWCaVl4S3N0bKhfUhLk610nDCz0Ofo5h76yFAog.JPEG.prkac/1.jpg?type=w800',
    imageLeft: false,
  },
  {
    id: 2,
    icon: Wind,
    category: '항공 운송',
    subtitle: '비즈니스 전용',
    description: '정기 항공편을 활용한 안정적인 항공운송 서비스로 중량 화물도 합리적인 비용에 처리합니다. 직영 거점을 통한 일관된 서비스 품질을 보장합니다.',
    features: ['중량 화물 처리', '정기 운항 스케줄', '수출입 서류 대행', '창고 보관 연계'],
    image: 'https://jillamy.com/fileadmin/templates/images/blog/2024/air-freight-costs-01.jpg',
    imageLeft: true,
  },
  {
    id: 3,
    icon: Ship,
    category: '해상 운송',
    subtitle: '대량 화물에 최적화된 솔루션',
    description: '한국·중국·호주를 잇는 직영 해상운송 노선으로 대용량 화물을 경제적으로 운송합니다. FCL·LCL 모두 지원하며 유연한 스케줄을 제공합니다.',
    features: ['FCL / LCL 모두 지원', '경쟁력 있는 운임', '항만 픽업·배송 연계', '위험물 취급 가능'],
    image: '/hero-bg-logistics.png',
    imageLeft: false,
  },
];

export default function ServiceSection() {
  return (
    <section className="w-full pt-24 pb-16 flex flex-col gap-16 font-sans bg-white">
      <FadeUp className="max-w-6xl mx-auto w-full px-8 text-center">
        <p className="text-xs font-bold text-[#d40511] uppercase tracking-widest mb-2">Our Services</p>
        <h2 className="text-4xl font-extrabold text-black tracking-tight">트라노바 익스프레스 주요 서비스</h2>
      </FadeUp>

      {services.map((svc) => {
        const Icon = svc.icon;
        return (
          <FadeUp key={svc.id}>
            <div className="max-w-6xl mx-auto px-8">
              <div className="relative min-h-[460px]">
                {/* Image - fills right/left side, stays within container */}
                <div className={`absolute top-0 bottom-0 w-[62%] rounded-2xl overflow-hidden ${svc.imageLeft ? 'left-0' : 'right-0'}`}>
                  <img
                    src={svc.image}
                    alt={svc.category}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Card - overlaps image, floats above */}
                <div className={`relative z-10 py-10 flex items-center ${svc.imageLeft ? 'justify-end' : 'justify-start'}`}>
                  <div className="w-[56%] bg-white shadow-2xl rounded-2xl p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5 text-[#d40511]" />
                        <span className="text-xs font-bold text-[#d40511] uppercase tracking-widest">
                          Service 0{svc.id}
                        </span>
                      </div>
                      <h2 className="text-3xl font-extrabold text-black mb-2 tracking-tight">
                        {svc.category}
                      </h2>
                      <p className="text-base font-semibold text-gray-600 mb-4">{svc.subtitle}</p>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6">{svc.description}</p>

                      {/* Features */}
                      <div className="bg-gray-50 rounded p-4 grid grid-cols-2 gap-3">
                        {svc.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-5 h-5 bg-[#ffcc00] rounded flex items-center justify-center flex-shrink-0">
                              <span className="w-2 h-2 bg-black rounded-sm block"></span>
                            </span>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="mt-8 bg-[#d40511] hover:bg-[#ba040f] transition-colors text-white font-bold px-0 py-3 text-sm rounded flex items-center justify-center gap-2 cursor-pointer w-full">
                      서비스 상세보기 <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        );
      })}
    </section>
  );
}
