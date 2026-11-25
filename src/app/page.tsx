import HomePageClient from './HomePageClient'
import JsonLd from './components/JsonLd'
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  localBusinessJsonLd,
  webSiteJsonLd,
} from './lib/seo'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from './lib/site'

export const metadata = buildMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={webSiteJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <JsonLd data={breadcrumbJsonLd()} />
      <HomePageClient />
    </>
  )
}
