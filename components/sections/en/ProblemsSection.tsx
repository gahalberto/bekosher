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
      title: "Outdated Ashgachot Database",
      description: "Today, many kosher product lists are outdated. Consumers buy thinking it's kosher and discover too late that it's no longer supervised."
    },
    {
      icon: <Search className="w-8 h-8 text-red-500" />,
      title: "Lack of visibility for kosher establishments",
      description: "Many restaurants, buffets, and bakeries are practically secret. People need to rely on word-of-mouth in synagogues to organize events like Bar Mitzvahs."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Difficulty finding updated information",
      description: "Lack of maps, menus, hours, and contacts all in one place."
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
          Problems We <span className="text-red-500">Solve</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          The kosher community faces real challenges in daily life. These difficulties directly impact 
          the quality of life of families and the organization of important events.
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