'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function FundingSection() {
  const totalAmount = 92000
  const expenses = [
    { category: 'פיתוח Web/App', amount: 50000, color: 'bg-primary-500' },
    { category: 'תשתית ומסד נתונים', amount: 12000, color: 'bg-blue-500' },
    { category: 'שיווק השקה', amount: 10000, color: 'bg-green-500' },
    { category: 'עיצוב UX/UI', amount: 7000, color: 'bg-purple-500' },
    { category: 'תרגומים מקצועיים', amount: 5000, color: 'bg-yellow-500' },
    { category: 'בדיקות קהילה', amount: 5000, color: 'bg-orange-500' },
    { category: 'משפטי ו-LGPD', amount: 3000, color: 'bg-red-500' }
  ]

  return (
    <Section background="dark" className="text-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Target className="w-8 h-8 text-gold-400" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            יעד גיוס הכספים
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-gold-400 mb-4"
        >
          R$ {totalAmount.toLocaleString('pt-BR')}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-primary-100 max-w-2xl mx-auto"
        >
          השקעה נדרשת כדי לשנות את החוויה הכשרה בברזיל
        </motion.p>
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
          חלוקת ההשקעה
        </h3>
        
        <div className="space-y-6">
          {expenses.map((expense, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{expense.category}</span>
                <span className="text-gold-400 font-bold">
                  R$ {expense.amount.toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(expense.amount / totalAmount) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className={`h-3 rounded-full ${expense.color}`}
                />
              </div>
              <div className="text-sm text-primary-100">
                {((expense.amount / totalAmount) * 100).toFixed(1)}% מהסכום הכולל
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </Section>
  )
} 