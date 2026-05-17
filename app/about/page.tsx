import type { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/ui/CTABanner';
import Reveal from '@/components/ui/Reveal';
import { mission, vision, values, timeline, company } from '@/lib/content';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${company.name} — our story, mission, and values.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="snap-section">
        <PageHeader
          eyebrow="About us"
          title="A trusted operating partner, not a vendor."
          subtitle="Seven years of helping growing businesses ship faster — by handling the work that holds them back."
        />
      </section>

      <section className="snap-section">
        <div className="container-x section">
          <Reveal>
            <div className="max-w-3xl">
              <span className="pill mb-3">Our story</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Built quietly, one engagement at a time.
              </h2>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                We started in 2018 with a single principle: treat every client's workflow as if it were our own. Seven years later, the principle hasn't changed — only the team that delivers on it.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className="card p-6 h-full">
                  <div className="text-sm font-mono text-brand-600">{t.year}</div>
                  <h3 className="mt-2 font-semibold text-ink-900">{t.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-section bg-gradient-to-b from-brand-50/40 to-white border-y border-ink-100">
        <div className="container-x section grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="card p-8 h-full">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-gradient text-white mb-5">
                <Target className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold mb-3">Our mission</h3>
              <p className="text-ink-600 leading-relaxed">{mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-8 h-full">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-gradient text-white mb-5">
                <Eye className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold mb-3">Our vision</h3>
              <p className="text-ink-600 leading-relaxed">{vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="snap-section">
        <div className="container-x section">
          <Reveal>
            <div className="section-header text-center mx-auto">
              <span className="pill mb-3">Our values</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Four things we will not compromise on.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card p-6 h-full">
                  <CheckCircle2 className="w-6 h-6 text-brand-500 mb-4" />
                  <h3 className="font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-section snap-loose">
        <CTABanner
          title="Work with us."
          subtitle="Start with a 30-minute call. We'll listen, scope, and tell you honestly whether we're the right fit."
          ctaLabel="Get in touch"
        />
      </section>
    </>
  );
}
