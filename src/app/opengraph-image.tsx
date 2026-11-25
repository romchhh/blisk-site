import { ImageResponse } from 'next/og'

export const alt = 'Blisk Eco Cleaning — хімчистка меблів у Чернівцях'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(145deg, #1b3022 0%, #2f5a3c 55%, #3f6f4d 100%)',
          color: '#fbfaf6',
          fontFamily: 'Montserrat, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#c9d5b5',
          }}
        >
          Blisk Eco Cleaning
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 920 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}
          >
            Хімчистка меблів у Чернівцях
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: 'rgba(251, 250, 246, 0.82)',
              maxWidth: 780,
            }}
          >
            Дивани, матраци, килими та миття вікон. Виїзд по місту й області.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#c9d5b5',
          }}
        >
          <span>від 1000 грн · оцінка після фото</span>
          <span>blisk.cv.ua</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
