'use client'

import { BRAND } from '../../brand'
import { t } from '../../copy'
import styles from './ScrollBookingPrompt.module.css'

export default function ScrollBookingPrompt({
  visible,
  onBook,
  onDismiss,
}: {
  visible: boolean
  onBook: () => void
  onDismiss: () => void
}) {
  return (
    <div className={`${styles.dock} ${visible ? styles.dockVisible : ''}`} aria-hidden={!visible}>
      <a href={`tel:${BRAND.phoneTel}`} className={styles.whatsapp} aria-label={BRAND.phone}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
        </svg>
      </a>
      <aside className={styles.prompt}>
        <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label={t.booking.close}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 3 L11 11 M11 3 L3 11" />
          </svg>
        </button>
        <p className={styles.title}>{t.booking.promptTitle}</p>
        <p className={styles.text}>{t.booking.promptText}</p>
        <button type="button" className={styles.btn} onClick={onBook}>{t.booking.promptBtn}</button>
      </aside>
    </div>
  )
}
