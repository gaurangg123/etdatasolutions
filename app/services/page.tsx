import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/ui/CTABanner';
import Reveal from '@/components/ui/Reveal';
import { services, process } from '@/lib/content';
import {
  RecruitmentArt,
  VirtualAssistantArt,
  DataEntryArt,
  DataEngineeringArt,
} from '@/components/ui/ServiceIllustrations';
import {
  Check,
  ArrowRight,
  MessageSquare,
  ClipboardList,
  Rocket,
  PackageCheck,
  ArrowUpRight,
} from 'lucide-react';

const artBySlug: Record<string, () => JSX.Element> = {
  staffing: RecruitmentArt,
  'virtual-assistants': VirtualAssistantArt,
  'data-entry': DataEntryArt,
  'data-engineering': DataEngineeringArt,
};

const processIcons = [MessageSquare, ClipboardList, Rocket, PackageCheck];

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Recruitment & staffing, virtual assistants, data entry & macros, and data engineering & visualizations from ET Data Solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="snap-section">
        <PageHeader
          eyebrow="Our services"
          title="Four offerings. One accountable team."
          subtitle="From global recruitment to data pipelines — handled with the discipline of an in-house function, at outsourcing economics."
        />
      </section>

      <section className="snap-section">
        <div className="container-x section">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Art = artBySlug[s.slug];
              return (
                <Reveal key={s.slug} delay={(i % 2) * 0.1}>
                  <Link
                    href={`#${s.slug}`}
                    className="group relative block rounded-3xl border border-ink-100 bg-white overflow-hidden shadow-card hover:shadow-soft hover:-translate-y-1 hover:border-brand-300 transition-all duration-300 h-full"
                  >
                    <div className="relative h-52 sm:h-56 bg-gradient-to-br from-brand-50 to-brand-100/60 overflow-hidden">
                      <div className="absolute inset-0 grid place-items-center p-6">{Art && <Art />}</div>
                      <div aria-hidden className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/40 blur-2xl" />
                    </div>
                    <div className="p-7">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-xs font-mono text-brand-600">{s.num}</span>
                          <h3 className="mt-1 text-xl font-bold tracking-tight text-ink-900">{s.title}</h3>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-brand-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="mt-3 text-sm text-ink-600 leading-relaxed">{s.blurb}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {services.map((s, i) => {
        const Art = artBySlug[s.slug];
        const reverse = i % 2 === 1;
        return (
          <section key={`d-${s.slug}`} className="snap-section">
            <div className="container-x section">
              <Reveal>
                <article
                  id={s.slug}
                  className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white overflow-hidden shadow-card"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${reverse ? 'lg:[direction:rtl]' : ''}`}>
                    <div className="p-8 sm:p-12 [direction:ltr]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-brand-600">{s.num}</span>
                        <span className="pill">{s.tagline}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{s.title}</h2>
                      <p className="text-ink-600 leading-relaxed">{s.blurb}</p>
                      <ul className="mt-6 space-y-2.5">
                        {s.capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm text-ink-700">
                            <Check className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 flex flex-wrap gap-3">
                        <Link href="/contact" className="btn-primary">
                          Get a quote <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-secondary">
                          Discuss this service
                        </Link>
                      </div>
                    </div>
                    <div className="relative bg-gradient-to-br from-brand-50 to-brand-100/50 p-8 sm:p-12 grid place-items-center [direction:ltr]">
                      <div className="w-full max-w-md">{Art && <Art />}</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="snap-section bg-gradient-to-b from-brand-50/40 to-white border-y border-ink-100">
        <div className="container-x section">
          <Reveal>
            <div className="section-header text-center mx-auto">
              <span className="pill mb-3">How we work</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                A four-step process. <span className="grad-text">No surprises.</span>
              </h2>
            </div>
          </Reveal>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div aria-hidden className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />
            {process.map((p, i) => {
              const Icon = processIcons[i];
              return (
                <Reveal key={p.step} delay={i * 0.08}>
                  <div className="relative bg-white rounded-2xl border border-ink-100 p-6 h-full hover:border-brand-200 hover:shadow-card transition">
                    <span className="relative grid place-items-center w-14 h-14 rounded-2xl bg-brand-gradient text-white shadow-soft mb-4">
                      <Icon className="w-6 h-6" />
                    </span>
                    <div className="text-xs font-mono text-brand-600 mb-1">{p.step}</div>
                    <h3 className="font-semibold text-ink-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="snap-section snap-loose">
        <CTABanner
          title="Need a customised engagement?"
          subtitle="If none of the above fits exactly, tell us what you need. We've built far stranger things."
          ctaLabel="Talk to us"
        />
      </section>
    </>
  );
}
