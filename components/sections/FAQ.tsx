'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/cn'

export function FAQ() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { question: t('q1.question'), answer: t('q1.answer') },
    { question: t('q2.question'), answer: t('q2.answer') },
    { question: t('q3.question'), answer: t('q3.answer') },
    { question: t('q4.question'), answer: t('q4.answer') },
    { question: t('q5.question'), answer: t('q5.answer') },
    { question: t('q6.question'), answer: t('q6.answer') },
    { question: t('q7.question'), answer: t('q7.answer') },
    { question: t('q8.question'), answer: t('q8.answer') },
  ]

  return (
    <section id="faq" className="section bg-surface-light">
      <div className="container-lg">
        <SectionHeading title={t('title')} />
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                'bg-white rounded-xl border-2 overflow-hidden transition-all',
                openIndex === i ? 'border-primary shadow-lg' : 'border-gray-100'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-text-dark pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-body text-text-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
