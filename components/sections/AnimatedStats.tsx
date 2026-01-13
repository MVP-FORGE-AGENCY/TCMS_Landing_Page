'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  Target,
  Zap,
} from 'lucide-react';

export default function AnimatedStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Надеждност',
      color: 'from-green-500 to-emerald-500',
      delay: 0,
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Активни потребители',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1,
    },
    {
      icon: Clock,
      value: '80%',
      label: 'По-бързо',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2,
    },
    {
      icon: Award,
      value: '100%',
      label: 'Съответствие',
      color: 'from-orange-500 to-red-500',
      delay: 0.3,
    },
    {
      icon: Target,
      value: '95%',
      label: 'Удовлетвореност',
      color: 'from-indigo-500 to-blue-500',
      delay: 0.4,
    },
    {
      icon: Zap,
      value: '10x',
      label: 'ROI',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.5,
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50" />
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Резултати, които говорят</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Реални данни от организации, които използват TCMS
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 bg-white rounded-2xl border-2 border-slate-200 group-hover:border-transparent shadow-lg group-hover:shadow-2xl transition-all">
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Value with Counter Animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: stat.delay + 0.3 }}
                    className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label */}
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Floating particles on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
