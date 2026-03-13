'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Clock, FileStack } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Benefits() {
  const t = useTranslations('benefits')
  
  const benefits = [
    {
      icon: ShieldCheck,
      stat: t('compliance.stat'),
      statLabel: t('compliance.statLabel'),
      title: t('compliance.title'),
      description: t('compliance.description'),
      capability: t('compliance.capability'),
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      icon: Clock,
      stat: t('time.stat'),
      statLabel: t('time.statLabel'),
      title: t('time.title'),
      description: t('time.description'),
      capability: t('time.capability'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileStack,
      stat: t('audit.stat'),
      statLabel: t('audit.statLabel'),
      title: t('audit.title'),
      description: t('audit.description'),
      capability: t('audit.capability'),
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section className="section bg-white">
      <div className="container-lg">
        <SectionHeading 
          title={t('title')}
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl ${i % 2 === 0 ? 'bg-white' : 'bg-surface-light'} transition-colors duration-300`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-5xl font-bold text-primary mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm text-text-medium mb-6">
                  {benefit.statLabel}
                </div>
                
                <h3 className="text-xl font-bold text-text-dark mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-body text-text-medium mb-6">
                  {benefit.description}
                </p>
                
                <div className="flex items-start gap-2 pt-4 border-t border-gray-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  </div>
                  <p className="text-sm text-text-medium">
                    {benefit.capability}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
