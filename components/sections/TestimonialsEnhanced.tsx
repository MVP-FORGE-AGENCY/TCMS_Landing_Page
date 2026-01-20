'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, Play } from 'lucide-react'
import { useTranslations } from 'next-intl'

const testimonials = [
  {
    id: 1,
    quote: "CertifyCloud reduced our training admin workload by 80%. We went from weekly spreadsheet updates to real-time compliance visibility. The ROI was immediate.",
    author: "John Mitchell",
    role: "Training Manager",
    company: "Regional Airline (150 pilots)",
    image: null, // Placeholder
    metric: { value: "80%", label: "Admin reduction" },
    rating: 5,
  },
  {
    id: 2,
    quote: "During our last EASA audit, we generated all required documentation in under 2 hours. Previously, it took our team 3 days to compile paper records. The auditors were impressed.",
    author: "Sarah Chen",
    role: "Compliance Officer",
    company: "International Flight Academy",
    image: null,
    metric: { value: "2hrs", label: "vs 3 days audit prep" },
    rating: 5,
  },
  {
    id: 3,
    quote: "The traffic light dashboard changed everything. Our operations director can now see fleet readiness instantly without requesting reports. We've had zero expired qualifications since implementation.",
    author: "David Larsson",
    role: "Operations Manager",
    company: "Charter Operator (45 crew)",
    image: null,
    metric: { value: "0", label: "Compliance violations" },
    rating: 5,
  },
  {
    id: 4,
    quote: "Implementation was seamless. The team migrated our 5 years of training records in just one week. Our instructors love the digital signature feature - no more chasing paper forms.",
    author: "Maria Rodriguez",
    role: "Chief Flight Instructor",
    company: "AeroTech Training Center",
    image: null,
    metric: { value: "7 days", label: "Full implementation" },
    rating: 5,
  },
]

const stats = [
  { value: '10,000+', label: 'Crew Members Tracked' },
  { value: '500+', label: 'Organizations Worldwide' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9/5', label: 'Customer Rating' },
]

export function TestimonialsEnhanced() {
  const t = useTranslations('testimonials')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  
  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [])
  
  const current = testimonials[currentIndex]
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }
  
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-4">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            Customer Stories
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by aviation leaders{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="text-xl text-white/60">
            See how organizations are transforming their compliance management
          </p>
        </motion.div>
        
        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative min-h-[400px] md:min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                    "{current.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar placeholder */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-xl font-bold">
                        {current.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{current.author}</div>
                        <div className="text-sm text-white/60">{current.role}</div>
                        <div className="text-sm text-primary">{current.company}</div>
                      </div>
                    </div>
                    
                    {/* Metric */}
                    <div className="bg-white/10 rounded-xl px-6 py-3 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{current.metric.value}</div>
                      <div className="text-xs text-white/60">{current.metric.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1)
                    setCurrentIndex(i)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Video Testimonial CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white text-lg">Watch Customer Stories</div>
              <div className="text-white/60">See how SkyWings Airlines achieved 100% compliance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
