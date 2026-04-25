'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

let hasShown = false

const Dot = ({ delay }: { delay: number }) => (
  <motion.span
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration: 1.2, delay, repeat: Infinity, ease: 'easeInOut' }}
    className="inline-block"
  >.</motion.span>
)

function DataNetworkSVG({ dark }: { dark: boolean }) {
  const brand     = dark ? '#e8440a' : '#c73a08'
  const lineColor = dark ? 'rgba(232,68,10,0.3)' : 'rgba(199,58,8,0.25)'
  const bgCircle  = dark ? 'rgba(232,68,10,0.08)' : 'rgba(199,58,8,0.06)'

  // Node positions
  const nodes = [
    { cx: 100, cy: 50  },  // top
    { cx: 155, cy: 78  },  // top-right
    { cx: 155, cy: 122 },  // bottom-right
    { cx: 100, cy: 150 },  // bottom
    { cx: 45,  cy: 122 },  // bottom-left
    { cx: 45,  cy: 78  },  // top-left
  ]

  // Lines between nodes
  const lines = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,0], // hexagon ring
    [0,3],[1,4],[2,5],                    // cross-connections
  ]

  return (
    <svg viewBox="0 0 200 200" width="180" height="180" aria-hidden>
      {/* Pulsing bg circles */}
      {[0,1,2].map(i => (
        <motion.circle
          key={i} cx="100" cy="100"
          r={30 + i * 22}
          fill="none" stroke={bgCircle} strokeWidth="1"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, delay: i * 0.55, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: '100px 100px' }}
        />
      ))}

      {/* Animated connecting dashed lines */}
      {lines.map(([a, b], idx) => (
        <motion.line
          key={idx}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={lineColor} strokeWidth="1"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.1 + idx * 0.08, ease: 'easeInOut' }}
        />
      ))}

      {/* Slowly rotating hexagon outline */}
      <motion.polygon
        points="100,72 123,86 123,114 100,128 77,114 77,86"
        fill="none" stroke={lineColor} strokeWidth="1.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '100px 100px' }}
      />

      {/* Node dots */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i} cx={n.cx} cy={n.cy} r="5"
          fill={brand}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: [0.22,1,0.36,1] }}
        />
      ))}

      {/* Traveling data packets on lines */}
      {[[0,1],[2,3],[4,5]].map(([a,b], i) => (
        <motion.rect
          key={i}
          width="5" height="5" rx="1"
          fill={brand} opacity="0.8"
          initial={{ x: nodes[a].cx - 2.5, y: nodes[a].cy - 2.5 }}
          animate={{
            x: [nodes[a].cx - 2.5, nodes[b].cx - 2.5, nodes[a].cx - 2.5],
            y: [nodes[a].cy - 2.5, nodes[b].cy - 2.5, nodes[a].cy - 2.5],
          }}
          transition={{ duration: 2.5 + i * 0.4, delay: i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Central brand dot */}
      <motion.circle
        cx="100" cy="100" r="6" fill={brand}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export default function PageLoader() {
  const [visible, setVisible] = useState(!hasShown)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    if (hasShown) { setVisible(false); return }

    const dismiss = () => {
      hasShown = true
      setTimeout(() => setVisible(false), 600)
    }

    if (document.readyState === 'complete') {
      setTimeout(dismiss, 600)
    } else {
      const handler = () => {
        if (document.readyState === 'complete') {
          document.removeEventListener('readystatechange', handler)
          dismiss()
        }
      }
      document.addEventListener('readystatechange', handler)
      const safety = setTimeout(() => {
        document.removeEventListener('readystatechange', handler)
        dismiss()
      }, 3000)
      return () => {
        document.removeEventListener('readystatechange', handler)
        clearTimeout(safety)
      }
    }
  }, [])

  const bg   = dark ? '#0a0908' : '#f8f7f5'
  const text = dark ? '#6b7280' : '#9ca3af'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5"
          style={{ background: bg }}
          aria-hidden="true"
        >
          {/* Top loading bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-brand-500 to-transparent animate-loading-bar" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image src="/logo-transparent.png" alt="ET Data Solutions" width={52} height={52} className="object-contain" priority />
          </motion.div>

          {/* SVG animation */}
          <DataNetworkSVG dark={dark} />

          {/* Text */}
          <div className="flex flex-col items-center gap-1" style={{ color: text }}>
            <span className="text-sm font-[600] tracking-[0.08em]" style={{ opacity: 0.7 }}>ET Data Solutions</span>
            <span className="text-xs tracking-wide" style={{ opacity: 0.5 }}>
              Preparing your experience<Dot delay={0} /><Dot delay={0.2} /><Dot delay={0.4} />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
