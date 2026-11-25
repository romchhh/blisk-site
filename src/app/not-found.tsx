import Link from 'next/link'
import SiteShell from './components/SiteShell'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <SiteShell>
      <section className={styles.wrap}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Сторінку не знайдено</h1>
        <p className={styles.text}>
          Сторінка не існує або була переміщена. Поверніться на головну, щоб записатись на хімчистку.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>На головну</Link>
          <Link href="/#book" className={styles.secondary}>Залишити заявку</Link>
        </div>
      </section>
    </SiteShell>
  )
}
