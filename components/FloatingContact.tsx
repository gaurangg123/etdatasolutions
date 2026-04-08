'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, X, Mail, Phone, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Don't show on contact page
  if (pathname.startsWith('/contact')) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-5 z-[150] hidden md:block"
        >
          {/* Expanded panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-16 right-0 w-[260px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.15)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="bg-brand-500 px-4 py-3">
                  <p className="text-sm font-[700] text-white">Contact us</p>
                  <p className="text-xs text-white/70 mt-0.5">We reply within 24 hours</p>
                </div>
                <div className="p-3 flex flex-col gap-1.5">
                  <a
                    href="mailto:bobby@etdatasolutions.com"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-500 flex-shrink-0">
                      <Mail size={14} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-[600] text-neutral-900 dark:text-neutral-100">Email us</p>
                      <p className="text-[0.67rem] text-neutral-400 truncate">bobby@etdatasolutions.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+13023579776"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-500 flex-shrink-0">
                      <Phone size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-[600] text-neutral-900 dark:text-neutral-100">Call us (US)</p>
                      <p className="text-[0.67rem] text-neutral-400">+1-302-357-9776</p>
                    </div>
                  </a>
                  <a
                    href="tel:+916265348189"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-500 flex-shrink-0">
                      <Phone size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-[600] text-neutral-900 dark:text-neutral-100">Call us (IN)</p>
                      <p className="text-[0.67rem] text-neutral-400">+91 62653 48189</p>
                    </div>
                  </a>
                  <div className="pt-1 border-t border-neutral-100 dark:border-neutral-800 mt-0.5">
                    <Link
                      href="/contact#form"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 w-full text-sm font-[600] text-white bg-brand-500 hover:bg-brand-600 py-2.5 rounded-xl transition-colors"
                    >
                      Send a message <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trigger button */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close contact panel' : 'Open contact panel'}
            className="w-12 h-12 rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-[0_8px_24px_rgba(232,68,10,0.4)] hover:shadow-[0_12px_32px_rgba(232,68,10,0.5)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={18} /></motion.div>
                : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageCircle size={18} /></motion.div>
              }
            </AnimatePresence>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
