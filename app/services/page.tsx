import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/ui/CTABanner';
import Reveal from '@/components/ui/Reveal';
import { services, process } from '@/lib/content';
import { Users, Headset, Database, Sparkles, Check, ArrowRight, MessageSquare, ClipboardList, Rocket, PackageCheck } from 'lucide-react';

const iconMap = { users: Users, headset: Headset, database: Database, sparkles: Sparkles };
const processIcons = [MessageSquare, ClipboardList, Rocket, PackageCheck];

export const metadata: Metadata = {
  title: 'Services',
  description: 'Staffing, virtual assistants, data entry solutions, and custom services from ET Data Solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="What we do, in clear terms."
        subtitle="Four core services. Hundreds of workflows. One predictable, accountable team behind all of it."
      />

      <section className="container-x section space-y-10">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon];
          const reverse = i % 2 === 1;
          return (
            <Reveal key={s.slug}>
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
                        Learn more
                      </Link>
                    </div>
                  </div>

                  <div className="relative bg-gradient-to-br from-brand-50 to-brand-100/50 p-8 sm:p-12 grid place-items-center [direction:ltr]">
                    <div className="relative">
                      <div className="absolute -inset-8 bg-brand-gradient opacity-30 rounded-full blur-3xl" />
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-white shadow-soft grid place-items-center">
                        <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-brand-500" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="bg-gradient-to-b from-brand-50/40 to-white border-y border-ink-100">
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

      <CTABanner
        title="Need a customised solution?"
        subtitle="If none of the above fits exactly, tell us what you need. We've built far stranger things."
        ctaLabel="Talk to us"
      />
    </>
  );
}
