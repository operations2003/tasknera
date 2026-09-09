import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ServicesSection from '@/app/components/ServicesSection';
import WhyTaskNeraSection from '@/app/components/WhyTaskNeraSection';
import ProcessSection from '@/app/components/ProcessSection';
import IndustriesSection from '@/app/components/IndustriesSection';
import EngagementModelsSection from '@/app/components/EngagementModelsSection';
import CTASection from '@/app/components/CTASection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyTaskNeraSection />
        <ProcessSection />
        <IndustriesSection />
        <EngagementModelsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}