'use client'

import { motion } from 'framer-motion'
import { Calendar, Play, Check, AlertTriangle, PenLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const t = useTranslations('hero')
  const tDashboard = useTranslations('dashboard')
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="container-lg relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-display-sm md:text-display text-white mb-6">
              {t('title')}
            </h1>
            
            <p className="text-body-lg text-text-light mb-8 max-w-xl">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href="#contact" variant="primary" size="large" icon={<Calendar className="w-5 h-5" />}>
                {t('ctaPrimary')}
              </Button>
              <Button href="#demo" variant="secondary" size="large" icon={<Play className="w-5 h-5" />}>
                {t('ctaSecondary')}
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {[t('trust1'), t('trust2'), t('trust3')].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-text-light">
                  <Check className="w-5 h-5 text-success" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Browser Frame */}
            <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-slate-700 to-slate-800">
                <div className="text-white text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tDashboard('dashboardTitle')}</h3>
                  <p className="text-sm text-white/60">{tDashboard('dashboardSubtitle')}</p>
                </div>
                
                <div className="flex justify-center gap-6">
                  {[
                    { color: 'bg-success', count: 142, label: tDashboard('valid') },
                    { color: 'bg-warning', count: 8, label: tDashboard('expiring') },
                    { color: 'bg-danger', count: 0, label: tDashboard('expired') },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className={`w-20 h-20 ${item.color} rounded-xl flex items-center justify-center mb-2 shadow-lg`}>
                        <span className="text-2xl font-bold text-white">{item.count}</span>
                      </div>
                      <span className="text-sm text-white/80">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-4 top-1/4 bg-white rounded-lg p-4 shadow-xl border-l-4 border-warning"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <span className="text-sm font-semibold">{tDashboard('expiryAlert')}</span>
              </div>
              <p className="text-xs text-text-medium mt-1">{tDashboard('expiryText')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-4 bottom-1/4 bg-white rounded-lg p-4 shadow-xl border-l-4 border-primary"
            >
              <div className="flex items-center gap-2">
                <PenLine className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">{tDashboard('digitalSignature')}</span>
              </div>
              <div className="mt-2 w-24 h-10 border-2 border-dashed border-gray-300 rounded" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
