import {
  Hero, TrustBar, Services, CaseStudies,
  Process, Pricing, Testimonials, LeadCapture, FinalCTA,
} from '@/components/sections'

const Divider = () => <div className="h-px bg-ink-200 dark:bg-ink-800" aria-hidden />

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Divider /><Services />
      <Divider /><CaseStudies />
      <Divider /><Process />
      <Divider /><Pricing />
      <Divider /><Testimonials />
      <Divider /><LeadCapture />
      <Divider /><FinalCTA />
    </>
  )
}
