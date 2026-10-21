import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import WhoWeSupportSection from '@/app/components/WhoWeSupportSection';
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

        {/* 2. Our Solutions (5 Major Operational Verticals) */}
        <ServicesSection />

        {/* 3. Who We Support (Built for Businesses at Every Stage) */}
        <WhoWeSupportSection />

        {/* 4. Why TaskNera (The TaskNera Way vs Traditional Staffing & BPO) */}
        <WhyTaskNeraSection />

        {/* 5. Global Delivery, FAQs & Inquiry Form */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}