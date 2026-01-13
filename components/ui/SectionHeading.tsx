import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  light = false,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'max-w-3xl mb-16',
      centered && 'mx-auto text-center',
      className
    )}>
      <h2 className={cn(
        'text-heading-sm md:text-heading font-bold mb-4',
        light ? 'text-white' : 'text-text-dark'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-body-lg',
          light ? 'text-white/80' : 'text-text-medium'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
