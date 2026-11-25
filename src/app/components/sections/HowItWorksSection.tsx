'use client'

import { t } from '../../copy'
import Reveal from '../Reveal'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className={`${styles.section} ${styles.sectionSurface}`}>
      <div className={styles.inner}>
        <Reveal>
          <SectionHeading
            title={<>{t.howItWorks.titleBefore}<em>{t.howItWorks.titleEm}</em></>}
            lead={t.howItWorks.lead}
          />
        </Reveal>

        <Reveal as="ol" className={styles.stepsTrack} stagger delay={80}>
          {t.howItWorks.steps.map((step, index) => (
            <li key={step.title} className={styles.stepItem}>
              <div className={styles.stepIndex}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {index < t.howItWorks.steps.length - 1 ? (
                  <span className={styles.stepConnector} aria-hidden="true" />
                ) : null}
              </div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
