'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Map, FileText, Globe, Smartphone } from 'lucide-react'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <Wrench className="w-8 h-8 text-primary-600" />,
      title: "פאנל בלעדי לכשרויות",
      description: "עדכוני מוצרים בזמן אמת"
    },
    {
      icon: <Map className="w-8 h-8 text-primary-600" />,
      title: "מפה אינטראקטיבית",
      description: "עם מסעדות, מאפיות, בופטים ואירועים"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "תפריטים ושעות מעודכנים",
      description: "מידע תמיד מדויק ובזמן אמת"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: "אפליקציה תלת-לשונית",
      description: "פורטוגזית, אנגלית ועברית"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary-600" />,
      title: "עיצוב אינטואיטיבי ונגיש",
      description: "ממשק מעוצב לכל המשתמשים"
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
          פתרונות <span className="text-primary-600">BeKosher</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          פלטפורמה מלאה שמרכזת כל מה שהקהילה הכשרה צריכה.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="text-center h-full border-l-4 border-primary-500">
              <div className="flex justify-center mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
} 