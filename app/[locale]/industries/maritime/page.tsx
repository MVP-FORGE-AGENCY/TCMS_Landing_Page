'use client'

import { motion } from 'framer-motion'
import { Ship, Anchor, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function MaritimePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Ship className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              The Operating System for Maritime Compliance
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              STCW compliance automation, crew training management, and vessel assignment tracking 
              for maritime operations.
            </p>
            <Button href="#contact" variant="ghost" size="large">
              See Maritime Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="STCW Compliance Automation"
            subtitle="Manage crew training and certification in compliance with STCW and IMO standards"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Crew Training & Certification</h3>
                  <p className="text-body text-slate-600">
                    Track STCW Basic Safety Training, Advanced Firefighting, and specialized certifications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Anchor className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Vessel Assignments</h3>
                  <p className="text-body text-slate-600">
                    Link crew members to specific vessels and track assignment-specific training requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-card p-8 border border-slate-200">
              <h3 className="text-h4 text-slate-900 mb-4">STCW Standards</h3>
              <div className="space-y-3">
                {['STCW Basic Safety', 'Advanced Firefighting', 'Medical First Aid', 'Survival Craft'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-body text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-indigo-600 to-blue-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Ensure Maritime Crew Compliance</h2>
          <Button href="#contact" variant="ghost" size="large">
            Book Maritime Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
