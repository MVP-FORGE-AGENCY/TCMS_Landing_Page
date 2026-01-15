'use client'

import { motion } from 'framer-motion'
import { Calendar, Play, Check, AlertTriangle, PenLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const t = useTranslations('hero')
  const tDashboard = useTranslations('dashboard')
  
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-dark via-navy-medium to-slate-900 overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-success/10 rounded-full blur-3xl" />
      
      <div className="container-lg relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">Aviation Compliance Platform</span>
            </motion.div>
            
            <h1 className="text-display-sm md:text-display text-white mb-6 leading-tight">
              {t('title')}
            </h1>
            
            <p className="text-body-lg text-slate-300 mb-8 max-w-xl">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href="#contact" variant="primary" size="large" icon={<Calendar className="w-5 h-5" />}>
                {t('ctaPrimary')}
              </Button>
              <Button href="#demo" variant="ghost" size="large" icon={<Play className="w-5 h-5" />}>
                {t('ctaSecondary')}
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {[t('trust1'), t('trust2'), t('trust3')].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
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
            <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-danger" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
                <div className="ml-4 flex-1 bg-slate-700 rounded h-5 max-w-xs" />
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="text-white text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tDashboard('dashboardTitle')}</h3>
                  <p className="text-sm text-slate-400">{tDashboard('dashboardSubtitle')}</p>
                </div>
                
                {/* Traffic Light Cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { 
                      bg: 'bg-emerald-50', 
                      border: 'border-l-4 border-emerald-500',
                      numberColor: 'text-emerald-600', 
                      count: 142, 
                      label: tDashboard('valid'),
                      icon: '✓'
                    },
                    { 
                      bg: 'bg-amber-50', 
                      border: 'border-l-4 border-amber-500',
                      numberColor: 'text-amber-600', 
                      count: 8, 
                      label: tDashboard('expiring'),
                      icon: '⚠'
                    },
                    { 
                      bg: 'bg-red-50', 
                      border: 'border-l-4 border-red-500',
                      numberColor: 'text-red-600', 
                      count: 0, 
                      label: tDashboard('expired'),
                      icon: '✕'
                    },
                  ].map((item, idx) => (
                    <motion.div 
                      key={item.label} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className={`${item.bg} ${item.border} rounded-lg p-4 text-center shadow-sm`}
                    >
                      <div className={`text-3xl font-bold ${item.numberColor} mb-1`}>{item.count}</div>
                      <div className="text-xs text-slate-700 font-medium mb-2">{item.label}</div>
                      <div className={`text-lg ${item.numberColor}`}>{item.icon}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-4 top-1/4 bg-white rounded-lg p-4 shadow-xl border-l-4 border-warning"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <span className="text-sm font-semibold text-slate-900">{tDashboard('expiryAlert')}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">{tDashboard('expiryText')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -left-4 bottom-1/4 bg-white rounded-lg p-4 shadow-xl border-l-4 border-primary"
            >
              <div className="flex items-center gap-2">
                <PenLine className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-slate-900">{tDashboard('digitalSignature')}</span>
              </div>
              <div className="mt-2 w-24 h-10 border-2 border-dashed border-slate-300 rounded flex items-center justify-center">
                <span className="text-xs text-slate-400">Sign here</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
