'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/cn'

const languages = [
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]

interface LanguageSwitcherProps {
  scrolled?: boolean
}

export function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'bg'
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLanguage = (langCode: string) => {
    const segments = pathname.split('/')
    segments[1] = langCode
    const newPath = segments.join('/')
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
          scrolled 
            ? 'text-text-medium hover:text-primary hover:bg-gray-100' 
            : 'text-white/80 hover:text-white hover:bg-white/10'
        )}
        aria-label="Switch language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
                currentLocale === lang.code
                  ? 'bg-primary text-white'
                  : 'text-text-dark hover:bg-gray-50'
              )}
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="flex-1">
                <div className="font-medium">{lang.name}</div>
                <div className={cn(
                  'text-xs',
                  currentLocale === lang.code ? 'text-white/80' : 'text-text-light'
                )}>
                  {lang.code.toUpperCase()}
                </div>
              </div>
              {currentLocale === lang.code && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}
