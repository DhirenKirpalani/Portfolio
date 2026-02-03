import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #ffffff, #3b82f6)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
            }}
          >
            Dhiren Kirpalani
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: 20,
            }}
          >
            Product Manager
          </div>
          <div
            style={{
              fontSize: 36,
              background: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Fintech & Payment Systems
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
