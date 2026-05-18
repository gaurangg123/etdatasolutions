import Link from 'next/link';
import { Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
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
      {/* sunset edge glow */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral-500/60 to-transparent" />
      <div
        aria-hidden
        className="absolute -top-24 left-1/4 w-[500px] h-[260px] rounded-full blur-[100px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #E6296A 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 right-0 w-[500px] h-[300px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #F26A1E 0%, transparent 70%)' }}
      />

      {/* Main grid */}
      <div className="relative container-x pt-16 pb-10 grid gap-12 lg:gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        {/* Brand column */}
        <div>
          <Logo size={56} variant="dark" />
          <p className="mt-6 text-sm text-white/65 leading-relaxed max-w-xs">
            {company.tagline} Recruitment, virtual assistants, data, and engineering — handled with the care of an in-house team.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a href={company.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"
               className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-coral-400/60 hover:bg-white/5 transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={company.social.twitter} aria-label="Twitter" target="_blank" rel="noreferrer"
               className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-coral-400/60 hover:bg-white/5 transition">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/45 mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/85 hover:text-white transition inline-flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/45 mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/85 hover:text-white transition inline-flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/45 mb-5">Get in touch</h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li>
              <a href={`mailto:${company.email}`} className="flex items-start gap-2.5 hover:text-white transition">
                <Mail className="w-4 h-4 mt-0.5 text-coral-400 shrink-0" />
                <span className="truncate">{company.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} className="flex items-start gap-2.5 hover:text-white transition">
                <Phone className="w-4 h-4 mt-0.5 text-coral-400 shrink-0" />
                <span>{company.phone}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-coral-400 shrink-0" />
              <span>{company.location}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span>Made with care in Indore, India</span>
        </div>
      </div>
    </footer>
  );
}
