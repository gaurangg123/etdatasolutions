import type { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/ui/CTABanner';
import Reveal from '@/components/ui/Reveal';
import { FeaturedSlider, MiniCard } from '@/components/sections/TestimonialsView';
import { featured, mini, caseHighlights } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Hear from teams who trust ET Data Solutions with their recruitment, virtual assistant, data entry, and data engineering workflows.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What our clients say."
        subtitle="The best signal of quality is a client who keeps coming back. Most of ours have, for years."
      />

      {/* Featured 3-slide carousel on orange gradient card */}
      <section className="container-x section">
        <Reveal>
          <FeaturedSlider list={featured} />
        </Reveal>
      </section>

      {/* 6 mini cards */}
      <section className="container-x pb-20">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <span className="pill">Long-term partnerships</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
                Clients who stay for years.
              </h2>
            </div>
            <p className="text-sm text-ink-500 max-w-sm">
              A snapshot of ongoing engagements — most started as a single project and grew from there.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mini.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.08}>
              <MiniCard t={m} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service highlights — one per core offering */}
      <section className="bg-gradient-to-b from-brand-50/40 to-white border-y border-ink-100">
        <div className="container-x section">
          <Reveal>
            <div className="section-header text-center mx-auto">
              <span className="pill mb-3">By the service</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Long-term partnerships, <span className="grad-text">across every offering.</span>
              </h2>
              <p className="mt-4 text-base text-ink-600">
                Clients don't just engage us once. They embed us — and stay.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {caseHighlights.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-ink-100 shadow-card p-6 h-full hover:-translate-y-1 hover:shadow-soft hover:border-brand-200 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold grad-text">{c.metric}</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-ink-400 mt-1 font-semibold">{c.sub}</div>
                  <h3 className="mt-5 font-semibold text-ink-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join our happy clients."
        subtitle="Most of our work starts with a short, no-obligation call. Let's see if we're a fit."
        ctaLabel="Start the conversation"
      />
    </>
  );
}
