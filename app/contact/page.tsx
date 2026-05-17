import type { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/sections/ContactForm';
import Reveal from '@/components/ui/Reveal';
import { Mail, Phone, MapPin, CalendarClock } from 'lucide-react';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${company.name}. Email, phone, or send us a message — we reply within one business day.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Get in touch."
        subtitle="Tell us about your workflows. We respond within one business day with a clear next step."
      />

      <section className="container-x section grid lg:grid-cols-[1.3fr_1fr] gap-10">
        {/* Form */}
        <Reveal>
          <div className="rounded-3xl border border-ink-100 bg-white shadow-card p-6 sm:p-10">
            <h2 className="text-2xl font-bold mb-1">Send us a message</h2>
            <p className="text-sm text-ink-500 mb-6">All fields marked with * are required.</p>
            <ContactForm />
          </div>
        </Reveal>

        {/* Info */}
        <Reveal delay={0.1}>
          <div className="space-y-5">
            <InfoCard icon={Mail}  label="Email"    value={company.email}    href={`mailto:${company.email}`} />
            <InfoCard icon={Phone} label="Phone"    value={company.phone}    href={`tel:${company.phone.replace(/\s/g, '')}`} />
            <InfoCard icon={MapPin} label="Office"  value={company.location} />
            <InfoCard icon={CalendarClock} label="Hours" value="Mon–Fri · 09:00–19:00 IST" />

            <div className="rounded-2xl overflow-hidden border border-ink-100 shadow-card">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Indore,+Madhya+Pradesh,+India&output=embed"
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={`mailto:${company.email}?subject=Schedule%20a%20call`}
              className="btn-primary w-full justify-center"
            >
              Schedule a call
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon, label, value, href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 hover:border-brand-200 hover:shadow-card transition">
      <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-ink-400">{label}</div>
        <div className="text-ink-900 font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
