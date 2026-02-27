import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, VolumeX } from 'lucide-react';

/* ─── Playlist ─────────────────────────────────────────────
   Adicione novos arquivos em /public/musicas/ e inclua
   o objeto correspondente aqui.
   ─────────────────────────────────────────────────────────── */
const PLAYLIST = [
  { file: '/musicas/ninar 1.mp3', title: 'Ninar I' },
  { file: '/musicas/ninar 2.mp3', title: 'Ninar II' },
];

/* ─── Fisher-Yates shuffle ──────────────────────────────── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── Formata segundos → "m:ss" ────────────────────────── */
function fmt(s: number): string {
  if (!isFinite(s) || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

interface AudioPlayerProps {
  /** Prop mantida por compatibilidade — não usada internamente */
  currentTrack?: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function AudioPlayer({ isPlaying, onPlayPause }: AudioPlayerProps) {
  /* Cria a playlist embaralhada UMA vez ao montar */
  const [queue] = useState<typeof PLAYLIST>(() => shuffle(PLAYLIST));
  const [trackIdx, setTrackIdx] = useState(0);
  const [progress, setProgress] = useState(0);   // 0–100
  const [elapsed, setElapsed] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [volume, setVolume] = useState(0.75);
  const [muted, setMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = queue[trackIdx];

  /* ── Inicializa o elemento <audio> ─────────────────────── */
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Troca de faixa ────────────────────────────────────── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = isPlaying;

    audio.src = currentTrack.file;
    audio.load();
    setProgress(0);
    setElapsed('0:00');
    setDuration('0:00');

    if (wasPlaying) {
      audio.play().catch(() => {/* autoplay blocked — aguarda interação */ });
    }
  }, [trackIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Play / Pause sincronizado com prop ────────────────── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      /* Se src ainda não foi definido, define agora */
      if (!audio.src || audio.src === window.location.href) {
        audio.src = currentTrack.file;
        audio.load();
      }
      audio.play().catch(() => { });
    } else {
      audio.pause();
    }
  }, [isPlaying]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Volume / Mute ─────────────────────────────────────── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = muted ? 0 : volume;
  }, [volume, muted]);

  /* ── Eventos do áudio ──────────────────────────────────── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
      setElapsed(fmt(audio.currentTime));
    };

    const onLoadedMetadata = () => {
      setDuration(fmt(audio.duration));
    };

    /* Avança para a próxima faixa automaticamente — sem pausas */
    const onEnded = () => {
      const nextIdx = (trackIdx + 1) % queue.length;
      const nextTrackData = queue[nextIdx];
      // Troca direto no elemento de áudio para evitar gap
      audio.src = nextTrackData.file;
      audio.load();
      audio.play().catch(() => { });
      setTrackIdx(nextIdx);
      setProgress(0);
      setElapsed('0:00');
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [queue.length]);

  /* ── Garante que a próxima faixa toca após a troca ─────── */
  const goTo = useCallback((idx: number) => {
    setTrackIdx(idx);
    /* Se estava pausado, não precisa forçar play */
  }, []);

  const prevTrack = () => goTo((trackIdx - 1 + queue.length) % queue.length);
  const nextTrack = () => goTo((trackIdx + 1) % queue.length);

  /* ── Clique na barra de progresso ──────────────────────── */
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio * 100);
  };

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <div
      className="card fade-up"
      style={{
        width: '100%',
        maxWidth: '440px',
        margin: '0 auto',
        padding: '2rem 1.75rem',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      {/* Status + nome da faixa */}
      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: isPlaying ? 'var(--color-accent)' : 'var(--color-text-muted)',
            marginBottom: '0.625rem',
            fontWeight: 400,
            transition: 'color 0.3s ease',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: isPlaying ? 'var(--color-accent)' : 'var(--color-text-muted)',
              display: 'inline-block',
              transition: 'background 0.3s ease',
              ...(isPlaying ? { animation: 'breathe 2s ease-in-out infinite' } : {}),
            }}
          />
          {isPlaying ? 'Tocando suavemente...' : 'Em pausa'}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.05rem',
            color: 'var(--color-text-primary)',
            fontWeight: 500,
          }}
        >
          <span aria-hidden>🎵</span>
          <span>{currentTrack.title}</span>
        </div>

        {/* Indicador de faixa: ex "1 / 2" */}
        <div
          style={{
            fontSize: '0.68rem',
            color: 'var(--color-text-muted)',
            marginTop: '0.35rem',
            letterSpacing: '0.08em',
          }}
        >
          {trackIdx + 1} / {queue.length}
        </div>
      </div>

      {/* Barra de progresso */}
      <div
        className={isPlaying ? 'shimmer-playing' : ''}
        style={{ marginBottom: '0.5rem' }}
      >
        <div
          className="progress-track"
          onClick={handleProgressClick}
          role="slider"
          aria-label="Progresso da música"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            const audio = audioRef.current;
            if (!audio) return;
            if (e.key === 'ArrowRight') audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
            if (e.key === 'ArrowLeft') audio.currentTime = Math.max(audio.currentTime - 5, 0);
          }}
        >
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Tempo */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.7rem',
          color: 'var(--color-text-muted)',
          marginBottom: '1.75rem',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        <span>{elapsed}</span>
        <span>{duration}</span>
      </div>

      {/* Controles principais */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '1.75rem',
        }}
      >
        {/* Anterior */}
        <button
          aria-label="Faixa anterior"
          onClick={prevTrack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            display: 'flex',
            padding: '0.5rem',
            borderRadius: '50%',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--color-text-primary)')}
          onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--color-text-muted)')}
        >
          <SkipBack size={22} />
        </button>

        {/* Play / Pause */}
        <button
          className="play-btn"
          onClick={onPlayPause}
          aria-label={isPlaying ? 'Pausar' : 'Tocar'}
        >
          {isPlaying
            ? <Pause size={28} fill="white" strokeWidth={0} />
            : <Play size={28} fill="white" strokeWidth={0} style={{ marginLeft: '3px' }} />
          }
        </button>

        {/* Próxima */}
        <button
          aria-label="Próxima faixa"
          onClick={nextTrack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            display: 'flex',
            padding: '0.5rem',
            borderRadius: '50%',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--color-text-primary)')}
          onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--color-text-muted)')}
        >
          <SkipForward size={22} />
        </button>
      </div>

      {/* Loop (sempre ativo visualmente) + Volume */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Loop — sempre ativo (a playlist é circular) */}
        <button
          aria-label="Repetição de playlist ativa"
          aria-pressed={true}
          title="Playlist em loop contínuo"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'default',
            color: 'var(--color-accent)',
            display: 'flex',
            padding: '0.25rem',
          }}
        >
          <Repeat size={18} />
        </button>

        {/* Volume */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            flex: 1,
            maxWidth: '140px',
          }}
        >
          <button
            aria-label={muted ? 'Ativar som' : 'Silenciar'}
            onClick={() => setMuted((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-muted)',
              display: 'flex',
              padding: '0.25rem',
              transition: 'color 0.2s ease',
              flexShrink: 0,
            }}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={muted ? 0 : volume}
            onChange={(e) => {
              setVolume(Number(e.target.value));
              if (muted) setMuted(false);
            }}
            aria-label="Volume"
            style={{ flex: 1, accentColor: 'var(--color-accent)' }}
          />
        </div>
      </div>
    </div>
  );
}
