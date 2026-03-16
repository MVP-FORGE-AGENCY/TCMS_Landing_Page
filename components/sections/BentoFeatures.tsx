'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  BarChart3, Zap, PenLine, ShieldCheck, 
  Layers, Bell, FileCheck, Lock
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const features = [
  {
    id: 'dashboard',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-500',
    size: 'large',
    visual: 'dashboard',
  },
  {
    id: 'scheduler',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500',
    size: 'medium',
    visual: 'calendar',
  },
  {
    id: 'signatures',
    icon: PenLine,
    gradient: 'from-violet-500 to-purple-500',
    size: 'medium',
    visual: 'signature',
  },
  {
    id: 'checks',
    icon: ShieldCheck,
    gradient: 'from-indigo-500 to-blue-500',
    size: 'medium',
    visual: 'workflow',
  },
  {
    id: 'curriculum',
    icon: Layers,
    gradient: 'from-rose-500 to-pink-500',
    size: 'small',
  },
  {
    id: 'notifications',
    icon: Bell,
    gradient: 'from-amber-500 to-orange-500',
    size: 'small',
  },
  {
    id: 'reports',
    icon: FileCheck,
    gradient: 'from-cyan-500 to-blue-500',
    size: 'small',
  },
  {
    id: 'security',
    icon: Lock,
    gradient: 'from-slate-500 to-slate-700',
    size: 'small',
  },
]

function DashboardVisual() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2">
      {[
        { color: 'bg-emerald-500', count: 247, label: 'Valid' },
        { color: 'bg-amber-500', count: 12, label: 'Expiring' },
        { color: 'bg-red-500', count: 0, label: 'Expired' },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          viewport={{ once: true }}
          className="bg-white/10 rounded-lg p-3 text-center"
        >
          <div className="text-2xl font-bold text-white">{item.count}</div>
          <div className={`w-full h-1 ${item.color} rounded-full mt-2`} />
          <div className="text-[10px] text-white/50 mt-1">{item.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

function CalendarVisual() {
  return (
    <div className="mt-4 grid grid-cols-5 gap-1.5">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.04, type: 'spring', stiffness: 400 }}
          className={`aspect-square rounded-md flex items-center justify-center text-[8px] font-medium ${
            [2, 5, 8, 11].includes(i) 
              ? 'bg-white/30 text-white' 
              : 'bg-white/10 text-white/30'
          }`}
        >
          {[2, 5, 8, 11].includes(i) ? '✓' : ''}
        </motion.div>
      ))}
    </div>
  )
}

function SignatureVisual() {
  return (
    <div className="mt-4 bg-white/10 rounded-xl p-4">
      <svg viewBox="0 0 200 60" className="w-full h-auto">
        <motion.path
          d="M10,40 Q30,10 50,35 T90,30 Q110,25 130,40 T170,35 Q190,30 195,40"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </svg>
      <div className="flex items-center justify-between mt-2 text-xs text-white/60">
        <span>SHA-256 Hash: a7f2...e8b1</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          Verified
        </span>
      </div>
    </div>
  )
}

function WorkflowVisual() {
  const steps = ['Check', 'Evaluate', 'Sign', 'Finalize']
  return (
    <div className="mt-4 flex items-center justify-between">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
            i < 3 ? 'bg-white text-indigo-600' : 'bg-white/20 text-white'
          }`}>
            {i < 3 ? '✓' : i + 1}
          </div>
          <span className="text-[10px] text-white/60 mt-1">{step}</span>
        </motion.div>
      ))}
    </div>
  )
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const t = useTranslations('features')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = feature.icon
  
  const sizeClasses = {
    large: 'md:col-span-2 lg:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 lg:col-span-1 md:row-span-2',
    small: 'md:col-span-1 lg:col-span-1 md:row-span-1',
  }
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-5 md:p-6 lg:p-8 ${sizeClasses[feature.size as keyof typeof sizeClasses]} cursor-pointer flex flex-col`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
          {t(`${feature.id}.title`)}
        </h3>
        <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed flex-grow mb-3 md:mb-4">
          {t(`${feature.id}.description`)}
        </p>
        
        {/* Visual elements based on feature type */}
        <div className="mt-auto">
          {feature.visual === 'dashboard' && <DashboardVisual />}
          {feature.visual === 'calendar' && <CalendarVisual />}
          {feature.visual === 'signature' && <SignatureVisual />}
          {feature.visual === 'workflow' && <WorkflowVisual />}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
    </motion.div>
  )
}

export function BentoFeatures() {
  const t = useTranslations('features')
  
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-slate-50">
      <div className="container-lg px-4 md:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            {t('badge')}
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('title').split('|')[0]}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              {t('title').split('|')[1] || ''}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            {t('subtitle')}
          </p>
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[minmax(220px,auto)] lg:auto-rows-[minmax(200px,auto)]">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
