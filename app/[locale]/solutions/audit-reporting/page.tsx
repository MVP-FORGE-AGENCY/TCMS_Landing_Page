'use client'

import { motion } from 'framer-motion'
import { FileText, Download, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function AuditReportingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-display-sm md:text-display mb-6">
              Survive Your Next Audit Without the Stress
            </h1>
            <p className="text-body-lg text-slate-300 mb-8">
              Generate EASA-compliant audit dossiers in seconds. Complete audit trails with immutable logs.
            </p>
            <Button href="#contact" variant="primary" size="large">
              Get Audit-Ready
            </Button>
          </motion.div>
        </div>
      </section>

      {/* One-Click Dossiers */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="One-Click Compliance Dossiers"
                subtitle="Every certificate, check result, and signature in one PDF"
                centered={false}
              />
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">Complete Employee Records</h3>
                    <p className="text-body text-slate-600">
                      Generate a comprehensive PDF dossier for any employee containing all training records, 
                      proficiency checks, certificates, and digital signatures.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success-veryLight flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">EASA Compliant Format</h3>
                    <p className="text-body text-slate-600">
                      Reports automatically formatted to meet EASA ADR.OR.D.017 requirements with official stamps and watermarks.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-h5 text-slate-900 mb-2">Generated in Seconds</h3>
                    <p className="text-body text-slate-600">
                      What used to take days of manual compilation now takes seconds. Export individual or bulk reports instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-2xl border-4 border-slate-200 p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">Employee Training Dossier</h3>
                    <div className="px-3 py-1 bg-success-veryLight rounded-full">
                      <span className="text-xs font-semibold text-success">EASA Compliant</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>LPC Certificate - Valid until 2025-12-31</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>OPC Certificate - Valid until 2025-11-15</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Medical Certificate - Valid until 2026-03-20</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-xs text-slate-500">
                      Generated: {new Date().toLocaleDateString()} | Audit Trail: Complete
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immutable Audit Log */}
      <section className="section bg-slate-50">
        <div className="container-lg">
          <SectionHeading 
            title="Immutable Audit Trail"
            subtitle="Every change is permanently recorded with complete traceability"
          />
          
          <div className="max-w-4xl mx-auto bg-white rounded-card p-8 shadow-xl border border-slate-200">
            <div className="space-y-4">
              {[
                { action: "Grade Changed", user: "John Assessor", time: "2025-01-15 14:32:15", ip: "192.168.1.45", details: "Element: Engine Failure - Changed from 3 to 4" },
                { action: "Check Completed", user: "System", time: "2025-01-15 14:35:22", ip: "System", details: "Overall Result: Pass" },
                { action: "Signature Added", user: "Jane Trainee", time: "2025-01-15 14:36:10", ip: "192.168.1.102", details: "Canvas signature captured" },
              ].map((log, i) => (
                <div key={i} className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <span className="font-semibold text-slate-900">{log.action}</span>
                      <span className="text-sm text-slate-500 ml-2">by {log.user}</span>
                    </div>
                    <span className="text-xs text-slate-400">{log.time}</span>
                  </div>
                  <div className="text-sm text-slate-600">{log.details}</div>
                  <div className="text-xs text-slate-400 mt-1">IP: {log.ip}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Never Stress About Audits Again</h2>
          <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Generate complete compliance reports in seconds. Pass audits with confidence.
          </p>
          <Button href="#contact" variant="primary" size="large">
            Get Audit-Ready
          </Button>
        </div>
      </section>
    </div>
  )
}
