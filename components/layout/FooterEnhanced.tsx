'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Youtube, Mail, Send, Shield, ArrowRight, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function FooterEnhanced() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  
  const locale = pathname?.split('/')[1] || 'en'
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }
  
  const footerLinks = {
    solutions: [
      { label: tNav('solutions.trainingCompliance'), href: `/${locale}/solutions/training-compliance` },
      { label: tNav('solutions.proficiencyChecks'), href: `/${locale}/solutions/proficiency-checks` },
      { label: tNav('solutions.auditReporting'), href: `/${locale}/solutions/audit-reporting` },
      { label: tNav('solutions.digitalSignatures'), href: `/${locale}/solutions/digital-signatures` },
    ],
    industries: [
      { label: tNav('industries.airlines'), href: `/${locale}/industries/airlines` },
      { label: tNav('industries.flightSchools'), href: `/${locale}/industries/flight-schools` },
      { label: tNav('industries.mros'), href: `/${locale}/industries/mros` },
      { label: tNav('industries.groundHandling'), href: `/${locale}/industries/ground-handling` },
    ],
    product: [
      { label: tNav('product.trafficLight'), href: `/${locale}/product/traffic-light-dashboard` },
      { label: tNav('product.automatedTracking'), href: `/${locale}/product/automated-tracking` },
      { label: tNav('product.complianceReports'), href: `/${locale}/product/compliance-reports` },
      { label: tNav('product.enterpriseSecurity'), href: `/${locale}/product/enterprise-security` },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  }
  
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]
  
  const certifications = [
    { icon: '🛡️', label: 'SOC 2 Type II' },
    { icon: '🇪🇺', label: 'GDPR Compliant' },
    { icon: '✈️', label: 'EASA Compatible' },
    { icon: '🔒', label: 'ISO 27001' },
  ]
  
  return (
    <footer className="relative bg-[#0a0f1a] text-white overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-lg relative">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
              >
                <Mail className="w-4 h-4" />
                Stay Updated
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Get compliance insights delivered
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60"
              >
                Join 5,000+ aviation professionals. Monthly tips on compliance, 
                training management, and industry updates.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {isSubscribed ? (
                <div className="flex items-center gap-3 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">You're subscribed!</div>
                    <div className="text-sm text-white/60">Check your inbox for a welcome email.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 rounded-xl font-semibold text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
                  >
                    Subscribe
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
              <p className="text-xs text-white/40 mt-3">
                No spam, ever. Unsubscribe anytime. By subscribing, you agree to our Privacy Policy.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CertifyCloud</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              {t('tagline')}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">{tNav('solutionsLabel')}</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-4">{tNav('industriesLabel')}</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">{tNav('productLabel')}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"
              >
                <span className="text-lg">{cert.icon}</span>
                <span className="text-sm text-white/70">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              {t('copyright')}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href={`/${locale}/privacy`} className="text-white/50 hover:text-white transition-colors">
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="text-white/50 hover:text-white transition-colors">
                {t('terms')}
              </Link>
              <Link href={`/${locale}/gdpr`} className="text-white/50 hover:text-white transition-colors">
                {t('gdpr')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
