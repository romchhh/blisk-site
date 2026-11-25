'use client'

import Link from 'next/link'
import { BRAND } from '../brand'
import { t } from '../copy'
import { BrandName } from './BrandName'
import Reveal from './Reveal'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Reveal className={styles.shell} variant="up">
        <div className={styles.header}>
          <Link href="/" className={styles.brand}>
            <BrandName variant="footer" />
          </Link>

          <nav className={styles.links} aria-label={t.footer.navLabel}>
            {t.footer.links.map((label, i) => (
              <a key={label} href={t.footer.linkTargets[i]}>{label}</a>
            ))}
          </nav>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>{t.footer.hours}</h3>
            <p>{t.footer.hoursWeek}</p>
            <p>{t.footer.hoursWeekend}</p>
          </div>

          <div className={styles.col}>
            <h3>{t.footer.contactsTitle}</h3>
            <p>{BRAND.address}<br />{BRAND.city}</p>
            <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a>
          </div>

          <div className={styles.col}>
            <h3>{t.footer.policiesTitle}</h3>
            <div className={styles.policyList}>
              {t.footer.legal.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}</span>
          <a
            href={t.footer.craftedByUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.craftedBy}
          >
            <span>{t.footer.craftedBy}</span>
            <strong>{t.footer.craftedByName}</strong>
          </a>
        </div>
      </Reveal>
    </footer>
  )
}
