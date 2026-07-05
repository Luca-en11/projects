import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-32">
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-blob left-[-10%] top-[-10%] h-[520px] w-[520px] bg-flow-indigo" />
        <div className="aurora-blob right-[-10%] top-[10%] h-[480px] w-[480px] bg-flow-violet" style={{ animationDelay: '-5s' }} />
        <div className="aurora-blob bottom-[-15%] left-[20%] h-[420px] w-[420px] bg-flow-cyan" style={{ animationDelay: '-10s' }} />
      </div>
      <div className="grid-overlay pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" aria-hidden="true" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-flow-cyan backdrop-blur"
        >
          Now with AI-powered focus sessions
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Deep work,
          <br />
          <span className="bg-gradient-to-r from-flow-cyan via-flow-indigo to-flow-violet bg-clip-text text-transparent">
            on autopilot.
          </span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
          Flow silences the noise, organizes your day, and protects your focus —
          so your best work happens by default, not by willpower.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-base-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Start free trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/5"
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            Watch demo
          </a>
        </motion.div>

        <motion.p variants={item} className="mt-8 text-sm text-slate-500">
          No credit card required · 14-day free trial · Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  )
}
