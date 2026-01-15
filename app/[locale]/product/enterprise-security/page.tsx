'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Database, Backup, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function EnterpriseSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              Row-Level Security and GDPR Compliance
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Your data is isolated at the database level, not just the app level. 
              Enterprise-grade security with daily backups and point-in-time recovery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Database-Level Isolation"
            subtitle="Row-Level Security (RLS) ensures complete data separation"
          />
          
          <div className="max-w-3xl mx-auto bg-slate-900 rounded-card p-8 text-white mb-8">
            <div className="font-mono text-sm space-y-2">
              <div className="text-slate-400">-- Organization A can only see their data</div>
              <div className="text-green-400">SELECT * FROM users WHERE organisation_id = 'org-a';</div>
              <div className="text-slate-400 mt-4">-- Organization B can only see their data</div>
              <div className="text-green-400">SELECT * FROM users WHERE organisation_id = 'org-b';</div>
              <div className="text-slate-400 mt-4">-- Enforced at database level, not application level</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "Encrypted Storage",
                description: "All data encrypted at rest and in transit"
              },
              {
                icon: Database,
                title: "Row-Level Security",
                description: "Data isolation enforced at the database level"
              },
              {
                icon: Backup,
                title: "Daily Backups",
                description: "Automated daily backups with point-in-time recovery"
              }
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 rounded-card p-6 border border-slate-200"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-h5 text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-body text-slate-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-lg">
          <SectionHeading 
            title="GDPR Compliance"
            subtitle="Right to be forgotten compliant with complete data deletion"
          />
          
          <div className="max-w-2xl mx-auto bg-white rounded-card p-8 border border-slate-200">
            <div className="space-y-4">
              {[
                'Right to access personal data',
                'Right to rectification',
                'Right to erasure (right to be forgotten)',
                'Data portability',
                'Privacy by design'
              ].map((right) => (
                <div key={right} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-body text-slate-700">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Enterprise-Grade Security</h2>
          <Button href="#contact" variant="primary" size="large">
            Learn More About Security
          </Button>
        </div>
      </section>
    </div>
  )
}
