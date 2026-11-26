import { IMAGE_WIDTH, unsplashImage } from './lib/images'

export const BRAND = {
  name: 'Blisk Eco Cleaning',
  shortName: 'Blisk',
  tagline: 'Чистота у кожному куточку',
  phone: '+380 98 152 80 44',
  phoneTel: '+380981528044',
  email: '',
  whatsapp: 'https://instagram.com/blisk_cv',
  instagram: 'https://instagram.com/blisk_cv',
  instagramHandle: '@blisk_cv',
  address: 'Чернівці та область',
  city: 'Чернівці, Україна',
  hero: '/media/hero-team.jpg',
  aboutVideo: '/media/about/work.mp4',
  aboutPoster: '/media/about/poster.jpg',
  contactImage: unsplashImage('photo-1616486338812-3dadae4b4ace', IMAGE_WIDTH.contact),
  aboutTeam: '/media/about/poster.jpg',
  aboutCta: unsplashImage('photo-1493663284031-b7e3aefcae8e', IMAGE_WIDTH.about),
} as const

/** Ukrainian settlement / city name (free text) */
export const CITY_PATTERN = /^.{2,60}$/
