'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Check, Sparkles, Shield, Clock, CreditCard } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ScheduleDemoModal } from '@/components/ui/ScheduleDemoModal'

export function FinalCTAEnhanced() {
  const t = useTranslations('cta')
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const benefits = [
    { icon: Clock, text: t('trust1') },
    { icon: CreditCard, text: t('trust2') },
    { icon: Sparkles, text: t('trust3') },
    { icon: Shield, text: t('trust4') },
  ]
  
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              x: [0, 50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 40, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl"
          />
        </div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="container-lg relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Join 500+ aviation organizations
            </motion.div>
            
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t('title')}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              {t('subtitle')}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative px-8 py-4 bg-white rounded-xl font-semibold text-blue-600 text-lg shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                <span>{t('primary')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white text-lg hover:bg-white/20 transition-all flex items-center gap-3">
                <span>{t('secondary')}</span>
              </button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div 
                    key={benefit.text}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>
          
          {/* Floating testimonial cards */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute left-8 top-1/3 bg-white rounded-2xl p-4 shadow-xl max-w-[220px] -rotate-3"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-700">"Best compliance tool we've used"</p>
              <p className="text-xs text-slate-500 mt-2">— Training Manager</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute right-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl max-w-[220px] rotate-3"
            >
              <div className="text-3xl font-bold text-emerald-500 mb-1">80%</div>
              <p className="text-sm text-slate-600">Less time on admin</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute right-24 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl max-w-[200px] -rotate-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="font-semibold text-slate-800">Zero violations</span>
              </div>
              <p className="text-xs text-slate-500">Since implementation</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ScheduleDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
