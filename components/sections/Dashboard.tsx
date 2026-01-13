'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function Dashboard() {
  const t = useTranslations('dashboard')
  return (
    <section className="section bg-gradient-to-br from-navy-dark to-navy-medium overflow-hidden">
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-heading-sm md:text-heading text-white mb-6">
              {t('title')}
            </h2>
            <p className="text-body-lg text-white/80 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <Button href="#demo" variant="primary" icon={<ArrowRight className="w-5 h-5" />}>
              {t('cta')}
            </Button>
          </motion.div>
          
          {/* Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8">
                <div className="text-center text-white mb-8">
                  <h3 className="text-2xl font-bold mb-2">Fleet Readiness</h3>
                  <p className="text-sm text-white/60">Updated in real-time</p>
                </div>
                
                <div className="flex justify-center gap-8 mb-8">
                  {[
                    { color: 'bg-success', value: '94%', label: 'Compliant' },
                    { color: 'bg-warning', value: '5%', label: 'Expiring' },
                    { color: 'bg-danger', value: '1%', label: 'Action Required' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className={`w-24 h-24 ${stat.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg`}>
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                      </div>
                      <span className="text-sm text-white/80">{stat.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Mini chart placeholder */}
                <div className="flex items-end justify-center gap-1 h-16">
                  {[40, 65, 45, 80, 55, 70, 60, 85, 75, 90, 80, 95].map((h, i) => (
                    <div 
                      key={i}
                      className="w-4 bg-primary/60 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Callout badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-lg px-3 py-2 shadow-lg border-2 border-primary text-xs font-semibold"
            >
              Real-time updates
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg px-3 py-2 shadow-lg border-2 border-success text-xs font-semibold"
            >
              One-click export
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
