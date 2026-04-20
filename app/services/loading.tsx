export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="py-20 md:py-28 bg-white dark:bg-ink-950">
        <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="h-3 w-14 bg-ink-200 dark:bg-ink-800 rounded-full mb-5" />
          <div className="h-12 w-[360px] max-w-full bg-ink-200 dark:bg-ink-800 rounded-2xl mb-5" />
          <div className="h-5 w-[480px] max-w-full bg-ink-100 dark:bg-ink-800/60 rounded-lg" />
        </div>
      </div>
      <div className="h-px bg-ink-200 dark:bg-ink-800" />
      {[0,1,2,3].map(i => (
        <div key={i} className={`py-24 ${i%2===1 ? 'bg-ink-50 dark:bg-ink-950' : 'bg-white dark:bg-ink-950'}`}>
          <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-4">
                <div className="h-3 w-8 bg-ink-200 dark:bg-ink-800 rounded" />
                <div className="h-10 w-[280px] max-w-full bg-ink-200 dark:bg-ink-800 rounded-2xl" />
                <div className="h-4 w-full bg-ink-100 dark:bg-ink-800/60 rounded-lg" />
                <div className="h-4 w-4/5 bg-ink-100 dark:bg-ink-800/60 rounded-lg" />
              </div>
              <div className="h-[320px] bg-ink-100 dark:bg-ink-800/60 rounded-3xl" />
            </div>
          </div>
          {i < 3 && <div className="h-px bg-ink-200 dark:bg-ink-800 mt-24" />}
        </div>
      ))}
    </div>
  )
}
