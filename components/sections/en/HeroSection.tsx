'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, TrendingUp } from 'lucide-react'
import Button from '../../ui/Button'
import Section from '../../ui/Section'

export default function HeroSection() {
  return (
    <Section background="gradient" className="text-white">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="mb-6">
            <img 
              src="/images/logos/logo.png" 
              alt="BeKosher Logo" 
              className="h-20 md:h-28 lg:h-32 mx-auto mb-4"
            />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            The Super App for
            <span className="block text-gold-400">Kosher Food</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            We centralize all kosher products, services, and supervision in one place.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="secondary" size="lg" className="flex items-center gap-2">
            <Download size={20} />
            Download Pitch Deck
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-600">
            <TrendingUp size={20} />
            I Want to Invest
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gold-400">100+</div>
                <div className="text-primary-100">Establishments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400">3</div>
                <div className="text-primary-100">Supported Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400">24/7</div>
                <div className="text-primary-100">Real-time Updates</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-3xl mx-auto">
            <div className="w-full sm:w-1/2">
              <img 
                src="/images/app1.png" 
                alt="BeKosher App - Main Screen" 
                className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <img 
                src="/images/app2.png" 
                alt="BeKosher App - Features" 
                className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-center text-primary-100 mt-6 text-lg">
            See how the BeKosher user experience will be
          </p>
        </motion.div>
      </div>
    </Section>
  )
} 