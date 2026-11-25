'use client'

import { BRAND } from '../../brand'
import { t } from '../../copy'
import Reveal from '../Reveal'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.aboutLayout}>
          <Reveal className={styles.aboutCopy} variant="left">
            <SectionHeading
              title={<>{t.about.titleBefore}<em>{t.about.titleEm}</em></>}
            />
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <div className={styles.aboutActions}>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className={styles.aboutBtn}>
                {t.about.ctaBtn}
              </a>
              <p className={styles.aboutTrust}>{t.about.ctaNote}</p>
            </div>
          </Reveal>

          <Reveal className={styles.aboutMedia} variant="right" delay={120}>
            <video
              className={styles.aboutVideo}
              controls
              playsInline
              preload="metadata"
              poster={BRAND.aboutPoster}
              aria-label={t.about.teamImageAlt}
            >
              <source src={BRAND.aboutVideo} type="video/mp4" />
            </video>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
