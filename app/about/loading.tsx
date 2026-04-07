export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="py-20 md:py-28 bg-white dark:bg-[#0e0c0b]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="h-3 w-20 bg-neutral-200 dark:bg-neutral-800 rounded mb-5" />
          <div className="h-12 w-[420px] max-w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-5" />
          <div className="h-4 w-[340px] max-w-full bg-neutral-100 dark:bg-neutral-800/60 rounded" />
        </div>
      </div>
      <div className="py-24 max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-4/5" />
            <div className="h-4 bg-neutral-100 dark:bg-neutral-800/60 rounded w-3/4" />
          </div>
          <div className="h-[360px] bg-neutral-100 dark:bg-neutral-800/60 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
