'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Users, FileCheck, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function ProficiencyChecksPage() {
  const workflowSteps = [
    { step: 1, title: "Schedule", description: "Create check session with assessor and trainee" },
    { step: 2, title: "Assess", description: "Conduct check with element-by-element grading" },
    { step: 3, title: "Grade Elements", description: "Record scores for each required element" },
    { step: 4, title: "Sign", description: "Digital signatures from assessor and trainee" },
    { step: 5, title: "Finalize", description: "System calculates overall result and updates records" },
  ]

  const gradingSchemas = [
    { name: "Standard 1-5 Scale", description: "Traditional numeric grading system" },
    { name: "AQP", description: "Advanced Qualification Program support" },
    { name: "EBT", description: "Evidence-Based Training methodology" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-display-sm md:text-display mb-6">
              Seamless Check Management: From Scheduling to Signing
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Complete LPC/OPC workflow automation with automated retake management and assessor conflict detection.
            </p>
            <Button href="#contact" variant="ghost" size="large">
              Streamline Your Assessments
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Complete Check Workflow"
            subtitle="From initial scheduling to final signature—all in one platform"
          />
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden lg:block" />
            <div className="space-y-12">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-h4 text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-body text-slate-600">{step.description}</p>
                  </div>
                  <div className="hidden lg:block w-8" />
                  <div className="flex-1 bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <div className="text-sm text-slate-500">Step {step.step} Preview</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grading Schemas */}
      <section className="section bg-slate-50">
        <div className="container-lg">
          <SectionHeading 
            title="Flexible Grading Systems"
            subtitle="Support multiple assessment methodologies"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {gradingSchemas.map((schema, i) => (
              <motion.div
                key={schema.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-card p-6 border border-slate-200 shadow-card"
              >
                <FileCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-h5 text-slate-900 mb-2">{schema.name}</h3>
                <p className="text-body text-slate-600">{schema.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retake Workflow */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Automated Retake Workflow"
                subtitle="Failed checks trigger instant remedial action"
                centered={false}
              />
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">Instant Notification</h3>
                    <p className="text-body text-slate-600">
                      When a check fails, the system immediately notifies the training manager and schedules remedial training.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">3-Attempt Enforcement</h3>
                    <p className="text-body text-slate-600">
                      System automatically enforces maximum retake limits and tracks attempt history.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success-veryLight flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">Assessor Conflict Detection</h3>
                    <p className="text-body text-slate-600">
                      Prevents scheduling assessors to check themselves or their direct reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-card p-8 border border-slate-200">
              <h3 className="text-h4 text-slate-900 mb-6">Retake Workflow Example</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-sm">Check Failed - LPC</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" />
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-sm">Remedial Training Scheduled</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" />
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm">Retake Check Scheduled</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" />
                <div className="flex items-center gap-3 p-3 bg-success-veryLight rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-sm font-semibold">Check Passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Streamline Your Proficiency Checks</h2>
          <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Reduce administrative overhead and ensure compliance with automated check management.
          </p>
          <Button href="#contact" variant="ghost" size="large">
            Book Your Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
