import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ProofStrip from '@/components/sections/ProofStrip';
import WhatWeDo from '@/components/sections/WhatWeDo';
import SelectedWork from '@/components/sections/SelectedWork';
import ContactAndFAQ from '@/components/sections/ContactAndFAQ';
import SectionRail from '@/components/ui/SectionRail';

export const metadata: Metadata = {
  title: 'ET Data Solutions — Staffing, Data, QA & Engineering',
  description:
    'Quiet, accurate work that lets your team focus. Staffing, data entry, QA testing, and data engineering — delivered globally from Indore, India.',
};

const SECTIONS = [
  { id: 'top',      label: 'Top'      },
  { id: 'services', label: 'Services' },
  { id: 'work',     label: 'Work'     },
  { id: 'contact',  label: 'Contact'  },
];

export default function HomePage() {
  return (
    <>
      <SectionRail sections={SECTIONS} />
      <main>
        <div id="top"><Hero /></div>
        <ProofStrip />
        <WhatWeDo />
        <SelectedWork />
        <ContactAndFAQ />
      </main>
    </>
  );
}
