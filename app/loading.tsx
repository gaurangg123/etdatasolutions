export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-68px)] bg-white dark:bg-[#0e0c0b] flex flex-col items-center justify-center gap-4">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-neutral-200 dark:border-neutral-800" />
        <div className="absolute inset-0 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-sm text-neutral-400 dark:text-neutral-500 font-[500]">Loading…</p>
    </div>
  )
}
