import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import LogoStrip from '@/components/sections/LogoStrip';
import ResultsBanner from '@/components/sections/ResultsBanner';
import About from '@/components/sections/About';
import HowDifferent from '@/components/sections/HowDifferent';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
  description: 'ET Data Solutions eliminates operational bottlenecks — staffing, data entry, QA testing, data engineering. India-based, globally delivered. 99% accuracy.',
};

export default function HomePage() {
  return (
    <main>
      <div id="hero">       <Hero />           </div>
                            <LogoStrip />
                            <ResultsBanner />
      <div id="about">      <About />          </div>
      <div id="how-diff">   <HowDifferent />   </div>
      <div id="services">   <Services />       </div>
      <div id="case-studies"><CaseStudies />   </div>
      <div id="testimonials"><Testimonials />  </div>
      <div id="faq">        <FAQ />            </div>
      <div id="contact">    <ContactSection /> </div>
    </main>
  );
}
