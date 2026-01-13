'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Tablet,
  Play,
  ChevronRight,
} from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function InteractiveDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const devices = [
    { id: 'desktop' as const, icon: Monitor, label: 'Desktop' },
    { id: 'tablet' as const, icon: Tablet, label: 'Tablet' },
    { id: 'mobile' as const, icon: Smartphone, label: 'Mobile' },
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Вижте TCMS в действие
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Интерактивна демонстрация на платформата на всички устройства
          </p>
        </motion.div>

        {/* Device Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <motion.button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-2xl'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{device.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Device Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Desktop View */}
          {activeDevice === 'desktop' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative"
            >
              <div className="bg-slate-800 rounded-t-2xl p-2">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <ImagePlaceholder
                  className="aspect-video"
                  gradient="from-blue-600 via-purple-600 to-pink-600"
                  icon={
                    <div className="text-center text-white">
                      <Play className="w-20 h-20 mx-auto mb-4" />
                      <p className="text-2xl font-bold">Преглед на платформата</p>
                    </div>
                  }
                />
              </div>
            </motion.div>
          )}

          {/* Tablet View */}
          {activeDevice === 'tablet' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-slate-800 rounded-3xl p-8">
                <ImagePlaceholder
                  className="aspect-[4/3]"
                  gradient="from-cyan-500 via-blue-600 to-purple-600"
                  icon={
                    <div className="text-center text-white">
                      <Tablet className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-xl font-bold">Tablet версия</p>
                    </div>
                  }
                />
              </div>
            </motion.div>
          )}

          {/* Mobile View */}
          {activeDevice === 'mobile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-sm mx-auto"
            >
              <div className="bg-slate-800 rounded-[3rem] p-4">
                <div className="bg-slate-900 rounded-[2.5rem] p-2">
                  <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
                  <ImagePlaceholder
                    className="aspect-[9/16]"
                    gradient="from-pink-500 via-purple-600 to-blue-600"
                    icon={
                      <div className="text-center text-white">
                        <Smartphone className="w-12 h-12 mx-auto mb-4" />
                        <p className="text-lg font-bold">Mobile версия</p>
                      </div>
                    }
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/20"
          >
            <span>Заявете демо</span>
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
