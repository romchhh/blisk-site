'use client'

import { useEffect, useRef, useState } from 'react'
import { BRAND } from '../../brand'
import { useBooking } from '../../booking'
import { getServiceTitle, t } from '../../copy'
import { submitLead } from '../../lib/lead'
import WhatsAppLink from '../WhatsAppLink'
import styles from './BookingModal.module.css'

type FormState = { name: string; phone: string; email: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

const emptyForm = (): FormState => ({ name: '', phone: '', email: '' })

function SubmitArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 14 L14 2 M6 2 H14 V10" />
    </svg>
  )
}

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const { zip, service } = useBooking()
  const dialogRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState<FormState>(emptyForm)
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle')
      setForm(emptyForm())
      return
    }
    dialogRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setStatus('error')
      return
    }
    setStatus('loading')
    const ok = await submitLead({
      source: 'quick-booking',
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      zip: zip.trim() || undefined,
      service: service ? getServiceTitle(service) : undefined,
    })
    if (ok) {
      setStatus('success')
    } else {
      setStatus('error')
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        ref={dialogRef}
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.handle} aria-hidden="true" />

        {status === 'success' ? (
          <div className={styles.success}>
            <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="24" cy="24" r="20" />
              <path d="M14 24 L21 31 L34 18" />
            </svg>
            <h2 id="booking-modal-title" className={styles.title}>{t.booking.successTitle}</h2>
            <p className={styles.successText}>{t.booking.successText}</p>
            <button type="button" className={styles.submit} onClick={onClose}>
              <span className={styles.submitLabel}>{t.booking.close}</span>
              <span className={styles.submitIcon}><SubmitArrowIcon /></span>
            </button>
          </div>
        ) : (
          <>
            <h2 id="booking-modal-title" className={styles.title}>{t.booking.modalTitle}</h2>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="text"
                className={styles.input}
                placeholder={t.booking.namePh}
                value={form.name}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                  if (status === 'error') setStatus('idle')
                }}
                required
                autoComplete="name"
                maxLength={120}
              />
              <input
                type="tel"
                className={styles.input}
                placeholder={t.booking.phonePh}
                value={form.phone}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                  if (status === 'error') setStatus('idle')
                }}
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <input
                type="email"
                className={styles.input}
                placeholder={t.booking.emailPh}
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                autoComplete="email"
                maxLength={120}
              />
              {status === 'error' && (
                <p className={styles.error}>
                  {form.phone.replace(/\D/g, '').length < 10 ? t.booking.error : t.booking.submitError}
                </p>
              )}
              <button type="submit" className={styles.submit} disabled={status === 'loading'}>
                <span className={styles.submitLabel}>
                  {status === 'loading' ? t.booking.submitting : t.booking.submit}
                </span>
                <span className={styles.submitIcon}><SubmitArrowIcon /></span>
              </button>
              <p className={styles.consent}>{t.booking.consent}</p>
            </form>
            <div className={styles.altContact}>
              <span className={styles.or}>{t.booking.or}</span>
              <p className={styles.callLead}>{t.booking.callLead}</p>
              <a href={`tel:${BRAND.phoneTel}`} className={styles.phoneBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                </svg>
                {BRAND.phone}
              </a>
              <p className={styles.socialLine}>
                <span>{t.booking.socialLead}</span>
                <WhatsAppLink className={styles.socialLink}>
                  {t.booking.whatsapp}
                </WhatsAppLink>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
