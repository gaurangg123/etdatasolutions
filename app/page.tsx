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
import SectionRail from '@/components/ui/SectionRail';

export const metadata: Metadata = {
  title: 'ET Data Solutions — Staffing, Data, QA & Data Engineering',
  description: 'ET Data Solutions eliminates operational bottlenecks — staffing, data entry, QA testing, data engineering. India-based, globally delivered. 99% accuracy.',
};

const SECTIONS = [
  { id: 'hero',         label: 'Home'         },
  { id: 'about',        label: 'About'        },
  { id: 'how-diff',     label: 'Why Us'       },
  { id: 'services',     label: 'Services'     },
  { id: 'case-studies', label: 'Work'         },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq',          label: 'FAQ'          },
  { id: 'contact',      label: 'Contact'      },
];

/**
 * Each section component (About, Services, etc.) already declares its own
 * <section id="..."> internally. We wrap them in divs that carry the
 * `snap-anchor` class only — without adding duplicate ids.
 *
 * The two exceptions are #hero and #how-diff, which need ids added here
 * because their inner components don't declare them.
 */
export default function HomePage() {
  return (
    <>
      <SectionRail sections={SECTIONS} />

      <main>
        <div id="hero" className="snap-anchor"><Hero /></div>

        <LogoStrip />
        <ResultsBanner />

        <div className="snap-anchor"><About /></div>
        <div id="how-diff" className="snap-anchor"><HowDifferent /></div>
        <div className="snap-anchor"><Services /></div>
        <div className="snap-anchor"><CaseStudies /></div>
        <div className="snap-anchor"><Testimonials /></div>
        <div className="snap-anchor"><FAQ /></div>
        <div className="snap-anchor"><ContactSection /></div>
      </main>
    </>
  );
}
