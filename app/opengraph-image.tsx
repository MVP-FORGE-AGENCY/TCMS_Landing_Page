import { ImageResponse } from 'next/og';

export const alt = 'TCMS - Training & Competence Management System';
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
          fontSize: 60,
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          TCMS
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          Training & Competence Management System
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
