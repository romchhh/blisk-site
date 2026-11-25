'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import styles from './Reveal.module.css'

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  stagger?: boolean
  once?: boolean
}

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  stagger = false,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) io.disconnect()
          return
        }
        if (!once) setVisible(false)
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [once])

  const style: CSSProperties | undefined = delay
    ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties)
    : undefined

  return (
    <Tag
      ref={ref}
      className={[
        styles.reveal,
        styles[variant],
        stagger ? styles.stagger : '',
        visible ? styles.in : '',
        visible ? 'revealIn' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {children}
    </Tag>
  )
}
