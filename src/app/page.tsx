import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import CoreCapabilitiesSection from '@/app/components/CoreCapabilitiesSection';
import ServicesSection from '@/app/components/ServicesSection';
import WhoWeSupportSection from '@/app/components/WhoWeSupportSection';
import WhyTaskNeraSection from '@/app/components/WhyTaskNeraSection';
import HowWeWorkSection from '@/app/components/HowWeWorkSection';
import GlobalDeliveryAndMetricsSection from '@/app/components/GlobalDeliveryAndMetricsSection';
import LeadershipSection from '@/app/components/LeadershipSection';
import HomepageFAQSection from '@/app/components/HomepageFAQSection';
import FinalCTASection from '@/app/components/FinalCTASection';

export const metadata = {
  title: 'TaskNera | Global HR, Recruitment, Technology & Business Operations Partner',
  description:
    'Build your team. Strengthen operations. Scale without limits. TaskNera is your strategic partner for talent acquisition, HR operations, workforce solutions, virtual assistance and technology.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Core Capabilities */}
        <CoreCapabilitiesSection />

        {/* Section 3: Our Core Services */}
        <ServicesSection />

        {/* Section 4: Who We Serve (Startups, SMEs, Enterprises, Global, India Entry) */}
        <WhoWeSupportSection />

        {/* Section 6: Why TaskNera (8 Core Differentiators) */}
        <WhyTaskNeraSection />

        {/* Section 7: How We Work (4-Stage Delivery Process) */}
        <HowWeWorkSection />

        {/* Section 8 & 9: Global Delivery & Verified Metrics */}
        <GlobalDeliveryAndMetricsSection />

        {/* Section 10: Leadership & Founder Profile */}
        <LeadershipSection />

        {/* Section 11: FAQ (Expandable Accordions) */}
        <HomepageFAQSection />

        {/* Section 12: Final CTA */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
