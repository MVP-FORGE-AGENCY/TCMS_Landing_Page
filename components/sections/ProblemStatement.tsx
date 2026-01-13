'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, EyeOff } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ProblemStatement() {
  const t = useTranslations('problem')
  
  const problems = [
    {
      icon: AlertTriangle,
      title: t('risk.title'),
      description: t('risk.description'),
      color: 'text-danger',
      bg: 'bg-danger/10',
    },
    {
      icon: Clock,
      title: t('inefficiency.title'),
      description: t('inefficiency.description'),
      color: 'text-warning',
      bg: 'bg-warning/10',
    },
    {
      icon: EyeOff,
      title: t('visibility.title'),
      description: t('visibility.description'),
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
  ]

  return (
    <section className="section bg-surface-light">
      <div className="container-lg">
        <SectionHeading 
          title={t('title')}
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 ${problem.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {problem.title}
                </h3>
                <p className="text-body text-text-medium">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
