'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, GraduationCap, ShieldCheck, Users, FileText,
  Check, TrendingUp, Calendar, Bell, Shield, Lock, ArrowRight
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const tabs = [
  {
    id: 'dashboard',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-500',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 'training',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'checks',
    icon: ShieldCheck,
    gradient: 'from-violet-500 to-purple-500',
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
  },
  {
    id: 'personnel',
    icon: Users,
    gradient: 'from-amber-500 to-orange-500',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
  },
  {
    id: 'reporting',
    icon: FileText,
    gradient: 'from-rose-500 to-pink-500',
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
  },
]

// Mock dashboard visual for each tab
function DashboardMockup({ tabId }: { tabId: string }) {
  if (tabId === 'dashboard') {
    return (
      <div className="space-y-4">
        {/* Traffic light cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { color: 'from-emerald-500/20 to-emerald-500/10', border: 'border-emerald-500/30', textColor: 'text-emerald-400', count: 247, label: 'Valid' },
            { color: 'from-amber-500/20 to-amber-500/10', border: 'border-amber-500/30', textColor: 'text-amber-400', count: 12, label: 'Expiring' },
            { color: 'from-red-500/20 to-red-500/10', border: 'border-red-500/30', textColor: 'text-red-400', count: 0, label: 'Expired' },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`bg-gradient-to-br ${item.color} rounded-xl p-4 border ${item.border} text-center`}
            >
              <div className={`text-2xl font-bold ${item.textColor}`}>{item.count}</div>
              <div className="text-xs text-white/60 mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>
        {/* Trend chart */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-white/70">Compliance Trend</span>
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 12% this month
            </span>
          </div>
          <div className="flex items-end gap-1 h-16">
            {[40, 65, 55, 80, 70, 90, 85, 95, 88, 98, 92, 99].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-sm"
              />
            ))}
          </div>
        </div>
        {/* My Actions */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
          <div className="text-xs font-medium text-white/70 mb-2">My Actions</div>
          {[
            { text: '3 OPCs expiring in 30 days', color: 'text-amber-400', badge: 'bg-amber-500/20' },
            { text: 'Session sign-off pending', color: 'text-blue-400', badge: 'bg-blue-500/20' },
          ].map((action) => (
            <div key={action.text} className="flex items-center gap-2 py-1.5 text-xs">
              <span className={`w-1.5 h-1.5 rounded-full ${action.badge}`} />
              <span className={action.color}>{action.text}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (tabId === 'training') {
    return (
      <div className="space-y-4">
        {/* Campaign card */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-white">Active Campaigns</span>
            <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">3 active</span>
          </div>
          <div className="space-y-2">
            {[
              { name: 'B737 Type Rating', progress: 85 },
              { name: 'CRM Recurrent Q1', progress: 62 },
              { name: 'Dangerous Goods', progress: 100 },
            ].map((campaign) => (
              <div key={campaign.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-white/70">{campaign.name}</span>
                  <span className="text-white/50">{campaign.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${campaign.progress}%` }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`h-full rounded-full ${campaign.progress === 100 ? 'bg-emerald-400' : 'bg-blue-400'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Auto-scheduler preview */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Auto-Scheduler</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 + i * 0.03 }}
                className={`h-6 rounded text-[8px] flex items-center justify-center ${
                  [2, 5, 8, 11, 14].includes(i) 
                    ? 'bg-blue-500/30 border border-blue-500/40 text-blue-300' 
                    : 'bg-white/5'
                }`}
              >
                {[2, 5, 8, 11, 14].includes(i) && '✓'}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (tabId === 'checks') {
    return (
      <div className="space-y-4">
        {/* Workflow steps */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="text-sm font-medium text-white mb-4">OPC/LPC Workflow</div>
          <div className="flex items-center justify-between">
            {['Initiated', 'Evaluate', 'Sign', 'Finalize'].map((step, i) => (
              <div key={step} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.2, type: 'spring' }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                    i < 3 ? 'bg-gradient-to-br from-violet-500 to-purple-500 text-white' : 'bg-white/10 text-white/50'
                  }`}>
                    {i < 3 ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className="text-[10px] text-white/50 mt-1.5">{step}</span>
                </motion.div>
                {i < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className={`w-8 h-0.5 mx-1 ${i < 2 ? 'bg-violet-500/50' : 'bg-white/10'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Conflict detection */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-white">Conflict Detection</span>
          </div>
          <div className="flex items-center gap-2 py-2 text-xs text-emerald-400">
            <Check className="w-3.5 h-3.5" />
            <span>No assessor conflicts detected</span>
          </div>
        </div>
      </div>
    )
  }

  if (tabId === 'personnel') {
    return (
      <div className="space-y-4">
        {/* Role hierarchy */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="text-sm font-medium text-white mb-3">RBAC Roles</div>
          <div className="space-y-2">
            {[
              { role: 'Admin', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
              { role: 'Training Manager', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
              { role: 'Instructor', color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
              { role: 'Auditor (Read-Only)', color: 'bg-slate-500/20 text-slate-300 border-slate-500/30' },
              { role: 'Employee', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
            ].map((item) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-xs px-3 py-1.5 rounded-md border ${item.color}`}
              >
                {item.role}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Reporting
  return (
    <div className="space-y-4">
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <div className="text-sm font-medium text-white mb-3">Expiring Competences</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60">Next 30 days</span>
            <span className="text-amber-400 font-medium">12 items</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 0.8 }}
              className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-400 rounded-full"
            />
          </div>
          <div className="flex justify-between text-[10px] text-white/40">
            <span>0 days</span>
            <span>30 days</span>
            <span>60 days</span>
            <span>90 days</span>
          </div>
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-white">Monthly Score</span>
          <span className="text-2xl font-bold text-emerald-400">94%</span>
        </div>
        <div className="flex gap-2">
          {['PDF', 'CSV', 'Print'].map((format) => (
            <button key={format} className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-white/50 hover:text-white/80 transition-colors">
              {format}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PlatformDeepDive() {
  const t = useTranslations('platformDeepDive')
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 md:py-32 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-violet-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-lg relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium mb-6"
          >
            <ArrowRight className="w-4 h-4" />
            {t('badge')}
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title').split('|')[0]}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t('title').split('|')[1] || ''}
            </span>
          </h2>
          <p className="text-xl text-white/60">{t('subtitle')}</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, i) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === i
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                    : 'bg-white/5 text-white/60 hover:text-white/80 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t(`tabs.${tab.id}`)}
              </motion.button>
            )
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            {/* Left - Feature bullet points */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tabs[activeTab].gradient} flex items-center justify-center`}>
                  {(() => {
                    const Icon = tabs[activeTab].icon
                    return <Icon className="w-6 h-6 text-white" />
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t(`tabs.${tabs[activeTab].id}`)}</h3>
                  <p className="text-sm text-white/50">{t(`${tabs[activeTab].id}.subtitle`)}</p>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3, 4].map((idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full ${tabs[activeTab].bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className={`w-3.5 h-3.5 ${tabs[activeTab].color}`} />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">
                      {t(`${tabs[activeTab].id}.feature${idx}`)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Animated mockup */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-1 border border-white/10 shadow-2xl">
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-[14px] p-6">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                  </div>
                  <div className="flex-1 h-6 bg-white/5 rounded-md mx-8 flex items-center justify-center">
                    <span className="text-[10px] text-white/30">app.certifycloud.com</span>
                  </div>
                </div>

                <DashboardMockup tabId={tabs[activeTab].id} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
