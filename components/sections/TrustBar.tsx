'use client'
const logos = [
  { name:'Snowflake', color:'#29B5E8' }, { name:'Databricks', color:'#FF3621' },
  { name:'Microsoft Fabric', color:'#0078D4' }, { name:'Power BI', color:'#F2C811' },
  { name:'Tableau', color:'#E97627' }, { name:'Salesforce', color:'#00A1E0' },
  { name:'SAP', color:'#0FAAFF' }, { name:'AWS', color:'#FF9900' },
  { name:'Azure', color:'#0089D6' }, { name:'Google Cloud', color:'#4285F4' },
  { name:'HubSpot', color:'#FF7A59' }, { name:'Jira', color:'#0052CC' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0a0908] py-5 overflow-hidden">
      <p className="text-center text-xs font-[650] tracking-[0.1em] uppercase text-neutral-400 dark:text-neutral-600 mb-4">
        Technologies &amp; platforms we work with
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm font-[650] text-neutral-400 dark:text-neutral-500 px-6 flex-shrink-0 cursor-default">
              <span aria-hidden className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }} />
              {l.name}
            </span>
          ))}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-50 dark:from-[#0a0908] to-transparent z-10" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-50 dark:from-[#0a0908] to-transparent z-10" />
      </div>
    </div>
  )
}
