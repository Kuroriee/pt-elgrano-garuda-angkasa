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

// Isi dengan URL profil resmi yang aktif (LinkedIn, Instagram, Google Business
// Profile, Algrano, Alibaba, dll). Jangan isi URL yang belum ada.
// Contoh format: 'https://www.linkedin.com/company/nama-perusahaan'
const SAME_AS: string[] = [
  // 'https://www.linkedin.com/company/...',
  // 'https://www.instagram.com/...',
]

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
    types: {
      'text/markdown': '/index.md',
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

const ORG_ID = `${SITE_URL}/#organization`

const PRODUCTS = [
  { name: 'Gayo Arabica', origin: 'Aceh, Sumatra' },
  { name: 'Mandheling', origin: 'North Tapanuli, Sumatra' },
  { name: 'Lintong Green', origin: 'North Sumatra' },
  { name: 'Fine Robusta', origin: 'Sumatra' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'PT Elgrano Garuda Angkasa',
        alternateName: 'EGA',
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
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'elgranogaruda@gmail.com',
          telephone: '+62-813-9604-1308',
          availableLanguage: ['English', 'Indonesian'],
        },
        ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'PT Elgrano Garuda Angkasa',
        inLanguage: ['en', 'id'],
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#products`,
        name: 'Sumatran green coffee origins',
        itemListElement: PRODUCTS.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: `${p.name} Green Coffee`,
            category: 'Green coffee beans',
            brand: { '@id': ORG_ID },
            countryOfOrigin: { '@type': 'Country', name: 'Indonesia' },
            description: `${p.name} green coffee from ${p.origin}, exported by PT Elgrano Garuda Angkasa.`,
          },
        })),
      },
    ],
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
      </body>
    </html>
  )
}