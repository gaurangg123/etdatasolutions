import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Client Testimonials — ET Data Solutions',
  description: "Rated 4.9/5 by 100+ clients. Real results from real engagements — no rounding, no estimates.",
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
