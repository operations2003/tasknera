import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & Open Positions | Tasknera',
  description:
    'Explore exciting career opportunities at Tasknera. Join our global team of HR specialists, recruiters, engineers, and operational leaders driving innovation.',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
