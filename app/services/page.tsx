import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';
import CTABanner from '@/components/ui/CTABanner';
import Reveal from '@/components/ui/Reveal';
import { services, process } from '@/lib/content';
import { Users, Headset, Database, Sparkles, Check, ArrowRight, MessageSquare, ClipboardList, Rocket, PackageCheck } from 'lucide-react';

const iconMap = { users: Users, headset: Headset, database: Database, sparkles: Sparkles };
const processIcons = [MessageSquare, ClipboardList, Rocket, PackageCheck];

export const metadata: Metadata = {
  title: 'Services',
  description: 'Staffing, virtual assistants, data entry solutions, and custom services from ET Data Solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="What we do, in clear terms."
        subtitle="Four core services. Hundreds of workflows. One predictable, accountable team behind all of it."
      />

      <section className="container-x section space-y-10">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon];
          const reverse = i % 2 === 1;
          return (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white overflow-hidden shadow-card"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${reverse ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="p-8 sm:p-12 [direction:ltr]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-brand-600">{s.num}</span>
                      <span className="pill">{s.tagline}</span>
                    </