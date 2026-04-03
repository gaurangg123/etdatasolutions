import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',   // renders as "About Us | ET Data Solutions" via root template
  description:
    'Learn about ET Data Solutions — a professional data processing and outsourcing company based in India, serving clients globally since 2014.',
  alternates: { canonical: 'https://etdatasolutions.com/about' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
