'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export function Navigation() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: t('features') },
    { href: '#industries', label: t('industries') },
    { href: '#pricing', label: t('pricing') },
    { href: '#faq', label: t('faq') },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container-lg flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className={cn(
            'w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl',
            scrolled ? 'bg-primary text-white' : 'bg-white text-primary'
          )}>
            T
          </div>
          <span className={cn(
            'text-xl font-bold',
            scrolled ? 'text-text-dark' : 'text-white'
          )}>
            TCMS
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors',
                scrolled ? 'text-text-medium hover:text-primary' : 'text-white/80 hover:text-white'
              )}
            >
              {link.label}
            </a>
          ))}
          <Button 
            href="#contact" 
            variant={scrolled ? 'primary' : 'secondary'}
            size="default"
          >
            {t('bookDemo')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? 'text-text-dark' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-text-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container-lg py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-text-dark hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="w-full">
              {t('bookDemo')}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
