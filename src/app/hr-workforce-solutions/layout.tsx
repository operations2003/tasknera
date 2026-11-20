import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'HR Workforce Solutions & Payroll Operations | Tasknera',
  description:
    'Discover Tasknera managed HR workforce solutions, covering employee lifecycle administration, compliant payroll processing, attendance, and advisory support.',
};

const hrWorkforceSchema = buildServiceSchema({
  name: 'HR Workforce Solutions & Payroll Operations',
  description:
    'Discover Tasknera managed HR workforce solutions, covering employee lifecycle administration, compliant payroll processing, attendance, and advisory support.',
  url: 'https://tasknera.com/hr-workforce-solutions',
  serviceType: 'HR Operations & Workforce Solutions',
});

export default function HrWorkforceSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={hrWorkforceSchema} />
      {children}
    </>
  );
}
