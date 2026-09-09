'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustriesSection from '@/app/components/IndustriesSection';

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 bg-muted min-h-screen">
        <IndustriesSection />
      </main>
      <Footer />
    </>
  );
}
