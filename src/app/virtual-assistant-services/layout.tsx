import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Virtual Assistant Services & Executive Support | Tasknera',
  description:
    'Hire dedicated virtual assistants from Tasknera for executive support, calendar management, administrative workflows, and back-office business operations.',
};

const vaSchema = buildServiceSchema({
  name: 'Virtual Assistant Services & Executive Support',
  description:
    'Hire dedicated virtual assistants from Tasknera for executive support, calendar management, administrative workflows, and back-office business operations.',
  url: 'https://tasknera.com/virtual-assistant-services',
  serviceType: 'Virtual Assistance',
});

export default function VirtualAssistantServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={vaSchema} />
      {children}
    </>
  );
}
