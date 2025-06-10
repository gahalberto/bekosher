'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, FileText, ArrowRight } from 'lucide-react'
import Section from '../../ui/Section'
import Button from '../../ui/Button'

export default function CallToActionSection() {
  return (
    <Section background="gradient" className="text-white">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Become an investor in the
            <span className="block text-gold-400">digital kosher future</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Join us on this revolutionary journey and be part of the digital transformation 
            of the Brazilian kosher community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button 
            variant="secondary" 
            size="lg" 
            className="flex items-center gap-3 text-lg px-8 py-4"
          >
            <Calendar size={24} />
            Schedule Meeting
            <ArrowRight size={20} />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-3 text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-600"
          >
            <FileText size={24} />
            View Presentation PDF
            <ArrowRight size={20} />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-gold-400">
            🚀 The Future is Now
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Innovation</div>
              <div className="text-primary-100 text-sm">
                Brazil's first complete kosher platform
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Impact</div>
              <div className="text-primary-100 text-sm">
                Real transformation in community life
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Return</div>
              <div className="text-primary-100 text-sm">
                Brand visibility and recognition
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-primary-200 mb-4">
            Have questions? Contact us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a href="mailto:contact@bekosher.com.br" className="text-gold-400 hover:text-gold-300 transition-colors">
              📧 contact@bekosher.com.br
            </a>
            <span className="hidden sm:block text-primary-300">•</span>
            <a href="tel:+5511999999999" className="text-gold-400 hover:text-gold-300 transition-colors">
              📱 +55 (11) 99999-9999
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
} 