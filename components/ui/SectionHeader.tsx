'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface Props {
  eyebrow?:   string
  title:      ReactNode
  subtitle?:  string
  align?:     'left' | 'center'
  className?: string
}

export default function SectionHeader({ eyebrow, title, subtitle, align='left', className }: Props) {
  const centered = align === 'center'
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity:0, y:10 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-40px' }}
          transition={{ duration:0.5, ease:[0.22,1,0.36,1] }}
          className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity:0, y:14 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true, margin:'-40px' }}
        transition={{ duration:0.55, delay:0.06, ease:[0.22,1,0.36,1] }}
        className={cn(
          'font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-4 text-balance',
          'text-[1.8rem] sm:text-[2.1rem] md:text-[2.5rem] lg:text-[2.8rem]',
          centered && 'mx-auto',
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity:0, y:10 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-40px' }}
          transition={{ duration:0.5, delay:0.12, ease:[0.22,1,0.36,1] }}
          className={cn(
            'text-[0.975rem] text-ink-500 dark:text-ink-400 leading-relaxed',
            centered ? 'max-w-[500px] mx-auto' : 'max-w-[460px]',
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
