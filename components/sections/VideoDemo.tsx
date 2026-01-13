'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Calendar } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function VideoDemo() {
  const t = useTranslations('video')
  const [playing, setPlaying] = useState(false)

  const chapters = [
    { time: '0:00', label: 'Dashboard' },
    { time: '0:20', label: 'Scheduling' },
    { time: '0:45', label: 'Signatures' },
    { time: '1:10', label: 'Reports' },
    { time: '1:40', label: 'Mobile' },
  ]

  return (
    <section id="demo" className="section bg-gradient-to-br from-[#1A1A2E] to-[#16213E]">
      <div className="container-lg">
        <SectionHeading 
          title={t('title')}
          light
        />
        
        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border-4 border-primary/50 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              {!playing ? (
                <motion.button
                  onClick={() => setPlaying(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30"
                >
                  <Play className="w-12 h-12 text-white ml-1" />
                </motion.button>
              ) : (
                <div className="text-white text-center">
                  <p className="text-lg mb-2">Video Player</p>
                  <p className="text-sm opacity-60">Replace with actual video embed</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Chapters */}
          <div className="grid grid-cols-5 gap-2 mt-6">
            {chapters.map((ch) => (
              <button
                key={ch.time}
                className="p-3 bg-white/10 backdrop-blur rounded-lg border border-white/20 hover:bg-white/20 transition-all text-left"
              >
                <div className="text-xs text-white/60">{ch.time}</div>
                <div className="text-sm font-semibold text-white">{ch.label}</div>
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Post-Video CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('ready')}
          </h3>
          <Button 
            href="#contact" 
            variant="primary" 
            size="large"
            icon={<Calendar className="w-5 h-5" />}
          >
            {t('cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
