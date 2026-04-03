import type { Metadata } from 'next'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider, { ThemeScript } from '@/components/ThemeProvider'

const BASE_URL = 'https://etdatasolutions.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
    template: '%s | ET Data Solutions',
  },
  description:
    'ET Data Solutions provides expert staffing & VA services, data processing & Excel automation, manual QA testing, and data engineering with Snowflake, Databricks & Microsoft Fabric. India-based, globally delivered.',
  keywords: [
    'data solutions', 'data entry', 'excel automation', 'staffing', 'virtual assistant',
    'recruitment', 'RPO', 'QA testing', 'manual testing', 'data engineering',
    'data visualization', 'Snowflake', 'Databricks', 'Microsoft Fabric', 'Power BI',
    'Tableau', 'outsourcing', 'India', 'ET Data Solutions',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
    description:
      'India-based outsourcing for staffing, data processing, QA testing, and data engineering. Globally delivered.',
    url: BASE_URL,
    siteName: 'ET Data Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ET Data Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ET Data Solutions',
    description: 'India-based outsourcing for staffing, data processing, QA & data engineering.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png',    type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Injected before first paint to prevent FOUC on theme toggle */}
        <ThemeScript />
      </head>
      <body>
        {/* Skip-to-content for keyboard / screen reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
