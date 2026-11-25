'use client'

import Image from 'next/image'
import { BRAND } from '../../brand'
import { BookingTrigger } from '../../booking'
import { t } from '../../copy'
import Reveal from '../Reveal'
import styles from './sections.module.css'

export default function CtaBannerSection() {
  const hasPhone = Boolean(BRAND.phoneTel)

  return (
    <section className={styles.ctaBanner} id="book-cta">
      <Reveal className={styles.ctaPanel} variant="scale">
        <div className={styles.ctaCopy}>
          <h2 className={styles.ctaTitle}>{t.ctaBanner.title}</h2>
          <p className={styles.ctaText}>{t.ctaBanner.text}</p>

          <div className={styles.ctaActions}>
            {hasPhone ? (
              <a href={`tel:${BRAND.phoneTel}`} className={styles.ctaPhone}>
                {BRAND.phone}
              </a>
            ) : null}

            <BookingTrigger className={styles.ctaBtn}>
              {t.ctaBanner.btn}
            </BookingTrigger>

            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaAlt}
            >
              {t.ctaBanner.alt}
            </a>
          </div>
        </div>

        <div className={styles.ctaVisual}>
          <Image
            src="/media/brand/clean-spray.png"
            alt="CLEAN SPRAY Blisk"
            width={640}
            height={640}
            sizes="(max-width: 900px) 70vw, 360px"
            className={styles.ctaImage}
            priority={false}
          />
        </div>
      </Reveal>
    </section>
  )
}
