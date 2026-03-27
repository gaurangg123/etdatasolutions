import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    default: 'ET Data Solutions — Intelligent Data, Staffing & Software',
    template: '%s | ET Data Solutions',
  },
  description:
    'ET Data Solutions provides expert data processing, Excel automation, staffing & VA services, QA testing, and data engineering & visualization solutions worldwide.',
  keywords: [
    'data solutions', 'data entry', 'excel automation', 'staffing', 'virtual assistant',
    'recruitment', 'QA testing', 'software testing', 'data engineering', 'data visualization',
    'outsourcing', 'India', 'ET Data Solutions',
  ],
  metadataBase: new URL('https://etdatasolutions.com'),
  openGraph: {
    title: 'ET Data Solutions',
    description: 'Intelligent Data, Staffing & Software Solutions',
    url: 'https://etdatasolutions.com',
    siteName: 'ET Data Solutions',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
