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
    <section id="pricing" className="section bg-gradient-to-br from-surface-light to-white">
      <div className="container-lg">
        <SectionHeading 
          title={t('title')}
        />
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                'relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2',
                tier.highlighted ? 'border-primary' : 'border-transparent'
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3 right-6 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {tier.badge}
                </div>
              )}
              
              <h3 className="text-xl font-bold text-text-dark mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-text-dark">{tier.price}</span>
                <span className="text-text-medium ml-1">{tier.period}</span>
              </div>
              <p className="text-sm text-text-medium mb-6">{tier.subtext}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-2 text-text-medium">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                href="#contact" 
                variant={tier.highlighted ? 'primary' : 'ghost'}
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
          className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-text-dark mb-6 text-center">
            {t('calculator.title')}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                {t('calculator.employees', { count: employees })}
              </label>
              <input
                type="range"
                min="50"
                max="1000"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                {t('calculator.hours', { count: hours })}
              </label>
              <input
                type="range"
                min="5"
                max="40"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-1">
                ${annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-text-medium">{t('calculator.annualSavings')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {timeRecovered.toLocaleString()}
              </div>
              <div className="text-sm text-text-medium">{t('calculator.timeRecovered')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-1">
                {roiMonths}
              </div>
              <div className="text-sm text-text-medium">{t('calculator.roi')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
