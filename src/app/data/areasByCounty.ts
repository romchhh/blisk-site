export const SERVICE_COUNTIES = [
  { id: 'chernivtsi', label: 'Чернівці' },
  { id: 'districts', label: 'Райони міста' },
  { id: 'oblast', label: 'Область' },
  { id: 'nearby', label: 'Передмістя' },
] as const

export type CountyId = (typeof SERVICE_COUNTIES)[number]['id']

export const CITIES_BY_COUNTY: Record<CountyId, string[]> = {
  chernivtsi: [
    'Центр',
    'Садгора',
    'Роша',
    'Годилів',
    'Ленківці',
    'Калинівський ринок',
    'Проспект Незалежності',
    'Вул. Головна',
  ],
  districts: [
    'Шевченківський',
    'Першотравневий',
    'Садгірський',
    'Новий район',
    'Гравітон',
    'Цецино',
  ],
  oblast: [
    'Сторожинець',
    'Глибока',
    'Кіцмань',
    'Заставна',
    'Новоселиця',
    'Хотин',
    'Вижниця',
    'Путила',
    'Кельменці',
    'Сокиряни',
  ],
  nearby: [
    'Мамаївці',
    'Лужани',
    'Неполоківці',
    'Чагор',
    'Остриця',
    'Коровія',
    'Молодія',
    'Волока',
  ],
}
