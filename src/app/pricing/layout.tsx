import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Engagement Models | Tasknera',
  description:
    'Explore Tasknera transparent pricing plans and scalable engagement models for talent acquisition, dedicated operational pods, and managed workforce support.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
