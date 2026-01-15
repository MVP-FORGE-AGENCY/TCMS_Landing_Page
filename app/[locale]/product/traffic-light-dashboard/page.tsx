'use client'

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, XCircle, Filter } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function TrafficLightDashboardPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'valid' | 'expiring' | 'expired'>('all')

  const mockData = {
    valid: ['John Smith', 'Jane Doe', 'Mike Johnson'],
    expiring: ['Sarah Williams', 'Tom Brown'],
    expired: []
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-500 via-green-600 to-amber-500 overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-display-sm md:text-display mb-6">
              Visual Compliance Status at a Glance
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              The Traffic Light Dashboard transforms complex compliance data into actionable insights. 
              Green, amber, red status indicators help operations managers prioritize renewals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Logic */}
      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="How It Works"
            subtitle="Simple color-coded status system for instant comprehension"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                status: 'valid',
                color: 'emerald',
                icon: CheckCircle,
                title: 'Green - Valid',
                description: 'More than 90 days remaining',
                count: 142
              },
              {
                status: 'expiring',
                color: 'amber',
                icon: AlertTriangle,
                title: 'Amber - Expiring Soon',
                description: 'Less than 90 days remaining',
                count: 8
              },
              {
                status: 'expired',
                color: 'red',
                icon: XCircle,
                title: 'Red - Expired',
                description: 'Immediate action required',
                count: 0
              }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.status}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-${item.color}-50 border-l-4 border-${item.color}-500 rounded-card p-6 cursor-pointer hover:shadow-lg transition-all`}
                  onClick={() => setSelectedFilter(item.status)}
                >
                  <div className={`text-4xl font-bold text-${item.color}-600 mb-2`}>
                    {item.count}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 text-${item.color}-600`} />
                    <h3 className={`text-h5 text-${item.color}-800`}>{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Interactive Demo */}
          <div className="bg-slate-50 rounded-card p-8 border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-slate-600" />
              <h3 className="text-h4 text-slate-900">Filtered Results</h3>
            </div>
            <div className="space-y-2">
              {(selectedFilter === 'all' 
                ? [...mockData.valid, ...mockData.expiring, ...mockData.expired]
                : mockData[selectedFilter]
              ).map((name, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-slate-200">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-emerald-500 to-green-600 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">See Compliance Status Instantly</h2>
          <Button href="#contact" variant="ghost" size="large">
            Try Interactive Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
