'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'light' | 'dark' | 'gradient'
  id?: string
}

export default function Section({ 
  children, 
  className = '', 
  background = 'light',
  id 
}: SectionProps) {
  const backgroundClass = {
    light: 'bg-gray-50',
    dark: 'bg-primary-900',
    gradient: 'bg-gradient-to-br from-gray-900 via-red-900 to-red-800'
  }[background]

  return (
    <section id={id} className={`section-padding ${backgroundClass} ${className}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
} 