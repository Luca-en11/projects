import { motion } from 'framer-motion'
import { Timer, ListChecks, BrainCircuit } from 'lucide-react'

const features = [
  {
    icon: Timer,
    title: 'Focus Sessions',
    description: 'Auto-scheduled deep work blocks that silence notifications and protect your calendar from meeting creep.',
  },
  {
    icon: ListChecks,
    title: 'Smart Task Sorting',
    description: 'Flow reorders your to-do list in real time based on deadlines, energy levels, and what actually moves the needle.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Daily Briefing',
    description: 'Wake up to a short, personalized plan for the day — pulled from your tasks, calendar, and past patterns.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-flow-cyan">Why Flow</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Built for focus, not busywork</h2>
          <p className="mt-4 text-slate-400">Three systems working together to give you back your best hours.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-flow-indigo/0 via-flow-indigo/0 to-flow-violet/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-flow-indigo/10 group-hover:to-flow-violet/10" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-flow-indigo to-flow-cyan">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
