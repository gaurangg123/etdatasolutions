'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-xs font-[700] tracking-[0.12em] uppercase text-brand-500 mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl lg:text-5xl font-[800] tracking-[-0.04em] text-neutral-900 dark:text-neutral-50 leading-[1.08] mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={cn('text-base text-neutral-500 dark:text-neutral-400 leading-relaxed', align === 'left' ? 'max-w-[480px]' : 'max-w-[520px] mx-auto')}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
