import { motion } from 'framer-motion'
import { Waves } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl"
    >
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-base-900/70 px-5 py-3 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-flow-indigo to-flow-cyan">
            <Waves className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold">Flow</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">Features</a>
          <a href="#pricing" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">Pricing</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">Testimonials</a>
        </nav>

        <a
          href="#cta"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-base-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Start free trial
        </a>
      </div>
    </motion.header>
  )
}
