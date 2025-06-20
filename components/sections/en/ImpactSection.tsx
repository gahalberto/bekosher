'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Eye, Award, Users, Heart } from 'lucide-react'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function ImpactSection() {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: "Name associated with Brazil's first kosher super app",
      description: "Be recognized as a pioneer in kosher digital transformation"
    },
    {
      icon: <Eye className="w-8 h-8 text-gold-500" />,
      title: "Visibility in campaigns and social media",
      description: "Brand exposure in all our communications"
    },
    {
      icon: <Star className="w-8 h-8 text-gold-500" />,
      title: "Exclusive sponsor page",
      description: "Special highlight in the app and platform website"
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: "Category exclusivity",
      description: "Possibility of being the only sponsor in fintech, markets, or technology"
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-500" />,
      title: "Real social impact on the Jewish community",
      description: "Contribute to making life easier for thousands of families"
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
          Sponsorship <span className="text-gold-600">Impact</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          What you gain by becoming a BeKosher investor
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="text-center h-full bg-gradient-to-br from-gold-50 to-gold-100 border-gold-200 hover:shadow-gold-200/50">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16"
      >
        <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Return on Investment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-gold-300 mb-2">+500%</div>
              <div className="text-primary-100">Brand visibility</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-300 mb-2">100k+</div>
              <div className="text-primary-100">Estimated users in 1st year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-300 mb-2">∞</div>
              <div className="text-primary-100">Positive social impact</div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
} 