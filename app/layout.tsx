import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LogoLoader from '@/components/ui/LogoLoader';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL('https://etdatasolutions.com'),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s · ${company.name}`,
  },
  description:
    'The most cost-effective outsourcing alternative for data workflows. Recruitment, virtual assistants, data entry, and data engineering — across the US, Europe, and Australia.',
  keywords: ['staffing', 'recruitment', 'virtual assistant', 'data entry', 'data engineering', 'lakehouse', 'ET Data Solutions'],
  icons: { icon: '/logo.svg' },
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description:
      'Recruitment, virtual assistants, data entry, and data engineering — across the US, Europe, and Australia.',
    url: 'https://etdatasolutions.com',
    siteName: company.name,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

ex