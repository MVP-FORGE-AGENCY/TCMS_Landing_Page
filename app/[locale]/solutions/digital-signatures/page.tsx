'use client'

import { motion } from 'framer-motion'
import { PenTool, Shield, Tablet, Key, Lock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function DigitalSignaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-display-sm md:text-display mb-6">
              Legally Binding Signatures. No Paper Required.
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Canvas-based digital signatures with cryptographic verification. 
              Non-repudiation guaranteed with IP, timestamp, and user agent capture.
            </p>
            <Button href="#contact" variant="ghost" size="large">
              Go Completely Paperless
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Signature Methods */}
      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Two Signature Methods"
            subtitle="Choose the method that works best for your workflow"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Canvas Pad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-card p-8 border border-slate-200"
            >
              <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Tablet className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-h4 text-slate-900 mb-4">Canvas Pad</h3>
              <p className="text-body text-slate-600 mb-6">
                Detailed signature capture on tablets and touch devices. Perfect for formal assessments 
                and detailed signing during training sessions.
              </p>
              <div className="bg-white rounded-lg p-6 border-2 border-dashed border-slate-300 h-32 flex items-center justify-center">
                <PenTool className="w-8 h-8 text-slate-400" />
              </div>
            </motion.div>

            {/* PIN Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-card p-8 border border-slate-200"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <Key className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-h4 text-slate-900 mb-4">PIN Authentication</h3>
              <p className="text-body text-slate-600 mb-6">
                Quick instructor sign-offs using secure PIN codes. Fast and efficient for high-volume 
                training sessions and routine approvals.
              </p>
              <div className="bg-white rounded-lg p-6 border-2 border-slate-300 h-32 flex items-center justify-center">
                <div className="flex gap-2">
                  {[1,2,3,4].map((n) => (
                    <div key={n} className="w-3 h-3 rounded-full bg-slate-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section bg-slate-50">
        <div className="container-lg">
          <SectionHeading 
            title="Non-Repudiation Guaranteed"
            subtitle="Every signature is cryptographically verified and legally binding"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "IP Address Capture",
                description: "Every signature records the signer's IP address for complete traceability"
              },
              {
                icon: Lock,
                title: "Timestamp Verification",
                description: "Cryptographic timestamps ensure signatures cannot be backdated or altered"
              },
              {
                icon: CheckCircle,
                title: "User Agent Logging",
                description: "Device and browser information captured for additional verification"
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
                  className="bg-white rounded-card p-6 border border-slate-200 shadow-card"
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

      {/* Mobile Optimized */}
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
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-body text-slate-700">Works on all tablet devices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-body text-slate-700">Touch-optimized interface</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-body text-slate-700">Offline capability</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 aspect-[9/16] max-w-xs mx-auto flex items-center justify-center">
                <div className="text-center">
                  <Tablet className="w-24 h-24 text-purple-600 mx-auto mb-4" />
                  <div className="text-sm font-semibold text-slate-900">Signature Pad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Eliminate Paper Completely</h2>
          <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Go paperless with legally binding digital signatures. Reduce costs and improve efficiency.
          </p>
          <Button href="#contact" variant="ghost" size="large">
            Go Paperless
          </Button>
        </div>
      </section>
    </div>
  )
}
