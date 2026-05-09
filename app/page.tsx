import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import ResultsBanner from '@/components/sections/ResultsBanner';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
  description: 'ET Data Solutions eliminates operational bottlenecks — staffing, data entry, QA testing, data engineering. India-based, globally delivered. 99% accuracy.',
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ResultsBanner />
      <About />
      <Services />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
