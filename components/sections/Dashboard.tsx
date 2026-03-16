'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Bell, AlertTriangle } from 'lucide-react'
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
            <Button href="#demo" variant="primary" icon={<ArrowRight className="w-5 h-5" />} disabled>
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
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t("fleetReadiness")}</h3>
                    <p className="text-xs text-white/60">{t("updatedRealTime")}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select className="bg-white/10 border border-white/10 rounded-md px-2 py-1 text-xs text-white/80 appearance-none cursor-pointer">
                      <option>{t("allDepartments")}</option>
                    </select>
                  </div>
                </div>
                
                {/* Traffic Light Cards */}
                <div className="flex justify-center gap-6 mb-6">
                  {[
                    { color: 'bg-success', value: '94%', label: t('compliant') },
                  { color: 'bg-warning', value: '5%', label: t('expiring') },
                  { color: 'bg-danger', value: '1%', label: t('actionRequired') },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg`}>
                        <span className="text-xl font-bold text-white">{stat.value}</span>
                      </div>
                      <span className="text-xs text-white/80">{stat.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Compliance trend chart */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/70">{t("complianceTrend")}</span>
                    <span className="text-xs text-emerald-400">{t("trendThisMonth")}</span>
                  </div>
                  <div className="flex items-end justify-center gap-1 h-16">
                    {[40, 65, 45, 80, 55, 70, 60, 85, 75, 90, 80, 95].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        className="w-4 bg-gradient-to-t from-primary/80 to-cyan-400/80 rounded-t"
                      />
                    ))}
                  </div>
                </div>

                {/* My Actions list */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <div className="text-xs font-medium text-white/70 mb-2 flex items-center gap-1.5">
                    <Bell className="w-3 h-3" />
                    {t('myActions')}
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { icon: AlertTriangle, text: t('opcExpiring30Days'), color: 'text-amber-400' },
                      { icon: Shield, text: t('pendingSignOff'), color: 'text-blue-400' },
                    ].map((action) => {
                      const ActionIcon = action.icon
                      return (
                        <div key={action.text} className="flex items-center gap-2 text-xs">
                          <ActionIcon className={`w-3 h-3 ${action.color}`} />
                          <span className="text-white/60">{action.text}</span>
                        </div>
                      )
                    })}
                  </div>
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
              {t('realTimeUpdates')}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg px-3 py-2 shadow-lg border-2 border-success text-xs font-semibold flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              {t('protocolVerified')}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
