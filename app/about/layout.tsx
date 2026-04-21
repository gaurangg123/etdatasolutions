import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ET Data Solutions — an India-based outsourcing company founded in 2014, delivering staffing, data processing, QA testing, and data engineering with 99% accuracy globally.',
  openGraph: {
    title: 'About ET Data Solutions',
    description: 'India-based outsourcing company founded in 2014. 99% accuracy. Globally delivered.',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
