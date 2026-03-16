import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ProductSection } from "@/components/sections/product";
import { IndustriesSection } from "@/components/sections/industries";
import { WhySection } from "@/components/sections/why-vedhitek";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <IndustriesSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
