'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Mail, Phone, ArrowRight } from 'lucide-react'

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
  }
}

export default function FloatingContact() {
  const [open, setOpen]       = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity:0, scale:0.8 }}
          animate={{ opacity:1, scale:1 }}
          exit={{    opacity:0, scale:0.8 }}
          transition={{ duration:0.22, ease:[0.22,1,0.36,1] }}
          className="fixed bottom-6 right-5 z-[150] hidden md:block"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity:0, y:10, scale:0.95 }}
                animate={{ opacity:1, y:0,  scale:1 }}
                exit={{    opacity:0, y:10, scale:0.95 }}
                transition={{ duration:0.2, ease:[0.22,1,0.36,1] }}
                className="absolute bottom-16 right-0 w-[255px] bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-700 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.15)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="bg-brand-500 px-4 py-3">
                  <p className="text-sm font-[700] text-white">Contact us</p>
                  <p className="text-xs text-white/70 mt-0.5">We reply within 24 hours</p>
                </div>
                <div className="p-3 flex flex-col gap-1.5">
                  {[
                    { icon:Mail,  title:'Email us',    sub:'bobby@etdatasolutions.com', href:'mailto:bobby@etdatasolutions.com' },
                    { icon:Phone, title:'Call (US)',    sub:'+1-302-357-9776',           href:'tel:+13023579776' },
                    { icon:Phone, title:'Call (India)', sub:'+91 62653 48189',           href:'tel:+916265348189' },
                  ].map(item => (
                    <a key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-500 flex-shrink-0">
                        <item.icon size={13} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-[650] text-ink-900 dark:text-ink-100">{item.title}</p>
                        <p className="text-[0.65rem] text-ink-400 truncate">{item.sub}</p>
                      </div>
                    </a>
                  ))}
                  <div className="pt-1 border-t border-ink-100 dark:border-ink-800 mt-0.5">
                    <button
                      onClick={() => { setOpen(false); scrollToContact() }}
                      className="flex items-center justify-center gap-2 w-full text-sm font-[700] text-white bg-brand-500 hover:bg-brand-600 py-2.5 rounded-xl transition-colors"
                    >
                      Send a message <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close' : 'Open contact'}
            className="w-12 h-12 rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-brand flex items-center justify-center transition-all hover:-translate-y-0.5"
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x" initial={{ rotate:-90,opacity:0 }} animate={{ rotate:0,opacity:1 }} exit={{ rotate:90,opacity:0 }} transition={{ duration:0.15 }}><X size={18}/></motion.div>
                : <motion.div key="m" initial={{ rotate:90,opacity:0 }} animate={{ rotate:0,opacity:1 }} exit={{ rotate:-90,opacity:0 }} transition={{ duration:0.15 }}><MessageCircle size={18}/></motion.div>
              }
            </AnimatePresence>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
