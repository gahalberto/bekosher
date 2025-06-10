'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Store, User, Phone, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function PreRegistrationSection() {
  const [formData, setFormData] = useState({
    establishmentName: '',
    responsibleName: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // URL do Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9hVgk6nc0cqe-H5oEvYpcMR-VtAWuA_2VwO9i3rpUDNVp981aOwzbdsELMbmyQFK6/exec'
      
      console.log('📤 Enviando dados:', formData)
      console.log('🔗 URL:', GOOGLE_SCRIPT_URL)
      
      // Enviar dados para Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necessário para Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      console.log('📡 Response status:', response.status)
      console.log('📡 Response type:', response.type)
      
      // Para mode: 'no-cors', não conseguimos ler a resposta
      // Mas se chegou até aqui, provavelmente funcionou
      if (response.type === 'opaque') {
        console.log('✅ Dados enviados com sucesso (modo no-cors)')
        setIsLoading(false)
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            establishmentName: '',
            responsibleName: '',
            phone: '',
            email: '',
            message: ''
          })
        }, 3000)
      } else {
        // Se não for opaque, tenta ler como JSON
        const result = await response.json()
        console.log('📊 Result:', result)
        
        if (result.success) {
          setIsLoading(false)
          setIsSubmitted(true)
          
          // Reset form after 3 seconds
          setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
              establishmentName: '',
              responsibleName: '',
              phone: '',
              email: '',
              message: ''
            })
          }, 3000)
        } else {
          throw new Error(`Erro do servidor: ${result.error || 'Erro desconhecido'}`)
        }
      }
      
    } catch (error) {
      console.error('❌ Erro detalhado:', error)
      console.error('❌ Erro message:', error.message)
      console.error('❌ Erro stack:', error.stack)
      setIsLoading(false)
      
      // Mostrar erro mais detalhado
      const errorMessage = error.message.includes('fetch') 
        ? 'Erro de conexão. Verifique sua internet e tente novamente.'
        : `Erro ao enviar: ${error.message}`
      
      alert(errorMessage)
    }
  }

  if (isSubmitted) {
    return (
      <Section background="light">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Pré-cadastro Enviado com Sucesso! ✨
              </h3>
              <p className="text-green-700 text-lg">
                Obrigado pelo interesse! Você foi incluído em nossa lista prioritária e receberá novidades sobre o lançamento do BeKosher.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>
    )
  }

  return (
    <Section background="light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Store className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
              Cadastre seu Estabelecimento
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Faça parte da maior plataforma kosher do Brasil. Deixe seus dados e entraremos em contato para começar seu cadastro.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="establishmentName" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Store className="w-4 h-4" />
                    Nome do Estabelecimento *
                  </label>
                  <input
                    type="text"
                    id="establishmentName"
                    name="establishmentName"
                    value={formData.establishmentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Ex: Restaurante Shalom"
                  />
                </div>

                <div>
                  <label htmlFor="responsibleName" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4" />
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    id="responsibleName"
                    name="responsibleName"
                    value={formData.responsibleName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4" />
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  Observações ou Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Conte-nos mais sobre seu estabelecimento, tipo de cozinha, certificações, etc..."
                />
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex items-center gap-3 mx-auto px-8 py-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Pré-cadastro
                    </>
                  )}
                </Button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Próximos passos:</strong> Você será incluído em nossa lista de pré-cadastro e receberá informações prioritárias sobre o lançamento da plataforma BeKosher.
                </p>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
} 