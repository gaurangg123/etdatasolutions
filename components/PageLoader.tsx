'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

let hasShown = false

export default function PageLoader() {
  const [visible, setVisible] = useState(!hasShown)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (hasShown) { setVisible(false); return }
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    const dismiss = () => setTimeout(() => { setVisible(false); hasShown = true }, 600)
    if (document.readyState === 'complete') { dismiss() }
    else { window.addEventListener('load', dismiss, { once: true }) }
    return () => window.removeEventListener('load', dismiss)
  }, [])

  const bg   = dark ? '#0a0908' : '#f8f7f5'
  const node = dark ? '#e8440a' : '#c73a08'
  const line = dark ? 'rgba(232,68,10,0.25)' : 'rgba(199,58,8,0.2)'
  const ring = dark ? 'rgba(232,68,10,0.07)' : 'rgba(199,58,8,0.06)'
  const text = dark ? '#6b7280' : '#9ca3af'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5"
          style={{ background: bg }}
          aria-hidden
        >
          {/* Top loading bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
            <div style={{ background: `linear-gradient(to right, transparent, ${node}, transparent)` }}
              className="animate-loading-bar" />
          </div>

          {/* SVG animation */}
          <svg width="160" height="160" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="none" stroke={ring} strokeWidth="1">
              <animate attributeName="r" values="60;80;60" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="100" r="55" fill="none" stroke={ring} strokeWidth="1">
              <animate attributeName="r" values="40;58;40" dur="3s" begin="0.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0.08;0.5" dur="3s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            {([[100,30],[161,135],[39,135],[165,60],[35,60]] as [number,number][]).map(([x2,y2],i) => (
              <line key={i} x1="100" y1="100" x2={x2} y2={y2} stroke={line} strokeWidth="1.5" strokeDasharray="70" strokeDashoffset="70">
                <animate attributeName="strokeDashoffset" values="70;0;70" dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite"/>
              </line>
            ))}
            {([[100,30],[161,135],[39,135],[165,60],[35,60]] as [number,number][]).map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fill={node}>
                <animate attributeName="r" values="4;6;4" dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite"/>
              </circle>
            ))}
            <polygon points="100,78 118,89 118,111 100,122 82,111 82,89" fill="none" stroke={node} strokeWidth="2">
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite"/>
            </polygon>
            <circle cx="100" cy="100" r="5" fill={node}>
              <animate attributeName="r" values="4;7;4" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle r="3" fill={node} opacity="0.8">
              <animateMotion dur="2s" repeatCount="indefinite" path="M100,100 L100,30"/>
            </circle>
            <circle r="3" fill={node} opacity="0.8">
              <animateMotion dur="2s" begin="0.7s" repeatCount="indefinite" path="M100,100 L161,135"/>
            </circle>
            <circle r="3" fill={node} opacity="0.8">
              <animateMotion dur="2s" begin="1.4s" repeatCount="indefinite" path="M100,100 L39,135"/>
            </circle>
          </svg>

          {/* Logo */}
          <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.6, delay:0.1 }}
            className="flex items-center gap-3">
            <Image src="/logo-transparent.png" alt="ET Data Solutions" width={40} height={40} priority
              style={{ opacity: dark ? 0.9 : 0.8 }} />
            <div>
              <p style={{ color: dark ? '#e5e1db' : '#1a1714', fontSize:'0.875rem', fontWeight:600, letterSpacing:'0.04em' }}>
                ET Data Solutions
              </p>
              <p style={{ color: text, fontSize:'0.7rem', letterSpacing:'0.06em' }}>
                Outsourcing · Est. 2014
              </p>
            </div>
          </motion.div>

          {/* Text with animated dots */}
          <div style={{ color: text, fontSize:'0.75rem', letterSpacing:'0.08em', display:'flex', alignItems:'center', gap:'2px' }}>
            <span>Preparing your experience</span>
            {[0,1,2].map(i => (
              <span key={i} style={{ animation:`dotpulse 1.4s ${i*0.2}s ease-in-out infinite` }}>.</span>
            ))}
          </div>
          <style>{`@keyframes dotpulse{0%,80%,100%{opacity:0.2}40%{opacity:1}}`}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
