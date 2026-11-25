import { CITIES_BY_COUNTY } from './areasByCounty'

/** Treated as city / settlement name in the Blisk UA site */
export function normalizeZip(value: string) {
  return value.trim().replace(/\s+/g, ' ')
}

const SERVED = new Set(
  Object.values(CITIES_BY_COUNTY)
    .flat()
    .map((c) => c.toLowerCase()),
)

const KEYWORDS = [
  'чернів',
  'cherniv',
  'cv',
  'област',
  'район',
  'саднор',
  'садгор',
  'сторожин',
  'глибок',
  'кіцман',
  'кицман',
  'заставн',
  'новоселиц',
  'хотин',
  'вижниц',
]

/** Accept any reasonable city name; soft-match known Chernivtsi area labels */
export function isZipServed(value: string) {
  const v = normalizeZip(value).toLowerCase()
  if (v.length < 2) return false
  if (SERVED.has(v)) return true
  if (KEYWORDS.some((k) => v.includes(k))) return true
  // Allow free-text cities in the region — form still submits; UI shows soft OK for known matches
  return v.length >= 3
}
