'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProcessSection from '@/app/components/ProcessSection';

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 bg-primary min-h-screen">
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
