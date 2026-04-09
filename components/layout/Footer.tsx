import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Globe, MapPin, ArrowRight } from 'lucide-react'

const serviceLinks = [
  { label:'Staffing & VA Recruitment', href:'/services#staffing' },
  { label:'Data Entry & Excel',        href:'/services#data'     },
  { label:'Manual QA Testing',         href:'/services#qa'       },
  { label:'Data Engineering & BI',     href:'/services#dataeng'  },
  { label:'View Pricing',              href:'/#pricing'          },
]
const companyLinks = [
  { label:'About Us',   href:'/about'        },
  { label:'Services',   href:'/services'     },
  { label:'Contact',    href:'/contact'      },
  { label:'Free Audit', href:'/#audit'       },
  { label:'Get a Quote',href:'/contact#form' },
]
const contacts = [
  { icon:Mail,   label:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
  { icon:Phone,  label:'+1-302-357-9776 (US)',      href:'tel:+13023579776'                },
  { icon:Phone,  label:'+91 62653 48189 (IN)',      href:'tel:+916265348189'               },
  { icon:Globe,  label:'etdatasolutions.com',       href:'https://etdatasolutions.com'     },
  { icon:MapPin, label:'India — Serving Globally',  href:null                              },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-[#0a0908] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-container mx-auto px-5 sm:px-6">
        {/* Mini CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-5 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <p className="text-sm font-[700] text-neutral-900 dark:text-neutral-100 mb-0.5">Ready to remove your biggest operational bottleneck?</p>
            <p className="text-xs text-neutral-400">Free consultation · No contract · 30-day guarantee</p>
          </div>
          <Link href="/contact#form"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-px hover:shadow-brand">
            Book a free call <ArrowRight size={14}/>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 py-12 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative h-9 w-9 flex-shrink-0">
                <Image src="/logo-transparent.png" alt="ET Data Solutions" fill className="object-contain opacity-90"/>
              </div>
              <span className="text-[0.95rem] font-[700] tracking-[-0.02em] text-neutral-800 dark:text-neutral-200">ET Data Solutions</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[270px] mb-2">
              India-based outsourcing for staffing, data, QA, and data engineering. Globally delivered since 2014.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-6">99% accuracy · 24/7 operations · 100+ clients worldwide</p>
            <div className="flex flex-col gap-2.5">
              {contacts.map(c => (
                <div key={c.label} className="flex items-center gap-2.5">
                  <c.icon size={13} className="text-brand-500 flex-shrink-0" aria-hidden/>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-500 transition-colors">{c.label}</a>
                  ) : (
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{c.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-[700] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-4">Services</p>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map(l => (
                <Link key={l.href} href={l.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-500 transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-[700] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-4">Company</p>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map(l => (
                <Link key={l.href} href={l.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-500 transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-5">
          <p className="text-xs text-neutral-400 dark:text-neutral-600">© {new Date().getFullYear()} ET Data Solutions. All rights reserved.</p>
          <p className="text-xs text-neutral-400 dark:text-neutral-600">etdatasolutions.com</p>
        </div>
      </div>
    </footer>
  )
}
