'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

let hasShown = false

export function PageLoader() {
  const [visible, setVisible] = useState(!hasShown)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (hasShown) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setDark(mq.matches)
    const dismiss = () => setTimeout(() => { setVisible(false); hasShown = true }, 500)
    if (document.readyState === 'complete') dismiss()
    else window.addEventListener('load', dismiss, { once: true })
    return () => window.removeEventListener('load', dismiss)
  }, [])

  const bg   = dark ? '#080807' : '#f5f4f1'
  const orb  = dark ? '#e8440a' : '#c73a08'
  const dim  = dark ? 'rgba(232,68,10,0.12)' : 'rgba(199,58,8,0.1)'
  const txt  = dark ? '#525252' : '#a3a3a3'
  const head = dark ? '#d4cfc8' : '#1a1714'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ position:'fixed', inset:0, zIndex:9999, background:bg, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'28px' }}>

          {/* Top shimmer bar */}
          <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', overflow:'hidden' }}>
            <div style={{ width:'45%', height:'100%', background:`linear-gradient(90deg,transparent,${orb},transparent)`, animation:'etds-bar 1.6s ease-in-out infinite' }} />
          </div>

          {/* Morphing orb */}
          <div style={{ position:'relative', width:'120px', height:'120px' }}>
            <div style={{ position:'absolute', inset:'-16px', borderRadius:'50%', border:`1px solid ${dim}`, animation:'etds-pulse 2.4s ease-in-out infinite' }} />
            <div style={{ position:'absolute', inset:'-4px', borderRadius:'50%', border:`1px solid ${dim}`, animation:'etds-pulse 2.4s ease-in-out 0.4s infinite' }} />
            <svg style={{ position:'absolute', inset:0, width:'120px', height:'120px', animation:'etds-spin 1.8s linear infinite' }} viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke={dim} strokeWidth="1.5"/>
              <circle cx="60" cy="60" r="52" fill="none" stroke={orb} strokeWidth="2" strokeLinecap="round" strokeDasharray="82 245" strokeDashoffset="0"/>
            </svg>
            <svg style={{ position:'absolute', inset:'16px', width:'88px', height:'88px', animation:'etds-spin-rev 2.4s linear infinite' }} viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="38" fill="none" stroke={dim} strokeWidth="1"/>
              <circle cx="44" cy="44" r="38" fill="none" stroke={orb} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" strokeDasharray="40 199" strokeDashoffset="0"/>
            </svg>
            <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'10px', height:'10px', borderRadius:'50%', background:orb, animation:'etds-dot 1.4s ease-in-out infinite' }} />
            <svg style={{ position:'absolute', inset:0, width:'120px', height:'120px', animation:'etds-spin 3s linear infinite' }} viewBox="0 0 120 120">
              <circle cx="60" cy="8" r="3.5" fill={orb} opacity="0.9"/>
            </svg>
          </div>

          {/* Logo */}
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.5 }}
            style={{ display:'flex', alignItems:'center', gap:'12px' }}>
            <Image src="/logo-transparent.png" alt="ET Data Solutions" width={36} height={36} priority style={{ opacity: dark ? 0.85 : 0.75 }} />
            <div>
              <p style={{ margin:0, fontSize:'13px', fontWeight:600, letterSpacing:'0.04em', color:head }}>ET Data Solutions</p>
              <p style={{ margin:0, fontSize:'10px', letterSpacing:'0.08em', color:txt }}>Outsourcing · Est. 2014</p>
            </div>
          </motion.div>

          {/* Animated dots text */}
          <div style={{ display:'flex', alignItems:'center', gap:'3px', fontSize:'11px', letterSpacing:'0.1em', color:txt }}>
            <span>Preparing your experience</span>
            {[0,1,2].map(i => <span key={i} style={{ animation:`etds-dot-fade 1.4s ${i*0.22}s ease-in-out infinite` }}>.</span>)}
          </div>

          <style>{`
            @keyframes etds-bar      { 0%{transform:translateX(-120%)} 100%{transform:translateX(280%)} }
            @keyframes etds-spin     { to{transform:rotate(360deg)} }
            @keyframes etds-spin-rev { to{transform:rotate(-360deg)} }
            @keyframes etds-pulse    { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.08;transform:scale(1.08)} }
            @keyframes etds-dot      { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:1} 50%{transform:translate(-50%,-50%) scale(1.6);opacity:.4} }
            @keyframes etds-dot-fade { 0%,80%,100%{opacity:.15} 40%{opacity:1} }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
