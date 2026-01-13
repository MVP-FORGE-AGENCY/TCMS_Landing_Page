'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Heart, Ship, Zap } from 'lucide-react';

export default function Industries() {
  const t = useTranslations('industries');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const industries = [
    {
      icon: Plane,
      title: t('aviation.title'),
      description: t('aviation.description'),
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue',
    },
    {
      icon: Heart,
      title: t('healthcare.title'),
      description: t('healthcare.description'),
      gradient: 'from-red-500 to-pink-500',
      color: 'red',
    },
    {
      icon: Ship,
      title: t('maritime.title'),
      description: t('maritime.description'),
      gradient: 'from-indigo-500 to-blue-500',
      color: 'indigo',
    },
    {
      icon: Zap,
      title: t('energy.title'),
      description: t('energy.description'),
      gradient: 'from-yellow-500 to-orange-500',
      color: 'yellow',
    },
  ];

  return (
    <section
      id="industries"
      ref={ref}
      className="section-padding bg-white relative overflow-hidden"
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
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-slate-200 hover:border-blue-300 transition-all shadow-xl hover:shadow-2xl overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-slate-900 mb-4 relative z-10">
                  {industry.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                  {industry.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${industry.gradient} opacity-5 rounded-full blur-2xl`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
