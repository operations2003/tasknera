import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Careers & Open Positions | Tasknera',
  description:
    'Explore exciting career opportunities at Tasknera. Join our global team of HR specialists, recruiters, engineers, and operational leaders driving innovation.',
};

const careersSchema = buildWebPageSchema({
  name: 'Careers & Open Positions | Tasknera',
  description:
    'Explore exciting career opportunities at Tasknera. Join our global team of HR specialists, recruiters, engineers, and operational leaders driving innovation.',
  url: 'https://tasknera.com/careers',
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={careersSchema} />
      {children}
    </>
  );
}
