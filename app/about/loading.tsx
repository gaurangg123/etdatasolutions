import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-68px)] bg-white dark:bg-ink-950 flex flex-col items-center justify-center gap-5">
      <Image
        src="/logo-transparent.png"
        alt="ET Data Solutions"
        width={48}
        height={48}
        className="opacity-60"
      />
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 rounded-full border-2 border-ink-200 dark:border-ink-800" />
        <div className="absolute inset-0 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-sm font-[500] text-ink-400 dark:text-ink-500">Loading…</p>
    </div>
  )
}

