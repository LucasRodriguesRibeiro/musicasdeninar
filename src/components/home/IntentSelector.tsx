import React from 'react';

interface Intent {
  id: string;
  emoji: string;
  label: string;
  description: string;
}

const intents: Intent[] = [
  {
    id: 'sleep',
    emoji: '😴',
    label: 'Dormir profundamente',
    description: 'Sons para sono profundo',
  },
  {
    id: 'calm',
    emoji: '🤍',
    label: 'Acalmar o bebê',
    description: 'Melodias para inquietação',
  },
  {
    id: 'routine',
    emoji: '🌙',
    label: 'Rotina noturna',
    description: 'Para o ritual antes de dormir',
  },
  {
    id: 'gospel',
    emoji: '🙏',
    label: 'Gospel instrumental',
    description: 'Paz e espiritualidade',
  },
];

interface IntentSelectorProps {
  activeIntent: string;
  onSelect: (id: string) => void;
}

export default function IntentSelector({ activeIntent, onSelect }: IntentSelectorProps) {
  return (
    <section className="section" aria-labelledby="intent-heading">
      <div className="section-inner">
        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: '0.75rem',
            }}
          >
            Escolha seu momento
          </p>
          <h2
            id="intent-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.3rem, 4.5vw, 1.75rem)',
              color: 'var(--color-text-primary)',
              fontWeight: 500,
            }}
          >
            🎵 Como você quer sentir?
          </h2>
        </div>

        {/* Grid de intenções */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0.875rem',
          }}
          role="radiogroup"
          aria-label="Selecione o modo de reprodução"
        >
          {intents.map((intent) => (
            <button
              key={intent.id}
              className={`intent-card ${activeIntent === intent.id ? 'active' : ''}`}
              onClick={() => onSelect(intent.id)}
              role="radio"
              aria-checked={activeIntent === intent.id}
              aria-label={intent.label}
            >
              <span className="intent-emoji" aria-hidden>
                {intent.emoji}
              </span>
              <div>
                <div className="intent-label">{intent.label}</div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                    marginTop: '0.15rem',
                  }}
                >
                  {intent.description}
                </div>
              </div>
              {/* Indicador de seleção */}
              <div
                style={{
                  marginLeft: 'auto',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background:
                    activeIntent === intent.id
                      ? 'var(--color-accent)'
                      : 'rgba(164, 168, 224, 0.12)',
                  transition: 'background 0.2s ease',
                  flexShrink: 0,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
