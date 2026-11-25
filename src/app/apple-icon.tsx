import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1b3022',
          borderRadius: 36,
          color: '#c9d5b5',
          fontSize: 96,
          fontWeight: 800,
          fontFamily: 'Montserrat, Helvetica, sans-serif',
        }}
      >
        B
      </div>
    ),
    { ...size },
  )
}
