export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="py-20 md:py-28 bg-white dark:bg-ink-950">
        <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="h-3 w-16 bg-ink-200 dark:bg-ink-800 rounded-full mb-5" />
          <div className="h-12 w-[420px] max-w-full bg-ink-200 dark:bg-ink-800 rounded-2xl mb-5" />
          <div className="h-5 w-[340px] max-w-full bg-ink-100 dark:bg-ink-800/60 rounded-lg" />
        </div>
      </div>
      <div className="h-px bg-ink-200 dark:bg-ink-800" />
      <div className="py-24 bg-white dark:bg-ink-950">
        <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              {[100,83,91,75].map(w => (
                <div key={w} className={`h-4 bg-ink-100 dark:bg-ink-800/60 rounded-lg`} style={{ width:`${w}%` }} />
              ))}
            </div>
            <div className="h-[360px] bg-ink-100 dark:bg-ink-800/60 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
