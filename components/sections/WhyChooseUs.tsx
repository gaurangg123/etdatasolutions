import { Wallet, TrendingUp, ShieldCheck, Zap, Compass } from 'lucide-react';
import { whyUs } from '@/lib/content';
import Reveal from '@/components/ui/Reveal';

const iconMap = { wallet: Wallet, chart: TrendingUp, shield: ShieldCheck, bolt: Zap, compass: Compass } as const;

export default function WhyChooseUs() {
  return (
    <section className="snap-section container-x section">
      <Reveal>
        <div className="section-header">
          <span className="pill mb-3">Why choose us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The discipline of an in-house team. <span className="grad-text">The economics of one that isn’t.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        {whyUs.map((w, i) => {
          const Icon = iconMap[w.icon as keyof typeof iconMap];
          return (
            <Reveal key={w.title} delay={i * 0.06}>
              <div className="card p-6 h-full">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-brand-50 text-brand-600 mb-4">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-ink-900 mb-2">{w.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
