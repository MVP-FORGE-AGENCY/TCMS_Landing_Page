'use client'

import { motion } from 'framer-motion'
import { Wrench, FileCheck, Shield, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function MROsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Wrench className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              The Operating System for MRO Compliance
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Technician certification tracking, maintenance training compliance, and Part-145 compliance 
              for Maintenance, Repair, and Overhaul organizations.
            </p>
            <Button href="#contact" variant="ghost" size="large">
              See MRO Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Complete Maintenance Training Records"
            subtitle="Track technician licenses, type ratings, and tool certifications"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileCheck,
                title: "Technician Certification",
                description: "Track licenses, ratings, and authorizations for all maintenance personnel"
              },
              {
                icon: Wrench,
                title: "Type Ratings",
                description: "Manage aircraft-specific type ratings and recurrent training requirements"
              },
              {
                icon: Shield,
                title: "Part-145 Compliance",
                description: "Ensure compliance with EASA Part-145 maintenance organization requirements"
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

      <section className="section bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Maintain Compliance for MRO Operations</h2>
          <Button href="#contact" variant="ghost" size="large">
            Book MRO Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
