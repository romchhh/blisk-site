import { BRAND } from '../brand'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blisk.cv.ua').replace(/\/$/, '')

export const SITE_NAME = BRAND.name

/** Meta (Facebook) Pixel — used for ad attribution and PageView tracking */
export const META_PIXEL_ID = '1457531026596195'

export const DEFAULT_DESCRIPTION =
  'Хімчистка меблів, матраців і килимів у Чернівцях та області. Миття вікон, прибирання. Eco Cleaning Blisk — чистота у кожному куточку. Запис у Direct @blisk_cv.'

export const LEGAL_PATHS = {
  privacy: '/privacy-policy',
  terms: '/terms-and-conditions',
  cancellation: '/cancellation-policy',
  cookies: '/cookies-policy',
  subscription: '/subscription-terms',
} as const

export const OPENING_HOURS = {
  weekdays: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '20:00' },
  weekend: { days: ['Saturday', 'Sunday'], opens: '10:00', closes: '18:00' },
} as const
