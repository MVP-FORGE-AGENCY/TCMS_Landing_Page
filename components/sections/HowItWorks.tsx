'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Calendar, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const steps = [
  {
    number: '01',
    icon: BookOpen,
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'violet',
  },
  {
    number: '02',
    icon: Calendar,
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'blue',
  },
  {
    number: '03',
    icon: ShieldCheck,
    gradient: 'from-emerald-500 to-teal-500',
    glowColor: 'emerald',
  },
  {
    number: '04',
    icon: BarChart3,
    gradient: 'from-amber-500 to-orange-500',
    glowColor: 'amber',
  },
]

// Animated SVG illustrations for each step
function StepIllustration({ step, index }: { step: typeof steps[0]; index: number }) {
  if (index === 0) {
    // Curriculum blocks building up
    return (
      <div className="flex items-end gap-2 h-16">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${40 + i * 15}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.5, type: 'spring' }}
            className={`flex-1 bg-gradient-to-t ${step.gradient} rounded-md`}
          />
        ))}
      </div>
    )
  }
  if (index === 1) {
    // Calendar grid with sessions appearing
    return (
      <div className="grid grid-cols-5 gap-1">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.05, type: 'spring', stiffness: 300 }}
            className={`aspect-square rounded ${i === 2 || i === 5 || i === 8 ? `bg-gradient-to-br ${step.gradient}` : 'bg-white/10'}`}
          />
        ))}
      </div>
    )
  }
  if (index === 2) {
    // Signature path drawing
    return (
      <svg viewBox="0 0 120 40" className="w-full h-10">
        <motion.path
          d="M5,30 Q20,5 35,25 T65,20 Q80,15 95,28 T115,22"
          fill="none"
          stroke="url(#emeraldGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <defs>
          <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
  // Dashboard bars
  return (
    <div className="flex items-end gap-1.5 h-12">
      {[65, 80, 45, 90, 70, 95].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.08, duration: 0.4, type: 'spring' }}
          className={`flex-1 bg-gradient-to-t ${step.gradient} rounded-sm`}
        />
      ))}
    </div>
  )
}

export function HowItWorks() {
  const t = useTranslations('howItWorks')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-emerald-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container-lg relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium mb-6"
          >
            <ArrowRight className="w-4 h-4" />
            {t('badge')}
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title').split('|')[0]}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t('title').split('|')[1] || ''}
            </span>
          </h2>
          <p className="text-xl text-white/60">{t('subtitle')}</p>
        </motion.div>

        {/* Steps - Desktop: horizontal, Mobile: vertical timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[72px] left-[12.5%] right-[12.5%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-violet-500/50 via-blue-500/50 via-emerald-500/50 to-amber-500/50 origin-left"
              style={{ transformOrigin: 'left center' }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-full w-[2px] h-6 bg-gradient-to-b from-white/20 to-transparent" />
                )}

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Step number & icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-white/20">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t(`step${index + 1}.title`)}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {t(`step${index + 1}.description`)}
                  </p>

                  {/* Mini illustration */}
                  <div className="mt-auto">
                    <StepIllustration step={step} index={index} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
