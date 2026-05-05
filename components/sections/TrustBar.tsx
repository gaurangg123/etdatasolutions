'use client'
const logos = [
  { name:'Snowflake',        dot:'bg-sky-400' },
  { name:'Databricks',       dot:'bg-sky-400' },
  { name:'Microsoft Fabric', dot:'bg-sky-400' },
  { name:'Power BI',         dot:'bg-violet-400' },
  { name:'Tableau',          dot:'bg-violet-400' },
  { name:'AWS',              dot:'bg-sky-400' },
  { name:'Azure',            dot:'bg-sky-400' },
  { name:'Google Cloud',     dot:'bg-sky-400' },
]
export default function TrustBar() {
  return (
    <div className="snap-section border-y border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-950">
      <div className="w-full py-4">
        <p className="text-center text-[0.68rem] font-[700] tracking-[0.14em] uppercase text-ink-400 dark:text-ink-600 mb-3">
          Technologies &amp; platforms we work with
        </p>
        <div className="relative overflow-hidden"
          style={{ maskImage:'linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)', WebkitMaskImage:'linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)' }}>
          <div className="flex w-max animate-marquee">
            {[...logos,...logos,...logos,...logos].map((l,i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-sm font-[500] text-ink-600 dark:text-ink-300 shadow-sm whitespace-nowrap select-none mx-2">
                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${l.dot}`} aria-hidden />
                {l.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
