import Hero from "@/components/HeroSection";
import InfiniteLogos from "@/components/LogoSection";
import WhyUs from "@/components/WhySection";
import Services from "@/components/ServicesSection";
import CTA from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-black">
      <Hero />
      <InfiniteLogos />
      <WhyUs />
      <Services />
      <CTA />
    </main>
  );
}
