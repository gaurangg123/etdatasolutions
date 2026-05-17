'use client';

import { motion } from 'framer-motion';

/* Shared <defs> gradient + helpers */
const gradId = (key: string) => `g-${key}`;

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={gradId(id)} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF7A00" />
        <stop offset="100%" stopColor="#FFA94D" />
      </linearGradient>
      <linearGradient id={`${gradId(id)}-soft`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFF4EA" />
        <stop offset="100%" stopColor="#FFE3C6" />
      </linearGradient>
    </defs>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ───────────────────────────────── RECRUITMENT ───────────────────────────────── */
export function RecruitmentArt() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto">
      <Defs id="rec" />
      {/* world ring */}
      <motion.circle
        cx="160" cy="120" r="92" fill="none" stroke="url(#g-rec)" strokeWidth="1.5" strokeDasharray="3 6"
        animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '160px 120px' }}
      />
      <circle cx="160" cy="120" r="70" fill="url(#g-rec-soft)" stroke="#FFC788" strokeWidth="1.5" />
      <ellipse cx="160" cy="120" rx="70" ry="22" fill="none" stroke="#FFB97A" strokeWidth="1" opacity="0.6" />
      <ellipse cx="160" cy="120" rx="40" ry="70" fill="none" stroke="#FFB97A" strokeWidth="1" opacity="0.6" />

      {/* candidate avatars around the globe */}
      {[
        { x: 90,  y: 70,  s: 1 },
        { x: 220, y: 60,  s: 1 },
        { x: 250, y: 175, s: 1 },
        { x: 90,  y: 185, s: 1 },
      ].map((p, i) => (
        <motion.g
          key={i}
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
        >
          <circle cx={p.x} cy={p.y} r="20" fill="#fff" stroke="url(#g-rec)" strokeWidth="2.5" />
          {/* avatar head */}
          <circle cx={p.x} cy={p.y - 4} r="6" fill="#FF7A00" />
          {/* shoulders */}
          <path d={`M ${p.x - 10} ${p.y + 12} a 10 10 0 0 1 20 0`} fill="#FF7A00" />
        </motion.g>
      ))}

      {/* center "hire" badge */}
      <motion.g {...fadeIn} transition={{ duration: 0.5, delay: 0.6 }} style={{ transformOrigin: '160px 120px' }}>
        <circle cx="160" cy="120" r="26" fill="url(#g-rec)" />
        <path d="M 152 120 l 6 6 12 -14" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
}

