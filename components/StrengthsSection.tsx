import { ArrowRight } from 'lucide-react';
import FadeUp from './FadeUp';

const strengths = [
  {
    title: '직영 네트워크',
    description: 'KR·CN·AU 3개국 직영 거점을 운영합니다. 중간 대리점 없이 직접 처리하여 불필요한 비용과 지연을 없애고 일관된 서비스 품질을 보장합니다.',
    image: 'https://img.freepik.com/premium-photo/data-exchange-global-network-world-earth-night-city-lights-from-orbit-elements-this-image-furnished-by-nasa_112293-1147.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    title: '통관 지원',
    description: '한국·중국·호주 현지 통관 전문 인력이 수출입 서류 작성부터 세관 신고까지 전 과정을 대행합니다. 복잡한 통관 절차를 고객 대신 책임집니다.',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxODEyMTJfOTYg/MDAxNTQ0NTgxNDk5NTUx.ttEGa_ewEgYNzN_OOvEen8_6XSAidW1DfAAznSxV3Cog.ZQGLASWCaVl4S3N0bKhfUhLk610nDCz0Ofo5h76yFAog.JPEG.prkac/1.jpg?type=w800',
  },
  {
    title: '실시간 추적',
    description: '화물 접수부터 최종 배달까지 모든 이동 경로를 실시간으로 확인할 수 있습니다. 운송장 번호 하나로 언제 어디서든 배송 현황을 투명하게 조회하세요.',
    image: 'https://jillamy.com/fileadmin/templates/images/blog/2024/air-freight-costs-01.jpg',
  },
];

export default function StrengthsSection() {
  return (
    <section className="w-full py-28 font-sans bg-[#ffcc00]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <FadeUp className="mb-10 text-center">
          <p className="text-xs font-bold text-[#d40511] uppercase tracking-widest mb-2">Why Tranova</p>
          <h2 className="text-4xl font-extrabold text-black tracking-tight">차별화된 강점</h2>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          {strengths.map((item, i) => (
            <FadeUp key={item.title} delay={i * 120}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="flex items-center gap-1 text-base font-bold text-[#d40511] mb-3 group-hover:underline">
                    {item.title} <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
