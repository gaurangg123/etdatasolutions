'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import FloatingShapes from '@/components/ui/FloatingShapes';

export default function Hero() {
  return (
    <section className="snap-section relative isolate overflow-hidden bg-brand-soft">
      <FloatingShapes />

      <div className="container-x relative pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <DashboardIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardIllustration() {
  return (
    <div className="relative aspect-[5/4] w-full max-w-xl mx-auto">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-gradient opacity-20 blur-3xl" />

      <div className="relative w-full h-full rounded-3xl bg-white border border-ink-100 shadow-soft p-5 sm:p-7 overflow-hidden">
        <div className="flex items-center gap-1.5 mb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-[10px] uppercase tracking-widest text-ink-400">Live dashboard</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { v: '99.4%', l: 'Accuracy' },
            { v: '4,820', l: 'Records' },
            { v: '$2.3M',  l: 'Surfaced' },
          ].map((k, i) => (
            <motion.div
              key={k.l}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="rounded-xl bg-brand-50/60 border border-brand-100 p-3"
            >
              <div className="text-lg font-bold text-ink-900">{k.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-ink-400 mt-0.5">{k.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative h-32 sm:h-36 rounded-xl border border-ink-100 bg-gradient-to-b from-brand-50/40 to-white p-3 overflow-hidden">
          <div className="flex items-end justify-between h-full gap-1.5">
            {Array.from({ length: 18 }).map((_, i) => {
              const h = 30 + Math.abs(Math.sin(i * 0.7)) * 70;
              return (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.9, delay: 0.6 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 rounded-t-md bg-brand-gradient"
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1.5 text-xs font-semibold border border-emerald-100"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          On track — 24 active workflows
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="hidden sm:block absolute -left-6 top-1/3 rounded-xl bg-white shadow-soft border border-ink-100 px-3 py-2 text-xs"
      >
        <div className="text-[10px] uppercase tracking-wider text-ink-400">New shortlist</div>
        <div className="text-ink-900 font-semibold">3 candidates · 48h</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="hidden sm:block absolute -right-6 bottom-10 rounded-xl bg-white shadow-soft border border-ink-100 px-3 py-2 text-xs"
      >
        <div className="text-[10px] uppercase tracking-wider text-ink-400">QC pass</div>
        <div className="text-ink-900 font-semibold">2nd-pass complete</div>
      </motion.div>
    </div>
  );
}
