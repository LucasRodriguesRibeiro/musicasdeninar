import React from 'react';

interface AdBannerProps {
  label?: string;
}

export default function AdBanner({ label = 'Conteúdo patrocinado' }: AdBannerProps) {
  return (
    <div className="ad-banner" aria-label={label}>
      <p
        style={{
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          marginBottom: '0.75rem',
        }}
      >
        {label}
      </p>
      {/* Espaço reservado para Google AdSense */}
      <div
        style={{
          minHeight: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '8px',
          color: 'var(--color-text-muted)',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
        }}
        aria-hidden
      >
        {/* Insira aqui o código do AdSense */}
      </div>
    </div>
  );
}
