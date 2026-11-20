import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talent Acquisition & Recruitment Services | Tasknera',
  description:
    'Specialized talent acquisition and recruitment services across executive, tech, and operations hiring, powered by HireIQ intelligence and domain recruiters.',
};

export default function TalentAcquisitionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
