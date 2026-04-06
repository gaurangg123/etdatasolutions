'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Props {
  eyebrow: string
  title: React.ReactNode
  subtitle: string
  centered?: boolean
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function PageHeader({ eyebrow, title, subtitle, centered = false }: Props) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-[#0e0c0b]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25] mask-fade-b"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />
      {/* Warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(232,68,10,0.05),transparent_70%)] pointer-events-none" />

      <div className={cn('relative max-w-[1180px] mx-auto px-6', centered && 'text-center')}>
        <motion.span {...fade(0)} className="inline-flex items-center gap-1.5 text-[0.68rem] font-[700] tracking-[0.12em] uppercase text-brand-500 mb-4">
          {eyebrow}
        </motion.span>
        <motion.h1 {...fade(0.08)} className="text-4xl md:text-5xl lg:text-[3.6rem] font-[800] tracking-[-0.04em] leading-[1.07] text-neutral-900 dark:text-neutral-50 mb-5 max-w-[700px]">
          {title}
        </motion.h1>
        <motion.p {...fade(0.16)} className={cn('text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[520px]', centered && 'mx-auto')}>
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
