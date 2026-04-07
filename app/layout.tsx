import type { Metadata } from 'next'
import './fonts.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import MobileStickyCTA from '@/components/MobileStickyCTA'
import FloatingContact from '@/components/FloatingContact'
import ScrollProgress from '@/components/ScrollProgress'
import { ThemeProvider, ThemeScript } from '@/components/ThemeProvider'

const BASE_URL = 'https://etdatasolutions.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ET Data Solutions — Staffing, Data Processing, QA & Data Engineering',
    template: '%s | ET Data Solutions',
  },
  description: 'ET Data Solutions helps businesses eliminate operational bottlenecks by handling staffing, data entry, QA testing, and data engineering. India-based, globally delivered. 99% accuracy. Starting from $499/month. Free consultation available.',
  keywords: ['outsourcing company India','data entry services','excel automation outsourcing','virtual assistant placement','RPO recruitment','manual QA testing services','data engineering Snowflake','Power BI dashboard development','Tableau consultant','offshore team India','business process outsourcing','ET Data Solutions'],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
    description: 'Cost-effective India-based outsourcing for staffing, data processing, QA testing, and data engineering. 10+ years. 99% accuracy. Globally delivered.',
    url: BASE_URL,
    siteName: 'ET Data Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ET Data Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ET Data Solutions',
    description: 'India-based outsourcing for staffing, data processing, QA & data engineering. Est. 2014.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon.png', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <a href="#main-content" className="fixed -top-full left-4 z-[9999] bg-brand-500 text-white px-5 py-2.5 rounded-b-xl text-sm font-[500] focus:top-0 transition-all">
          Skip to main content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main-content">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <MobileStickyCTA />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  )
}
