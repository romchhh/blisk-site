'use client'

import { t } from '../../copy'
import { PRICE_CARDS } from '../../data/siteContent'
import Reveal from '../Reveal'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

const GROUPS = [
  { key: 'furniture' as const, titleKey: 'furnitureTitle' as const },
  { key: 'windows' as const, titleKey: 'windowsTitle' as const },
  { key: 'extras' as const, titleKey: 'extrasTitle' as const },
  { key: 'travel' as const, titleKey: 'outOfTownTitle' as const },
]

export default function PricesSection() {
  return (
    <section id="prices" className={`${styles.section} ${styles.sectionSurface}`}>
      <div className={styles.inner}>
        <Reveal>
          <SectionHeading
            title={<>{t.prices.titleBefore}<em>{t.prices.titleEm}</em></>}
            lead={t.prices.lead}
          />
        </Reveal>

        <Reveal className={styles.priceBoard} stagger delay={100}>
          {GROUPS.map((group) => {
            const items = PRICE_CARDS.filter((c) => c.category === group.key)
            return (
              <div key={group.key} className={styles.priceBoardGroup}>
                <h3 className={styles.priceBoardTitle}>{t.prices[group.titleKey]}</h3>
                <ul className={styles.priceBoardList}>
                  {items.map((item) => (
                    <li key={item.id} className={styles.priceBoardRow}>
                      <span className={styles.priceBoardName}>{item.name}</span>
                      <span className={styles.priceBoardDots} aria-hidden="true" />
                      <span className={styles.priceBoardValue}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          <div className={styles.priceBoardFoot}>
            <p>{t.prices.minOrder}: хімчистка від 1000 грн · вікна від 1600 грн</p>
            <p>{t.prices.afterPhoto}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
