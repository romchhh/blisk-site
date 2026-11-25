'use client'

import { t } from '../copy'
import Reveal from './Reveal'
import styles from './TrustBar.module.css'

export default function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Ключові умови">
      <Reveal className={styles.inner} stagger variant="up">
        {t.trust.items.map((item) => (
          <div key={item.label} className={styles.item}>
            <strong className={styles.value}>{item.value}</strong>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
