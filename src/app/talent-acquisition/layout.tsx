import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Talent Acquisition & Workforce Hiring | Tasknera',
  description:
    'Specialized talent acquisition and recruitment services across executive, tech, and operations hiring, powered by HireIQ intelligence and domain recruiters.',
  alternates: {
    canonical: 'https://tasknera.com/talent-acquisition',
  },
};

const talentAcquisitionSchema = buildServiceSchema({
  name: 'Talent Acquisition & Workforce Hiring',
  description:
    'Specialized talent acquisition and recruitment services across executive, tech, and operations hiring, powered by HireIQ intelligence and domain recruiters.',
  url: 'https://tasknera.com/talent-acquisition',
  serviceType: 'Recruitment & Talent Acquisition',
});

export default function TalentAcquisitionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={talentAcquisitionSchema} />
      {children}
    </>
  );
}
