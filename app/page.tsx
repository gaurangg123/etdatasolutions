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
import SnapPage from '@/components/ui/SnapPage';

export const metadata: Metadata = {
  title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
  description: 'ET Data Solutions eliminates operational bottlenecks — staffing, data entry, QA testing, data engineering. India-based, globally delivered. 99% accuracy.',
};

export default function HomePage() {
  return (
    <SnapPage
      sections={[
        { id: 'hero',         label: 'Home',         content: <Hero /> },
        { id: 'social-proof', label: 'Results',      content: <><LogoStrip /><ResultsBanner /></> },
        { id: 'about',        label: 'About',        content: <About /> },
        { id: 'how-diff',     label: 'Why Us',       content: <HowDifferent /> },
        { id: 'services',     label: 'Services',     content: <Services /> },
        { id: 'case-studies', label: 'Work',         content: <CaseStudies /> },
        { id: 'testimonials', label: 'Testimonials', content: <Testimonials /> },
        { id: 'faq',          label: 'FAQ',          content: <FAQ /> },
        { id: 'contact',      label: 'Contact',      content: <ContactSection /> },
      ]}
    />
  );
}
