export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="py-20 md:py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="h-3 w-16 bg-neutral-200 dark:bg-neutral-800 rounded mb-5" />
          <div className="h-12 w-[360px] max-w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-5" />
          <div className="h-4 w-[480px] max-w-full bg-neutral-100 dark:bg-neutral-800/60 rounded" />
        </div>
      </div>
      {[1,2,3,4].map(i => (
        <div key={i} className={`py-24 ${i%2===0 ? 'bg-neutral-50 dark:bg-[#0a0908]' : 'bg-white dark:bg-[#0e0c0b]'}`}>
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-4">
                <div className="h-3 w-8 bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="h-10 w-[280px] max-w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="h-4 bg-neutral-100 dark:bg-neutral-800/60 rounded w-full" />
                <div className="h-4 bg-neutral-100 dark:bg-neutral-800/60 rounded w-4/5" />
              </div>
              <div className="h-[320px] bg-neutral-100 dark:bg-neutral-800/60 rounded-2xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
