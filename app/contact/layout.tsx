import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ET Data Solutions. Request a free consultation for staffing, data processing, QA testing, or data engineering services. We respond within 24 hours.',
  openGraph: {
    title: 'Contact ET Data Solutions',
    description: 'Request a free consultation. We respond within 24 hours.',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
