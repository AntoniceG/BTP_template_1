import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Batir & Renover | Renovation & Maconnerie a Aix-en-Provence',
  description:
    'Entreprise de renovation et maconnerie generale a Aix-en-Provence et Trets. Devis gratuit sous 48h. Plus de 15 ans d\'experience, garantie decennale.',
  keywords: [
    'renovation Aix-en-Provence',
    'maconnerie generale',
    'extension maison',
    'ravalement facade',
    'artisan BTP',
    'Trets',
    'Bouches-du-Rhone',
  ],
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
