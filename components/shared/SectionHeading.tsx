import AnimateIn from '@/components/ui/AnimateIn'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionHeading({ eyebrow, title, subtitle, center = false, className = '' }: SectionHeadingProps) {
  const align = center ? 'text-center' : ''
  return (
    <div className={`${align} ${className}`}>
      {eyebrow && (
        <AnimateIn>
          <span className="inline-block text-[0.7rem] font-[750] tracking-[0.14em] uppercase text-brand-500 mb-3">{eyebrow}</span>
        </AnimateIn>
      )}
      <AnimateIn delay={0.05}>
        <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[2.9rem] font-[800] tracking-[-0.04em] text-ink-900 dark:text-ink-50 leading-[1.08] text-balance mb-4">
          {title}
        </h2>
      </AnimateIn>
      {subtitle && (
        <AnimateIn delay={0.1}>
          <p className="text-[0.925rem] text-ink-500 dark:text-ink-400 leading-relaxed max-w-[500px]">{subtitle}</p>
        </AnimateIn>
      )}
    </div>
  )
}
