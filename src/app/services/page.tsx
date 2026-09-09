'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/app/components/ServicesSection';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 bg-muted min-h-screen">
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
