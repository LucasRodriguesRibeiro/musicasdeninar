import React, { useState } from 'react';

const NAV_LINKS = [
  { href: '/musica-de-ninar-para-bebe', label: 'Para Bebê' },
  { href: '/musica-para-bebe-dormir', label: 'Para Dormir' },
  { href: '/musica-de-ninar-para-acalmar', label: 'Acalmar' },
  { href: '/musica-de-ninar-gospel', label: 'Gospel' },
  { href: '/musica-de-ninar-instrumental', label: 'Instrumental' },
  { href: '/musica-para-recem-nascido', label: 'Recém-Nascido' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        background: 'rgba(11, 12, 26, 0.92)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(164, 168, 224, 0.07)',
      }}
    >
      {/* Barra principal */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0.875rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
          aria-label="Página inicial — Música de Ninar"
        >
          <span style={{ fontSize: '1.2rem', lineHeight: 1 }} aria-hidden>🌙</span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              letterSpacing: '0.02em',
            }}
          >
            Música de{' '}
            <span style={{ color: 'var(--color-accent-soft)' }}>Ninar</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav
          aria-label="Navegação principal"
          style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}
          className="header-nav-desktop"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                padding: '0.4rem 0.75rem',
                borderRadius: '100px',
                transition: 'color 0.2s ease, background 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139, 143, 201, 0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão menu mobile */}
        <button
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="header-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            padding: '0.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'currentColor',
              borderRadius: '2px',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'currentColor',
              borderRadius: '2px',
              transition: 'opacity 0.25s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'currentColor',
              borderRadius: '2px',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <nav
          aria-label="Menu de navegação"
          style={{
            borderTop: '1px solid rgba(164, 168, 224, 0.07)',
            padding: '0.75rem 1.25rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                padding: '0.7rem 1rem',
                borderRadius: '10px',
                transition: 'background 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139, 143, 201, 0.09)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-secondary)';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
