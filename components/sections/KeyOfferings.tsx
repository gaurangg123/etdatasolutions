import Link from 'next/link';
import { Users, Headset, Database, Sparkles, ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/content';
import Reveal from '@/components/ui/Reveal';

const iconMap = { users: Users, headset: Headset, database: Database, sparkles: Sparkles };

export default function KeyOfferings() {
  return (
    <section className="bg-gradient-to-b from-white via-brand-50/40 to-white">
      <div className="container-x section">
        <Reveal>
          <div className="section-header text-center mx-auto">
            <span className="pill mb-3">Our offerings</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Four services. <span className="grad-text">One operating partner.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Pick what you need — or combine them. Most clients start with one and scale into the rest.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link href={`/services#${s.slug}`} className="card block p-6 h-full group">
                  <div className="flex items-start justify-between mb-5">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-gradient text-white shadow-soft group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-brand-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  </div>
                  <div className="text-xs font-mono text-ink-400 mb-1">{s.num}</div>
                  <h3 className="text-lg font-semibold text-ink-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{s.short}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
