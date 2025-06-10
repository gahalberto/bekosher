import React from 'react'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bekosher.com.br'),
  title: 'BeKosher - The Super App for Kosher Food | Investment Platform',
  description: 'We centralize all kosher products, services, and supervision in one place. Unique investment opportunity in Brazil\'s digital kosher future. R$ 92,000 to revolutionize kosher food.',
  keywords: 'kosher, kosher food, kosher app, ashgachot, kosher restaurants, investment, kosher startup, jewish brazil',
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
    title: 'BeKosher - The Super App for Kosher Food',
    description: 'Unique investment opportunity. Platform that centralizes kosher products and services in Brazil. Trilingual with interactive map.',
    url: 'https://bekosher.com.br/en',
    siteName: 'BeKosher',
    images: [
      {
        url: 'https://bekosher.com.br/images/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'BeKosher - The Super App for Kosher Food'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeKosher - The Super App for Kosher Food',
    description: 'Invest in Brazil\'s digital kosher future. Trilingual platform with interactive map.',
    images: ['/images/logos/logo.png'],
    creator: '@bekosher_br'
  }
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 