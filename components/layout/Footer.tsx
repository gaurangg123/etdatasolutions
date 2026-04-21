import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Globe, MapPin, ArrowRight, Clock } from 'lucide-react'

const serviceLinks = [
  { label:'Staffing & VA Recruitment', href:'/services#staffing' },
  { label:'Data Entry & Excel',        href:'/services#data'     },
  { label:'Manual QA Testing',         href:'/services#qa'       },
  { label:'Data Engineering & BI',     href:'/services#dataeng'  },
  { label:'View Pricing',              href:'/#pricing'          },
]
const companyLinks = [
  { label:'About Us',     href:'/about'        },
  { label:'Services',     href:'/services'     },
  { label:'Contact',      href:'/contact'      },
  { label:'Free Audit',   href:'/#audit'       },
  { label:'Get a Quote',  href:'/contact#form' },
]
const contacts = [
  { icon:Mail,   label:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
  { icon:Phone,  label:'+1-302-357-9776 (US)',      href:'tel:+13023579776'                },
  { icon:Phone,  label:'+91 62653 48189 (IN)',      href:'tel:+916265348189'               },
  { icon:Globe,  label:'etdatasolutions.com',       href:'https://etdatasolutions.com'     },
  { icon:MapPin, label:'India — Serving Globally',  href:null                              },
  { icon:Clock,  label:'24/7 — Any timezone',       href:null                              },
]

// Standardized footer — identical on all pages (item 6)
export default function Footer() {
  return (
    <footer className="bg-ink-50 dark:bg-ink-950 border-t border-ink-200 dark:border-ink-900">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">

        {/* Mini CTA bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-5 border-b border-ink-200 dark:border-ink-800">
          <div>
            <p className="text-sm font-[700] text-ink-900 dark:text-ink-100">Ready to remove your biggest operational bottleneck?</p>
            <p className="text-xs text-ink-400 dark:text-ink-500 mt-0.5">Free consultation · No contract required · 30-day guarantee</p>
          </div>
          <Link
            href="/contact#form"
            className="group flex-shrink-0 inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand"
          >
            Book a free call
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Main grid — full two-column link grid always present (item 6) */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-14 py-12 border-b border-ink-200 dark:border-ink-800">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative h-9 w-9 flex-shrink-0">
                <Image src="/logo-transparent.png" alt="ET Data Solutions" fill className="object-contain opacity-90"/>
              </div>
              <div>
                <span className="block text-[1rem] font-[750] tracking-[-0.02em] text-ink-900 dark:text-ink-200">ET Data Solutions</span>
                <span className="block text-[0.68rem] text-ink-400 dark:text-ink-500 font-[500]">Outsourcing · Est. 2014</span>
              </div>
            </div>

            <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed max-w-[260px] mb-2">
              India-based outsourcing for staffing, data processing, QA testing, and data engineering. Globally delivered since 2014.
            </p>
            <p className="text-xs text-ink-400 dark:text-ink-500 mb-6">
              99% accuracy · 24/7 operations · 100+ clients
            </p>

            <div className="flex flex-col gap-2.5">
              {contacts.map(c => (
                <div key={c.label} className="flex items-center gap-2.5">
                  <c.icon size={12} className="text-brand-500 flex-shrink-0" aria-hidden />
                  {c.href
                    ? <a href={c.href} className="footer-link text-xs text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors duration-150">{c.label}</a>
                    : <span className="text-xs text-ink-500 dark:text-ink-400">{c.label}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Services column — item 6: always shown */}
          <div>
            <p className="text-[0.7rem] font-[750] tracking-[0.12em] uppercase text-ink-400 dark:text-ink-600 mb-4">Services</p>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map(l => (
                <Link key={l.href} href={l.href} className="footer-link text-sm text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors duration-150">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company column — item 6: always shown */}
          <div>
            <p className="text-[0.7rem] font-[750] tracking-[0.12em] uppercase text-ink-400 dark:text-ink-600 mb-4">Company</p>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map(l => (
                <Link key={l.href} href={l.href} className="footer-link text-sm text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors duration-150">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-5">
          <p className="text-xs text-ink-400 dark:text-ink-600">© {new Date().getFullYear()} ET Data Solutions. All rights reserved.</p>
          <p className="text-xs text-ink-400 dark:text-ink-600">etdatasolutions.com</p>
        </div>
      </div>
    </footer>
  )
}
