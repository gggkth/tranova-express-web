import { ArrowRight } from 'lucide-react';
import FadeUp from './FadeUp';

export default function NetworkBanner() {
  return (
    <section className="w-full bg-[#ffcc00]">
      <FadeUp>
      <div className="max-w-4xl mx-auto flex items-stretch gap-14">
        {/* Image */}
        <div className="flex-shrink-0 w-44 overflow-hidden">
          <img
            src="https://img.freepik.com/premium-photo/data-exchange-global-network-world-earth-night-city-lights-from-orbit-elements-this-image-furnished-by-nasa_112293-1147.jpg?semt=ais_hybrid&w=740&q=80"
            alt="트라노바 네트워크"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="flex-1 py-10 pr-8">
          <h2 className="text-xl font-extrabold text-black mb-2 tracking-tight">
            KR · CN · AU 직영 네트워크
          </h2>
          <p className="text-sm text-black/80 leading-relaxed mb-5">
            트라노바 익스프레스는 한국·중국·호주 3개국에 직영 거점을 운영합니다.
            중간 대리점 없이 직접 처리하기 때문에 더 빠르고, 더 안전하며, 더 투명한 배송을 약속합니다.
          </p>
          <button className="bg-[#d40511] hover:bg-[#ba040f] transition-colors text-white font-bold px-6 py-3 text-sm rounded flex items-center gap-2 cursor-pointer">
            네트워크 보러가기 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      </FadeUp>
    </section>
  );
}
