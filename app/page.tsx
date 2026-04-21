import {
  Hero, TrustBar, Services, CaseStudies,
  Process, Pricing, Testimonials, LeadCapture, FinalCTA,
} from '@/components/sections'

// Item 4: subtle gradient separator between sections for visual rhythm
const Divider = () => (
  <div
    aria-hidden
    style={{
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(232,68,10,0.12) 25%, rgba(232,68,10,0.18) 50%, rgba(232,68,10,0.12) 75%, transparent 100%)',
    }}
  />
)

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Item 9: TrustBar only once — duplicate lower instance removed */}
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
