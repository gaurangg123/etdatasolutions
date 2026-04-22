import { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact — ET Data Solutions',
  description: 'Get a scoped proposal within 24 hours. Book a free 30-minute operations audit today.',
}

const Divider = () => (
  <div aria-hidden style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(232,68,10,0.13) 25%,rgba(232,68,10,0.18) 50%,rgba(232,68,10,0.13) 75%,transparent)' }} />
)

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        title="Let's build something"
        titleHighlight="great together."
        subtitle="Tell us your requirement — we'll respond within 24 hours with a scoped proposal and clear pricing."
      />
      <Divider />
      <ContactPageClient />
    </>
  )
}
