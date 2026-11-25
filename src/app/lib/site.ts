import { BRAND } from '../brand'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blisk.cv.ua').replace(/\/$/, '')

export const SITE_NAME = BRAND.name

export const DEFAULT_TITLE = 'Хімчистка меблів у Чернівцях | Blisk Eco Cleaning'

export const DEFAULT_DESCRIPTION =
  'Хімчистка диванів, матраців і килимів у Чернівцях та області. Миття вікон, виїзд додому. Оцінка після фото, мінімальне замовлення від 1000 грн. Blisk Eco Cleaning.'

export const SEO_KEYWORDS = [
  'хімчистка меблів Чернівці',
  'хімчистка диванів Чернівці',
  'хімчистка матраців Чернівці',
  'хімчистка килимів Чернівці',
  'миття вікон Чернівці',
  'хімчистка меблів з виїздом',
  'Blisk Eco Cleaning',
  'Blisk Чернівці',
  'прибирання Чернівці',
  'чистка дивана Чернівці',
] as const

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
