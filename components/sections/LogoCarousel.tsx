'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const logos = [
  { name: 'SkyWings Airlines', industry: 'Airline' },
  { name: 'AeroTech MRO', industry: 'MRO' },
  { name: 'Global Flight Academy', industry: 'Flight School' },
  { name: 'Pacific Handlers', industry: 'Ground Handling' },
  { name: 'Nordic Aviation', industry: 'Airline' },
  { name: 'Precision Maintenance', industry: 'MRO' },
  { name: 'CloudPilot Training', industry: 'Flight School' },
  { name: 'Atlantic Ground Services', industry: 'Ground Handling' },
]

export function LogoCarousel() {
  const t = useTranslations('socialProof')
  
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos]
  
  return (
    <section className="relative py-16 bg-white border-y border-slate-100 overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="container-lg mb-8">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider">
          {t('text')}
        </p>
      </div>
      
      {/* Scrolling logos */}
      <div className="relative">
        <motion.div 
          className="flex gap-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {allLogos.map((logo, i) => (
            <div 
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 group"
            >
              <div className="h-16 px-8 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer">
                <div className="text-center">
                  <span className="text-slate-700 font-semibold text-lg group-hover:text-primary transition-colors">
                    {logo.name}
                  </span>
                  <span className="block text-xs text-slate-400">{logo.industry}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Trust badges */}
      <div className="container-lg mt-10">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: '🛡️', text: t('badge1') },
            { icon: '✈️', text: t('badge2') },
            { icon: '✓', text: t('badge3') },
          ].map((badge) => (
            <div 
              key={badge.text}
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-sm text-slate-600"
            >
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
