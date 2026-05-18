'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import Parallax from '@/components/ui/Parallax';
import WordReveal from '@/components/ui/WordReveal';

/**
 * Two narrative scenes — each is its own fullscreen snap section.
 * Used on the home page. The wrapper page DOES NOT add an outer snap-section
 * around this component; instead the two scenes below own their own.
 */
export default function MissionStatement() {
  return (
    <>
      {/* BLOCK 1 — Who we are */}
      <section className="snap-section relative isolate overflow-hidden bg-white">
        <BackgroundField />
        <div className="container-x py-16 sm:py-20 relative">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <Reveal>
                <span className="pill mb-5">Who we are</span>
              </Reveal>
              <WordReveal
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]"
                text="ET Data Solutions is the most cost-effective and efficient outsourcing alternative for any business in need of help managing their data workflow."
              />
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-2xl">
                  We have the capabilities and resources to handle any type or size of data capture project or assignment — short or long term. ET Data Solutions facilitates the preparation, capture, warehouse, retrieval, and utilisation of information for your organisation.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['Preparation', 'Capture', 'Warehouse', 'Retrieval', 'Utilisation'].map((t) => (
                    <span key={t} className="rounded-full border border-ink-200 bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold text-ink-700">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <Parallax range={[40, -40]} className="hidden lg:block">
              <DataFlowGraphic />
            </Parallax>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — Global reach */}
      <section className="snap-section relative isolate overflow-hidden bg-white">
        <BackgroundField />
        <div className="container-x py-16 sm:py-20 relative">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <Parallax range={[-30, 30]} className="hidden lg:block order-2 lg:order-1">
              <GlobalReachGraphic />
            </Parallax>
            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="pill mb-5">What we do globally</span>
              </Reveal>
              <WordReveal
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]"
                text="Recruitment, Data, Virtual Assistants, and Data Engineering — across the US, Europe, and Australia."
              />
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-2xl">
                  ET Data Solutions works with major fields such as Recruitment Services across the US, Europe, and Australia. We provide Data Entry and Macro Services, specialise in Virtual Assistant Services, and have recently expanded into Data Engineering and Lakehouse use-cases — including visualisation dashboards delivered on a freelance basis.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Recruitment Services',
                    'Data Entry & Macros',
                    'Virtual Assistants',
                    'Data Engineering',
                    'Lakehouse Builds',
                    'Visualisation Dashboards',
                  ].map((s) => (
                    <div key={s} className="rounded-xl border border-ink-100 bg-white px-3 py-2.5 text-sm font-medium text-ink-800 hover:border-brand-300 hover:text-brand-600 transition">
                      {s}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BackgroundField() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,#FFF4EA,transparent_45%),radial-gradient(circle_at_90%_70%,#FFE3C6,transparent_55%)]" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F26A1E" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

function DataFlowGraphic() {
  const nodes = [
    { x: 50, y: 50, r: 18 },
    { x: 180, y: 80, r: 12 },
    { x: 250, y: 180, r: 22 },
    { x: 120, y: 220, r: 14 },
    { x: 60, y: 160, r: 10 },
    { x: 220, y: 50, r: 9 },
  ];
  const lines = [[0,1],[1,2],[0,4],[4,3],[3,2],[1,5],[5,2]];
  return (
    <svg viewBox="0 0 320 280" className="w-full h-auto">
      <defs>
        <linearGradient id="gf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F26A1E" />
          <stop offset="100%" stopColor="#FFB069" />
        </linearGradient>
      </defs>
      {lines.map(([a, b], i) => (
        <motion.line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="url(#gf)" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 + i * 0.1, ease: 'easeInOut' }} />
      ))}
      {nodes.map((n, i) => (
        <motion.circle key={i} cx={n.x} cy={n.y} r={n.r} fill="url(#gf)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 220 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }} />
      ))}
      <motion.circle cx={250} cy={180} r={22} fill="none" stroke="#F26A1E" strokeWidth="2"
        animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        style={{ transformOrigin: '250px 180px' }} />
    </svg>
  );
}

function GlobalReachGraphic() {
  return (
    <svg viewBox="0 0 320 280" className="w-full h-auto">
      <defs>
        <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F26A1E" />
          <stop offset="100%" stopColor="#FFB069" />
        </linearGradient>
      </defs>
      <motion.circle cx="160" cy="140" r="110" fill="none" stroke="url(#gg)" strokeWidth="1.5" strokeDasharray="3 6"
        initial={{ rotate: 0 }} animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '160px 140px' }} />
      <circle cx="160" cy="140" r="72" fill="url(#gg)" opacity="0.15" />
      <circle cx="160" cy="140" r="72" fill="none" stroke="url(#gg)" strokeWidth="2" />
      <ellipse cx="160" cy="140" rx="72" ry="22" fill="none" stroke="#F26A1E" strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="160" cy="140" rx="60" ry="60" fill="none" stroke="#F26A1E" strokeWidth="1.2" opacity="0.3" />
      <line x1="88" y1="140" x2="232" y2="140" stroke="#F26A1E" strokeWidth="1.2" opacity="0.5" />
      <line x1="160" y1="68" x2="160" y2="212" stroke="#F26A1E" strokeWidth="1.2" opacity="0.5" />
      {[
        { x: 110, y: 110, label: 'US' },
        { x: 175, y: 105, label: 'EU' },
        { x: 215, y: 170, label: 'AU' },
      ].map((p, i) => (
        <motion.g key={p.label}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.15, type: 'spring', stiffness: 220 }}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}>
          <circle cx={p.x} cy={p.y} r="10" fill="#F26A1E" />
          <circle cx={p.x} cy={p.y} r="4" fill="#fff" />
          <text x={p.x} y={p.y - 16} textAnchor="middle" fontSize="10" fontWeight="700" fill="#0F131C">
            {p.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
