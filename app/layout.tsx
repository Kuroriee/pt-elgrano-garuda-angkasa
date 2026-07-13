import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Courier_Prime } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})
const courierPrime = Courier_Prime({
  variable: '--font-courier-prime',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'PT Elgrano Garuda Angkasa — Specialty Sumatran Coffee Exporter',
  description:
    'Specialty-grade Arabica and Robusta from the volcanic highlands of Sumatra. Sourced from 500+ smallholder farmers, processed with precision, and exported by PT Elgrano Garuda Angkasa to discerning buyers across 30+ countries.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon-ega.png', type: 'image/png' }],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${courierPrime.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
