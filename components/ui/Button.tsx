'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'default' | 'large'
  href?: string
  className?: string
  icon?: React.ReactNode
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  href,
  className,
  icon 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300'
  
  const variants = {
    primary: 'bg-primary text-white hover:shadow-xl hover:-translate-y-1',
    secondary: 'bg-transparent border-2 border-white/30 text-white hover:bg-white/10',
    ghost: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }
  
  const sizes = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg min-h-[60px]',
  }
  
  const Component = href ? motion.a : motion.button
  
  return (
    <Component
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {icon}
      {children}
    </Component>
  )
}
