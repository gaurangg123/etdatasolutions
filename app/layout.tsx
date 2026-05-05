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
  title: { default: 'ET Data Solutions — Staffing, Data, QA & Data Engineering', template: '%s | ET Data Solutions' },
  description: 'ET Data Solutions eliminates operational bottlenecks — staffing, data entry, QA testing, data engineering. India-based, globally delivered. 99% accuracy.',
  alternates: { canonical: BASE },
  openGraph: { title: 'ET Data Solutions', description: 'India-based outsourcing. Globally delivered.', url: BASE, siteName: 'ET Data Solutions', locale: 'en_US', type: 'website', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'ET Data Solutions', images: ['/og-image.jpg'] },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><ThemeScript /></head>
      <body>
        <a href="#main-content" className="fixed -top-full left-4 z-[9999] bg-brand-500 text-white px-5 py-2.5 rounded-b-xl text-sm focus:top-0 transition-all">
          Skip to main content
        </a>
        <ThemeProvider>
          <PageLoader />
          <ScrollProgress />
          <KeyboardNav />
          {/* BUG 1: snap-container wraps everything — one scrollbar only */}
          <div id="main-content" className="snap-container">
            {/* BUG 1: Navbar sticky INSIDE snap-container */}
            <div className="sticky top-0 z-[200]">
              <Navbar />
            </div>
            <main>
              {children}
            </main>
            {/* Footer as last snap child */}
            <div className="snap-section">
              <Footer />
            </div>
          </div>
          <MobileStickyCTA />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  )
}
