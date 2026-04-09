'use client'
import { Phone, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'

export default function FinalCTA() {
  return (
    <Section bg="white" size="md">
      <Container>
        <AnimateIn>
          <div className="relative rounded-3xl bg-brand-500 overflow-hidden px-8 py-20 md:px-20 text-center">
            {/* Grid overlay */}
            <div aria-hidden className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'48px 48px' }} />
            {/* Glow blobs */}
            <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-[560px] mx-auto">
              <span className="text-xs font-[700] tracking-[0.12em] uppercase text-white/55 mb-5 block">
                Stop leaving efficiency on the table
              </span>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-white leading-[1.08] mb-5">
                Your team has better things<br />to do than data entry.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[400px] mx-auto">
                Join 100+ businesses that outsourced the right work — and got their team&apos;s focus back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact#form" variant="white" size="lg" arrow>
                  Book a Free Consultation
                </Button>
                <a
                  href="tel:+13023579776"
                  className="inline-flex items-center justify-center gap-2 text-base font-[500] text-white/85 border border-white/25 hover:border-white/55 hover:bg-white/10 px-7 py-3.5 rounded-xl transition-all duration-150 active:scale-[0.98]"
                >
                  <Phone size={16} /> Call us now
                </a>
              </div>
              <p className="text-white/40 text-sm mt-7">
                No contract required · Reply within 24 hours · 30-day guarantee
              </p>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </Section>
  )
}
