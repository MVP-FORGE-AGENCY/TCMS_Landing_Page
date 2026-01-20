'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, User, Mail, Building, Phone, Check, ChevronLeft, ChevronRight } from 'lucide-react'

interface ScheduleDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
]

const demoTypes = [
  { id: 'overview', name: 'Platform Overview', duration: '30 min', description: 'General demo of all features' },
  { id: 'deep-dive', name: 'Deep Dive', duration: '60 min', description: 'Detailed walkthrough with Q&A' },
  { id: 'trial-setup', name: 'Trial Setup', duration: '45 min', description: 'Get your trial configured' },
]

export function ScheduleDemoModal({ isOpen, onClose }: ScheduleDemoModalProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
  })
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days = []
    
    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null)
    }
    
    // Add the days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }
  
  const days = getDaysInMonth(currentMonth)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today || date.getDay() === 0 || date.getDay() === 6
  }
  
  const handleSubmit = () => {
    // In a real app, this would submit to an API
    setStep(4) // Success state
  }
  
  const resetAndClose = () => {
    setStep(1)
    setSelectedDate(null)
    setSelectedTime(null)
    setSelectedDemo(null)
    setFormData({ name: '', email: '', company: '', phone: '', employees: '' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Schedule Your Demo</h2>
                <p className="text-sm text-slate-500 mt-1">Book a personalized walkthrough</p>
              </div>
              <button
                onClick={resetAndClose}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            
            {/* Progress Steps */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center justify-between max-w-md mx-auto">
                {['Demo Type', 'Date & Time', 'Your Details', 'Confirmed'].map((label, i) => (
                  <div key={label} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step > i + 1 ? 'bg-emerald-500 text-white' :
                      step === i + 1 ? 'bg-primary text-white' :
                      'bg-slate-200 text-slate-500'
                    }`}>
                      {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
                    </div>
                    {i < 3 && (
                      <div className={`w-12 h-0.5 mx-2 ${step > i + 1 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Demo Type */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">What type of demo would you like?</h3>
                    {demoTypes.map((demo) => (
                      <button
                        key={demo.id}
                        onClick={() => setSelectedDemo(demo.id)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                          selectedDemo === demo.id
                            ? 'border-primary bg-primary/5'
                            : 'border-slate-200 hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900">{demo.name}</div>
                            <div className="text-sm text-slate-500">{demo.description}</div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Clock className="w-4 h-4" />
                            {demo.duration}
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
                
                {/* Step 2: Date & Time */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Calendar */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Select a Date</h3>
                        <div className="bg-slate-50 rounded-xl p-4">
                          {/* Month navigation */}
                          <div className="flex items-center justify-between mb-4">
                            <button
                              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                              className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <span className="font-semibold">
                              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </span>
                            <button
                              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                              className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>
                          
                          {/* Day headers */}
                          <div className="grid grid-cols-7 gap-1 mb-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                              <div key={day} className="text-center text-xs font-medium text-slate-400 py-2">
                                {day}
                              </div>
                            ))}
                          </div>
                          
                          {/* Days grid */}
                          <div className="grid grid-cols-7 gap-1">
                            {days.map((day, i) => (
                              <div key={i}>
                                {day ? (
                                  <button
                                    onClick={() => !isDateDisabled(day) && setSelectedDate(day)}
                                    disabled={isDateDisabled(day)}
                                    className={`w-full aspect-square rounded-lg text-sm font-medium transition-all ${
                                      selectedDate?.toDateString() === day.toDateString()
                                        ? 'bg-primary text-white'
                                        : isDateDisabled(day)
                                        ? 'text-slate-300 cursor-not-allowed'
                                        : 'hover:bg-primary/10 text-slate-700'
                                    }`}
                                  >
                                    {day.getDate()}
                                  </button>
                                ) : (
                                  <div className="w-full aspect-square" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Time slots */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Select a Time (EST)</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 rounded-lg text-sm font-medium transition-all ${
                                selectedTime === time
                                  ? 'bg-primary text-white'
                                  : 'bg-slate-50 hover:bg-primary/10 text-slate-700'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Your Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            placeholder="John Smith"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Work Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Company *</label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            placeholder="Acme Airlines"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Number of Employees</label>
                      <select
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      >
                        <option value="">Select range</option>
                        <option value="1-50">1-50</option>
                        <option value="51-150">51-150</option>
                        <option value="151-500">151-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 4: Confirmation */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Demo Scheduled!</h3>
                    <p className="text-slate-600 mb-6">
                      We've sent a calendar invite to {formData.email}
                    </p>
                    <div className="bg-slate-50 rounded-xl p-4 max-w-sm mx-auto text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-medium">{selectedTime} EST</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <div className="flex items-center justify-between">
                {step > 1 && step < 4 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 text-slate-600 font-medium hover:text-slate-900 transition-colors"
                  >
                    Back
                  </button>
                )}
                {step === 4 ? (
                  <button
                    onClick={resetAndClose}
                    className="w-full px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Done
                  </button>
                ) : (
                  <button
                    onClick={() => step < 3 ? setStep(step + 1) : handleSubmit()}
                    disabled={
                      (step === 1 && !selectedDemo) ||
                      (step === 2 && (!selectedDate || !selectedTime)) ||
                      (step === 3 && (!formData.name || !formData.email || !formData.company))
                    }
                    className="ml-auto px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {step === 3 ? 'Confirm Booking' : 'Continue'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
