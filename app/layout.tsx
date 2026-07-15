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

const SITE_URL = 'https://elgranogaruda.com'
const OG_IMAGE = `${SITE_URL}/images/hero-coffee.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PT Elgrano Garuda Angkasa — Specialty Sumatran Coffee Exporter',
    template: '%s | PT Elgrano Garuda Angkasa',
  },
  description:
    'Specialty-grade Arabica and Robusta from the volcanic highlands of Sumatra. Sourced from 500+ smallholder farmers, processed with precision, and exported by PT Elgrano Garuda Angkasa to discerning buyers across 30+ countries.',
  keywords: [
    'Sumatra coffee exporter',
    'Indonesian green coffee beans',
    'Gayo Arabica coffee',
    'Mandheling coffee supplier',
    'wholesale green coffee Indonesia',
    'specialty coffee exporter Indonesia',
    'wet-hulled coffee beans',
    'Sumatra Robusta coffee',
    'coffee bean importer Indonesia',
    'PT Elgrano Garuda Angkasa',
  ],
  generator: 'v0.app',
  applicationName: 'PT Elgrano Garuda Angkasa',
  authors: [{ name: 'PT Elgrano Garuda Angkasa' }],
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      id: SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'PT Elgrano Garuda Angkasa',
    title: 'PT Elgrano Garuda Angkasa — Specialty Sumatran Coffee Exporter',
    description:
      'Specialty-grade Arabica and Robusta from the volcanic highlands of Sumatra. Sourced from 500+ smallholder farmers, exported to 30+ countries.',
    locale: 'en_US',
    alternateLocale: ['id_ID'],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'PT Elgrano Garuda Angkasa — Sumatran specialty coffee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Elgrano Garuda Angkasa — Specialty Sumatran Coffee Exporter',
    description:
      'Specialty-grade Arabica and Robusta from the volcanic highlands of Sumatra, exported to 30+ countries.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT Elgrano Garuda Angkasa',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-ega.png`,
    description:
      'Specialty-grade Arabica and Robusta coffee exporter sourced from smallholder farmers in Sumatra, Indonesia, exporting to 30+ countries since 2004.',
    foundingDate: '2004',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Bromo Ujung Gg. Sedar No. 9A, Binjai, Kec. Medan Denai',
      addressLocality: 'Medan',
      addressRegion: 'Sumatera Utara',
      postalCode: '20228',
      addressCountry: 'ID',
    },
    email: 'elgranogaruda@gmail.com',
    telephone: '+62-813-9604-1308',
    sameAs: [],
  }

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${courierPrime.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
