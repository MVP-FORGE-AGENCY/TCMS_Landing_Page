import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  badge?: string
  className?: string
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  light = false,
  badge,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'max-w-3xl mb-16',
      centered && 'mx-auto text-center',
      className
    )}>
      {badge && (
        <span className={cn(
          'inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4',
          light 
            ? 'bg-white/10 text-white border border-white/20' 
            : 'bg-primary/10 text-primary'
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        'text-h2 md:text-heading font-bold mb-4',
        light ? 'text-white' : 'text-slate-900'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-body-lg',
          light ? 'text-slate-300' : 'text-slate-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
