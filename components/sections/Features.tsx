'use client'

import { motion } from 'framer-motion'
import { CircleDot, Zap, PenTool, ClipboardCheck, FileText, Shield, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Features() {
  const t = useTranslations('features')
  
  const features = [
    {
      icon: CircleDot,
      title: t('visual.title'),
      description: t('visual.description'),
      cta: t('visual.cta'),
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      icon: Zap,
      title: t('automated.title'),
      description: t('automated.description'),
      badge: t('automated.badge'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: PenTool,
      title: t('paperless.title'),
      description: t('paperless.description'),
      badge: t('paperless.badge'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: ClipboardCheck,
      title: t('proficiency.title'),
      description: t('proficiency.description'),
      badge: t('proficiency.badge'),
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: FileText,
      title: t('reports.title'),
      description: t('reports.description'),
      badge: t('reports.badge'),
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Shield,
      title: t('security.title'),
      description: t('security.description'),
      badge: t('security.badge'),
      gradient: 'from-teal-500 to-emerald-500',
    },
  ]

  return (
    <section id="features" className="section bg-white">
      <div className="container-lg">
        <SectionHeading 
          title={t('title')}
          subtitle={t('subtitle')}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, borderColor: '#0066FF' }}
                className="p-8 rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-body text-text-medium mb-4">
                  {feature.description}
                </p>
                
                {feature.badge && (
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {feature.badge}
                  </span>
                )}
                
                {feature.cta && (
                  <a href="#demo" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group">
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
