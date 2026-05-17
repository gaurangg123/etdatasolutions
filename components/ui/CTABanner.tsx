import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function CTABanner({
  title = "Let's grow your business together",
  subtitle = 'Tell us about your workflows. We’ll respond within one business day with a clear next step.',
  ctaHref = '/contact',
  ctaLabel = 'Contact us',
}: CTABannerProps) {
  return (
    <section className="container-x section">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-14 sm:px-14 sm:py-20 text-white shadow-soft">
          <div aria-hidden className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-white/15 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
              <p className="mt-3 text-white/90 max-w-2xl text-lg">{subtitle}</p>
            </div>
            <Link
              href={ctaHref}
              className="btn bg-white text-brand-700 hover:bg-brand-50 shadow-lg whitespace-nowrap"
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
