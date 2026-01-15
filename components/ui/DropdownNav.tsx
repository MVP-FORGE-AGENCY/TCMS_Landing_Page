'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { cn } from '@/lib/cn'

interface DropdownItem {
  label: string
  href: string
  description?: string
}

interface DropdownNavProps {
  label: string
  items: DropdownItem[]
  scrolled: boolean
}

export function DropdownNav({ label, items, scrolled }: DropdownNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-1 font-medium transition-colors relative group',
          scrolled 
            ? 'text-slate-600 hover:text-primary' 
            : 'text-white/80 hover:text-white'
        )}
      >
        {label}
        <ChevronDown className={cn(
          'w-4 h-4 transition-transform duration-200',
          isOpen && 'rotate-180'
        )} />
        <span className={cn(
          'absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full',
          scrolled ? 'bg-primary' : 'bg-white'
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'absolute top-full left-0 mt-2 w-72 rounded-lg shadow-xl border z-50 overflow-hidden',
              scrolled 
                ? 'bg-white border-slate-200' 
                : 'bg-white/95 backdrop-blur-md border-white/20'
            )}
          >
            <div className="py-2">
              {items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-4 py-3 transition-colors border-b border-slate-100 last:border-b-0 group',
                    'hover:bg-primary/5',
                    index === 0 && 'rounded-t-lg',
                    index === items.length - 1 && 'rounded-b-lg'
                  )}
                >
                  <div className="font-semibold text-slate-900 text-sm group-hover:text-primary transition-colors">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
