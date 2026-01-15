'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, Calendar, Clock, Zap, Shield, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function TrainingCompliancePage() {
  const t = useTranslations('trainingCompliance')

  const problems = [
    {
      icon: AlertTriangle,
      title: "Missed Deadlines",
      description: "Expired qualifications discovered during audits, not before operations"
    },
    {
      icon: Clock,
      title: "Manual Data Entry Errors",
      description: "Spreadsheet mistakes lead to compliance violations and regulatory fines"
    },
    {
      icon: Shield,
      title: "Regulatory Fines",
      description: "Operating with expired certifications results in costly penalties"
    }
  ]

  const features = [
    {
      title: "Auto-Calculation Engine",
      description: "Set validity periods once (e.g., 12 months). The system automatically calculates 'Valid Until' dates based on completion dates.",
      icon: Zap
    },
    {
      title: "Smart Notifications",
      description: "Automated email alerts at 90, 60, 30, and 7 days before expiry. Never miss a renewal deadline.",
      icon: Calendar
    },
    {
      title: "Real-Time Status",
      description: "Visual traffic light dashboard shows compliance status at a glance—green, amber, or red.",
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-success rounded-full blur-3xl" />
        </div>
        
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-display-sm md:text-display mb-6">
              Stop Tracking Expiry Dates on Spreadsheets
            </h1>
            <p className="text-body-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Automate training compliance tracking with intelligent expiry management. 
              Never miss a renewal deadline or face regulatory fines again.
            </p>
            <Button href="#contact" variant="primary" size="large">
              Automate Your Compliance
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-slate-50">
        <div className="container-lg">
          <SectionHeading 
            title="The Hidden Costs of Manual Tracking"
            subtitle="Spreadsheet-based compliance management creates unnecessary risks and administrative burden"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, i) => {
              const Icon = problem.icon
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-card p-6 border border-red-200 shadow-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-h5 text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-body text-slate-600">{problem.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Automated Compliance Tracking"
                subtitle="Set it once, forget about it"
                centered={false}
              />
              
              <div className="space-y-6">
                {features.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-h5 text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-body text-slate-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Visual Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="space-y-4">
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-emerald-800">Valid</span>
                        <span className="text-xs text-emerald-600">142 records</span>
                      </div>
                      <div className="text-xs text-slate-600">All qualifications current</div>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-amber-800">Expiring Soon</span>
                        <span className="text-xs text-amber-600">8 records</span>
                      </div>
                      <div className="text-xs text-slate-600">Renewal due in 30-90 days</div>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-red-800">Expired</span>
                        <span className="text-xs text-red-600">0 records</span>
                      </div>
                      <div className="text-xs text-slate-600">Action required immediately</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notification System */}
      <section className="section bg-primary/5">
        <div className="container-lg">
          <SectionHeading 
            title="Never Miss a Renewal Deadline"
            subtitle="Automated email notifications keep your team informed"
          />
          
          <div className="max-w-3xl mx-auto bg-white rounded-card p-8 shadow-xl border border-slate-200">
            <div className="space-y-4">
              {[
                { days: 90, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
                { days: 60, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
                { days: 30, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
                { days: 7, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
              ].map((alert, i) => (
                <div key={alert.days} className={`${alert.bg} ${alert.border} border-l-4 rounded-lg p-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-semibold ${alert.color} mb-1`}>
                        {alert.days}-Day Alert
                      </div>
                      <div className="text-sm text-slate-600">
                        Email notification sent to training manager and employee
                      </div>
                    </div>
                    <CheckCircle className={`w-5 h-5 ${alert.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">
            Ready to Automate Your Compliance?
          </h2>
          <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join aviation organizations that have eliminated spreadsheet tracking and automated their compliance workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#contact" variant="ghost" size="large">
              Book Your Demo
            </Button>
            <Button href="#features" variant="secondary" size="large">
              See How It Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
