import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import { AuthProvider } from '@/contexts/AuthContext';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tasknera.com'),
  alternates: {
    canonical: './',
  },
  title: 'TaskNera | Global HR, Recruitment, Technology & Business Operations Partner',
  description:
    'TaskNera is your global partner for talent acquisition, HR operations, workforce solutions, and virtual assistance. Build your team and scale with confidence.',
  icons: {
    icon: [
      {
        url: '/assets/images/tasknera-icon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/assets/images/tasknera-icon.png',
    apple: '/assets/images/tasknera-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-[#26211E] bg-[#FAF7F2]">
        <AuthProvider>
          <ScrollRevealInit />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
