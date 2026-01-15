'use client'

import { motion } from 'framer-motion'
import { Truck, MapPin, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function GroundHandlingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Truck className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              The Operating System for Ground Handling Compliance
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Ground staff training, safety compliance tracking, and multi-site management for ground handling operations.
            </p>
            <Button href="#contact" variant="ghost" size="large">
              See Ground Handling Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Multi-Site Training Coordination"
            subtitle="Manage training compliance across multiple locations and bases"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Ground Staff Training</h3>
                  <p className="text-body text-slate-600">
                    Track training for baggage handlers, ramp agents, and ground support equipment operators.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">Multi-Site Management</h3>
                  <p className="text-body text-slate-600">
                    Centralized compliance management with site-specific training requirements and reporting.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-card p-8 border border-slate-200">
              <h3 className="text-h4 text-slate-900 mb-4">Equipment Certification</h3>
              <div className="space-y-3">
                {['GSE operator licenses', 'Safety training', 'Equipment-specific certifications'].map((item) => (
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

      <section className="section bg-gradient-to-br from-green-600 to-emerald-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Ensure Ground Operations Compliance</h2>
          <Button href="#contact" variant="ghost" size="large">
            Book Ground Handling Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
