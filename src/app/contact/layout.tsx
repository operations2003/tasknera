import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { contactPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Tasknera & Scope Your Consultation',
  description:
    'Contact Tasknera to schedule a strategic consultation, scope operational headcount requirements, or evaluate our recruitment and HR software solutions.',
  alternates: {
    canonical: 'https://tasknera.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      {children}
    </>
  );
}
