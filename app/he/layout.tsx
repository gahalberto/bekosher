import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://bekosher.com.br'),
  title: 'BeKosher - סופר אפליקציה למזון כשר | פלטפורמה חדשנית לקהילה היהודית',
  description: 'BeKosher מרכזת מוצרים, שירותים ופיקוח כשר במקום אחד. אפליקציה תלת-לשונית עם מפה אינטראקטיבית ומידע מעודכן בזמן אמת לקהילה הכשרה בברזיל.',
  keywords: 'כשר, כשרות, מזון כשר, אפליקציה כשרה, קהילה יהודית, BeKosher, מסעדות כשרות, ברזיל',
  authors: [{ name: 'BeKosher Team' }],
  creator: 'BeKosher',
  publisher: 'BeKosher',
  robots: 'index, follow',
  icons: {
    icon: '/images/logos/logo.png',
    shortcut: '/images/logos/logo.png',
    apple: '/images/logos/logo.png',
  },
  alternates: {
    canonical: 'https://bekosher.com.br/he',
    languages: {
      'pt-BR': 'https://bekosher.com.br',
      'en': 'https://bekosher.com.br/en',
      'he': 'https://bekosher.com.br/he'
    }
  },
  openGraph: {
    title: 'BeKosher - סופר אפליקציה למזון כשר',
    description: 'פלטפורמה חדשנית שמרכזת מוצרים ושירותים כשרים בברזיל. תלת-לשונית עם מפה אינטראקטיבית ומידע מעודכן.',
    url: 'https://bekosher.com.br/he',
    siteName: 'BeKosher',
    images: [
      {
        url: 'https://bekosher.com.br/og-image-he.jpg',
        width: 1200,
        height: 630,
        alt: 'BeKosher - סופר אפליקציה למזון כשר'
      }
    ],
    locale: 'he_IL',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeKosher - סופר אפליקציה למזון כשר',
    description: 'פלטפורמה חדשנית לקהילה הכשרה בברזיל. תלת-לשונית ומעודכנת בזמן אמת.',
    images: ['https://bekosher.com.br/twitter-image-he.jpg'],
    creator: '@bekosher_br'
  }
}

export default function HebrewRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className} dir="rtl">
        {children}
      </body>
    </html>
  )
} 