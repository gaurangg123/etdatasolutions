import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)',  color: '#0d0b0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'ET Data Solutions — Staffing, Data Processing, QA & Data Engineering',
    template: '%s | ET Data Solutions',
  },
  description:
    'ET Data Solutions is an India-based outsourcing company providing expert staffing & VA services, data entry & Excel automation, manual QA testing, and data engineering with Snowflake, Databricks & Microsoft Fabric — globally delivered since 2014.',

  keywords: [
    'data solutions', 'data entry outsourcing', 'excel automation', 'staffing outsourcing',
    'virtual assistant services', 'recruitment process outsourcing', 'RPO', 'QA testing',
    'manual testing services', 'data engineering', 'data lakehouse', 'Snowflake consulting',
    'Databricks', 'Microsoft Fabric', 'Power BI dashboards', 'Tableau', 'ETL pipelines',
    'India outsourcing', 'ET Data Solutions', 'BPO India',
  ],

  alternates: { canonical: BASE_URL },

  openGraph: {
    title: 'ET Data Solutions — Data, Staffing, QA & Engineering',
    description:
      'India-based outsourcing partner for staffing, data processing, QA testing, and data engineering. 99% accuracy. 24/7 availability. Globally delivered since 2014.',
    url: BASE_URL,
    siteName: 'ET Data Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ET Data Solutions — Intelligent Data Solutions' }],
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
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
