'use client'

import { motion } from 'framer-motion'
import { Plane, Shield, Users, CheckCircle, FileCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function AirlinesPage() {
  const features = [
    {
      icon: Users,
      title: "Pilot LPC/OPC Tracking",
      description: "Automated tracking of Line Proficiency Checks and Operator Proficiency Checks with retake workflow management"
    },
    {
      icon: Users,
      title: "Cabin Crew Recurrent Training",
      description: "Manage cabin crew training schedules, certifications, and compliance across multiple bases"
    },
    {
      icon: Shield,
      title: "Fleet Readiness Monitoring",
      description: "Real-time visibility into crew compliance status to ensure operational readiness"
    },
    {
      icon: Plane,
      title: "Multi-Base Operations",
      description: "Support operations across multiple locations with centralized compliance management"
    }
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
            <Plane className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              The Operating System for Airline Compliance
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              EASA & FAA compliant training management for airlines. Automated LPC/OPC tracking, 
              cabin crew training, and fleet readiness monitoring.
            </p>
            <Button href="#contact" variant="ghost" size="large">
              See Airline Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Built for Airline Operations"
            subtitle="Comprehensive compliance management for pilots and cabin crew"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => {
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-h5 text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-body text-slate-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* EASA/FAA Compliance */}
      <section className="section bg-slate-50">
        <div className="container-lg">
          <SectionHeading 
            title="EASA & FAA Compliant"
            subtitle="Meet regulatory requirements automatically"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-card p-8 border border-slate-200">
              <h3 className="text-h4 text-slate-900 mb-4">EASA ADR.OR.D.017</h3>
              <p className="text-body text-slate-600 mb-4">
                Full compliance with European Aviation Safety Agency requirements for training and competence management.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm">Automated expiry tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm">Complete audit trails</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm">Digital signature support</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-card p-8 border border-slate-200">
              <h3 className="text-h4 text-slate-900 mb-4">FAA Part 121/135</h3>
              <p className="text-body text-slate-600 mb-4">
                Support for Federal Aviation Administration regulations including AQP (Advanced Qualification Program) support.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm">AQP grading schemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm">EBT methodology support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm">Custom assessment criteria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Ready to Streamline Airline Compliance?</h2>
          <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join airlines using CertifyCloud to automate training compliance and ensure fleet readiness.
          </p>
          <Button href="#contact" variant="ghost" size="large">
            Book Airline Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
