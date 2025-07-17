import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'Diné Insurance | Protecting What Matters. Honoring Who You Are.',
    template: '%s | Diné Insurance'
  },
  description: 'Diné Insurance provides trusted, culturally respectful insurance solutions to the Diné people, preserving family, land, and livelihood through personalized service rooted in Navajo values.',
  keywords: ['Navajo insurance', 'Diné insurance', 'tribal insurance', 'Native American insurance', 'homeowners insurance', 'auto insurance', 'business insurance'],
  authors: [{ name: 'Diné Insurance Team' }],
  creator: 'Diné Insurance',
  publisher: 'Diné Insurance',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dine-insurance.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Diné Insurance | Protecting What Matters. Honoring Who You Are.',
    description: 'Trusted insurance solutions rooted in Navajo values of Hózhó, K\'é, and protection.',
    url: 'https://dine-insurance.netlify.app',
    siteName: 'Diné Insurance',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diné Insurance - Protecting What Matters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diné Insurance | Protecting What Matters. Honoring Who You Are.',
    description: 'Trusted insurance solutions rooted in Navajo values.',
    images: ['/og-image.jpg'],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}