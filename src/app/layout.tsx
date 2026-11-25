import type { Metadata, Viewport } from 'next'
import { BRAND } from './brand'
import { buildMetadata } from './lib/seo'
import { DEFAULT_TITLE, SEO_KEYWORDS, SITE_NAME, SITE_URL } from './lib/site'
import './globals.css'
import './lumina-clean.css'

export const metadata: Metadata = {
  ...buildMetadata({
    title: DEFAULT_TITLE,
    path: '/',
  }),
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: BRAND.name, url: SITE_URL }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: 'Home Services',
  keywords: [...SEO_KEYWORDS],
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  icons: {
    icon: [{ url: '/icon', type: 'image/png' }],
    apple: [{ url: '/media/logo.png' }],
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
        {children}
      </body>
    </html>
  )
}
