import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'For individuals trying Flow out.',
    features: ['1 focus workspace', 'Basic task sorting', '7-day history', 'Community support'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$18',
    period: 'per user / month',
    description: 'For professionals who live in deep work.',
    features: [
      'Unlimited focus sessions',
      'AI daily briefing',
      'Smart task sorting',
      'Calendar auto-protection',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$32',
    period: 'per user / month',
    description: 'For teams that ship together.',
    features: [
      'Everything in Pro',
      'Shared team focus hours',
      'Admin analytics dashboard',
      'SSO & SCIM provisioning',
      'Dedicated success manager',
    ],
    cta: 'Contact sales',
    highlighted: false,
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

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-flow-cyan">Pricing</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Simple pricing that scales with you</h2>
          <p className="mt-4 text-slate-400">Start free. Upgrade when Flow becomes part of how your team works.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid items-start gap-6 md:grid-cols-3"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`relative rounded-2xl border p-8 backdrop-blur ${
                tier.highlighted
                  ? 'border-flow-indigo/50 bg-gradient-to-b from-flow-indigo/15 to-flow-violet/5 shadow-[0_0_60px_-15px_rgba(99,102,241,0.5)] md:-translate-y-4'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-flow-indigo to-flow-cyan px-4 py-1 text-xs font-bold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                <span className="text-sm text-slate-500">{tier.period}</span>
              </div>

              <a
                href="#cta"
                className={`mt-6 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                  tier.highlighted
                    ? 'bg-white text-base-950'
                    : 'border border-white/15 text-white hover:bg-white/5'
                }`}
              >
                {tier.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-flow-cyan" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
