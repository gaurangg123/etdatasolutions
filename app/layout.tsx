import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SmoothScroll from '@/components/ui/SmoothScroll';
import NavigationProgress from '@/components/ui/NavigationProgress';
import ScrollProgress from '@/components/ui/ScrollProgress';

export const metadata: Metadata = {
  title: { template: '%s — ET Data Solutions', default: 'ET Data Solutions — Staffing, Data, QA & Data Engineering' },
  description: 'ET Data Solutions eliminates operational bottlenecks — staffing, data entry, QA testing, data engineering. India-based, globally delivered. 99% accuracy.',
  metadataBase: new URL('https://etdatasolutions.com'),
  openGraph: { siteName: 'ET Data Solutions', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <NavigationProgress />
        <ScrollProgress />
        <div className="atmosphere" aria-hidden>
          <div className="atmo-blob blue" />
          <div className="atmo-blob orange" />
          <div className="atmo-blob teal" />
        </div>
        <div className="grid-overlay" aria-hidden />
        <Navbar />
        <div className="page-wrap">{children}</div>
        <Footer />
        <FloatingCTA />
        <WhatsAppButton />
      </body>
    </html>
  );
}
