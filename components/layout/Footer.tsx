'use client'

import { Linkedin, Twitter, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  
  const quickLinks = [
    { href: '#features', label: t('product') },
    { href: '#pricing', label: t('pricing') },
    { href: '#testimonials', label: t('caseStudies') },
    { href: '#faq', label: t('faq') },
  ]

  const legalLinks = [
    { href: '/privacy', label: t('privacy') },
    { href: '/terms', label: t('terms') },
    { href: '/gdpr', label: t('gdpr') },
  ]
  return (
    <footer className="bg-navy-dark text-white">
      <div className="h-1 bg-primary" />
      
      <div className="container-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-xl">
                T
              </div>
              <span className="text-xl font-bold">TCMS</span>
            </div>
            <p className="text-text-light text-sm mb-4">
              {t('tagline')}
            </p>
            <p className="text-text-light text-xs">
              {t('copyright')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-text-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('legal')}</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-text-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex gap-4">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
