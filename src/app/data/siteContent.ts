import { IMAGE_WIDTH, unsplashImage } from '../lib/images'

export type ServiceTheme = 'dark' | 'photo' | 'photoAlt' | 'light'

export type PriceTier = {
  label: string
  price: string
}

export type ServiceItem = {
  id: string
  theme: ServiceTheme
  image: string
  imagePosition?: string
  priceFrom: string
  tiers: PriceTier[]
  includes: string[]
  note?: string
}

export type PriceCard = {
  id: string
  name: string
  price: string
  image: string
  category: 'furniture' | 'windows' | 'extras' | 'travel'
}

const W = IMAGE_WIDTH.serviceCard

/** Stock photos for product/service cards */
export const PRICE_CARDS: PriceCard[] = [
  { id: 'sofa', name: 'Диван', price: '450 грн / сидяче місце', image: unsplashImage('photo-1555041469-a586c61ea9bc', W), category: 'furniture' },
  { id: 'pillow', name: 'Подушка', price: '150–250 грн', image: unsplashImage('photo-1584100936595-c0654b55a2e2', W), category: 'furniture' },
  { id: 'chair', name: 'Стілець', price: '200–400 грн', image: unsplashImage('photo-1503602642458-232111445657', W), category: 'furniture' },
  { id: 'armchair', name: 'Крісло', price: '450–600 грн', image: unsplashImage('photo-1567538096630-e0c55ce644f3', W), category: 'furniture' },
  { id: 'carpet', name: 'Килим', price: '150–170 грн/м²', image: unsplashImage('photo-1600166898405-da9535204843', W), category: 'furniture' },
  { id: 'mattress', name: 'Матрац', price: '900–1200 грн', image: unsplashImage('photo-1631049307264-da0ec9d70304', W), category: 'furniture' },
  { id: 'win2', name: 'Стандартне 2-дільне', price: '800 грн', image: unsplashImage('photo-1497366216548-37526070297c', W), category: 'windows' },
  { id: 'win3', name: 'Стандартне 3-дільне', price: '950 грн', image: unsplashImage('photo-1493809842364-78817add7ffb', W), category: 'windows' },
  { id: 'balcony', name: 'Балконні двері + вікно', price: '900 грн', image: unsplashImage('photo-1600607687939-ce8a6c25118c', W), category: 'windows' },
  { id: 'win4', name: 'Стандартне 4-дільне', price: '1150 грн', image: unsplashImage('photo-1600585154340-be6161a56a0c', W), category: 'windows' },
  { id: 'pan3', name: 'Панорамне 3-дільне', price: '1100 грн', image: unsplashImage('photo-1600566753190-17f0baa2a6c3', W), category: 'windows' },
  { id: 'pan4', name: 'Панорамне 4-дільне', price: '1300 грн', image: unsplashImage('photo-1600210492486-724fe5c67fb0', W), category: 'windows' },
  { id: 'bal6', name: 'Велике балконне 6-дільне', price: '1750 грн', image: unsplashImage('photo-1600607687644-c7171b42498f', W), category: 'windows' },
  { id: 'vac', name: 'Оренда миючого пилососа', price: '600 грн/доба', image: unsplashImage('photo-1558317374-067fb5f30001', W), category: 'extras' },
  { id: 'chem', name: 'Оренда з хімією', price: '+100 грн / 70 г', image: unsplashImage('photo-1585421514738-0174761b0b9d', W), category: 'extras' },
  { id: 'town', name: 'За містом (мін. сума)', price: '3000 грн / виїзд', image: unsplashImage('photo-1449824913935-59a10b8d2000', W), category: 'travel' },
  { id: 'km', name: 'Доплата за км', price: '+20 грн/км', image: unsplashImage('photo-1469854523086-cc02fe5d8800', W), category: 'travel' },
]

/** Власні роботи Blisk: до / після */
export const BEFORE_AFTER = [
  { id: 'ba1', src: '/media/before-after/rug.jpg', alt: 'Килим до і після хімчистки Blisk', label: 'Килим' },
  { id: 'ba2', src: '/media/before-after/chair.jpg', alt: 'Крісло до і після хімчистки Blisk', label: 'Крісло' },
  { id: 'ba3', src: '/media/before-after/sofa.jpg', alt: 'Диван до і після хімчистки Blisk', label: 'Диван' },
  { id: 'ba4', src: '/media/before-after/furniture-1.jpg', alt: 'Меблі до і після хімчистки Blisk', label: 'Меблі' },
  { id: 'ba5', src: '/media/before-after/furniture-2.jpg', alt: 'Результат хімчистки Blisk', label: 'Результат' },
] as const

