'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Map, FileText, Globe, Smartphone } from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <Wrench className="w-8 h-8 text-primary-600" />,
      title: "Plataforma com painel exclusivo para Ashgachot",
      description: "Atualizações de produtos em tempo real"
    },
    {
      icon: <Map className="w-8 h-8 text-primary-600" />,
      title: "Mapa interativo",
      description: "Com restaurantes, docerias, buffets e eventos"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "Cardápios e horários atualizados",
      description: "Informações sempre precisas e em tempo real"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: "App trilíngue",
      description: "Português, Inglês e Hebraico"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary-600" />,
      title: "Design intuitivo e acessível",
      description: "Interface pensada para todos os usuários"
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
          Soluções do <span className="text-primary-600">BeKosher</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Uma plataforma completa que centraliza tudo que a comunidade kosher precisa.
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