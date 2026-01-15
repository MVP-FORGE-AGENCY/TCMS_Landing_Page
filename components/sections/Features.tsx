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
      color: 'bg-emerald-500',
      lightBg: 'bg-emerald-50',
      textColor: 'text-emerald-600',
    },
    {
      icon: Zap,
      title: t('automated.title'),
      description: t('automated.description'),
      badge: t('automated.badge'),
      color: 'bg-blue-600',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: PenTool,
      title: t('paperless.title'),
      description: t('paperless.description'),
      badge: t('paperless.badge'),
      color: 'bg-sky-500',
      lightBg: 'bg-sky-50',
      textColor: 'text-sky-600',
    },
    {
      icon: ClipboardCheck,
      title: t('proficiency.title'),
      description: t('proficiency.description'),
      badge: t('proficiency.badge'),
      color: 'bg-amber-500',
      lightBg: 'bg-amber-50',
      textColor: 'text-amber-600',
    },
    {
      icon: FileText,
      title: t('reports.title'),
      description: t('reports.description'),
      badge: t('reports.badge'),
      color: 'bg-slate-700',
      lightBg: 'bg-slate-100',
      textColor: 'text-slate-700',
    },
    {
      icon: Shield,
      title: t('security.title'),
      description: t('security.description'),
      badge: t('security.badge'),
      color: 'bg-emerald-600',
      lightBg: 'bg-emerald-50',
      textColor: 'text-emerald-700',
    },
  ]

  return (
    <section id="features" className="section bg-surface-light">
      <div className="container-lg">
        <SectionHeading 
          title={t('title')}
          subtitle={t('subtitle')}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-card bg-white border border-slate-200 hover:border-primary hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-h4 text-slate-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-body text-slate-600 mb-4">
                  {feature.description}
                </p>
                
                {feature.badge && (
                  <span className={`inline-block px-3 py-1 ${feature.lightBg} ${feature.textColor} text-sm font-semibold rounded-full`}>
                    {feature.badge}
                  </span>
                )}
                
                {feature.cta && (
                  <a href="#demo" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link">
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
