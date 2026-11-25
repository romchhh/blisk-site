'use client'

import { t } from '../../copy'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

export default function WhyUsSection() {
  return (
    <section id="why-us" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          title={<>{t.whyUs.titleBefore}<em>{t.whyUs.titleEm}</em></>}
          lead={t.whyUs.lead}
        />

        <div className={styles.whyList}>
          {t.whyUs.items.map((item, index) => (
            <article key={item.title} className={styles.whyRow}>
              <span className={styles.whyNum} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={styles.whyCopy}>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyText}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
