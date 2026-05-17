import { stats } from '@/lib/content';
import Reveal from '@/components/ui/Reveal';

export default function Snapshot() {
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal>
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="pill mb-3">About ET Data Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              A quiet, reliable extension of your team.
            </h2>
          </div>
          <p className="text-lg text-ink-600 leading-relaxed">
            For seven years we’ve built a single, simple offer: take the operational work off your plate and run it with the discipline of an in-house team. From a 40-person studio in Indore, we serve growing businesses across the US, UK, Australia, and the EU — handling staffing, virtual assistants, data entry, QA, and custom workflows.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="rounded-2xl border border-ink-100 bg-white p-6 text-center hover:border-brand-200 hover:shadow-card transition">
              <div className="text-3xl sm:text-4xl font-bold grad-text">{s.value}</div>
              <div className="mt-1 text-sm text-ink-500">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
