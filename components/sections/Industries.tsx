'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plane, GraduationCap, Wrench, Truck,
  CheckCircle2, AlertTriangle, Clock, MapPin, Users, FileCheck
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

function IndustryVisual({ activeId }: { activeId: string }) {
  const t = useTranslations('industries')
  if (activeId === 'airlines') {
    return (
      <div className="w-full bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-white font-semibold flex items-center gap-2">
              <Plane className="w-4 h-4 text-blue-400" />
              Fleet Readiness: B737
            </div>
            <div className="text-xs text-slate-400">Live LPC/OPC Status</div>
          </div>
          <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-mono">{t("go")}</div>
        </div>
        
        <div className="space-y-3">
          {[
            { name: 'Capt. J. Smith', check: 'OPC Valid', color: 'emerald', status: 100 },
            { name: 'F/O S. Davis', check: 'LPC Expiring', color: 'amber', status: 15 },
            { name: 'Capt. M. Chen', check: 'Line Check', color: 'blue', status: 80 },
          ].map((crew, i) => (
            <motion.div 
              key={crew.name}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-${crew.color}-400 shadow-[0_0_8px_rgba(var(--${crew.color}-400),0.8)]`} />
                <div>
                  <div className="text-sm text-slate-200">{crew.name}</div>
                  <div className="text-xs text-slate-500">{crew.check}</div>
                </div>
              </div>
              <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${crew.status}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className={`h-full bg-${crew.color}-400`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (activeId === 'flight-schools') {
    return (
      <div className="w-full bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-white font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              Student Progression
            </div>
            <div className="text-xs text-slate-400">Class 2026-A (CPL/IR)</div>
          </div>
        </div>
        
        <div className="relative pt-2">
          {/* Progress Timeline */}
          <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-800" />
          
          {[
            { phase: 'Ground School', status: 'Completed', icon: CheckCircle2, color: 'text-emerald-400' },
            { phase: 'Simulator (FNPT II)', status: 'In Progress (8/12)', icon: Clock, color: 'text-blue-400' },
            { phase: 'Flight Phase', status: 'Pending', icon: Users, color: 'text-slate-500' },
          ].map((step, i) => (
            <motion.div 
              key={step.phase}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4 mb-6 relative z-10"
            >
              <div className={`w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center flex-shrink-0 ${i === 1 ? 'border-blue-500/50 bg-blue-500/10' : ''}`}>
                <step.icon className={`w-4 h-4 ${step.color}`} />
              </div>
              <div className="pt-1.5">
                <div className="text-sm font-medium text-slate-200">{step.phase}</div>
                <div className="text-xs text-slate-500">{step.status}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (activeId === 'mros') {
    return (
      <div className="w-full bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-white font-semibold flex items-center gap-2">
              <Wrench className="w-4 h-4 text-orange-400" />
              Technician Matrix
            </div>
            <div className="text-xs text-slate-400">{t("part145")}</div>
          </div>
          <div className="px-2 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded text-xs">{t("lineMaint")}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {[
            { tool: 'Engine Run-up', auth: 'Level 3', users: 12 },
            { tool: 'Borescope', auth: 'Level 2', users: 8 },
            { tool: 'NDT Insp.', auth: 'Level 1', users: 3 },
            { tool: 'RVSM Check', auth: 'Level 3', users: 15 },
          ].map((cert, i) => (
            <motion.div 
              key={cert.tool}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50 hover:border-orange-500/30 transition-colors"
            >
              <div className="text-sm text-slate-200 font-medium truncate">{cert.tool}</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded">{cert.auth}</span>
                <span className="text-[10px] text-slate-500 flex items-center gap-1"><Users className="w-3 h-3" /> {cert.users}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (activeId === 'ground') {
    return (
      <div className="w-full bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-white font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              Multi-Base Operations
            </div>
            <div className="text-xs text-slate-400">Safety & Security Compliance</div>
          </div>
        </div>
        
        <div className="space-y-3">
          {[
            { code: 'LHR', city: 'London', score: 98, trend: '+2%' },
            { code: 'FRA', city: 'Frankfurt', score: 95, trend: '-1%' },
            { code: 'CDG', city: 'Paris', score: 82, trend: '-5%', alert: true },
          ].map((base, i) => (
            <motion.div 
              key={base.code}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`bg-slate-800/50 rounded-lg p-3 border flex items-center justify-between ${base.alert ? 'border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.1)]' : 'border-slate-700/50'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center font-bold text-slate-300">
                  {base.code}
                </div>
                <div>
                  <div className="text-sm text-slate-200">{base.city}</div>
                  <div className="text-xs flex items-center gap-1 mt-0.5">
                    {base.alert && <AlertTriangle className="w-3 h-3 text-amber-500" />}
                    <span className={base.alert ? 'text-amber-500' : 'text-slate-500'}>
                      {base.alert ? 'Audit Required' : 'Compliant'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${base.score < 90 ? 'text-amber-400' : 'text-emerald-400'}`}>{base.score}%</div>
                <div className="text-[10px] text-slate-500">{base.trend}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export function Industries() {
  const t = useTranslations('industries')
  const [activeId, setActiveId] = useState('airlines')
  
  const industries = [
    {
      id: 'airlines',
      label: t('airlines.title'),
      icon: Plane,
      useCases: t.raw('airlines.useCases'),
      capability: t('airlines.capability'),
      cta: t('airlines.cta'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'flight-schools',
      label: t('flightSchools.title'),
      icon: GraduationCap,
      useCases: t.raw('flightSchools.useCases'),
      capability: t('flightSchools.capability'),
      cta: t('flightSchools.cta'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'mros',
      label: t('mros.title'),
      icon: Wrench,
      useCases: t.raw('mros.useCases'),
      capability: t('mros.capability'),
      cta: t('mros.cta'),
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'ground',
      label: t('ground.title'),
      icon: Truck,
      useCases: t.raw('ground.useCases'),
      capability: t('ground.capability'),
      cta: t('ground.cta'),
      gradient: 'from-green-500 to-emerald-500',
    },
  ]
  
  const active = industries.find((ind) => ind.id === activeId)!

  return (
    <section id="industries" className="section bg-surface-light">
      <div className="container-lg">
        <SectionHeading 
          title={t('title')}
        />
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind) => {
            const Icon = ind.icon
            const isActive = activeId === ind.id
            return (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                className={cn(
                  'flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all',
                  isActive 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white text-text-dark border border-gray-200 hover:border-primary/50'
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{ind.label}</span>
              </button>
            )
          })}
        </div>
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${active.gradient} flex items-center justify-center mb-6`}>
                  <active.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-subheading text-text-dark mb-6">
                  {active.label}
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-text-dark mb-3">{t('useCases')}</h4>
                  <ul className="space-y-2">
                    {active.useCases.map((use: string) => (
                      <li key={use} className="flex items-center gap-2 text-text-medium">
                        <span className="text-primary">•</span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mb-6">
                  <p className="text-sm font-semibold text-primary mb-1">{t('featuredCapability')}</p>
                  <p className="text-text-dark">{active.capability}</p>
                </div>
                
                {/* <Button href="#demo" variant="primary">
                  {active.cta}
                </Button> */}
              </div>
              
              {/* Visual Mockup */}
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${active.gradient} p-2 md:p-8 flex items-center justify-center shadow-inner`}>
                <IndustryVisual activeId={activeId} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
