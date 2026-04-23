import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About Us — ET Data Solutions',
  description: '10+ years of outsourcing excellence. Learn about ET Data Solutions — India-based, globally trusted since 2014.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
