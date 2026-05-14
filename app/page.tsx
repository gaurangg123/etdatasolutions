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
import ParallaxHero from '@/components/ui/ParallaxHero';
import ParallaxSection from '@/components/ui/ParallaxSection';
import ScrollSnapNav from '@/components/ui/ScrollSnapNav';

export const metadata: Metadata = {
  title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
  description: 'ET Data Solutions eliminates operational bottlenecks — staffing, data entry, QA testing, data engineering. India-based, globally delivered. 99% accuracy.',
};

export default function HomePage() {
  return (
    <>
      {/* Floating dot navigator — desktop only, no layout impact */}
      <ScrollSnapNav />

      <main>
        {/* Hero: multi-plane parallax + fade-scale on scroll-out */}
        <div id="hero">
          <ParallaxHero>
            <Hero />
          </ParallaxHero>
        </div>

        {/* Logo strip — grounded, no parallax */}
        <LogoStrip />

        {/* Results banner — shallow orb depth */}
        <ParallaxSection depth="shallow" orbs>
          <ResultsBanner />
        </ParallaxSection>

        {/* About */}
        <div id="about" style={{ position: 'relative' }}>
          <ParallaxSection depth="medium" orbs overlay>
            <About />
          </ParallaxSection>
        </div>

        {/* How Different */}
        <div id="how-diff">
          <ParallaxSection depth="shallow">
            <HowDifferent />
          </ParallaxSection>
        </div>

        {/* Services — most dramatic depth */}
        <div id="services" style={{ position: 'relative' }}>
          <ParallaxSection depth="deep" orbs overlay>
            <Services />
          </ParallaxSection>
        </div>

        {/* Case Studies */}
        <div id="case-studies" style={{ position: 'relative' }}>
          <ParallaxSection depth="medium" orbs>
            <CaseStudies />
          </ParallaxSection>
        </div>

        {/* Testimonials */}
        <div id="testimonials" style={{ position: 'relative' }}>
          <ParallaxSection depth="shallow" overlay>
            <Testimonials />
          </ParallaxSection>
        </div>

        {/* FAQ */}
        <div id="faq">
          <ParallaxSection depth="shallow">
            <FAQ />
          </ParallaxSection>
        </div>

        {/* Contact */}
        <div id="contact" style={{ position: 'relative' }}>
          <ParallaxSection depth="medium" orbs overlay>
            <ContactSection />
          </ParallaxSection>
        </div>
      </main>
    </>
  );
}
