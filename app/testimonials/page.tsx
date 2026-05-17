import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/ui/CTABanner';
import Reveal from '@/components/ui/Reveal';
import { featured, testimonials, caseHighlights } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Hear from the teams who trust ET Data Solutions with their operations, data, and customer workflows.',
};

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < n ? 'text-brand-500 fill-brand-500' : 'text-ink-200'}`} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What our clients say."
        subtitle="The best signal of quality is a client who keeps coming back. Most of ours have, for years."
      />

      {/* Featured */}
      <section className="container-x section">
        <Reveal>
          <div className="relative rounded-3xl bg-brand-gradient text-white p-8 sm:p-14 shadow-soft overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
            <Quote className="w-12 h-12 text-white/40 mb-4" />
            <p className="text-2xl sm:text-3xl font-medium leading-snug max-w-3xl">
              “{featured.quote}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src={featured.photo}
                alt={featured.name}
                width={56}
                height={56}
                className="rounded-full ring-2 ring-white/40 object-cover"
              />
              <div>
                <div className="font-semibold">{featured.name}</div>
                <div className="text-sm text-white/85">{featured.role}{featured.company ? ` · ${featured.company}` : ''}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="container-x pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <article className="card p-6 h-full flex flex-col">
                <Stars n={t.rating} />
                <p className="mt-4 text-ink-700 leading-relaxed flex-1">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3 pt-5 border-t border-ink-100">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-ink-900">{t.name}</div>
                    <div className="text-xs text-ink-500">{t.role}{t.company ? ` · ${t.company}` : ''}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Case highlights */}
      <section className="bg-gradient-to-b from-brand-50/40 to-white border-y border-ink-100">
        <div className="container-x section">
          <Reveal>
            <div className="section-header text-center mx-auto">
              <span className="pill mb-3">Case highlights</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Outcomes, not just hours.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {caseHighlights.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="card p-7 h-full">
                  <div className="text-4xl font-bold grad-text">{c.metric}</div>
                  <div className="text-xs uppercase tracking-wider text-ink-400 mt-1">{c.sub}</div>
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
