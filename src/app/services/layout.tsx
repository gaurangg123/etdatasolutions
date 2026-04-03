import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Staffing & VA, Data & Excel automation, manual QA testing, and Data Engineering with Snowflake, Databricks and Microsoft Fabric.',
  alternates: { canonical: 'https://etdatasolutions.com/services' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
