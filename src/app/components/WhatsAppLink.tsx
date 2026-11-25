'use client'

import type { AnchorHTMLAttributes } from 'react'
import { BRAND } from '../brand'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string
}

export default function WhatsAppLink({ href = BRAND.whatsapp, ...props }: Props) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
}
