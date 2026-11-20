import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Pricing & Engagement Models | Tasknera',
  description:
    'Explore Tasknera transparent pricing plans and scalable engagement models for talent acquisition, dedicated operational pods, and managed workforce support.',
};

const pricingSchema = buildWebPageSchema({
  name: 'Pricing & Engagement Models | Tasknera',
  description:
    'Explore Tasknera transparent pricing plans and scalable engagement models for talent acquisition, dedicated operational pods, and managed workforce support.',
  url: 'https://tasknera.com/pricing',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={pricingSchema} />
      {children}
    </>
  );
}
