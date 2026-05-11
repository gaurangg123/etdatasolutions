import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const MailIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PhoneIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const PinIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const LiIcon   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/logo.png" alt="ET Data Solutions" height={38} width={148} style={{ objectFit:'contain', objectPosition:'left' }} />
            </Link>
            <p className={styles.tagline}>India-based outsourcing. Globally delivered. Est. 2014.</p>
            <div className={styles.privacyBadge}>
              <span className={styles.privacyDot}/>
              Privacy-first analytics · No cookies · GDPR safe
            </div>
            <div className={styles.social}>
              <a href={`mailto:${"bobby"}@${"etdatasolutions.com"}`} className={styles.socialLink} aria-label="Email"><MailIcon /></a>
              <a href="tel:+13023579776" className={styles.socialLink} aria-label="Phone"><PhoneIcon /></a>
              <a href="https://www.linkedin.com/company/et-data-solutions" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LiIcon /></a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <nav className={styles.colLinks}>
              {['Staffing & VA','Data Entry','Manual QA','Data Engineering'].map(s => (
                <Link key={s} href="/services" className={styles.colLink}>{s}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <nav className={styles.colLinks}>
              {([['About','/about'],['Testimonials','/testimonials'],['Contact','/contact'],['Free Audit','/contact']] as [string,string][]).map(([l,h]) => (
                <Link key={l} href={h} className={styles.colLink}>{l}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactList}>
              <a href={`mailto:${"bobby"}@${"etdatasolutions.com"}`} className={styles.contactItem}><MailIcon />bobby@etdatasolutions.com</a>
              <a href="tel:+13023579776" className={styles.contactItem}><PhoneIcon />+1-302-357-9776 (US)</a>
              <a href="tel:+916265348189" className={styles.contactItem}><PhoneIcon />+91 62653 48189 (IN)</a>
              <span className={styles.contactItem}><PinIcon />Indore, India</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 ET Data Solutions. All rights reserved.</span>
          <span>Indore, India · Serving US, UK, Canada, AU</span>
        </div>
      </div>
    </footer>
  );
}
