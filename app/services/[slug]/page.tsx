import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/lib/content';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.tagline };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) notFound();

  const otherServices = services.filter(x => x.slug !== slug);

  return (
    <main>
      {/* ── Header ── */}
      <section className={styles.head}>
        <div className="container">
          <Reveal>
            <Link href="/services" className={styles.backLink}>
              <span>&larr;</span> All services
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <span className={styles.num}>{s.num} · {s.title}</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className={styles.title}>{s.title}</h1>
          </Reveal>
          <Reveal delay={180}>
            <p className={styles.tag}>{s.tagline}</p>
          </Reveal>
          <Reveal delay={240}>
            <p className={styles.blurb}>{s.blurb}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Capabilities (dark) ── */}
      <section className={styles.block}>
        <div className="container">
          <div className={styles.blockGrid}>
            <Reveal>
              <span className={styles.blockLabel}>Capabilities</span>
            </Reveal>
            <Reveal delay={80}>
              <ul className={styles.capList}>
                {s.capabilities.map(c => <li key={c}>{c}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process (dark) ── */}
      <section className={styles.block} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.blockGrid}>
            <Reveal>
              <span className={styles.blockLabel}>How it works</span>
            </Reveal>
            <div className={styles.process}>
              {s.process.map((p, i) => (
                <Reveal key={p.step} delay={i * 80}>
                  <div className={styles.step}>
                    <span className={styles.stepNum}>0{i + 1}</span>
                    <div>
                      <h3 className={styles.stepTitle}>{p.step}</h3>
                      <p className={styles.stepDesc}>{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Deliverables + Pricing (light) ── */}
      <section className={styles.lightBlock}>
        <div className="container">
          <div className={styles.twoCol}>
            <Reveal>
              <div>
                <span className={styles.colHead}>What you get</span>
                <ul className={styles.delList}>
                  {s.deliverables.map(d => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <span className={styles.colHead}>Engagement & pricing</span>
                <p className={styles.pricing}>{s.pricing}</p>
                <Link href="/#contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
                  Start a conversation <span>&rarr;</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Other services ── */}
      <section className={styles.others}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Other practices</span>
          </Reveal>
          <div className={styles.othersGrid}>
            {otherServices.map((o, i) => (
              <Reveal key={o.slug} delay={i * 60}>
                <Link href={`/services/${o.slug}`} className={styles.otherCard}>
                  <span className={styles.otherNum}>{o.num}</span>
                  <h3 className={styles.otherTitle}>{o.title}</h3>
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
