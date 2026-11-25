import type { Metadata, Viewport } from 'next'
import { BRAND } from './brand'
import { buildMetadata } from './lib/seo'
import { SITE_NAME } from './lib/site'
import MetaPixel from './components/MetaPixel'
import MetaPixelPageView from './components/MetaPixelPageView'
import './globals.css'
import './lumina-clean.css'

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${SITE_NAME} — хімчистка меблів у Чернівцях`,
    path: '/',
  }),
  applicationName: SITE_NAME,
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: 'Home Services',
  keywords: [
    'хімчистка меблів Чернівці',
    'хімчистка диванів',
    'хімчистка матраців',
    'хімчистка килимів',
    'миття вікон Чернівці',
    'Blisk Eco Cleaning',
    'прибирання Чернівці',
    'blisk_cv',
  ],
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1b3022',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className="lumina-clean">
        <MetaPixel />
        <MetaPixelPageView />
        {children}
      </body>
    </html>
  )
}
