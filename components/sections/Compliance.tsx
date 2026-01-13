'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, FileCheck, Lock } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Compliance() {
  const t = useTranslations('compliance')
  
  const badges = [
    { name: t('easa'), description: t('easaDesc'), icon: Shield, gradient: 'from-blue-500 to-cyan-500' },
    { name: t('faa'), description: t('faaDesc'), icon: Shield, gradient: 'from-red-500 to-orange-500' },
    { name: t('icao'), description: t('icaoDesc'), icon: Globe, gradient: 'from-green-500 to-emerald-500' },
    { name: t('gdpr'), description: t('gdprDesc'), icon: Lock, gradient: 'from-purple-500 to-pink-500' },
  ]

  return (
    <section className="py-16 bg-surface-light">
      <div className="container-lg">
        <h3 className="text-subheading text-text-dark text-center mb-12">
          {t('title')}
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center cursor-pointer group"
              >
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${badge.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="font-bold text-text-dark text-sm mb-1">
                  {badge.name}
                </div>
                <div className="text-xs text-text-medium">
                  {badge.description}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
