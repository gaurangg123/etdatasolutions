import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { featured, minis } from '@/data/testimonials';
import styles from './Testimonials.module.css';

const Stars = () => (
  <div className={styles.stars} aria-label="5 stars">
    {[...Array(5)].map((_,i)=>(
      <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#FBBF24"><path d="M8 1.5l1.8 3.7 4.1.6-3 2.9.7 4.1L8 10.7l-3.6 1.9.7-4.1-3-2.9 4.1-.6z"/></svg>
    ))}
  </div>
);

const serviceTags: Record<string,string> = {
  'Sarah Marshall':  'Data Entry',
  'Daniel Rao':      'QA Testing',
  'Emma Nordstrom':  'Staffing',
  'Michael Reeves':  'Data Entry',
};

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <Reveal><div className="eyebrow">Testimonials</div></Reveal>
          <Reveal delay={0.07}><h2>What clients <em>actually say.</em></h2></Reveal>
          <Reveal delay={0.14}><p>Unedited quotes from clients across 4 countries and 4 services.</p></Reveal>
        </div>

        {/* Trust bar (#10, #25) */}
        <Reveal delay={0.1}>
          <div className={styles.trustBar}>
            {[{val:'4.9/5',lbl:'Average rating'},{val:'100+',lbl:'Clients served'},{val:'4',lbl:'Countries'},{val:'0',lbl:'Refunds issued'}].map(t=>(
              <div key={t.lbl} className={styles.trustStat}>
                <span className={styles.trustVal}>{t.val}</span>
                <span className={styles.trustLbl}>{t.lbl}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className={styles.layout}>
          <Reveal className={styles.featWrap} scale>
            <div className={styles.featured}>
              <div className={styles.featAccent}/>
              <Stars/>
              <blockquote className={styles.featQuote}>&ldquo;{featured.quote}&rdquo;</blockquote>
              <div className={styles.featAttr}>
                <Image src={featured.photo} alt={featured.name} className={styles.featPhoto}
                  width={52} height={52} style={{objectFit:'cover'}}/>
                <div>
                  <div className={styles.attrName}>{featured.name}</div>
                  <div className={styles.attrRole}>{featured.role} · {featured.company}</div>
                </div>
                <span className={styles.serviceTag}>{serviceTags[featured.name]||'Operations'}</span>
              </div>
            </div>
          </Reveal>

          <div className={styles.miniStack}>
            {minis.map((m,i)=>(
              <Reveal key={m.name} delay={i*0.08} scale>
                <div className={styles.mini}>
                  <div className={styles.miniTop}>
                    <Stars/>
                    <span className={styles.serviceTag}>{serviceTags[m.name]||'Operations'}</span>
                  </div>
                  <p className={styles.miniQuote}>&ldquo;{m.quote}&rdquo;</p>
                  <div className={styles.miniAttr}>
                    <Image src={m.photo} alt={m.name} className={styles.miniPhoto}
                      width={36} height={36} style={{objectFit:'cover'}}/>
                    <div>
                      <div className={styles.miniName}>{m.name}</div>
                      <div className={styles.miniRole}>{m.role}</div>
                    </div>
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
