'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, X, ArrowRight, Sparkles } from 'lucide-react'

const comparisonData = [
  {
    feature: 'Expiry Tracking',
    spreadsheet: 'Manual updates, easy to miss deadlines',
    certifycloud: 'Automatic calculations, smart alerts',
  },
  {
    feature: 'Audit Preparation',
    spreadsheet: '3+ days compiling documents',
    certifycloud: 'One-click, instant PDF dossiers',
  },
  {
    feature: 'Digital Signatures',
    spreadsheet: 'Print, sign, scan, file manually',
    certifycloud: 'Canvas signatures with verification',
  },
  {
    feature: 'Compliance Visibility',
    spreadsheet: 'Check spreadsheet, hope it\'s updated',
    certifycloud: 'Real-time traffic light dashboard',
  },
  {
    feature: 'Multi-User Access',
    spreadsheet: 'File conflicts, version chaos',
    certifycloud: 'Role-based access, audit trails',
  },
  {
    feature: 'Regulatory Updates',
    spreadsheet: 'Manual research and implementation',
    certifycloud: 'Auto-updated compliance rules',
  },
]

const stats = [
  { before: '15+ hrs', after: '2 hrs', label: 'Weekly admin time' },
  { before: '3 days', after: '10 min', label: 'Audit preparation' },
  { before: '12%', after: '0%', label: 'Missed expirations' },
]

export function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full text-rose-600 text-sm font-medium mb-4">
            <X className="w-4 h-4" />
            Stop the Spreadsheet Madness
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Spreadsheets weren't built for{' '}
            <span className="text-rose-500 line-through decoration-4">compliance</span>
          </h2>
          <p className="text-xl text-slate-600">
            See why aviation organizations are switching to purpose-built compliance management.
          </p>
        </motion.div>
        
        {/* Visual Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" ref={ref}>
          {/* Before Card - Spreadsheets */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-8 border border-slate-200"
          >
            <div className="absolute top-4 right-4 px-3 py-1 bg-slate-200 rounded-full text-xs font-medium text-slate-600">
              The Old Way
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Spreadsheets</h3>
                <p className="text-slate-500">Manual, error-prone, outdated</p>
              </div>
            </div>
            
            {/* Fake spreadsheet visual */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 mb-6">
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="bg-slate-100 p-2 font-medium">Name</div>
                <div className="bg-slate-100 p-2 font-medium">Cert Type</div>
                <div className="bg-slate-100 p-2 font-medium">Expiry</div>
                <div className="bg-slate-100 p-2 font-medium">Status</div>
                
                <div className="p-2 text-slate-600">J. Smith</div>
                <div className="p-2 text-slate-600">LPC</div>
                <div className="p-2 text-red-500">EXPIRED!</div>
                <div className="p-2">❌</div>
                
                <div className="p-2 text-slate-600">A. Jones</div>
                <div className="p-2 text-slate-600">OPC</div>
                <div className="p-2 text-slate-600">???</div>
                <div className="p-2">⚠️</div>
              </div>
              <div className="mt-3 p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-700">
                ⚠️ Last updated: 3 weeks ago (who updated this?)
              </div>
            </div>
            
            {/* Pain points */}
            <div className="space-y-3">
              {['Version conflicts', 'No audit trail', 'Manual calculations', 'Easy to miss deadlines'].map((pain) => (
                <div key={pain} className="flex items-center gap-2 text-slate-600">
                  <X className="w-5 h-5 text-rose-500" />
                  <span>{pain}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* After Card - CertifyCloud */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/20"
          >
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              The CertifyCloud Way
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">CertifyCloud</h3>
                <p className="text-white/70">Automated, accurate, always current</p>
              </div>
            </div>
            
            {/* Dashboard preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { color: 'bg-emerald-400', count: 247, label: 'Valid' },
                  { color: 'bg-amber-400', count: 12, label: 'Expiring' },
                  { color: 'bg-red-400', count: 0, label: 'Expired' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold">{stat.count}</div>
                    <div className={`w-full h-1.5 ${stat.color} rounded-full mt-1`} />
                    <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/60">Live • Auto-updated</span>
                <span className="flex items-center gap-1 text-emerald-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  100% Compliant
                </span>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="space-y-3">
              {['Real-time visibility', 'Complete audit trail', 'Automatic calculations', 'Smart expiry alerts'].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-900" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Transformation Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div 
              key={stat.label}
              className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-2xl font-bold text-slate-400 line-through">{stat.before}</span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{stat.after}</span>
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>
        
        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
            <div className="p-4 font-semibold text-slate-900">Feature</div>
            <div className="p-4 font-semibold text-slate-400 text-center">Spreadsheets</div>
            <div className="p-4 font-semibold text-primary text-center">CertifyCloud</div>
          </div>
          
          {comparisonData.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`grid grid-cols-3 border-b border-slate-100 last:border-0 transition-colors ${hoveredRow === i ? 'bg-primary/5' : ''}`}
            >
              <div className="p-4 font-medium text-slate-900">{row.feature}</div>
              <div className="p-4 text-sm text-slate-500 text-center flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-rose-400" />
                {row.spreadsheet}
              </div>
              <div className="p-4 text-sm text-slate-700 text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                {row.certifycloud}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02] inline-flex items-center gap-3">
            Make the Switch Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-slate-500 mt-4">Free data migration included • Setup in 7 days</p>
        </motion.div>
      </div>
    </section>
  )
}
