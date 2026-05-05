import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0d0d0b', color: '#888', fontFamily: 'inherit' }} className="w-full">
      <style>{`
        .footer-social:hover { border-color: #e8440a !important; color: #e8440a !important; }
        .footer-link:hover   { color: #e8440a !important; }
      `}</style>
      <div className="max-w-[1160px] mx-auto px-6 lg:px-8 pt-16 pb-8">

        {/* Row 1: Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12">

          {/* Left: Brand statement */}
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#666', textTransform: 'uppercase', marginBottom: '16px' }}>
              ET DATA SOLUTIONS
            </p>
            <h2 style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 500, color: '#f0ede8', lineHeight: 1.25, marginBottom: '16px' }}>
              India-based outsourcing.<br />Globally delivered.
            </h2>
            <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.7, maxWidth: '340px', marginBottom: '24px' }}>
              Staffing, data entry, QA testing, and data engineering — handled with precision. Serving US, UK, Canada & AU since 2014.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: 'LinkedIn',   path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'X/Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01 M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z' },
              ].map(s => (
                <button key={s.label} aria-label={s.label} className="footer-social"
                  style={{ width: '36px', height: '36px', borderRadius: '50%', border: '0.5px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', cursor: 'pointer', background: 'transparent', transition: 'border-color 0.2s, color 0.2s' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Nav columns */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase', marginBottom: '16px' }}>Services</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Staffing & VA',       href: '/services#staffing'         },
                  { label: 'Data Entry',           href: '/services#data-entry'       },
                  { label: 'Manual QA',            href: '/services#qa-testing'       },
                  { label: 'Data Engineering',     href: '/services#data-engineering' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="footer-link"
                    style={{ fontSize: '13px', color: '#666', textDecoration: 'none', transition: 'color 0.15s' }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase', marginBottom: '16px' }}>Company</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'About',         href: '/about'         },
                  { label: 'Testimonials',  href: '/testimonials'  },
                  { label: 'Contact',       href: '/contact'       },
                  { label: 'Free Audit',    href: '/contact#audit' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="footer-link"
                    style={{ fontSize: '13px', color: '#666', textDecoration: 'none', transition: 'color 0.15s' }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '0.5px', background: '#222', marginBottom: '32px' }} />

        {/* Row 2: Watermark + contact */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-8">
          {/* Large outlined watermark text */}
          <div style={{ userSelect: 'none', lineHeight: 1 }}>
            <div style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 800, WebkitTextStroke: '1.5px #2a2a28', color: 'transparent', letterSpacing: '-0.02em', lineHeight: 1 }}>
              ET DATA
            </div>
            <div style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 800, WebkitTextStroke: '1.5px #2a2a28', color: 'transparent', letterSpacing: '-0.02em', lineHeight: 1 }}>
              SOLUTIONS
            </div>
          </div>

          {/* Contact details — right aligned */}
          <div className="flex flex-col gap-1.5 lg:text-right">
            {[
              { val: 'bobby@etdatasolutions.com', href: 'mailto:bobby@etdatasolutions.com' },
              { val: '+1-302-357-9776 (US)',       href: 'tel:+13023579776'                },
              { val: '+91 62653 48189 (IN)',        href: 'tel:+916265348189'               },
              { val: 'Indore, India — Serving Globally', href: null },
              { val: '24/7 — Any timezone',        href: null },
            ].map(c => (
              <div key={c.val}>
                {c.href
                  ? <a href={c.href} className="footer-link" style={{ fontSize: '12px', color: '#666', textDecoration: 'none', transition: 'color 0.15s' }}>{c.val}</a>
                  : <span style={{ fontSize: '12px', color: '#555' }}>{c.val}</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Legal bar */}
        <div style={{ borderTop: '0.5px solid #1a1a18', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#444' }}>© {new Date().getFullYear()} ET Data Solutions. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '11px', color: '#444', cursor: 'pointer' }}>Terms of service</span>
            <span style={{ fontSize: '11px', color: '#444', cursor: 'pointer' }}>Privacy policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
