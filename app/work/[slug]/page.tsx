import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/ui/Reveal';
import { caseStudies, services } from '@/lib/content';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find(x => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.client} — ${c.service}`,
    description: c.outcome,
  };
}

export default async function WorkDetail({ params }: Props) {
  const { slug } = await params;
  const c = caseStudies.find(x => x.slug === slug);
  if (!c) notFound();

  const relatedService = services.find(s => s.slug === c.serviceSlug);
  const others = caseStudies.filter(x => x.slug !== slug).slice(0, 2);

  return (
    <main>
      {/* Header */}
      <section className={`section ${styles.head}`}>
        <div className="container">
          <Reveal>
            <Link href="/work" className={styles.backLink}>
              <span>&larr;</span> All work
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className={styles.headMeta}>
              <span className={styles.num}>{c.num}</span>
              <span className={styles.dot}>&middot;</span>
              <span>{c.region}</span>
              <span className={styles.dot}>&middot;</span>
              <span>{c.service}</span>
              <span className={styles.dot}>&middot;</span>
              <span>{c.timeline}</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className={styles.title}>{c.client}</h1>
          </Reveal>
          <Reveal delay={180}>
            <p className={styles.tag}><em>{c.problem}</em></p>
          </Reveal>
        </div>
      </section>

      {/* Outcome highlight */}
      <section className={`section section-dark ${styles.outcome}`}>
        <div className="container">
          <Reveal>
            <div className={styles.outcomeWrap}>
              <div>
                <span className="eyebrow">Outcome</span>
                <p className={styles.outcomeText}>{c.outcome}</p>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricVal}>{c.metric.val}</span>
                <span className={styles.metricSub}>{c.metric.sub}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Context */}
      <section className={`section ${styles.body}`}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <Reveal>
              <span className="eyebrow">Context</span>
            </Reveal>
            <Reveal delay={80}>
              <p className={styles.bodyText}>{c.context}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className={`section ${styles.body}`}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <Reveal>
              <span className="eyebrow">Approach</span>
            </Reveal>
            <ol className={styles.approach}>
              {c.approach.map((a, i) => (
                <Reveal key={i} delay={i * 80}>
                  <li>
                    <span className={styles.approachNum}>{String(i + 1).padStart(2, '0')}</span>
                    <p>{a}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className={`section ${styles.quoteSec}`}>
        <div className="container">
          <Reveal>
            <blockquote className={styles.quote}>
              <p>&ldquo;{c.quote}&rdquo;</p>
              <cite>&mdash; {c.attribution}</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Related service */}
      {relatedService && (
        <section className={`section ${styles.related}`}>
          <div className="container">
            <Reveal>
              <span className="eyebrow">The practice</span>
            </Reveal>
            <Reveal delay={80}>
              <Link href={`/services/${relatedService.slug}`} className={styles.relatedCard}>
                <div>
                  <h3 className={styles.relatedTitle}>{relatedService.title}</h3>
                  <p className={styles.relatedTag}>{relatedService.tagline}</p>
                </div>
                <span className={styles.relatedArrow}>&rarr;</span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Other work */}
      <section className={`section ${styles.others}`}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">More work</span>
          </Reveal>
          <div className={styles.othersGrid}>
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 80}>
                <Link href={`/work/${o.slug}`} className={styles.otherCard}>
                  <span className={styles.otherNum}>{o.num}</span>
                  <h3 className={styles.otherTitle}>{o.client}</h3>
                  <p className={styles.otherProblem}>{o.problem}</p>
                  <span className={styles.otherArrow}>&rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
