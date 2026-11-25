'use client'

import Image from 'next/image'
import { t } from '../../copy'
import { BEFORE_AFTER } from '../../data/siteContent'
import Reveal from '../Reveal'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

export default function BeforeAfterSection() {
  return (
    <section id="results" className={`${styles.section} ${styles.resultsSection}`}>
      <div className={styles.inner}>
        <Reveal>
          <SectionHeading
            title={<>{t.results.titleBefore}<em>{t.results.titleEm}</em></>}
            lead={t.results.lead}
            centered
          />
        </Reveal>

        <Reveal className={styles.resultsGrid} stagger delay={90}>
          {BEFORE_AFTER.map((item, index) => (
            <figure
              key={item.id}
              className={`${styles.resultsCard} ${index === 0 ? styles.resultsCardWide : ''}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={1125}
                sizes={index === 0 ? '(max-width: 900px) 100vw, 560px' : '(max-width: 900px) 50vw, 280px'}
                className={styles.resultsImg}
              />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
