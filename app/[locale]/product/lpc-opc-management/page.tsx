'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Users, AlertTriangle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function LPCOPCManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <ClipboardCheck className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              Automated Retake Workflows and Assessor Conflict Detection
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Never schedule an assessor to check themselves. Automated retake workflows with element-by-element grading.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Conflict Detection"
            subtitle="Prevent scheduling conflicts automatically"
          />
          
          <div className="max-w-3xl mx-auto bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-h5 text-red-800">Conflict Detected</h3>
            </div>
            <p className="text-body text-red-700">
              Cannot schedule assessor &quot;John Smith&quot; to check themselves or their direct reports. 
              Please select a different assessor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-card p-6 border border-slate-200">
              <h3 className="text-h5 text-slate-900 mb-4">Element Grading</h3>
              <div className="space-y-3">
                {[
                  { element: 'Engine Failure on Takeoff', grade: 4 },
                  { element: 'Emergency Landing', grade: 5 },
                  { element: 'Radio Communication', grade: 4 }
                ].map((item) => (
                  <div key={item.element} className="flex items-center justify-between bg-white rounded-lg p-3">
                    <span className="text-sm text-slate-700">{item.element}</span>
                    <span className="font-semibold text-primary">Grade {item.grade}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-card p-6 border border-slate-200">
              <h3 className="text-h5 text-slate-900 mb-4">Retake Workflow</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Check Failed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Remedial Training Scheduled</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>Retake Check Scheduled</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="font-semibold">Check Passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Streamline LPC/OPC Management</h2>
          <Button href="#contact" variant="ghost" size="large">
            See LPC/OPC Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
