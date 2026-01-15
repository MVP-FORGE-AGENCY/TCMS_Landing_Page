'use client'

import { motion } from 'framer-motion'
import { Heart, GraduationCap, Shield, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-600 via-pink-700 to-red-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              The Operating System for Healthcare Compliance
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Medical staff training, continuing education tracking, and clinical competency management 
              for healthcare organizations.
            </p>
            <Button href="#contact" variant="ghost" size="large">
              See Healthcare Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Medical Certification Compliance"
            subtitle="Track continuing education, board certifications, and clinical competencies"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Continuing Education</h3>
                  <p className="text-body text-slate-600">
                    Track CME credits, training hours, and continuing education requirements for medical staff.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Board Certification</h3>
                  <p className="text-body text-slate-600">
                    Manage board certifications, renewals, and specialty-specific training requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-card p-8 border border-slate-200">
              <h3 className="text-h4 text-slate-900 mb-4">Clinical Competencies</h3>
              <div className="space-y-3">
                {['Patient safety training', 'Clinical skills assessment', 'Protocol compliance'].map((item) => (
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

      <section className="section bg-gradient-to-br from-red-600 to-pink-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Ensure Healthcare Staff Compliance</h2>
          <Button href="#contact" variant="ghost" size="large">
            Book Healthcare Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
