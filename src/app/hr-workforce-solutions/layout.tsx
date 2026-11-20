import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Workforce Solutions & Payroll Operations | Tasknera',
  description:
    'Discover Tasknera managed HR workforce solutions, covering employee lifecycle administration, compliant payroll processing, attendance, and advisory support.',
};

export default function HrWorkforceSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
