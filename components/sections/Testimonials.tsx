'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Testimonials() {
  const t = useTranslations('testimonials')
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      quote: t('testimonial1.quote'),
      author: t('testimonial1.author'),
      role: t('testimonial1.role'),
      company: t('testimonial1.company'),
      metric: t('testimonial1.metric'),
    },
    {
      quote: t('testimonial2.quote'),
      author: t('testimonial2.author'),
      role: t('testimonial2.role'),
      company: t('testimonial2.company'),
      metric: t('testimonial2.metric'),
    },
    {
      quote: t('testimonial3.quote'),
      author: t('testimonial3.author'),
      role: t('testimonial3.role'),
      company: t('testimonial3.company'),
      metric: t('testimonial3.metric'),
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-lg">
        <SectionHeading title={t('title')} />
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-surface-light rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent" />
                
                <div className="flex-grow">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-xl md:text-2xl italic text-text-dark mb-6 leading-relaxed">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-bold text-text-dark text-lg">
                        {testimonials[current].author}
                      </div>
                      <div className="text-text-medium">
                        {testimonials[current].role}
                      </div>
                      <div className="text-sm text-text-medium">
                        {testimonials[current].company}
                      </div>
                    </div>
                    
                    <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-xs text-primary font-semibold">Key Metric</div>
                      <div className="text-sm font-bold text-text-dark">
                        {testimonials[current].metric}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-text-dark" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-text-dark" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 rounded-full transition-all ${
                  i === current ? 'bg-primary w-8' : 'bg-gray-300 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
