import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ClientMarquee } from "@/components/sections/client-marquee";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ProductSection } from "@/components/sections/product";
import { IndustriesSection } from "@/components/sections/industries";
import { WhySection } from "@/components/sections/why-vedhitek";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClientMarquee />
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <IndustriesSection />
        <WhySection />
        <CaseStudiesSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