/* ───────────────────────────────── VIRTUAL ASSISTANT ───────────────────────────────── */
export function VirtualAssistantArt() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto">
      <Defs id="va" />

      {/* desk surface */}
      <rect x="40" y="180" width="240" height="6" rx="3" fill="url(#g-va)" opacity="0.4" />

      {/* monitor */}
      <motion.g {...fadeIn} transition={{ duration: 0.5 }}>
        <rect x="90" y="65" width="140" height="95" rx="8" fill="#fff" stroke="url(#g-va)" strokeWidth="2.5" />
        <rect x="155" y="160" width="10" height="14" fill="#FFC788" />
        <rect x="135" y="174" width="50" height="5" rx="2" fill="#FF7A00" />
        {/* email rows */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="100" y={80 + i * 22} width="120" height="14" rx="3" fill="url(#g-va-soft)" />
            <circle cx="108" cy={87 + i * 22} r="3" fill="#FF7A00" />
            <rect x="116" y={84 + i * 22} width="80" height="3" rx="1" fill="#FFA94D" />
            <rect x="116" y={89 + i * 22} width="50" height="2" rx="1" fill="#FFC788" />
          </g>
        ))}
      </motion.g>

      {/* headset assistant on the right */}
      <motion.g {...fadeIn} transition={{ duration: 0.5, delay: 0.25 }}>
        <circle cx="250" cy="100" r="22" fill="#fff" stroke="url(#g-va)" strokeWidth="2.5" />
        <circle cx="250" cy="96" r="9" fill="#FF7A00" />
        <path d="M 240 116 a 10 10 0 0 1 20 0" fill="#FF7A00" />
        {/* headset arc */}
        <path d="M 234 96 a 16 16 0 0 1 32 0" stroke="url(#g-va)" strokeWidth="2.5" fill="none" />
        <circle cx="234" cy="96" r="3" fill="url(#g-va)" />
        <circle cx="266" cy="96" r="3" fill="url(#g-va)" />
      </motion.g>

      {/* floating mini-cards */}
      {[
        { x: 50,  y: 70,  label: '📅', t: 'Cal' },
        { x: 55,  y: 130, label: '✉',  t: 'Inbox' },
      ].map((c, i) => (
        <motion.g key={i} {...fadeIn} transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}>
          <rect x={c.x} y={c.y} width="40" height="32" rx="6" fill="url(#g-va)" />
          <text x={c.x + 20} y={c.y + 21} textAnchor="middle" fontSize="14" fill="#fff" fontWeight="700">{c.t}</text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ───────────────────────────────── DATA ENTRY ───────────────────────────────── */
export function DataEntryArt() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto">
      <Defs id="de" />

      {/* spreadsheet card */}
      <motion.g {...fadeIn} transition={{ duration: 0.5 }}>
        <rect x="50" y="40" width="220" height="160" rx="10" fill="#fff" stroke="url(#g-de)" strokeWidth="2.5" />
        {/* header row */}
        <rect x="50" y="40" width="220" height="26" rx="10" fill="url(#g-de)" />
        <rect x="50" y="54" width="220" height="12" fill="url(#g-de)" />
        {['A', 'B', 'C', 'D', 'E'].map((c, i) => (
          <text key={c} x={75 + i * 44} y="59" fontSize="11" fill="#fff" fontWeight="700" textAnchor="middle">{c}</text>
        ))}
        {/* cells */}
        {[0, 1, 2, 3].map((r) => (
          <g key={r}>
            <line x1="50" y1={66 + r * 32} x2="270" y2={66 + r * 32} stroke="#FFE3C6" />
            {[0, 1, 2, 3, 4].map((c) => (
              <line key={c} x1={75 + c * 44 - 22} y1="40" x2={75 + c * 44 - 22} y2="200" stroke="#FFF4EA" />
            ))}
          </g>
        ))}
        {/* sample data dots */}
        {[
          { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 },
          { r: 1, c: 0 }, { r: 1, c: 3 },
          { r: 2, c: 1 }, { r: 2, c: 2 }, { r: 2, c: 4 },
          { r: 3, c: 0 }, { r: 3, c: 2 },
        ].map((cell, i) => (
          <motion.rect
            key={i}
            x={55 + cell.c * 44} y={72 + cell.r * 32}
            width="34" height="14" rx="3"
            fill={i % 3 === 0 ? '#FF7A00' : 'url(#g-de-soft)'}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
          />
        ))}
      </motion.g>

      {/* check badge */}
      <motion.g {...fadeIn} transition={{ duration: 0.5, delay: 0.6 }}>
        <circle cx="262" cy="42" r="18" fill="#fff" stroke="url(#g-de)" strokeWidth="2.5" />
        <path d="M 254 42 l 6 6 12 -14" stroke="#FF7A00" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
}

/* ───────────────────────────────── DATA ENGINEERING ───────────────────────────────── */
export function DataEngineeringArt() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto">
      <Defs id="dx" />

      {/* dashboard frame */}
      <motion.g {...fadeIn} transition={{ duration: 0.5 }}>
        <rect x="40" y="35" width="240" height="170" rx="12" fill="#fff" stroke="url(#g-dx)" strokeWidth="2.5" />
        {/* top bar */}
        <rect x="40" y="35" width="240" height="22" rx="12" fill="url(#g-dx-soft)" />
        <circle cx="54"  cy="46" r="3" fill="#FF7A00" />
        <circle cx="64"  cy="46" r="3" fill="#FFA94D" />
        <circle cx="74"  cy="46" r="3" fill="#FFC788" />

        {/* KPI cards */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={52 + i * 76} y="68" width="64" height="34" rx="5" fill="url(#g-dx-soft)" />
            <rect x={58 + i * 76} y="76" width="32" height="6" rx="2" fill="#FF7A00" />
            <rect x={58 + i * 76} y="88" width="48" height="3" rx="1" fill="#FFC788" />
          </g>
        ))}

        {/* line chart */}
        <rect x="52" y="115" width="216" height="80" rx="6" fill="url(#g-dx-soft)" opacity="0.4" />
        <motion.path
          d="M 60 180 L 90 160 L 120 170 L 150 140 L 180 150 L 210 120 L 240 130 L 260 110"
          stroke="url(#g-dx)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: 'easeInOut' }}
        />
        {/* chart dots */}
        {[[60,180],[90,160],[120,170],[150,140],[180,150],[210,120],[240,130],[260,110]].map(([x, y], i) => (
          <motion.circle
            key={i} cx={x} cy={y} r="3.5" fill="#FF7A00"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.08, type: 'spring' }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}
      </motion.g>

      {/* pipeline pill below */}
      <motion.g {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }}>
        <rect x="80" y="212" width="160" height="20" rx="10" fill="url(#g-dx)" />
        <text x="160" y="226" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700" letterSpacing="2">
          ETL · WAREHOUSE · BI
        </text>
      </motion.g>
    </svg>
  );
}
