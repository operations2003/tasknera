import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Consultation Scoping | Tasknera',
  description:
    'Contact Tasknera to schedule a strategic consultation, scope operational headcount requirements, or evaluate our recruitment and HR software solutions.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
