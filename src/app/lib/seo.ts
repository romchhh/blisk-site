import type { Metadata } from 'next'
import { BRAND } from '../brand'
import { SERVICE_COPY, t } from '../copy'
import { SERVICES } from '../data/siteContent'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OPENING_HOURS,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from './site'

const OG_IMAGE_PATH = BRAND.hero
const OG_IMAGE_ABS = `${SITE_URL}${OG_IMAGE_PATH}`
const LOGO_ABS = `${SITE_URL}/media/logo.png`

type PageMeta = {
  title: string
  description?: string
  path?: string
  noIndex?: boolean
  keywords?: string[]
}

function absoluteUrl(path = '') {
  if (!path) return SITE_URL
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildMetadata({
  title,
  description,
  path = '',
  noIndex,
  keywords,
}: PageMeta): Metadata {
  const isHome = path === '/' || path === ''
  const pageTitle = isHome || title === SITE_NAME || title === DEFAULT_TITLE
    ? (isHome ? DEFAULT_TITLE : title)
    : `${title} | ${SITE_NAME}`
  const pageDescription = description ?? DEFAULT_DESCRIPTION
  const url = absoluteUrl(path)

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    authors: [{ name: BRAND.name, url: SITE_URL }],
    creator: BRAND.name,
    publisher: BRAND.name,
    category: 'Home Services',
    keywords: keywords ?? [...SEO_KEYWORDS],
    alternates: {
      canonical: url,
      languages: { 'uk-UA': url, uk: url },
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: 'uk_UA',
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: OG_IMAGE_ABS,
          secureUrl: OG_IMAGE_ABS,
          width: 1672,
          height: 941,
          alt: 'Команда Blisk Eco Cleaning — хімчистка меблів у Чернівцях',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [OG_IMAGE_ABS],
    },
    other: {
      'geo.region': 'UA-77',
      'geo.placename': 'Чернівці',
      'geo.position': '48.292;25.935',
      ICBM: '48.292, 25.935',
    },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: BRAND.name,
    alternateName: ['Blisk', 'Бліск', 'Blisk Eco Cleaning Чернівці'],
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: [OG_IMAGE_ABS, LOGO_ABS],
    logo: LOGO_ABS,
    telephone: BRAND.phoneTel,
    priceRange: '₴₴',
    currenciesAccepted: 'UAH',
    paymentAccepted: 'Cash, Card',
    areaServed: [
      {
        '@type': 'City',
        name: 'Чернівці',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Чернівецька область',
        },
      },
      { '@type': 'AdministrativeArea', name: 'Чернівецька область' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Чернівці',
      addressRegion: 'Чернівецька область',
      addressCountry: 'UA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.292,
      longitude: 25.935,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: OPENING_HOURS.weekdays.days,
        opens: OPENING_HOURS.weekdays.opens,
        closes: OPENING_HOURS.weekdays.closes,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: OPENING_HOURS.weekend.days,
        opens: OPENING_HOURS.weekend.opens,
        closes: OPENING_HOURS.weekend.closes,
      },
    ],
    sameAs: [BRAND.instagram],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BRAND.phoneTel,
        contactType: 'customer service',
        areaServed: 'UA',
        availableLanguage: ['uk', 'ru'],
      },
    ],
    knowsAbout: [
      'хімчистка меблів',
      'хімчистка диванів',
      'хімчистка матраців',
      'хімчистка килимів',
      'миття вікон',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Послуги Blisk Eco Cleaning',
      itemListElement: SERVICES.map((service, index) => {
        const copy = SERVICE_COPY[service.id]
        return {
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: copy?.title ?? service.id,
            description: copy?.description ?? service.includes.slice(0, 3).join('. '),
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: 'Чернівці',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'UAH',
            description: service.priceFrom,
          },
        }
      }),
    },
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'uk-UA',
    publisher: { '@id': `${SITE_URL}/#business` },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/#book`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Заявка на хімчистку Blisk',
      },
    },
  }
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function breadcrumbJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Головна',
        item: SITE_URL,
      },
    ],
  }
}
