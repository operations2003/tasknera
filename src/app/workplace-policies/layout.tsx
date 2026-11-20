import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Workplace Policies & Commitments | Tasknera',
  description:
    'Review Tasknera workplace policies covering remote work standards, professional conduct, equal opportunity diversity, and corporate operational ethics.',
};

const workplacePoliciesSchema = buildWebPageSchema({
  name: 'Workplace Policies & Commitments | Tasknera',
  description:
    'Review Tasknera workplace policies covering remote work standards, professional conduct, equal opportunity diversity, and corporate operational ethics.',
  url: 'https://tasknera.com/workplace-policies',
});

export default function WorkplacePoliciesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={workplacePoliciesSchema} />
      {children}
    </>
  );
}
