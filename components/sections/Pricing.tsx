'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export function Pricing() {
  const t = useTranslations('pricing')
  const [employees, setEmployees] = useState(100)
  const [hours, setHours] = useState(15)
  
  const annualSavings = hours * 52 * 50
  const timeRecovered = hours * 52
  const roiMonths = Math.ceil(10000 / (annualSavings / 12))

  const tiers = [
    {
      name: t('professional.name'),
      price: t('professional.price'),
      period: t('professional.period'),
      subtext: t('professional.subtext'),
      badge: t('professional.badge'),
      features: t.raw('professional.features'),
      cta: t('professional.cta'),
      highlighted: true,
    },
    {
      name: t('enterprise.name'),
      price: t('enterprise.price'),
      period: t('enterprise.period'),
      subtext: t('enterprise.subtext'),
      badge: t('enterprise.badge'),
      features: t.raw('enterprise.features'),
      cta: t('enterprise.cta'),
      highlighted: false,
    },
    {
      name: t('fleet.name'),
      price: t('fleet.price'),
      period: t('fleet.period'),
      subtext: t('fleet.subtext'),
      features: t.raw('fleet.features'),
      cta: t('fleet.cta'),
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="section bg-white">
      <div className="container-lg">
        <SectionHeading 
          title={t('title')}
          badge="Pricing"
        />
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'relative bg-white rounded-card p-8 transition-all duration-300 hover:-translate-y-2',
                tier.highlighted 
                  ? 'border-2 border-primary shadow-xl ring-1 ring-primary/20' 
                  : 'border border-slate-200 shadow-card hover:shadow-card-hover hover:border-primary/50'
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3 right-6 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-button">
                  {tier.badge}
                </div>
              )}
              
              <h3 className="text-h4 text-slate-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-primary">{tier.price}</span>
                <span className="text-slate-500 ml-1">{tier.period}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{tier.subtext}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                href="#contact" 
                variant={tier.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-light rounded-card p-8 border border-slate-200 max-w-4xl mx-auto"
        >
          <h3 className="text-h3 text-slate-900 mb-6 text-center">
            {t('calculator.title')}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                {t('calculator.employees', { count: employees })}
              </label>
              <input
                type="range"
                min="50"
                max="1000"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                {t('calculator.hours', { count: hours })}
              </label>
              <input
                type="range"
                min="5"
                max="40"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">
                ${annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500">{t('calculator.annualSavings')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {timeRecovered.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500">{t('calculator.timeRecovered')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">
                {roiMonths}
              </div>
              <div className="text-sm text-slate-500">{t('calculator.roi')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
