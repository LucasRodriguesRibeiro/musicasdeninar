import React from 'react';

export default function ProductCard() {
    return (
        <section className="section" aria-labelledby="product-heading">
            <div className="section-inner">
                <div className="product-card fade-up">
                    {/* Emoji decorativo */}
                    <div
                        style={{
                            fontSize: '2.5rem',
                            marginBottom: '1.25rem',
                            lineHeight: 1,
                        }}
                        aria-hidden
                    >
                        🌙
                    </div>

                    {/* Label */}
                    <p
                        style={{
                            fontSize: '0.65rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-muted)',
                            marginBottom: '0.875rem',
                        }}
                    >
                        Conteúdo Premium
                    </p>

                    {/* Título */}
                    <h2
                        id="product-heading"
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(1.3rem, 4vw, 1.75rem)',
                            color: 'var(--color-text-primary)',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            lineHeight: 1.3,
                        }}
                    >
                        O sono do seu bebê
                        <br />
                        <span style={{ color: 'var(--color-accent-soft)' }}>começa aqui</span>
                    </h2>

                    {/* Divider */}
                    <div className="divider" style={{ marginBottom: '1.25rem' }} />

                    {/* Descrição */}
                    <p
                        style={{
                            fontSize: '0.9rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '1.75rem',
                            fontWeight: 300,
                        }}
                    >
                        Acesse a biblioteca completa de músicas de ninar, playlists
                        temáticas e guias de rotina do sono para tornar cada noite
                        mais suave — para você e para o seu bebê. 🤍
                    </p>

                    {/* CTA */}
                    <a
                        href="#premium"
                        className="btn btn-ghost"
                        style={{ fontSize: '0.88rem' }}
                    >
                        🎁 Conhecer conteúdo premium
                    </a>

                    {/* Rodapé do card */}
                    <p
                        style={{
                            fontSize: '0.72rem',
                            color: 'var(--color-text-muted)',
                            marginTop: '1.25rem',
                        }}
                    >
                        Acesso imediato · Sem anúncios · Para sempre seu
                    </p>
                </div>
            </div>
        </section>
    );
}
