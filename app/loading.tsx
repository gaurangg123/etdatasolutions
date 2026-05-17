export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex items-center gap-3 text-ink-500">
        <span className="w-3 h-3 rounded-full bg-brand-500 animate-pulse" />
        <span className="w-3 h-3 rounded-full bg-brand-400 animate-pulse [animation-delay:150ms]" />
        <span className="w-3 h-3 rounded-full bg-brand-300 animate-pulse [animation-delay:300ms]" />
        <span className="ml-2 text-sm">Loading…</span>
      </div>
    </div>
  );
}
