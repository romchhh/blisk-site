import type { Metadata } from 'next'
import { BRAND } from '../brand'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from './site'

const OG_IMAGE = BRAND.hero

type PageMeta = {
  title: string
  description?: string
  path?: string
  noIndex?: boolean
}

export function buildMetadata({ title, description, path = '', noIndex }: PageMeta): Metadata {
  const pageTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const pageDescription = description ?? DEFAULT_DESCRIPTION
  const url = `${SITE_URL}${path}`

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'uk_UA',
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: OG_IMAGE, width: 1080, height: 1350, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [OG_IMAGE],
    },
    other: {
      'geo.region': 'UA-77',
      'geo.placename': 'Chernivtsi',
    },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    name: BRAND.name,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: OG_IMAGE,
    areaServed: [
      { '@type': 'City', name: 'Чернівці' },
      { '@type': 'AdministrativeArea', name: 'Чернівецька область' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Чернівці',
      addressRegion: 'Чернівецька область',
      addressCountry: 'UA',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    telephone: BRAND.phoneTel,
    priceRange: '₴₴',
    sameAs: [BRAND.instagram],
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'uk-UA',
    publisher: { '@type': 'Organization', name: SITE_NAME },
  }
}
