'use client'

import { useEffect, useState } from 'react'
import { BRAND } from '../brand'
import { BookingTrigger } from '../booking'
import { t } from '../copy'
import { BrandName } from './BrandName'
import styles from './Navbar.module.css'

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  )
}

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`${styles.nav} ${transparent && !scrolled ? styles.transparent : styles.solid}`}>
        <a href="/" className={styles.brand}>
          <BrandName variant="header" />
        </a>

        <div className={styles.center}>
          <a href="#services">{t.nav.services}</a>
          <a href="#results">{t.nav.results}</a>
          <a href="#prices">{t.nav.prices}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>

        <div className={styles.right}>
          <BookingTrigger className={styles.cta}>
            {t.nav.cta}
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12 L12 2 M5 2 H12 V9" />
              </svg>
            </span>
          </BookingTrigger>

          <a href={`tel:${BRAND.phoneTel}`} className={styles.phoneBtn}>
            <span className={styles.waIcon}><PhoneIcon /></span>
            <span>{BRAND.phone}</span>
          </a>
        </div>

        <div className={styles.mobileActions}>
          <a href={`tel:${BRAND.phoneTel}`} className={styles.phoneBtn} aria-label={BRAND.phone}>
            <span className={styles.waIcon}><PhoneIcon /></span>
            <span>{BRAND.phone}</span>
          </a>
          <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label={t.nav.openMenu}>
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M1 2h20M1 8h20M1 14h20" />
            </svg>
          </button>
        </div>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true">
        <div className={styles.drawerTop}>
          <a href="/" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            <BrandName variant="header" />
          </a>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label={t.nav.closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L20 20 M20 4 L4 20"/>
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label={t.nav.mobileNav}>
          <a href="#services" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#results" onClick={() => setMenuOpen(false)}>{t.nav.results}</a>
          <a href="#prices" onClick={() => setMenuOpen(false)}>{t.nav.prices}</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>{t.nav.faq}</a>
        </nav>
        <div className={styles.drawerActions}>
          <BookingTrigger className={styles.cta} onClick={() => setMenuOpen(false)}>
            {t.nav.cta}
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12 L12 2 M5 2 H12 V9" />
              </svg>
            </span>
          </BookingTrigger>

          <a href={`tel:${BRAND.phoneTel}`} className={styles.phoneBtn} onClick={() => setMenuOpen(false)}>
            <span className={styles.waIcon}><PhoneIcon /></span>
            <span>{BRAND.phone}</span>
          </a>
        </div>
      </div>
    </>
  )
}
