import Image from 'next/image'
export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-68px)] flex flex-col items-center justify-center gap-5"
      style={{ background: 'linear-gradient(135deg, #0a0908 0%, #13110e 50%, #0d1118 100%)' }}>
      <Image src="/logo-transparent.png" alt="ET Data Solutions" width={48} height={48} className="opacity-70" />
      <div className="relative w-12 h-12">
        <svg className="absolute inset-0 animate-spin" style={{ animationDuration:'2.5s' }} viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(232,68,10,0.12)" strokeWidth="2"/>
          <circle cx="24" cy="24" r="20" fill="none" stroke="#e8440a" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="35 91" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
        </div>
      </div>
      <p className="text-xs font-[500] tracking-[0.1em] text-ink-500 uppercase">Loading</p>
    </div>
  )
}
