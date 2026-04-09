import Hero        from '@/components/sections/Hero'
import TrustBar    from '@/components/sections/TrustBar'
import Services    from '@/components/sections/Services'
import CaseStudies from '@/components/sections/CaseStudies'
import Process     from '@/components/sections/Process'
import Pricing     from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import LeadCapture from '@/components/sections/LeadCapture'
import FinalCTA    from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <Services />
      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <CaseStudies />
      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <Process />
      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <Pricing />
      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <Testimonials />
      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <LeadCapture />
      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <FinalCTA />
    </>
  )
}
