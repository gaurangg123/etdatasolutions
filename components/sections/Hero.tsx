'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, UserCircle2, MessageSquare, Briefcase } from 'lucide-react';
import FloatingShapes from '@/components/ui/FloatingShapes';

export default function Hero() {
  return (
    <section className="snap-section relative isolate overflow-hidden bg-brand-soft">
      <FloatingShapes />

      <div className="container-x relative pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pill"
            >
              <Sparkles className="w-3.5 h-3.5" /> Trusted by 120+ growing teams
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              The operational <span className="grad-text">backbone</span> for growing businesses.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-lg text-ink-600 max-w-xl leading-relaxed"
            >
              Staffing, virtual assistants, data entry, and custom workflows — delivered with the care of an in-house team, at a fraction of the cost.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link href="/contact" className="btn-primary">
                Get started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Learn more
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center gap-6 text-xs text-ink-400"
            >
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> 48-hour shortlist</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> 99% accuracy SLA</span>
              <span className="hidden sm:flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Cancel anytime</span>
            </motion.div>
          </div>

          {/* RIGHT — animated recruitment flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <RecruitmentFlow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Animated recruitment flow:
   Candidate cards travel through three stages
   (Shortlist → Interview → Hire). Each stage holds a queue
   of candidates that cycles with subtle motion.
   ──────────────────────────────────────────────────────────── */

const candidates = [
  { name: 'Priya A.',  role: 'Senior VA',         tag: 'EU' },
  { name: 'Marcus L.', role: 'Account Manager',   tag: 'US' },
  { name: 'Hana K.',   role: 'QA Engineer',       tag: 'AU' },
  { name: 'Ben R.',    role: 'Data Analyst',      tag: 'US' },
  { name: 'Sofia C.',  role: 'Recruiter',         tag: 'EU' },
];

function RecruitmentFlow() {
  return (
    <div className="relative aspect-[5/4] w-full max-w-xl mx-auto">
      {/* glow */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-gradient opacity-20 blur-3xl" />

      <div className="relative w-full h-full rounded-3xl bg-white border border-ink-100 shadow-soft p-5 sm:p-6 overflow-hidden">
        {/* top bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-ink-400">Hiring pipeline · live</span>
        </div>

        {/* 3 stages */}
        <div className="grid grid-cols-3 gap-3 h-[calc(100%-3rem)]">
          <Stage
            icon={UserCircle2}
            title="Shortlist"
            subtitle="48h"
            color="from-brand-50 to-brand-100/60"
            countLabel="12 candidates"
            stageIndex={0}
          />
          <Stage
            icon={MessageSquare}
            title="Interview"
            subtitle="Week 1"
            color="from-coral-50 to-coral-100/60"
            countLabel="4 in progress"
            stageIndex={1}
          />
          <Stage
            icon={Briefcase}
            title="Hired"
            subtitle="Embedded"
            color="from-emerald-50 to-emerald-100/60"
            countLabel="2 placed"
            stageIndex={2}
          />
        </div>

        {/* status pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1.5 text-xs font-semibold border border-emerald-100 shadow-sm"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          5 active engagements · 0 P1 issues
        </motion.div>
      </div>

      {/* floating side cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="hidden sm:block absolute -left-6 top-1/3 rounded-xl bg-white shadow-soft border border-ink-100 px-3 py-2 text-xs"
      >
        <div className="text-[10px] uppercase tracking-wider text-ink-400">SLA met</div>
        <div className="text-ink-900 font-semibold">First shortlist in 36h</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="hidden sm:block absolute -right-6 bottom-16 rounded-xl bg-white shadow-soft border border-ink-100 px-3 py-2 text-xs"
      >
        <div className="text-[10px] uppercase tracking-wider text-ink-400">Just placed</div>
        <div className="text-ink-900 font-semibold">Sofia C. → Account Mgr</div>
      </motion.div>
    </div>
  );
}

function Stage({
  icon: Icon,
  title,
  subtitle,
  color,
  countLabel,
  stageIndex,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  color: string;
  countLabel: string;
  stageIndex: number;
}) {
  // Pick 2-3 candidates per stage; they cycle subtly
  const stageCandidates = candidates.slice(stageIndex, stageIndex + 3);

  return (
    <div className={`rounded-xl bg-gradient-to-b ${color} p-3 border border-white/60 flex flex-col`}>
      <div className="flex items-center gap-1.5 mb-2">
        <Icon className="w-3.5 h-3.5 text-ink-600" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-ink-700">{title}</span>
      </div>
      <div className="text-[9px] text-ink-500 mb-3">{subtitle}</div>

      <div className="flex-1 space-y-2 relative">
        {stageCandidates.map((c, i) => (
          <motion.div
            key={`${stageIndex}-${c.name}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + stageIndex * 0.2 + i * 0.12 }}
            className="rounded-lg bg-white/90 border border-white px-2 py-1.5 shadow-sm"
          >
            <div className="flex items-center gap-1.5">
              <span
                aria-hidden
                className="grid place-items-center w-5 h-5 rounded-full text-white text-[9px] font-bold shrink-0"
                style={{ background: 'linear-gradient(135deg,#F26A1E,#E6296A)' }}
              >
                {c.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-semibold text-ink-900 truncate leading-tight">{c.name}</div>
                <div className="text-[8px] text-ink-500 truncate leading-tight">{c.role}</div>
              </div>
            </div>
            {stageIndex === 2 && (
              <div className="mt-1 flex items-center gap-1 text-[8px] text-emerald-700 font-semibold">
                <Check className="w-2.5 h-2.5" /> Placed
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-2 text-[9px] text-ink-500 font-medium border-t border-white/60 pt-2">
        {countLabel}
      </div>
    </div>
  );
}
