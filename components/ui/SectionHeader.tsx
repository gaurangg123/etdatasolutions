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

// Item 5: H2 increased to 36-40px desktop, eyebrow has colored accent
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
          className="inline-flex items-center gap-2 mb-4"
        >
          {/* Colored accent underline pill for eyebrow label — item 5 */}
          <span className="relative text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500">
            {eyebrow}
            <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-brand-500/30" />
          </span>
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity:0, y:14 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true, margin:'-40px' }}
        transition={{ duration:0.55, delay:0.06, ease:[0.22,1,0.36,1] }}
        className={cn(
          'font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] mb-4 text-balance',
          // Item 5: H2 at 36–40px desktop
          'text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[2.9rem]',
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
