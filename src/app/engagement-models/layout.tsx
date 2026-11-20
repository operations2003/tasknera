import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Engagement Models & Flexible Staffing | Tasknera',
  description:
    'Explore Tasknera flexible engagement models: single-role hiring, embedded specialists, dedicated operational pods, and fully managed business services.',
};

const engagementSchema = buildWebPageSchema({
  name: 'Engagement Models & Flexible Staffing | Tasknera',
  description:
    'Explore Tasknera flexible engagement models: single-role hiring, embedded specialists, dedicated operational pods, and fully managed business services.',
  url: 'https://tasknera.com/engagement-models',
});

export default function EngagementModelsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={engagementSchema} />
      {children}
    </>
  );
}
