import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'TCMS - Training & Competence Management System',
  description: 'Modern platform for managing training, proficiency checks, and regulatory compliance for aviation and high-compliance industries. EASA ADR.OR.D.017 compliant.',
  keywords: 'training management, competence management, aviation training, EASA compliance, proficiency checks, training software',
  authors: [{ name: 'TCMS' }],
  creator: 'TCMS',
  publisher: 'TCMS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tcms.example.com'),
  alternates: {
    canonical: '/',
    languages: {
      'bg': '/bg',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    alternateLocale: ['en_US'],
    url: 'https://tcms.example.com',
    title: 'TCMS - Training & Competence Management System',
    description: 'Modern platform for managing training, proficiency checks, and regulatory compliance',
    siteName: 'TCMS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCMS - Training & Competence Management System',
    description: 'Modern platform for managing training, proficiency checks, and regulatory compliance',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
