'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function parse(v: string) {
  const m = v.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/)
  return m ? { num: parseFloat(m[2]), pre: m[1], suf: m[3] } : null
}

export default function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(value) // start with final value (SSR-safe)
  const started = useRef(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // On first render, show 0 to set up the animation
    if (!hasAnimated.current) {
      const parsed = parse(value)
      if (parsed && value !== '24/7') {
        setDisplay(`${parsed.pre}0${parsed.suf}`)
      } else if (value !== '24/7') {
        setDisplay('0')
      }
      hasAnimated.current = true
    }
  }, [value])

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    if (value === '24/7') { setDisplay('24/7'); return }

    const parsed = parse(value)
    if (!parsed) { setDisplay(value); return }
    const { num, pre, suf } = parsed
    const start = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setDisplay(`${pre}${Math.round(e * num)}${suf}`)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return <span ref={ref}>{display}</span>
}
