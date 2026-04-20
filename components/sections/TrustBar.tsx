'use client'
import { cn } from '@/lib/utils'

const logos = [
  { name:'Snowflake',        color:'#29B5E8' },
  { name:'Databricks',       color:'#FF3621' },
  { name:'Microsoft Fabric', color:'#0078D4' },
  { name:'Power BI',         color:'#F2C811' },
  { name:'Tableau',          color:'#E97627' },
  { name:'Salesforce',       color:'#00A1E0' },
  { name:'SAP',              color:'#0FAAFF' },
  { name:'AWS',              color:'#FF9900' },
  { name:'Azure',            color:'#0089D6' },
  { name:'Google Cloud',     color:'#4285F4' },
  { name:'HubSpot',          color:'#FF7A59' },
  { name:'Jira',             color:'#0052CC' },
]

export default function TrustBar() {
  return (
    <div className="relative border-y border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-950 overflow-hidden py-5">
      <p className="text-center text-[0.68rem] font-[700] tracking-[0.14em] uppercase text-ink-400 dark:text-ink-600 mb-4">
        Technologies &amp; platforms we work with daily
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-sm font-[600] text-ink-400 dark:text-ink-500 px-6 flex-shrink-0 cursor-default hover:text-ink-700 dark:hover:text-ink-300 transition-colors duration-200"
            >
              <span
                aria-hidden
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: l.color }}
              />
              {l.name}
            </span>
          ))}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-50 dark:from-ink-950 to-transparent z-10" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-50 dark:from-ink-950 to-transparent z-10" />
      </div>
    </div>
  )
}
