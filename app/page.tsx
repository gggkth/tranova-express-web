import Hero from "@/components/Hero";
import NetworkBanner from "@/components/NetworkBanner";
import ServiceSection from "@/components/ServiceSection";
import StrengthsSection from "@/components/StrengthsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <Hero />
      <NetworkBanner />
      <ServiceSection />
      <StrengthsSection />
    </main>
  );
}
