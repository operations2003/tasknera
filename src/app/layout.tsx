import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import '../styles/tailwind.css';
import { AuthProvider } from '@/contexts/AuthContext';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'TaskNera | Your Global HR, Workforce & Business Support Partner',
  description:
    'TaskNera helps startups, SMEs and enterprises build their teams, manage their people and scale their operations through integrated HR, Workforce, Talent, Virtual Assistant and Customer Support solutions.',
  icons: {
    icon: [
      { 
        url: '/assets/images/logo_1-1786267820748.png', 
        type: 'image/png' // Fixed: Changed from image/x-icon to image/png
      }
    ],
    shortcut: '/assets/images/logo_1-1786267820748.png',
    apple: '/assets/images/logo_1-1786267820748.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className={manrope.className}>
        <AuthProvider>
          <ScrollRevealInit />
          {children}
        </AuthProvider>

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ftasknera7279back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></body>
    </html>
  );
}