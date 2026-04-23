'use client'
import Link from 'next/link'
import { Phone, ArrowRight, Shield, Clock, Star } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'

const guarantees = [
  { icon: Shield, text: '30-day guarantee' },
  { icon: Clock,  text: 'Reply in 24 hours' },
  { icon: Star,   text: 'No lock-in contract' },
]

export default function FinalCTA() {
  return (
    <Section bg="white" size="md" label="Get started">
      <Container>
        <AnimateIn>
          <div className="relative rounded-[28px] overflow-hidden">
            <div className="absolute inset-0 bg-ink-900 dark:bg-ink-950" />
            <div aria-hidden className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-brand-500/20 blur-[80px]" />
            <div aria-hidden className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-brand-500/15 blur-[80px]" />
            <div aria-hidden className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
            <div aria-hidden className="absolute top-0 left-0 right-0 h-px overflow-hidden">
              <div className="h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-brand-500/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 py-20 md:px-20 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-7">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400" />
                </span>
                <span className="text-[0.7rem] font-[700] tracking-[0.1em] uppercase text-white/60">
                  Accepting new clients now
                </span>
              </div>
              <h2 className="text-[2rem] sm:text-[2.8rem] md:text-[3.4rem] font-[850] tracking-[-0.04em] text-white leading-[1.08] mb-5 text-balance max-w-[580px] mx-auto">
                Your team has better things to do than data entry.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-[400px] mx-auto">
                Join 100+ businesses that outsourced the right work — and got their team&apos;s focus back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 text-base font-[700] text-brand-600 bg-white hover:bg-ink-50 px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] active:scale-[0.97] shine"
                >
                  Book a Free Consultation
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <a href="tel:+13023579776"
                  className="inline-flex items-center justify-center gap-2 text-base font-[500] text-white/80 border border-white/20 hover:border-white/40 hover:bg-white/8 px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97]"
                >
                  <Phone size={15} /> Call us now
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5">
                {guarantees.map(g => (
                  <div key={g.text} className="inline-flex items-center gap-2 text-xs font-[550] text-white/50">
                    <g.icon size={13} className="text-brand-400 flex-shrink-0" />
                    {g.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </Section>
  )
}
