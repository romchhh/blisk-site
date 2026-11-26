import type { LeadPayload } from './lead'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function field(label: string, value: string) {
  return `<b>${label}:</b> ${escapeHtml(value)}`
}

export function formatLeadMessage(payload: LeadPayload) {
  const sourceLabel = payload.source === 'contact' ? 'Форма на сайті' : 'Швидкий запис'
  const lines = [
    `<b>🆕 Нова заявка — ${sourceLabel}</b>`,
    '━━━━━━━━━━━━━━━━',
    field('Імʼя', payload.name),
    field('Телефон', payload.phone),
  ]

  if (payload.email?.trim()) lines.push(field('Email', payload.email.trim()))
  if (payload.zip?.trim()) lines.push(field('Місто / район', payload.zip.trim()))
  if (payload.service?.trim()) lines.push(field('Послуга', payload.service.trim()))
  if (payload.comment?.trim()) lines.push(field('Коментар', payload.comment.trim()))

  const timestamp = new Date().toLocaleString('uk-UA', {
    timeZone: 'Europe/Kyiv',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  lines.push('━━━━━━━━━━━━━━━━', `<i>${timestamp} · Blisk Eco Cleaning</i>`)
  return lines.join('\n')
}

export async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw new Error('Telegram is not configured')
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  })

  if (!response.ok) {
    const data = await response.json().catch(() => null) as { description?: string } | null
    throw new Error(data?.description ?? 'Failed to send Telegram message')
  }
}
