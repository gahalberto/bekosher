'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, MapPin, Users, Clock } from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'

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
              O Problema da Invisibilidade dos Estabelecimentos Kosher
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
                  Apesar do crescimento da comunidade judaica e do mercado kosher no Brasil, muitos estabelecimentos continuam praticamente invisíveis. <strong>Um exemplo real:</strong> uma amiga minha tem uma doceria 100% kosher, com produtos incríveis e supervisão confiável. Mas adivinha? <em>Quase ninguém da comunidade conhece.</em>
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Sem uma plataforma centralizada, a descoberta de lugares como esse ainda depende do boca a boca nas sinagogas, grupos fechados ou indicações pessoais. Quem quer organizar um Bar Mitzvá, por exemplo, precisa correr atrás de referências, gastar tempo e energia tentando encontrar fornecedores confiáveis — enquanto vários já existem e estão prontos para atender.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Essa falta de visibilidade não só prejudica os empreendedores, como também limita a comunidade kosher, que perde acesso a ótimas opções de produtos e serviços. <strong className="text-red-600">É exatamente isso que o BeKosher quer resolver.</strong>
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
                <h3 className="font-semibold text-gray-900 mb-2">Estabelecimentos Escondidos</h3>
                <p className="text-sm text-gray-600">Docerias, buffets e restaurantes kosher existem, mas ficam invisíveis para a comunidade</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Dependência do Boca a Boca</h3>
                <p className="text-sm text-gray-600">Descobertas acontecem apenas por acaso ou indicações pessoais nas sinagogas</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Tempo e Energia Perdidos</h3>
                <p className="text-sm text-gray-600">Organizar eventos como Bar/Bat Mitzvá vira uma caça ao tesouro desnecessária</p>
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
                💡 A Solução é Simples
              </h3>
              <p className="text-lg text-primary-100">
                Uma plataforma que conecte estabelecimentos kosher à comunidade,<br />
                <strong className="text-gold-300">eliminando a invisibilidade e facilitando a vida de todos.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
} 