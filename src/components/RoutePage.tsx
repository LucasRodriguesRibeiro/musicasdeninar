import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { RouteData } from '../data/routes.data';
import Header from './layout/Header';
import Footer from './layout/Footer';
import AudioPlayer from './player/AudioPlayer';
import Benefits from './home/Benefits';
import AdBanner from './ads/AdBanner';

interface RoutePageProps {
    data: RouteData;
}

/* ─── Atualiza <title> e <meta description> dinamicamente ── */
function usePageMeta(title: string, description: string) {
    useEffect(() => {
        document.title = title;
        let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description;
    }, [title, description]);
}

export default function RoutePage({ data }: RoutePageProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef<HTMLElement | null>(null);
    const location = useLocation();

    usePageMeta(data.title, data.metaDescription);

    /* Reseta o player ao mudar de rota */
    useEffect(() => {
        setIsPlaying(false);
    }, [location.pathname]);

    const scrollToPlayer = () => {
        playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => setIsPlaying(true), 400);
    };

    return (
        <div
            style={{
                minHeight: '100dvh',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--color-night-950)',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-sans)',
            }}
        >
            <Header />

            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

                {/* ── HERO ─────────────────────────────────────────── */}
                <section
                    aria-label="Apresentação"
                    style={{
                        position: 'relative',
                        width: '100%',
                        padding: 'clamp(3.5rem, 10vw, 6rem) 1.25rem clamp(3rem, 8vw, 5rem)',
                        textAlign: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <div className="hero-aura" aria-hidden />
                    <div style={{ position: 'relative', zIndex: 1 }}>

                        {/* Superlabel — proposta de valor */}
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'rgba(139, 143, 201, 0.12)',
                                border: '1px solid rgba(139, 143, 201, 0.2)',
                                borderRadius: '100px',
                                padding: '0.35rem 0.9rem',
                                fontSize: '0.68rem',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--color-accent-soft)',
                                marginBottom: '2rem',
                            }}
                        >
                            <span aria-hidden>🎵</span> Gratuito · Sem anúncios em áudio
                        </div>

                        {/* H1 único por rota */}
                        <h1
                            style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(1.9rem, 7vw, 3.25rem)',
                                fontWeight: 500,
                                color: 'var(--color-text-primary)',
                                lineHeight: 1.2,
                                maxWidth: '640px',
                                margin: '0 auto 1.25rem',
                            }}
                        >
                            {data.h1}
                        </h1>

                        {/* Subheadline emocional */}
                        <p
                            style={{
                                fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                                color: 'var(--color-text-secondary)',
                                maxWidth: '500px',
                                margin: '0 auto 2.5rem',
                                lineHeight: 1.75,
                                fontWeight: 300,
                            }}
                        >
                            {data.subheadline}
                        </p>

                        {/* CTA */}
                        <button
                            id="btn-ouvir-agora"
                            className="btn btn-primary"
                            onClick={scrollToPlayer}
                            style={{ fontSize: '1rem' }}
                        >
                            🎵 Ouvir agora
                        </button>
                    </div>
                </section>

                {/* ── PLAYER ───────────────────────────────────────── */}
                <section
                    ref={(el) => { playerRef.current = el; }}
                    aria-label="Player de áudio"
                    style={{
                        width: '100%',
                        padding: '0 1.25rem 3rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <AudioPlayer
                        currentTrack={data.trackName}
                        isPlaying={isPlaying}
                        onPlayPause={() => setIsPlaying((v) => !v)}
                    />
                </section>

                {/* ── ANÚNCIO 1 ────────────────────────────────────── */}
                <div style={{ padding: '0 1.25rem 1rem' }}>
                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <AdBanner label="Conteúdo patrocinado" />
                    </div>
                </div>

                {/* ── SEPARADOR ────────────────────────────────────── */}
                <div style={{ padding: '1rem 1.25rem' }}>
                    <div className="star-sep" style={{ maxWidth: '440px', margin: '0 auto' }}>
                        ✦
                    </div>
                </div>

                {/* ── TEXTO SEO ÚNICO POR ROTA ─────────────────────── */}
                <section
                    className="section"
                    aria-labelledby="seo-heading"
                    style={{ paddingTop: '1.5rem' }}
                >
                    <div className="section-inner">
                        <p
                            style={{
                                fontSize: '0.68rem',
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'var(--color-text-muted)',
                                marginBottom: '0.75rem',
                                textAlign: 'center',
                            }}
                        >
                            Sobre esta página
                        </p>
                        <h2
                            id="seo-heading"
                            style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(1.3rem, 4.5vw, 1.75rem)',
                                color: 'var(--color-text-primary)',
                                fontWeight: 500,
                                marginBottom: '2rem',
                                textAlign: 'center',
                                lineHeight: 1.3,
                            }}
                        >
                            🎵 Por que a música ajuda seu bebê a dormir?
                        </h2>

                        {/* Intro */}
                        <p
                            style={{
                                fontSize: '1rem',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.8,
                                marginBottom: '1.5rem',
                                fontWeight: 300,
                            }}
                        >
                            {data.seoText.intro}
                        </p>

                        {/* Parágrafos do corpo */}
                        {data.seoText.body.map((paragraph, i) => (
                            <p
                                key={i}
                                style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--color-text-secondary)',
                                    lineHeight: 1.8,
                                    marginBottom: '1.25rem',
                                    fontWeight: 300,
                                    paddingLeft: '1rem',
                                    borderLeft: '2px solid rgba(139, 143, 201, 0.15)',
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}

                        {/* Fechamento emocional */}
                        <p
                            style={{
                                fontSize: '1rem',
                                color: 'var(--color-accent-soft)',
                                lineHeight: 1.8,
                                marginTop: '2rem',
                                fontStyle: 'italic',
                                fontFamily: 'var(--font-serif)',
                                textAlign: 'center',
                            }}
                        >
                            {data.seoText.closing}
                        </p>
                    </div>
                </section>

                {/* ── BENEFITS ─────────────────────────────────────── */}
                <Benefits />

                {/* ── ANÚNCIO 2 ────────────────────────────────────── */}
                <div style={{ padding: '0 1.25rem 3rem' }}>
                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <AdBanner label="Conteúdo patrocinado" />
                    </div>
                </div>

                {/* ── NAVEGAÇÃO ENTRE ROTAS ────────────────────────── */}
                <RouteNav currentSlug={data.slug} />

            </main>

            <Footer />
        </div>
    );
}

