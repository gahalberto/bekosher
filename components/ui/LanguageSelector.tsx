'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

interface LanguageSelectorProps {
  currentLang: 'pt' | 'en' | 'he'
}

export default function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷', path: '/' },
    { code: 'en', name: 'English', flag: '🇺🇸', path: '/en' },
    { code: 'he', name: 'עברית', flag: '🇮🇱', path: '/he' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-2">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-600" />
          <div className="flex gap-1">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={lang.path}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  currentLang === lang.code
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                }`}
                title={lang.name}
              >
                <span className="mr-1">{lang.flag}</span>
                {lang.code.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 