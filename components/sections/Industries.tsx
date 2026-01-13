'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, GraduationCap, Wrench, Truck, Ship, Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

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
    {
      id: 'maritime',
      label: t('maritime.title'),
      icon: Ship,
      useCases: t.raw('maritime.useCases'),
      capability: t('maritime.capability'),
      cta: t('maritime.cta'),
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      id: 'healthcare',
      label: t('healthcare.title'),
      icon: Heart,
      useCases: t.raw('healthcare.useCases'),
      capability: t('healthcare.capability'),
      cta: t('healthcare.cta'),
      gradient: 'from-red-500 to-pink-500',
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
                
                <Button href="#demo" variant="primary">
                  {active.cta}
                </Button>
              </div>
              
              {/* Visual Placeholder */}
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${active.gradient} p-8 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <active.icon className="w-20 h-20 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-bold">{active.label} Dashboard</p>
                  <p className="text-sm opacity-80">Industry-specific view</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