export const SERVICES: ServiceItem[] = [
  {
    id: 'furniture',
    theme: 'photo',
    image: unsplashImage('photo-1555041469-a586c61ea9bc', W),
    priceFrom: 'від 150 грн',
    tiers: [
      { label: 'Диван (за місце)', price: '450 грн' },
      { label: 'Подушка', price: '150–250 грн' },
      { label: 'Стілець', price: '200–400 грн' },
      { label: 'Крісло', price: '450–600 грн' },
    ],
    includes: [
      'Глибока хімчистка оббивки',
      'Видалення плям і запахів',
      'Обробка безпечною хімією',
      'Професійне обладнання',
      'Оцінка після фото',
    ],
    note: 'Мінімальне замовлення — 1000 грн. Точна ціна залежить від забруднення.',
  },
  {
    id: 'mattress',
    theme: 'dark',
    image: unsplashImage('photo-1600166898405-da9535204843', W),
    priceFrom: 'від 150 грн/м²',
    tiers: [
      { label: 'Килим', price: '150–170 грн/м²' },
      { label: 'Матрац', price: '900–1200 грн' },
    ],
    includes: [
      'Глибоке очищення ворсу',
      'Видалення стійких забруднень',
      'Сушіння й освіження',
      'Дбайлива eco-хімія',
    ],
    note: 'Вартість залежить від типу покриття та складності робіт.',
  },
  {
    id: 'windows',
    theme: 'photoAlt',
    image: unsplashImage('photo-1497366216548-37526070297c', W),
    priceFrom: 'від 800 грн',
    tiers: [
      { label: '2-дільне', price: '800 грн' },
      { label: '3-дільне', price: '950 грн' },
      { label: 'Балконні двері + вікно', price: '900 грн' },
      { label: 'Панорамне 4-дільне', price: '1300 грн' },
      { label: 'Балконне 6-дільне', price: '1750 грн' },
    ],
    includes: [
      'Миття скла без розводів',
      'Рами та підвіконня',
      'Стандартні й панорамні конструкції',
      'Балконні блоки',
    ],
    note: 'Мінімальна сума замовлення на вікна — 1600 грн.',
  },
  {
    id: 'extras',
    theme: 'light',
    image: unsplashImage('photo-1558317374-067fb5f30001', W),
    priceFrom: 'від 600 грн',
    tiers: [
      { label: 'Оренда миючого пилососа', price: '600 грн/доба' },
      { label: 'З хімією (70 г)', price: '+100 грн' },
      { label: 'За містом (мін.)', price: '3000 грн' },
      { label: 'Доплата за км', price: '+20 грн' },
    ],
    includes: [
      'Оренда обладнання на добу',
      'Опція з хімією',
      'Виїзд за межі міста',
    ],
    note: 'За містом: мінімум 3000 грн за виїзд + 20 грн за кожен кілометр.',
  },
]

export const REVIEWS = [
  {
    id: 'r1',
    rating: 5,
    name: 'Олена К.',
    text: 'Диван після хімчистки як новий. Плями зникли, запаху немає. Дуже акуратно працюють.',
  },
  {
    id: 'r2',
    rating: 5,
    name: 'Андрій М.',
    text: 'Килим із дитячими слідами відмили повністю. Приїхали вчасно, ціна як обіцяли після фото.',
  },
  {
    id: 'r3',
    rating: 5,
    name: 'Ірина В.',
    text: 'Замовляли миття вікон на всю квартиру. Без розводів, швидко й чемно.',
  },
  {
    id: 'r4',
    rating: 5,
    name: 'Сергій П.',
    text: 'Крісло зі старими плямами відновили. Фото до/після говорять самі за себе.',
  },
  {
    id: 'r5',
    rating: 5,
    name: 'Марія Л.',
    text: 'Зручно писати в Direct, одразу сказали орієнтовну ціну. Рекомендую сусідам.',
  },
  {
    id: 'r6',
    rating: 5,
    name: 'Тарас Б.',
    text: 'Виїзд за місто без проблем. Матрац і диван зробили за один візит.',
  },
]

export function getServiceById(id: string) {
  return SERVICES.find((s) => s.id === id)
}
