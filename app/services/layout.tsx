import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Services — ET Data Solutions',
  description: 'Staffing & VA recruitment, data entry, manual QA testing, and data engineering. Scoped, staffed, and measured.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
