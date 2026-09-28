import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import DifferentiatorSection from '@/app/components/DifferentiatorSection';
import TakeOffPlateSection from '@/app/components/TakeOffPlateSection';
import ServicesSection from '@/app/components/ServicesSection';
import PlatformSection from '@/app/components/PlatformSection';
import CompanyOverviewSection from '@/app/components/CompanyOverviewSection';
import WhoWeSupportSection from '@/app/components/WhoWeSupportSection';
import EngagementModelsSection from '@/app/components/EngagementModelsSection';
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

        {/* 4b. Unified HireIQ™ & HRMS Platform Ecosystem */}
        <PlatformSection />

        {/* 5. Merged Company Overview: About, How We Work & Industries */}
        <CompanyOverviewSection />

        {/* 6. Who We Support (Built for Businesses at Every Stage) */}
        <WhoWeSupportSection />

        {/* 7. Engagement Models (Flexible Models. Scalable Support.) */}
        <EngagementModelsSection />

        {/* 8. Why TaskNera (5 Core Principles) */}
        <WhyTaskNeraSection />

        {/* 9. Global Delivery, FAQs & Let's Build Together */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}