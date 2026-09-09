'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EngagementModelsSection from '@/app/components/EngagementModelsSection';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 bg-background min-h-screen">
        <EngagementModelsSection />
      </main>
      <Footer />
    </>
  );
}
