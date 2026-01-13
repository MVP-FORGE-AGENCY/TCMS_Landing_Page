'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Иван Петров',
      role: 'Training Manager',
      company: 'Bulgarian Airways',
      content: 'TCMS трансформира начина, по който управляваме обученията. Намалихме административното време с 70%.',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Мария Георгиева',
      role: 'Compliance Officer',
      company: 'Hemus Air',
      content: 'Одитите вече не са стресиращи. Всичко е на едно място, цифрово и винаги актуално.',
      rating: 5,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Георги Димитров',
      role: 'Chief Pilot',
      company: 'Air Sofia',
      content: 'Като пилот оценявам прозрачността. Винаги знам какви обучения имам и кога изтичат.',
      rating: 5,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Какво казват клиентите</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Реални отзиви от авиационни професионалисти
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-8 bg-white rounded-2xl shadow-xl border border-slate-200 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-blue-600" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 text-lg mb-6 flex-grow relative z-10 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 relative z-10">
                  {/* Avatar Placeholder */}
                  <ImagePlaceholder
                    className="w-12 h-12 flex-shrink-0"
                    gradient={testimonial.gradient}
                    animate={false}
                  />
                  <div>
                    <div className="font-bold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-slate-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
