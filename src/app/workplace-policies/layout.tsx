import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workplace Policies & Commitments | Tasknera',
  description:
    'Review Tasknera workplace policies covering remote work standards, professional conduct, equal opportunity diversity, and corporate operational ethics.',
};

export default function WorkplacePoliciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
