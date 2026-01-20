'use client'

import { Linkedin, Twitter, Mail, Plane } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const pathname = usePathname()
  
  // Extract locale from pathname (e.g., /en/... or /bg/...)
  const locale = pathname?.split('/')[1] || 'en'
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`
  
  // Solutions dropdown items
  const solutionsItems = [
    { 
      label: tNav('solutions.trainingCompliance'), 
      href: `/${locale}/solutions/training-compliance`,
    },
    { 
      label: tNav('solutions.proficiencyChecks'), 
      href: `/${locale}/solutions/proficiency-checks`,
    },
    { 
      label: tNav('solutions.auditReporting'), 
      href: `/${locale}/solutions/audit-reporting`,
    },
    { 
      label: tNav('solutions.digitalSignatures'), 
      href: `/${locale}/solutions/digital-signatures`,
    },
  ]

  // Industries dropdown items
  const industriesItems = [
    { 
      label: tNav('industries.airlines'), 
      href: `/${locale}/industries/airlines`,
    },
    { 
      label: tNav('industries.flightSchools'), 
      href: `/${locale}/industries/flight-schools`,
    },
    { 
      label: tNav('industries.mros'), 
      href: `/${locale}/industries/mros`,
    },
    { 
      label: tNav('industries.groundHandling'), 
      href: `/${locale}/industries/ground-handling`,
    },
    { 
      label: tNav('industries.maritime'), 
      href: `/${locale}/industries/maritime`,
    },
    { 
      label: tNav('industries.healthcare'), 
      href: `/${locale}/industries/healthcare`,
    },
  ]

  // Product dropdown items
  const productItems = [
    { 
      label: tNav('product.trafficLight'), 
      href: `/${locale}/product/traffic-light-dashboard`,
    },
    { 
      label: tNav('product.automatedTracking'), 
      href: `/${locale}/product/automated-tracking`,
    },
    { 
      label: tNav('product.paperlessWorkflow'), 
      href: `/${locale}/product/paperless-workflow`,
    },
    { 
      label: tNav('product.lpcOpc'), 
      href: `/${locale}/product/lpc-opc-management`,
    },
    { 
      label: tNav('product.complianceReports'), 
      href: `/${locale}/product/compliance-reports`,
    },
    { 
      label: tNav('product.enterpriseSecurity'), 
      href: `/${locale}/product/enterprise-security`,
    },
  ]
  
  const quickLinks = [
    { href: isHomePage ? '#features' : `/${locale}/#features`, label: t('product') },
    { href: isHomePage ? '#pricing' : `/${locale}/#pricing`, label: t('pricing') },
    { href: isHomePage ? '#testimonials' : `/${locale}/#testimonials`, label: t('caseStudies') },
    { href: isHomePage ? '#faq' : `/${locale}/#faq`, label: t('faq') },
  ]

  const legalLinks = [
    { href: `/${locale}/privacy`, label: t('privacy') },
    { href: `/${locale}/terms`, label: t('terms') },
    { href: `/${locale}/gdpr`, label: t('gdpr') },
  ]
  
  return (
    <footer className="bg-navy-dark text-white">
      {/* Brand Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-success to-primary" />
      
      <div className="container-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">CertifyCloud</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {t('tagline')}
            </p>
            <p className="text-slate-500 text-xs mb-6">
              {t('copyright')}
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Mail, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{tNav('solutionsLabel')}</h3>
            <ul className="space-y-3">
              {solutionsItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{tNav('industriesLabel')}</h3>
            <ul className="space-y-3">
              {industriesItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{tNav('productLabel')}</h3>
            <ul className="space-y-3">
              {productItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('quickLinks')}</h3>
            <ul className="space-y-3 mb-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('legal')}</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            Built for aviation compliance. EASA & FAA standards.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500">🇪🇺 EU Data Residency</span>
            <span className="text-xs text-slate-500">🔒 SOC 2 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