/* ─── Componente de navegação entre rotas ───────────────── */
const NAV_LINKS = [
    { slug: '/musica-de-ninar-para-bebe', label: '🌙 Para Bebê' },
    { slug: '/musica-para-bebe-dormir', label: '😴 Para Dormir' },
    { slug: '/musica-de-ninar-para-acalmar', label: '🤍 Para Acalmar' },
    { slug: '/musica-de-ninar-gospel', label: '🙏 Gospel' },
    { slug: '/musica-de-ninar-instrumental', label: '🎵 Instrumental' },
    { slug: '/musica-para-recem-nascido', label: '👶 Recém-Nascido' },
];

function RouteNav({ currentSlug }: { currentSlug: string }) {
    const others = NAV_LINKS.filter((l) => l.slug !== currentSlug);

    return (
        <section
            className="section"
            aria-labelledby="nav-heading"
            style={{ paddingTop: '0' }}
        >
            <div className="section-inner">
                <p
                    style={{
                        fontSize: '0.68rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.75rem',
                        textAlign: 'center',
                    }}
                >
                    Mais músicas
                </p>
                <h2
                    id="nav-heading"
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
                        color: 'var(--color-text-primary)',
                        fontWeight: 500,
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                    }}
                >
                    Explore outras intenções
                </h2>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.625rem',
                        justifyContent: 'center',
                    }}
                >
                    {others.map((link) => (
                        <a
                            key={link.slug}
                            href={link.slug}
                            className="btn btn-ghost"
                            style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
