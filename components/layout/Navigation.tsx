'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Plane } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { DropdownNav } from '@/components/ui/DropdownNav'
import { cn } from '@/lib/cn'

export function Navigation() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Extract locale from pathname (e.g., /en/... or /bg/...)
  const locale = pathname?.split('/')[1] || 'en'

  // Solutions dropdown items
  const solutionsItems = [
    { 
      label: t('solutions.trainingCompliance'), 
      href: `/${locale}/solutions/training-compliance`,
      description: t('solutions.trainingComplianceDesc')
    },
    { 
      label: t('solutions.proficiencyChecks'), 
      href: `/${locale}/solutions/proficiency-checks`,
      description: t('solutions.proficiencyChecksDesc')
    },
    { 
      label: t('solutions.auditReporting'), 
      href: `/${locale}/solutions/audit-reporting`,
      description: t('solutions.auditReportingDesc')
    },
    { 
      label: t('solutions.digitalSignatures'), 
      href: `/${locale}/solutions/digital-signatures`,
      description: t('solutions.digitalSignaturesDesc')
    },
  ]

  // Industries dropdown items
  const industriesItems = [
    { 
      label: t('industries.airlines'), 
      href: `/${locale}/industries/airlines`,
      description: t('industries.airlinesDesc')
    },
    { 
      label: t('industries.flightSchools'), 
      href: `/${locale}/industries/flight-schools`,
      description: t('industries.flightSchoolsDesc')
    },
    { 
      label: t('industries.mros'), 
      href: `/${locale}/industries/mros`,
      description: t('industries.mrosDesc')
    },
    { 
      label: t('industries.groundHandling'), 
      href: `/${locale}/industries/ground-handling`,
      description: t('industries.groundHandlingDesc')
    },
    { 
      label: t('industries.maritime'), 
      href: `/${locale}/industries/maritime`,
      description: t('industries.maritimeDesc')
    },
    { 
      label: t('industries.healthcare'), 
      href: `/${locale}/industries/healthcare`,
      description: t('industries.healthcareDesc')
    },
  ]

  // Product dropdown items
  const productItems = [
    { 
      label: t('product.trafficLight'), 
      href: `/${locale}/product/traffic-light-dashboard`,
      description: t('product.trafficLightDesc')
    },
    { 
      label: t('product.automatedTracking'), 
      href: `/${locale}/product/automated-tracking`,
      description: t('product.automatedTrackingDesc')
    },
    { 
      label: t('product.paperlessWorkflow'), 
      href: `/${locale}/product/paperless-workflow`,
      description: t('product.paperlessWorkflowDesc')
    },
    { 
      label: t('product.lpcOpc'), 
      href: `/${locale}/product/lpc-opc-management`,
      description: t('product.lpcOpcDesc')
    },
    { 
      label: t('product.complianceReports'), 
      href: `/${locale}/product/compliance-reports`,
      description: t('product.complianceReportsDesc')
    },
    { 
      label: t('product.enterpriseSecurity'), 
      href: `/${locale}/product/enterprise-security`,
      description: t('product.enterpriseSecurityDesc')
    },
  ]

  const navLinks = [
    { href: '#pricing', label: t('pricing') },
    { href: '#faq', label: t('faq') },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
          : 'bg-transparent'
      )}
    >
      <div className="container-lg flex items-center justify-between h-20">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <div className={cn(
            'w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300',
            scrolled 
              ? 'bg-primary text-white' 
              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
          )}>
            <Plane className="w-5 h-5" />
          </div>
          <span className={cn(
            'text-xl font-bold tracking-tight transition-colors',
            scrolled ? 'text-slate-900' : 'text-white'
          )}>
            TCMS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownNav 
            label={t('solutionsLabel')} 
            items={solutionsItems} 
            scrolled={scrolled}
          />
          <DropdownNav 
            label={t('industriesLabel')} 
            items={industriesItems} 
            scrolled={scrolled}
          />
          <DropdownNav 
            label={t('productLabel')} 
            items={productItems} 
            scrolled={scrolled}
          />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors relative group',
                scrolled 
                  ? 'text-slate-600 hover:text-primary' 
                  : 'text-white/80 hover:text-white'
              )}
            >
              {link.label}
              <span className={cn(
                'absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full',
                scrolled ? 'bg-primary' : 'bg-white'
              )} />
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher scrolled={scrolled} />
          <Button 
            href="#contact" 
            variant={scrolled ? 'primary' : 'ghost'}
            size="default"
          >
            {t('bookDemo')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={cn('w-6 h-6', scrolled ? 'text-slate-900' : 'text-white')} />
          ) : (
            <Menu className={cn('w-6 h-6', scrolled ? 'text-slate-900' : 'text-white')} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-200 shadow-lg"
        >
          <div className="container-lg py-6 space-y-4">
            {/* Solutions */}
            <div>
              <div className="font-semibold text-slate-900 mb-2">{t('solutionsLabel')}</div>
              <div className="pl-4 space-y-2">
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-slate-600 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <div className="font-semibold text-slate-900 mb-2">{t('industriesLabel')}</div>
              <div className="pl-4 space-y-2">
                {industriesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-slate-600 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <div className="font-semibold text-slate-900 mb-2">{t('productLabel')}</div>
              <div className="pl-4 space-y-2">
                {productItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-slate-600 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-slate-700 hover:text-primary font-medium transition-colors border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex items-center justify-between">
              <LanguageSwitcher scrolled={true} />
            </div>
            <Button href="#contact" variant="primary" className="w-full">
              {t('bookDemo')}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
