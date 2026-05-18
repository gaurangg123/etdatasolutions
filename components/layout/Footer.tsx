import Link from 'next/link';
import { Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { company } from '@/lib/content';

const quickLinks = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  { href: '/services',     label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact',      label: 'Contact' },
];

const serviceLinks = [
  { href: '/services#staffing',           label: 'Recruitment & Staffing' },
  { href: '/services#virtual-assistants', label: 'Virtual Assistants' },
  { href: '/services#data-entry',         label: 'Data Entry & Macros' },
  { href: '/services#data-engineering',   label: 'Data Engineering' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-900 text-white">
      {/* sunset glow that bleeds into the footer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-40"
          style={{ background: 'radial-gradient(ellipse, #E6296A 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -right-32 w-[600px] h-[400px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(ellipse, #F26A1E 0%, transparent 70%)' }}
        />
      </div>

      {/* Big-CTA hero */}
      <div className="relative container-x pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/80 text-[11px] font-bold tracking-[0.25em] uppercase px-3 py-1 backdrop-blur border border-white/15">
          Let's talk
        </span>
        <h2 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
          Let's build something{' '}
          <span className="shimmer-text">extraordinary.</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Tell us about your workflows. We'll respond within one business day with a clear next step — no pressure, no hard sell.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="btn-primary text-base px-7 py-3.5"
          >
            Start the conversation <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`mailto:${company.email}`}
            className="btn bg-white/10 text-white border border-white/15 hover:bg-white/15 hover:border-white/25 backdrop-blur"
          >
            {company.email}
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="relative container-x">
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Compact footer rows */}
      <div className="relative container-x py-12 grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo size={36} variant="dark" />
          <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-xs">
            {company.tagline} Recruitment, virtual assistants, data, and engineering — handled with the care of an in-house team.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a
              href={company.social.linkedin}
              aria-label="LinkedIn"
              target="_blank" rel="noreferrer"
              className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/35 hover:bg-white/5 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={company.social.twitter}
              aria-label="Twitter"
              target="_blank" rel="noreferrer"
              className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/35 hover:bg-white/5 transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 mt-0.5 text-coral-400 shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-white transition truncate">{company.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 text-coral-400 shrink-0" />
              <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white transition">{company.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-coral-400 shrink-0" />
              <span>{company.location}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {year} {company.name}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <span>Made with care in Indore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
