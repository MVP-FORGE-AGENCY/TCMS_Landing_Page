'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, Mail, Calendar, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function AutomatedTrackingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Zap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              Zero Manual Spreadsheet Updates
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Automated background workers run daily to check expiries and send notifications. 
              No manual tracking required.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="The Automation Engine"
            subtitle="Node.js/BullMQ background workers process compliance checks daily"
          />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">Daily Cron Jobs</h3>
                    <p className="text-body text-slate-600">
                      Background workers run every 24 hours to check all qualification expiry dates 
                      and calculate days remaining.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">Automated Notifications</h3>
                    <p className="text-body text-slate-600">
                      Email alerts sent automatically at 90, 60, 30, and 7 days before expiry. 
                      No manual reminders needed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">Auto-Calculation</h3>
                    <p className="text-body text-slate-600">
                      Validity periods set once. System automatically calculates "Valid Until" dates 
                      based on completion dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-card p-8 border border-slate-200">
              <h3 className="text-h4 text-slate-900 mb-6">Notification Schedule</h3>
              <div className="space-y-4">
                {[
                  { days: 90, color: 'blue', status: 'Informational' },
                  { days: 60, color: 'blue', status: 'Reminder' },
                  { days: 30, color: 'amber', status: 'Urgent' },
                  { days: 7, color: 'red', status: 'Critical' }
                ].map((alert) => (
                  <div key={alert.days} className={`bg-${alert.color}-50 border-l-4 border-${alert.color}-500 rounded-lg p-4`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-semibold text-${alert.color}-800`}>
                          {alert.days}-Day Alert
                        </div>
                        <div className="text-sm text-slate-600">{alert.status}</div>
                      </div>
                      <CheckCircle className={`w-5 h-5 text-${alert.color}-600`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Eliminate Manual Tracking</h2>
          <Button href="#contact" variant="ghost" size="large">
            See Automation in Action
          </Button>
        </div>
      </section>
    </div>
  )
}
