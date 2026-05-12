import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { featured, minis } from '@/data/testimonials';
import styles from './Testimonials.module.css';

function Stars() {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_,i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 16 16" fill="#FBBF24">
          <path d="M8 1.5l1.8 3.7 4.1.6-3 2.9.7 4.1L8 10.7l-3.6 1.9.7-4.1-3-2.9 4.1-.6z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Testimonials</div></Reveal>
          <Reveal delay={0.07}><h2>What clients <em>actually say.</em></h2></Reveal>
          <Reveal delay={0.14}><p>Unedited quotes from clients across 4 countries and 4 services.</p></Reveal>
        </div>
        <div className={styles.layout}>
          <Reveal className={styles.featWrap} scale>
            <div className={styles.featured}>
              <div className={styles.featTop} />
              <Stars />
              <blockquote className={styles.featQuote}>&ldquo;{featured.quote}&rdquo;</blockquote>
              <div className={styles.featAttr}>
                <Image src={featured.photo} alt={featured.name} className={styles.featPhoto} width={54} height={54} style={{objectFit:'cover'}} />
                <div>
                  <div className={styles.attrName}>{featured.name}</div>
                  <div className={styles.attrRole}>{featured.role} · {featured.company}</div>
                </div>
              </div>
              <div className={styles.featImage}>
                <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=200&fit=crop&q=80" alt="Team working" width={500} height={200} style={{width:'100%',height:'100%',objectFit:'cover'}} />
              </div>
            </div>
          </Reveal>
          <div className={styles.miniStack}>
            {minis.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.09} scale>
                <div className={styles.mini}>
                  <Stars />
                  <p className={styles.miniQuote}>&ldquo;{m.quote}&rdquo;</p>
                  <div className={styles.miniAttr}>
                    <Image src={m.photo} alt={m.name} className={styles.miniPhoto} width={38} height={38} style={{objectFit:'cover'}} />
                    <div><div className={styles.miniName}>{m.name}</div><div className={styles.miniRole}>{m.role}</div></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
