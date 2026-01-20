'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  BarChart3, Shield, Clock, PenLine, FileCheck, 
  Bell, Users, Zap, Lock, Globe, Smartphone, Cloud
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const features = [
  {
    id: 'dashboard',
    title: 'Traffic Light Dashboard',
    description: 'See your entire organization\'s compliance status at a glance. Green, amber, and red indicators make it impossible to miss expiring certifications.',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-500',
    size: 'large',
    visual: 'dashboard',
  },
  {
    id: 'automation',
    title: 'Zero Manual Tracking',
    description: 'Automatic expiry calculations and workflow triggers. Save 15+ hours per week.',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500',
    size: 'medium',
    stat: { value: '15+', label: 'Hours saved weekly' },
  },
  {
    id: 'signatures',
    title: 'Digital Signatures',
    description: 'Legally binding canvas signatures with cryptographic verification.',
    icon: PenLine,
    gradient: 'from-violet-500 to-purple-500',
    size: 'medium',
    visual: 'signature',
  },
  {
    id: 'alerts',
    title: 'Smart Notifications',
    description: 'Automated alerts at 90, 60, 30, 14, and 7 days before expiry. Never miss a renewal.',
    icon: Bell,
    gradient: 'from-amber-500 to-orange-500',
    size: 'small',
  },
  {
    id: 'reports',
    title: 'One-Click Audit Reports',
    description: 'Generate EASA-compliant PDF dossiers instantly. Impress auditors, not bore them.',
    icon: FileCheck,
    gradient: 'from-rose-500 to-pink-500',
    size: 'small',
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Row-level isolation, encrypted storage, and GDPR compliance built-in.',
    icon: Lock,
    gradient: 'from-slate-600 to-slate-800',
    size: 'small',
  },
  {
    id: 'lpc',
    title: 'LPC/OPC Management',
    description: 'Automated retake workflows, assessor conflict detection, and the 3-attempt rule enforced automatically.',
    icon: Users,
    gradient: 'from-indigo-500 to-blue-500',
    size: 'medium',
    visual: 'workflow',
  },
  {
    id: 'mobile',
    title: 'Works Everywhere',
    description: 'Fully responsive. Instructors use iPads in the field for real-time signatures.',
    icon: Smartphone,
    gradient: 'from-cyan-500 to-blue-500',
    size: 'small',
  },
]

function DashboardVisual() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2">
      {[
        { color: 'bg-emerald-500', count: 142 },
        { color: 'bg-amber-500', count: 8 },
        { color: 'bg-red-500', count: 0 },
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
        <span>Signed by: J. Smith</span>
        <span>✓ Verified</span>
      </div>
    </div>
  )
}

function WorkflowVisual() {
  const steps = ['Check', 'Review', 'Approve', 'Complete']
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
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 3 ? 'bg-white text-indigo-600' : 'bg-white/20 text-white'}`}>
            {i < 3 ? '✓' : i + 1}
          </div>
          <span className="text-[10px] text-white/60 mt-1">{step}</span>
          {i < steps.length - 1 && (
            <div className="absolute w-8 h-0.5 bg-white/20" style={{ marginLeft: '48px' }} />
          )}
        </motion.div>
      ))}
    </div>
  )
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = feature.icon
  
  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small: 'md:col-span-1 md:row-span-1',
  }
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-6 md:p-8 ${sizeClasses[feature.size as keyof typeof sizeClasses]} cursor-pointer`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed flex-grow">
          {feature.description}
        </p>
        
        {/* Visual elements based on feature type */}
        {feature.visual === 'dashboard' && <DashboardVisual />}
        {feature.visual === 'signature' && <SignatureVisual />}
        {feature.visual === 'workflow' && <WorkflowVisual />}
        
        {/* Stat highlight */}
        {feature.stat && (
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-white">{feature.stat.value}</span>
            <span className="text-white/60 text-sm">{feature.stat.label}</span>
          </div>
        )}
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
    <section id="features" className="py-24 md:py-32 bg-slate-50">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            Powerful Features
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything you need for{' '}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              complete compliance
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            From automated tracking to audit-ready reports. One platform, zero spreadsheets.
          </p>
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[180px]">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
