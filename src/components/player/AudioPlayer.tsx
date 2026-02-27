import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  currentTrack: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function AudioPlayer({ currentTrack, isPlaying, onPlayPause }: AudioPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [muted, setMuted] = useState(false);
  const [loop, setLoop] = useState(true);
  const [elapsed, setElapsed] = useState('0:00');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Simula progresso quando está tocando
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          const next = prev + 0.083; // ~120 segundos de simulação
          const seconds = Math.floor((next / 100) * 120);
          const m = Math.floor(seconds / 60);
          const s = seconds % 60;
          setElapsed(`${m}:${s.toString().padStart(2, '0')}`);
          return next;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    setProgress((x / rect.width) * 100);
  };

  const totalDuration = '2:00';

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
      {/* Topo: status + título */}
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
          <span>{currentTrack}</span>
        </div>
      </div>

      {/* Progress bar */}
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
        >
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
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
        <span>{totalDuration}</span>
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
          onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.color =
            'var(--color-text-primary)')
          }
          onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.color =
            'var(--color-text-muted)')
          }
        >
          <SkipBack size={22} />
        </button>

        {/* Play / Pause */}
        <button
          className="play-btn"
          onClick={onPlayPause}
          aria-label={isPlaying ? 'Pausar' : 'Tocar'}
        >
          {isPlaying ? (
            <Pause size={28} fill="white" strokeWidth={0} />
          ) : (
            <Play size={28} fill="white" strokeWidth={0} style={{ marginLeft: '3px' }} />
          )}
        </button>

        {/* Próxima */}
        <button
          aria-label="Próxima faixa"
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
          onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.color =
            'var(--color-text-primary)')
          }
          onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.color =
            'var(--color-text-muted)')
          }
        >
          <SkipForward size={22} />
        </button>
      </div>

      {/* Controles secundários: Loop + Volume */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Loop */}
        <button
          aria-label={loop ? 'Desativar repetição' : 'Ativar repetição'}
          aria-pressed={loop}
          onClick={() => setLoop(!loop)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: loop ? 'var(--color-accent)' : 'var(--color-text-muted)',
            display: 'flex',
            padding: '0.25rem',
            transition: 'color 0.2s ease',
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
            onClick={() => setMuted(!muted)}
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
