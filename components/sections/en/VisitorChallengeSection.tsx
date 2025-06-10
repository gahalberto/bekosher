'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Plane, Globe, MapPin, MessageSquare, Clock, Users } from 'lucide-react'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function VisitorChallengeSection() {
  return (
    <Section background="dark" className="text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="text-4xl">🌍</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              The Challenge for Newcomers
            </h2>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-l-4 border-gold-400">
              <div className="space-y-6 text-white">
                <div className="flex items-start gap-4">
                  <Plane className="w-8 h-8 text-gold-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg leading-relaxed mb-4">
                      Imagine a Jewish person arriving in Brazil — whether as a tourist, student, expat, or emissary. They follow strict kosher dietary laws but don't speak Portuguese. Upon landing, the first question arises: <strong className="text-gold-300">"Where can I eat safely?"</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="w-8 h-8 text-gold-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg leading-relaxed mb-4">
                      They search on Google, try asking in English or Hebrew, join WhatsApp or Facebook groups — but can't find a reliable, updated, and accessible list of kosher establishments. <strong className="text-red-300">Result: frustration, food insecurity, and often they end up giving up or fasting</strong> until they find someone who can help.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-8 h-8 text-gold-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg leading-relaxed">
                      This is a real problem that drives away visitors, hurts kosher tourism, and puts at risk the experience of those who want to live according to their traditions in an unfamiliar country.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center bg-red-500/20 border-red-400/30 backdrop-blur-sm">
                <Users className="w-8 h-8 text-red-300 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Lost Tourists</h3>
                <p className="text-sm text-primary-200">Jewish visitors can't find where to eat safely</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="text-center bg-orange-500/20 border-orange-400/30 backdrop-blur-sm">
                <MessageSquare className="w-8 h-8 text-orange-300 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Language Barrier</h3>
                <p className="text-sm text-primary-200">Information only in Portuguese makes access difficult</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="text-center bg-yellow-500/20 border-yellow-400/30 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Wasted Time</h3>
                <p className="text-sm text-primary-200">Hours spent searching for reliable information</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 border-gold-400/30 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-gold-300">
                  🚀 The BeKosher Solution
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-gold-400" />
                      <span className="text-white font-semibold">Trilingual Platform</span>
                    </div>
                    <p className="text-primary-200 text-sm">Portuguese, English, and Hebrew</p>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-gold-400" />
                      <span className="text-white font-semibold">Precise Location</span>
                    </div>
                    <p className="text-primary-200 text-sm">Maps, addresses, and directions</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-gold-400" />
                      <span className="text-white font-semibold">Complete Information</span>
                    </div>
                    <p className="text-primary-200 text-sm">Hours, menus, and contacts</p>
                    
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-gold-400" />
                      <span className="text-white font-semibold">Universal Access</span>
                    </div>
                    <p className="text-primary-200 text-sm">Available from anywhere in the world</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <p className="text-lg text-white font-medium">
                    <strong className="text-gold-300">A simple but transformative solution</strong> for those who just want to eat peacefully — even far from home.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
} 