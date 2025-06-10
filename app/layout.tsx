import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bekosher.com.br'),
  title: 'BeKosher - O Super App da Alimentação Kosher | Plataforma de Investimento',
  description: 'Centralizamos todos os produtos, serviços e supervisões kosher em um só lugar. Oportunidade única de investimento no futuro digital kosher do Brasil. R$ 92.000 para revolucionar a alimentação kosher.',
  keywords: 'kosher, alimentação kosher, app kosher, ashgachot, restaurantes kosher, investimento, startup kosher, brasil judaico',
  authors: [{ name: 'BeKosher Team' }],
  creator: 'BeKosher',
  publisher: 'BeKosher',
  robots: 'index, follow',
  icons: {
    icon: '/images/logos/logo.png',
    shortcut: '/images/logos/logo.png',
    apple: '/images/logos/logo.png',
  },
  openGraph: {
    title: 'BeKosher - O Super App da Alimentação Kosher',
    description: 'Oportunidade única de investimento. Plataforma que centraliza produtos e serviços kosher no Brasil. Trilíngue com mapa interativo.',
    url: 'https://bekosher.com.br',
    siteName: 'BeKosher',
    images: [
      {
        url: 'https://bekosher.com.br/images/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'BeKosher - O Super App da Alimentação Kosher'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeKosher - O Super App da Alimentação Kosher',
    description: 'Invista no futuro digital kosher do Brasil. Plataforma trilíngue com mapa interativo.',
    images: ['/images/logos/logo.png'],
    creator: '@bekosher_br'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
} 