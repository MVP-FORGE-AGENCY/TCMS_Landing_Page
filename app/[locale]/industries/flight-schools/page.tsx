'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Clock, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function FlightSchoolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              The Operating System for Flight School Compliance
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Student progression tracking, instructor certification management, and course scheduling automation 
              for flight training organizations.
            </p>
            <Button href="#contact" variant="ghost" size="large">
              See Flight School Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Student Progression Management"
            subtitle="Track 500+ students simultaneously with automated progression workflows"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Theory vs. Practical Tracking</h3>
                  <p className="text-body text-slate-600">
                    Separate tracking for ground school hours and flight hours with automated validation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Hour Logging</h3>
                  <p className="text-body text-slate-600">
                    Automated hour tracking with instructor verification and digital signatures.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Instructor Certification</h3>
                  <p className="text-body text-slate-600">
                    Manage instructor qualifications, ratings, and authorization to teach specific courses.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-card p-8 border border-slate-200">
              <h3 className="text-h4 text-slate-900 mb-4">Graduation Requirements</h3>
              <div className="space-y-3">
                {['Minimum flight hours', 'Theory exam completion', 'Practical check completion', 'Medical certificate'].map((req) => (
                  <div key={req} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-body text-slate-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Streamline Flight School Operations</h2>
          <Button href="#contact" variant="ghost" size="large">
            Book Flight School Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
