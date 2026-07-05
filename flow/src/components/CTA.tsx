import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-flow-indigo/20 via-base-900 to-flow-violet/20 px-8 py-16 text-center"
        >
          <div className="aurora-bg" aria-hidden="true">
            <div className="aurora-blob left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 bg-flow-cyan opacity-30" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to protect your best hours?</h2>
            <p className="mx-auto mt-4 max-w-md text-slate-400">
              Join thousands of focused teams already running their days on Flow.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-base-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Start your free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/5"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
