import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: '100%',
        padding: '2.5rem 1.25rem',
        background: 'rgba(8, 8, 18, 0.8)',
        borderTop: '1px solid rgba(164, 168, 224, 0.07)',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center',
        }}
      >
        {/* Logo repetida no footer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontSize: '1rem' }} aria-hidden>🌙</span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              fontWeight: 500,
            }}
          >
            Música de Ninar
          </span>
        </div>

        {/* Links */}
        <nav
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          aria-label="Links do rodapé"
        >
          {[
            { label: 'Política de Privacidade', href: '#privacidade' },
            { label: 'Termos de Uso', href: '#termos' },
            { label: 'Contato', href: '#contato' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color =
                'var(--color-accent-soft)')
              }
              onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color =
                'var(--color-text-muted)')
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tagline com emoji */}
        <p
          style={{
            fontSize: '0.78rem',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.02em',
          }}
        >
          🤍 Feito com carinho para mães e seus bebês • {year}
        </p>
      </div>
    </footer>
  );
}
