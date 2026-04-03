import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ET Data Solutions. We respond to all enquiries within 24 hours.',
  alternates: { canonical: 'https://etdatasolutions.com/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
