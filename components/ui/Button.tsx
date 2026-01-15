'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'success' | 'warning' | 'danger'
  size?: 'default' | 'large'
  href?: string
  className?: string
  icon?: React.ReactNode
  onClick?: () => void
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  href,
  className,
  icon,
  onClick
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-lg 
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
  `
  
  const variants = {
    primary: `
      bg-[#0066FF] text-white 
      hover:bg-[#0052CC] hover:text-white hover:shadow-lg hover:-translate-y-0.5
      active:bg-[#0041A3] active:translate-y-0
      focus:ring-blue-500
    `,
    secondary: `
      bg-slate-100 text-slate-900 border border-slate-300
      hover:bg-slate-50 hover:text-slate-900 hover:shadow-lg
      active:bg-slate-200
      focus:ring-slate-400
    `,
    ghost: `
      bg-transparent border-2 border-white/30 text-white
      hover:bg-white/10 hover:border-white/50 hover:text-white
      focus:ring-white/50
    `,
    outline: `
      bg-transparent border-2 border-[#0066FF] text-[#0066FF]
      hover:bg-[#0066FF] hover:text-white
      focus:ring-blue-500
    `,
    success: `
      bg-emerald-500 text-white
      hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:-translate-y-0.5
      active:translate-y-0
      focus:ring-emerald-500
    `,
    warning: `
      bg-amber-500 text-white
      hover:bg-amber-600 hover:text-white hover:shadow-lg hover:-translate-y-0.5
      active:translate-y-0
      focus:ring-amber-500
    `,
    danger: `
      bg-red-500 text-white
      hover:bg-red-600 hover:text-white hover:shadow-lg hover:-translate-y-0.5
      active:translate-y-0
      focus:ring-red-500
    `,
  }
  
  const sizes = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg min-h-[60px]',
  }
  
  const Component = href ? motion.a : motion.button
  
  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {icon}
      {children}
    </Component>
  )
}
