import Image from 'next/image'
import { BRAND } from '../brand'
import styles from './BrandName.module.css'

type BrandNameProps = {
  variant?: 'header' | 'footer'
  className?: string
}

export function BrandName({ variant = 'header', className }: BrandNameProps) {
  return (
    <span className={`${styles.brand} ${styles[variant]} ${className ?? ''}`}>
      <Image
        src="/media/logo.png"
        alt={BRAND.name}
        width={384}
        height={256}
        sizes={variant === 'footer' ? '220px' : '(max-width: 480px) 128px, (max-width: 768px) 140px, 168px'}
        className={styles.logo}
        priority={variant === 'header'}
        quality={85}
      />
    </span>
  )
}
