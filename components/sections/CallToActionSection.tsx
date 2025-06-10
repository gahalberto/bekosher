'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, FileText, ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import Button from '../ui/Button'

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
            Seja um investidor do
            <span className="block text-gold-400">futuro kosher digital</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Junte-se a nós nesta jornada revolucionária e faça parte da transformação digital 
            da comunidade kosher brasileira.
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
            Agendar Reunião
            <ArrowRight size={20} />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-3 text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-600"
          >
            <FileText size={24} />
            Ver PDF de Apresentação
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
            🚀 O Futuro é Agora
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Inovação</div>
              <div className="text-primary-100 text-sm">
                Primeira plataforma kosher completa do Brasil
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Impacto</div>
              <div className="text-primary-100 text-sm">
                Transformação real na vida da comunidade
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Retorno</div>
              <div className="text-primary-100 text-sm">
                Visibilidade e reconhecimento de marca
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
            Tem dúvidas? Entre em contato conosco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a href="mailto:contato@bekosher.com.br" className="text-gold-400 hover:text-gold-300 transition-colors">
              📧 contato@bekosher.com.br
            </a>
            <span className="hidden sm:block text-primary-300">•</span>
            <a href="tel:+5511999999999" className="text-gold-400 hover:text-gold-300 transition-colors">
              📱 (11) 99999-9999
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
} 