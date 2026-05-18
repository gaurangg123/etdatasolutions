import type { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/sections/ContactForm';
import CalendlyEmbed from '@/components/ui/CalendlyEmbed';
import Reveal from '@/components/ui/Reveal';
import { Mail, Phone, MapPin, CalendarClock } from 'lucide-react';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${company.name}. Email, phone, or book a call instantly — we reply within one business day.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Get in touch."
        subtitle="Send a message, email, call, or book a slot directly on the calendar. We respond within one business day."
      />

      <section className="container-x pt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickCard icon={Mail}  label="Email"  value={company.email}     href={`mailto:${company.email}`} />
          <QuickCard icon={Phone} label="Phone"  value={company.phone}     href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} />
          <QuickCard icon={MapPin} label="Office" value={company.location} />
          <QuickCard icon={CalendarClock} label="Hours" value="Mon–Fri · 9–7 IST" />
        </div>
      </section>

      <section className="container-x section grid lg:grid-cols-[1.1fr_1fr] gap-8">
        <Reveal>
          <div className="rounded-3xl border border-ink-100 bg-white shadow-card p-6 sm:p-10">
            <h2 className="text-2xl font-bold mb-1">Send us a message</h2>
            <p className="text-sm text-ink-500 mb-6">All fields marked with * are required.</p>
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <CalendlyEmbed />
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-ink-100 shadow-card">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Indore,+Madhya+Pradesh,+India&output=embed"
              className="w-full h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}

function QuickCard({ icon: Icon, label, value, href }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 h-full hover:border-brand-200 hover:shadow-card transition">
      <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-ink-400">{label}</div>
        <div className="text-ink-900 font-medium truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
