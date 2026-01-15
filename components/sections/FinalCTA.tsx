'use client'

import { motion } from 'framer-motion'
import { Calendar, Check, Plane } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  const t = useTranslations('cta')
  
  const trustItems = [t('trust1'), t('trust2'), t('trust3'), t('trust4')]

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-dark via-slate-900 to-navy-dark overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-success/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="container-lg relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Floating Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 mb-8"
          >
            <Plane className="w-10 h-10 text-primary" />
          </motion.div>
          
          <h2 className="text-h2 md:text-heading font-bold mb-6 text-white">
            {t('title')}
          </h2>
          
          <p className="text-body-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              href="#book-demo" 
              variant="primary" 
              size="large"
              icon={<Calendar className="w-5 h-5" />}
              className="shadow-2xl shadow-primary/40"
            >
              {t('primary')}
            </Button>
            <Button href="#trial" variant="ghost" size="large">
              {t('secondary')}
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
