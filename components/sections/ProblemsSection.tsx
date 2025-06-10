'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { X, Search, AlertTriangle } from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'

export default function ProblemsSection() {
  const problems = [
    {
      icon: <X className="w-8 h-8 text-red-500" />,
      title: "Banco de dados desatualizado das Ashgachot",
      description: "Hoje, muitas listas de produtos kosher estão ultrapassadas. O consumidor compra achando que é kosher e descobre tarde demais que não é mais supervisionado."
    },
    {
      icon: <Search className="w-8 h-8 text-red-500" />,
      title: "Falta de visibilidade dos estabelecimentos kosher",
      description: "Muitos restaurantes, buffets e docerias são praticamente secretos. É preciso recorrer ao boca a boca nas sinagogas para organizar eventos como Bar Mitzvá."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Dificuldade de encontrar informações atualizadas",
      description: "Falta de mapas, cardápios, horários e contatos em um único lugar."
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
          Problemas que <span className="text-red-500">Resolvemos</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          A comunidade kosher enfrenta desafios reais no dia a dia. Essas dificuldades impactam diretamente 
          a qualidade de vida das famílias e a organização de eventos importantes.
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