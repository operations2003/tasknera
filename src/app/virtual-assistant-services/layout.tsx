import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Assistant Services & Executive Support | Tasknera',
  description:
    'Hire dedicated virtual assistants from Tasknera for executive support, calendar management, administrative workflows, and back-office business operations.',
};

export default function VirtualAssistantServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
