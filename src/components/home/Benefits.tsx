import React from 'react';

const benefits = [
  {
    emoji: '🚫',
    title: 'Sem anúncios em áudio',
    description:
      'Zero interrupções sonoras. Evitamos picos de cortisol que podem despertar o bebê no sono leve.',
  },
  {
    emoji: '👶',
    title: 'Ambiente seguro',
    description:
      'Conteúdo auditivo curado e seguro, sem surpresas sonoras, sem letras inadequadas.',
  },
  {
    emoji: '🤍',
    title: 'Pensado para mães',
    description:
      'Interface com fundo escuro para não inibir a melatonina — cuide do bebê sem prejudicar seu descanso.',
  },
  {
    emoji: '🌙',
    title: 'Menos estímulos, mais sono',
    description:
      'Frequências constantes e suaves que ensinam o bebê a associar o som com a hora de dormir.',
  },
];

export default function Benefits() {
  return (
    <section className="section" aria-labelledby="benefits-heading">
      <div className="section-inner-wide">
        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: '0.75rem',
            }}
          >
            Por que escolher
          </p>
          <h2
            id="benefits-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 5vw, 1.9rem)',
              color: 'var(--color-text-primary)',
              fontWeight: 500,
            }}
          >
            🌙 Menos estímulos,
            <br />
            <span style={{ color: 'var(--color-accent-soft)' }}>mais sono profundo</span>
          </h2>
        </div>

        {/* Grid de cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {benefits.map((b, i) => (
            <article
              key={i}
              className="benefit-card fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="benefit-emoji" aria-hidden>
                {b.emoji}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
