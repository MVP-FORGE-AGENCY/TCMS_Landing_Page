'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Calendar, Play, Check, Shield, Users, Clock, 
  ArrowRight, Sparkles, Zap, Globe, Award
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

// Animated counter component
function AnimatedCounter({ target, duration = 2000, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration])
  
  return <span>{count.toLocaleString()}{suffix}</span>
}

// Floating 3D card component
function FloatingCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}

export function HeroEnhanced() {
  const t = useTranslations('hero')
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  const stats = [
    { value: 10000, suffix: '+', label: 'Crew Members Tracked', icon: Users },
    { value: 99.9, suffix: '%', label: 'Compliance Rate', icon: Shield },
    { value: 85, suffix: '%', label: 'Time Saved', icon: Clock },
  ]

  const trustedLogos = [
    'Airline Alpha', 'Sky Academy', 'Global MRO', 'AeroTech', 'FlightSafe'
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1a]">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a0f1a]" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 via-blue-500/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 80, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-emerald-500/15 via-emerald-500/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 60, 0], 
            y: [0, -80, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              y: [0, -100, 0],
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="container-lg relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 7 columns */}
          <motion.div 
            className="lg:col-span-7"
            style={{ y: y1 }}
          >
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 group cursor-pointer hover:bg-white/10 transition-all"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </span>
              <span className="text-sm font-medium text-white/90">
                New: AI-Powered Compliance Predictions
              </span>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 transition-transform" />
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              {t('title').split(' ').slice(0, 2).join(' ')}{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {t('title').split(' ').slice(2, 4).join(' ')}
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{' '}
              {t('title').split(' ').slice(4).join(' ')}
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>{t('ctaPrimary')}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              </button>
              
              <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                <span>{t('ctaSecondary')}</span>
              </button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-x-8 gap-y-4"
            >
              {[t('trust1'), t('trust2'), t('trust3')].map((text, i) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-sm text-white/70">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Interactive Dashboard Preview */}
          <motion.div 
            className="lg:col-span-5 relative"
            style={{ y: y2 }}
          >
            {/* Main Dashboard Card */}
            <FloatingCard 
              delay={0.4}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-1 border border-white/10 shadow-2xl"
            >
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-[22px] p-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Compliance Dashboard</h3>
                      <p className="text-xs text-white/50">Real-time status</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-emerald-400">Live</span>
                  </div>
                </div>
                
                {/* Traffic Light Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { bg: 'from-emerald-500/20 to-emerald-500/10', border: 'border-emerald-500/30', color: 'text-emerald-400', count: 247, label: 'Valid', icon: '✓' },
                    { bg: 'from-amber-500/20 to-amber-500/10', border: 'border-amber-500/30', color: 'text-amber-400', count: 12, label: 'Expiring', icon: '⚠' },
                    { bg: 'from-red-500/20 to-red-500/10', border: 'border-red-500/30', color: 'text-red-400', count: 0, label: 'Expired', icon: '✕' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className={`bg-gradient-to-br ${item.bg} rounded-xl p-4 border ${item.border} text-center`}
                    >
                      <div className={`text-2xl font-bold ${item.color} mb-1`}>
                        <AnimatedCounter target={item.count} />
                      </div>
                      <div className="text-xs text-white/60">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mini Chart Placeholder */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-white/70">Compliance Trend</span>
                    <span className="text-xs text-emerald-400">↑ 12% this month</span>
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 55, 80, 70, 90, 85, 95, 88, 98, 92, 99].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1.2 + i * 0.05, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FloatingCard>
            
            {/* Floating Notification Cards */}
            <FloatingCard 
              delay={1.4}
              className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 max-w-[200px]"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Audit Passed</p>
                  <p className="text-xs text-slate-500">EASA inspection complete</p>
                </div>
              </div>
            </FloatingCard>
            
            <FloatingCard 
              delay={1.6}
              className="absolute -right-4 bottom-1/4 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 max-w-[220px]"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">15 hrs saved</p>
                  <p className="text-xs text-slate-500">This week vs manual tracking</p>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
        
        {/* Live Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div 
                key={stat.label}
                className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
        
        {/* Trusted By Logos */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-white/40 mb-6">Trusted by leading aviation organizations</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {trustedLogos.map((logo) => (
              <div key={logo} className="h-8 px-6 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white/60 font-medium text-sm">{logo}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-2 bg-white/40 rounded-full" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
