'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, MapPin, Users, Clock } from 'lucide-react'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function ProblemExampleSection() {
  return (
    <Section background="light" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-50"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="text-4xl">🍰</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              The Problem of Invisible Kosher Establishments
            </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-red-400 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-red-200" />
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Despite the growth of the Jewish community and the kosher market in Brazil, many establishments remain practically invisible. <strong>A real example:</strong> a friend of mine has a 100% kosher bakery, with incredible products and reliable supervision. But guess what? <em>Almost no one in the community knows about it.</em>
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Without a centralized platform, discovering places like this still depends on word-of-mouth in synagogues, closed groups, or personal recommendations. Someone wanting to organize a Bar Mitzvah, for example, needs to chase references, spending time and energy trying to find reliable suppliers — while several already exist and are ready to serve.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  This lack of visibility not only hurts entrepreneurs but also limits the kosher community, which loses access to great product and service options. <strong className="text-red-600">This is exactly what BeKosher wants to solve.</strong>
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <MapPin className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Hidden Establishments</h3>
                <p className="text-sm text-gray-600">Bakeries, buffets, and kosher restaurants exist but remain invisible to the community</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Word-of-Mouth Dependency</h3>
                <p className="text-sm text-gray-600">Discoveries happen only by chance or personal recommendations in synagogues</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Lost Time and Energy</h3>
                <p className="text-sm text-gray-600">Organizing events like Bar/Bat Mitzvahs becomes an unnecessary treasure hunt</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                💡 The Solution is Simple
              </h3>
              <p className="text-lg text-primary-100">
                A platform that connects kosher establishments to the community,<br />
                <strong className="text-gold-300">eliminating invisibility and making everyone's life easier.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
} 