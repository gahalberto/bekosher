'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { X, Search, AlertTriangle } from 'lucide-react'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function ProblemsSection() {
  const problems = [
    {
      icon: <X className="w-8 h-8 text-red-500" />,
      title: "מאגר מידע לא מעודכן של הכשרות",
      description: "היום, רשימות מוצרים כשרים רבות אינן מעודכנות. הצרכן קונה בחשיבה שזה כשר ומגלה מאוחר מדי שזה כבר לא מפוקח."
    },
    {
      icon: <Search className="w-8 h-8 text-red-500" />,
      title: "חוסר נראות של מוסדות כשרים",
      description: "מסעדות, בופטים ומאפיות רבות הן כמעט סודיות. אנשים צריכים להסתמך על שמועות בבתי כנסת כדי לארגן אירועים כמו בר מצווה."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "קושי למצוא מידע מעודכן",
      description: "חוסר במפות, תפריטים, שעות ואנשי קשר במקום אחד."
    }
  ]

  return (
    <Section background="light">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
        >
          בעיות ש<span className="text-red-500">אנחנו פותרים</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          הקהילה הכשרה מתמודדת עם אתגרים אמיתיים בחיי היום יום. הקשיים האלה משפיעים ישירות 
          על איכות החיים של המשפחות וארגון של אירועים חשובים.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="text-center h-full">
              <div className="flex justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
} 