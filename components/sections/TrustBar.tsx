'use client'

// Fix 3: categorized icon dots + pill badges + mask-image fade edges
const logos = [
  // Data platforms — sky-400
  { name: 'Snowflake',        dot: 'bg-sky-400'     },
  { name: 'Databricks',       dot: 'bg-sky-400'     },
  { name: 'Microsoft Fabric', dot: 'bg-sky-400'     },
  // BI tools — violet-400
  { name: 'Power BI',         dot: 'bg-violet-400'  },
  { name: 'Tableau',          dot: 'bg-violet-400'  },
  // CRM/ERP — amber-400
  { name: 'Salesforce',       dot: 'bg-amber-400'   },
  { name: 'SAP',              dot: 'bg-amber-400'   },
  { name: 'HubSpot',          dot: 'bg-amber-400'   },
  { name: 'Jira',             dot: 'bg-amber-400'   },
  // Cloud — emerald-400
  { name: 'AWS',              dot: 'bg-emerald-400' },
  { name: 'Azure',            dot: 'bg-emerald-400' },
  { name: 'Google Cloud',     dot: 'bg-emerald-400' },
]

export default function TrustBar() {
  return (
    // Fix 9 (from previous pass): top+bottom border
    <div className="relative border-y border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-950 overflow-hidden py-5">
      <p className="text-center text-[0.68rem] font-[700] tracking-[0.14em] uppercase text-ink-400 dark:text-ink-600 mb-4">
        Technologies &amp; platforms we work with daily
      </p>

      {/* Mask-image fade edges — Fix 3 */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="flex w-max animate-marquee gap-3">
          {[...logos, ...logos, ...logos].map((l, i) => (
            // Fix 3: pill badge with category-colored dot
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-sm font-[500] text-ink-600 dark:text-ink-300 shadow-xs whitespace-nowrap flex-shrink-0 select-none"
            >
              {/* Category-colored icon dot placeholder */}
              <span className={`w-4 h-4 rounded-full flex-shrink-0 ${l.dot}`} aria-hidden />
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
