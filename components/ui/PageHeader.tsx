import FloatingShapes from './FloatingShapes';
import Reveal from './Reveal';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-soft border-b border-ink-100">
      <FloatingShapes />
      <div className="container-x relative py-20 sm:py-28 text-center">
        <Reveal>
          {eyebrow && <span className="pill mb-4">{eyebrow}</span>}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl mx-auto text-lg text-ink-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
