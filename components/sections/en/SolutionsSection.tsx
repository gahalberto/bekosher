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
      title: "Exclusive platform panel for Ashgachot",
      description: "Real-time product updates"
    },
    {
      icon: <Map className="w-8 h-8 text-primary-600" />,
      title: "Interactive map",
      description: "With restaurants, bakeries, buffets, and events"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "Updated menus and hours",
      description: "Always accurate and real-time information"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: "Trilingual app",
      description: "Portuguese, English, and Hebrew"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary-600" />,
      title: "Intuitive and accessible design",
      description: "Interface designed for all users"
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
          BeKosher <span className="text-primary-600">Solutions</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          A complete platform that centralizes everything the kosher community needs.
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