import type { Metadata } from 'next'
import './fonts.css'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileStickyCTA from '@/components/layout/MobileStickyCTA'
import FloatingContact from '@/components/layout/FloatingContact'
import ScrollProgress from '@/components/layout/ScrollProgress'
import PageLoader from '@/components/PageLoader'
import { KeyboardNav } from '@/components/KeyboardNav'
import { ThemeProvider, ThemeScript } from '@/components/ThemeProvider'

const BASE = 'https://etdatasolutions.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
    template: '%s | ET Data Solutions',
  },
  description: 'ET Data Solutions eliminates operational bottlenecks by handling staffing, data entry, QA testing, and data engineering. India-based, globally delivered. 99% accuracy. Free consultation.',
  keywords: ['outsourcing India','data entry services','excel automation','VA placement','RPO','QA testing','data engineering Snowflake','Power BI dashboards','business process outsourcing','ET Data Solutions'],
  alternates: { canonical: BASE },
  openGraph: {
    title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
    description: 'India-based outsourcing for staffing, data processing, QA testing, and data engineering. 10+ years. 99% accuracy.',
    url: BASE, siteName: 'ET Data Solutions', locale: 'en_US', type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ET Data Solutions' }],
  },
  twitter: { card: 'summary_large_image', title: 'ET Data Solutions', description: 'India-based outsourcing for staffing, data, QA & engineering.', images: ['/og-image.jpg'] },
  icons: { icon: [{ url: '/favicon.ico', sizes: 'any' }], apple: [{ url: '/apple-touch-icon.png' }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><ThemeScript /></head>
      <body>
        <a href="#main-content" className="fixed -top-full left-4 z-[9999] bg-brand-500 text-white px-5 py-2.5 rounded-b-xl text-sm font-[500] focus:top-0 transition-all">
          Skip to main content
        </a>
        <ThemeProvider>
          <PageLoader />
          <ScrollProgress />
          <KeyboardNav />
          {/* Navbar outside snap container */}
          <Navbar />
          {/* Snap container */}
          <main id="main-content" className="snap-container">
            {children}
          </main>
          {/* Footer outside snap container */}
          <Footer />
          <MobileStickyCTA />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  )
}
