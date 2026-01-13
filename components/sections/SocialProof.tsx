'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function SocialProof() {
  const t = useTranslations('socialProof')
  
  const badges = [t('badge1'), t('badge2'), t('badge3')]

  return (
    <section className="py-8 bg-surface-light border-y border-gray-200">
      <div className="container-lg">
        <p className="text-center text-text-medium text-sm mb-6">
          {t('text')}
        </p>
        
        {/* Logo Scroll */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-scroll gap-16">
            {[...Array(16)].map((_, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-32 h-12 bg-gray-200 rounded-lg opacity-40 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 bg-white rounded-full border border-gray-200 text-xs font-medium text-text-dark"
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
