import type { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/ui/CTABanner';
import Reveal from '@/components/ui/Reveal';
import {
  TestimonialCard,
  TestimonialsCarousel,
} from '@/components/sections/TestimonialsView';
import { testimonials, caseHighlights } from '@/data/testimonials';
import { Quote, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Hear from teams who trust ET Data Solutions with their recruitment, virtual assistant, data entry, and data engineering workflows.',
};

export default function TestimonialsPage() {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const others = testimonials.filter((t) => t !== featured);

  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What our clients say."
        subtitle="The best signal of quality is a client who keeps coming back. Most of ours have, for years."
      />

      {/* Featured testimonial */}
      <section className="container-x section">
        <Reveal>
          <div className="relative rounded-3xl bg-brand-gradient text-white p-8 sm:p-14 shadow-soft overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-12 w-60 h-60 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 backdrop-blur">
                {featured.service}
              </span>
              <Quote className="w-12 h-12 text-white/40 mt-5" />
              <p className="text-2xl sm:text-3xl font-medium leading-snug max-w-3xl mt-4">
                “{featured.review}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-white text-brand-700 text-base font-bold ring-2 ring-white/40">
                  {featured.name
                    .split(/\s+/)
                    .map((w) => w[0])
                    .filter(Boolean)
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()}
                </span>
                <div>
                  <div className="font-semibold">{featured.name}</div>
                  <div className="text-sm text-white/85">
                    {featured.company || featured.service}
                  </div>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-0.5">
                  {Array.from({ length: featured.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Grid (md+) — Carousel (mobile) */}
      <section className="container-x pb-20">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <span className="pill">More client stories</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
                Across every service we offer.
              </h2>
            </div>
            <p className="text-sm text-ink-500 max-w-xs">
              Real quotes from real engagements. Filter mentally by the service tag on each card.
            </p>
          </div>
        </Reveal>

        {/* Desktop / tablet grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.08}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <TestimonialsCarousel list={others} />
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
                <div className="rounded-2xl bg-white border border-ink-100 shadow-card p-7 h-full hover:-translate-y-1 hover:shadow-soft hover:border-brand-200 transition-all duration-300">
                  <div className="text-4xl font-bold grad-text">{c.metric}</div>
                  <div className="text-xs uppercase tracking-wider text-ink-400 mt-1">
                    {c.sub}
                  </div>
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
