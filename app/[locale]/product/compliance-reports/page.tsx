'use client'

import { motion } from 'framer-motion'
import { FileText, Download, FileSpreadsheet, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function ComplianceReportsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-display-sm md:text-display mb-6">
              EASA-Compliant PDF Dossiers
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Customizable EJS templates match your brand. Export CSV for data analysis or PDF for official records.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lg">
          <SectionHeading 
            title="Customizable Report Templates"
            subtitle="EJS templates customized to match your brand and requirements"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-card p-8 border-4 border-slate-200 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">Employee Training Dossier</h3>
                <div className="px-3 py-1 bg-success-veryLight rounded-full">
                  <span className="text-xs font-semibold text-success">EASA Compliant</span>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {['LPC Certificate', 'OPC Certificate', 'Medical Certificate'].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>{cert} - Valid until 2025-12-31</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-500">
                Generated: {new Date().toLocaleDateString()} | Audit Trail: Complete
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">PDF Export</h3>
                  <p className="text-body text-slate-600">
                    Official records formatted for audits and regulatory submissions. 
                    Includes all certificates, signatures, and audit trails.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileSpreadsheet className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-h5 text-slate-900 mb-2">CSV Export</h3>
                  <p className="text-body text-slate-600">
                    Data exports for analysis in Excel or other tools. 
                    Perfect for custom reporting and data analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-lg text-center">
          <h2 className="text-h2 md:text-heading mb-4">Generate Compliance Reports Instantly</h2>
          <Button href="#contact" variant="primary" size="large">
            See Report Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
