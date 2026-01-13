'use client'

import { motion } from 'framer-motion'
import { Calendar, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  const t = useTranslations('cta')
  
  const trustItems = [t('trust1'), t('trust2'), t('trust3'), t('trust4')]

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container-lg relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-heading-sm md:text-heading font-bold mb-6">
            {t('title')}
          </h2>
          
          <p className="text-body-lg text-white/80 mb-12 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              href="#book-demo" 
              variant="primary" 
              size="large"
              icon={<Calendar className="w-6 h-6" />}
              className="shadow-2xl shadow-primary/30"
            >
              {t('primary')}
            </Button>
            <Button href="#trial" variant="secondary" size="large">
              {t('secondary')}
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                <Check className="w-5 h-5 text-success" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
