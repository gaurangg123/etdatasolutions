import Link from 'next/link';
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
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
  { href: '/services#staffing',           label: 'Staffing & Recruiting' },
  { href: '/services#virtual-assistants', label: 'Virtual Assistants' },
  { href: '/services#data-entry',         label: 'Data Entry' },
  { href: '/services#custom-solutions',   label: 'Custom Solutions' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-ink-100 bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <Logo size={40} />
          <p className="mt-4 text-sm text-ink-600 leading-relaxed max-w-xs">
            {company.tagline} Staffing, virtual assistants, data, and QA — handled with the care of an in-house team.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={company.social.linkedin}
              aria-label="LinkedIn"
              target="_blank" rel="noreferrer"
              className="p-2 rounded-lg border border-ink-200 text-ink-600 hover:text-brand-600 hover:border-brand-300 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={company.social.twitter}
              aria-label="Twitter"
              target="_blank" rel="noreferrer"
              className="p-2 rounded-lg border border-ink-200 text-ink-600 hover:text-brand-600 hover:border-brand-300 transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink-900 mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-600 hover:text-brand-600 transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 c