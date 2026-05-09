import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import LogoStrip from '@/components/sections/LogoStrip';
import ResultsBanner from '@/components/sections/ResultsBanner';
import About from '@/components/sections/About';
import HowDifferent from '@/components/sections/HowDifferent';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import ComparisonTable from '@/components/sections/ComparisonTable';
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
      <Hero />            {/* white  */}
      <LogoStrip />       {/* white  */}
      <ResultsBanner />   {/* orange */}
      <About />           {/* white  */}
      <HowDifferent />    {/* bg2    */}
      <Services />        {/* bg2    */}
      <CaseStudies />     {/* white  */}
      <ComparisonTable /> {/* white  */}
      <Testimonials />    {/* white  */}
      <FAQ />             {/* bg2    */}
      <ContactSection />  {/* bg2    */}
    </main>
  );
}
