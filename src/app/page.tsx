import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import DifferentiatorSection from '@/app/components/DifferentiatorSection';
import TakeOffPlateSection from '@/app/components/TakeOffPlateSection';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from '@/app/components/AboutSection';
import WhoWeSupportSection from '@/app/components/WhoWeSupportSection';
import IndustriesSection from '@/app/components/IndustriesSection';
import EngagementModelsSection from '@/app/components/EngagementModelsSection';
import ProcessSection from '@/app/components/ProcessSection';
import WhyTaskNeraSection from '@/app/components/WhyTaskNeraSection';
import CTASection from '@/app/components/CTASection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. One Partner. Multiple Business Functions */}
        <DifferentiatorSection />

        {/* 3. What Can We Help You With? (For Businesses) */}
        <TakeOffPlateSection />

        {/* 4. Our Solutions (5 Major Verticals) */}
        <ServicesSection />

        {/* About TaskNera & Story */}
        <AboutSection />

        {/* 5. Who We Support (Built for Businesses at Every Stage) */}
        <WhoWeSupportSection />

        {/* 6. Industries & Domain Coverage */}
        <IndustriesSection />

        {/* 7. Engagement Models (Flexible Models. Scalable Support.) */}
        <EngagementModelsSection />

        {/* 8. How We Work (Discover → Design → Build → Deliver → Measure → Scale) */}
        <ProcessSection />

        {/* 9. Why TaskNera (5 Core Principles) */}
        <WhyTaskNeraSection />

        {/* 10-12. Global Delivery, FAQs & Let's Build Together */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}