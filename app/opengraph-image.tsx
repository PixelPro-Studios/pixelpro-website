import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'PixelPro Studios - Professional AV Systems and Event Production Singapore';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
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
          backgroundColor: '#1a1a1a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #2a2a2a 0%, #1a1a1a 50%)',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Main Title */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #f5f5f5 0%, #c0c0c0 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.02em',
              marginBottom: 20,
              display: 'flex',
            }}
          >
            PixelPro Studios
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: '#c0c0c0',
              marginBottom: 40,
              display: 'flex',
            }}
          >
            Every Moment, Perfectly Framed
          </div>

          {/* Services */}
          <div
            style={{
              display: 'flex',
              gap: 30,
              fontSize: 24,
              color: '#f5f5f5',
            }}
          >
            <div style={{ display: 'flex' }}>AV Systems</div>
            <div style={{ display: 'flex' }}>•</div>
            <div style={{ display: 'flex' }}>Photography</div>
            <div style={{ display: 'flex' }}>•</div>
            <div style={{ display: 'flex' }}>Videography</div>
            <div style={{ display: 'flex' }}>•</div>
            <div style={{ display: 'flex' }}>Talent</div>
          </div>

          {/* Bottom accent line */}
          <div
            style={{
              marginTop: 60,
              width: 400,
              height: 4,
              background: 'linear-gradient(90deg, transparent 0%, #c0c0c0 50%, transparent 100%)',
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

