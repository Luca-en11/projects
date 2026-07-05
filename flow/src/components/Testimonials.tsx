import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Flow cut my context-switching in half. My calendar finally protects the hours it says it will.',
    name: 'Amara Okafor',
    role: 'Staff Engineer, Nord',
    initials: 'AO',
  },
  {
    quote: 'The AI daily briefing alone is worth it. I stopped opening five tabs just to figure out what to do first.',
    name: 'Daniel Reyes',
    role: 'Founder, Loomwork',
    initials: 'DR',
  },
  {
    quote: 'Rolled Flow out to 40 engineers. Shared focus hours changed how our whole team plans sprints.',
    name: 'Priya Nair',
    role: 'Eng Manager, Kestrel',
    initials: 'PN',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-flow-cyan">Loved by focused teams</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Don't take our word for it</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
            >
              <div className="flex gap-1 text-amber-400" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-slate-300">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-flow-indigo to-flow-violet text-sm font-bold text-white" aria-hidden="true">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.name}</span>
                  <span className="block text-xs text-slate-500">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
