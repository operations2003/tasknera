import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Industry Solutions & Operational Delivery | Tasknera',
  description:
    'Explore Tasknera tailored operational models and workforce solutions across 12 global industries, including Technology, BFSI, Healthcare, and Logistics.',
};

const industriesSchema = buildWebPageSchema({
  name: 'Industry Solutions & Operational Delivery | Tasknera',
  description:
    'Explore Tasknera tailored operational models and workforce solutions across 12 global industries, including Technology, BFSI, Healthcare, and Logistics.',
  url: 'https://tasknera.com/industries',
});

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={industriesSchema} />
      {children}
    </>
  );
}
