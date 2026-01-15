'use client'

import { motion } from 'framer-motion'
import { Tablet, FileText, Cloud, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function PaperlessWorkflowPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Tablet className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              Digital Signatures and Document Management
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Mobile-optimized interface works on tablets for instructors in simulators and training facilities. 
              Secure cloud storage for all documents.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Mobile Optimized"
                subtitle="Sign anywhere, anytime"
                centered={false}
              />
              <p className="text-body-lg text-slate-600 mb-6">
                The signature interface is fully responsive and optimized for tablets. 
                Instructors commonly use iPads in simulators and training facilities for seamless signing.
              </p>
              <div className="space-y-4">
                {[
                  'Works on all tablet devices',
                  'Touch-optimized interface',
                  'Offline capability',
                  'Canvas-based signatures'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-body text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <Tablet className="w-32 h-32 text-purple-600" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-lg">
          <SectionHeading 
            title="Secure Cloud Storage"
            subtitle="Supabase Storage securely hosts thousands of PDFs and certificates"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: "Encrypted Storage",
                description: "All documents encrypted at rest with enterprise-grade security"
              },
              {
                icon: FileText,
                title: "Unlimited Capacity",
                description: "Store unlimited PDFs, certificates, and training documents"
              },
              {
                icon: CheckCircle,
                title: "Instant Access",
                description: "Retrieve any document instantly for audits or reporting"
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
                  className="bg-white rounded-card p-6 border border-slate-200"
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

      <section className="section bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Go Completely Paperless</h2>
          <Button href="#contact" variant="ghost" size="large">
            Start Paperless Workflow
          </Button>
        </div>
      </section>
    </div>
  )
}
