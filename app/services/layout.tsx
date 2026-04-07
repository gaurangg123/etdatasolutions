import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Services — Staffing, Data, QA & Data Engineering',
  description: 'Four service verticals: staffing & VA recruitment, data entry & Excel automation, manual QA testing, and data engineering with Snowflake, Databricks & Microsoft Fabric.',
  openGraph: {
    title: 'ET Data Solutions Services',
    description: 'Staffing & VA · Data & Excel · QA Testing · Data Engineering. One partner for all your outsourcing needs.',
  },
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
