import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Solutions & Operational Delivery | Tasknera',
  description:
    'Explore Tasknera tailored operational models and workforce solutions across 12 global industries, including Technology, BFSI, Healthcare, and Logistics.',
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
