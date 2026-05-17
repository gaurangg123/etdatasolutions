import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/content';
import Reveal from '@/components/ui/Reveal';
import {
  RecruitmentArt,
  VirtualAssistantArt,
  DataEntryArt,
  DataEngineeringArt,
} from '@/components/ui/ServiceIllustrations';

const artBySlug: Record<string, () => JSX.Element> = {
  staffing: RecruitmentArt,
  'virtual-assistants': VirtualAssistantArt,
  'data-entry': DataEntryArt,
  'data-engineering': DataEngineeringArt,
};

export default function KeyOfferings() {
  return (
    <section className="bg-gradient-to-b from-white via-brand-50/40 to-white">
      <div className="container-x section">
        <Reveal>
          <div className="section-header text-center mx-auto">
            <span className="pill mb-3">Our offerings</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Four services. <span className="grad-text">One operating partner.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Pick what you need — or combine them. Most clients start with one and scale into the rest.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Art = artBySlug[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group block rounded-2xl border border-ink-100 bg-white overflow-hidden hover:-translate-y-1 hover:shadow-soft hover:border-brand-300 transition-all duration-300 h-full"
                >
                  <div className="relative h-36 bg-gradient-to-br from-brand-50 to-brand-100/60 overflow-hidden">
                    <div className="absolute inset-0 grid place-items-center p-3">
                      {Art && <Art />}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-mono text-ink-400">{s.num}</span>
                      <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-brand-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                    </div>
                    <h3 className="text-base font-semibold text-ink-900 mb-1">{s.title}</h3>
                    <p className="text-xs text-ink-600 leading-relaxed">{s.short}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
