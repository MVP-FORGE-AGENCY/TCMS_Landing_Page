'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowUp, MessageCircle, X } from 'lucide-react'
import { ScheduleDemoModal } from './ScheduleDemoModal'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-24 right-6 z-40 group"
          >
            <div className="relative">
              {/* Pulse animation */}
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
              
              {/* Button */}
              <div className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all group-hover:scale-105">
                <Calendar className="w-5 h-5" />
                <span className="hidden sm:inline">Book Free Demo</span>
                <span className="sm:hidden">Demo</span>
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      
      <ScheduleDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all"
        >
          <ArrowUp className="w-5 h-5 text-slate-600" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasNotification, setHasNotification] = useState(true)
  
  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => {
          setIsOpen(!isOpen)
          setHasNotification(false)
        }}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        
        {/* Notification badge */}
        {hasNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        )}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-cyan-500 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">CertifyCloud Support</div>
                  <div className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                    We typically reply in minutes
                  </div>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="p-4 h-64 bg-slate-50">
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-slate-700">
                  👋 Hi there! How can we help you today?
                </p>
                <span className="text-xs text-slate-400 mt-1 block">Just now</span>
              </div>
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      setProgress((scrollPosition / totalHeight) * 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-500 origin-left z-50"
    />
  )
}
