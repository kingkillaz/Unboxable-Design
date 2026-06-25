'use client';

import { useEffect, useState } from 'react';

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 340 }).map((_, i) => ({
        id: i,

        left: Math.random() * 100,
        top: Math.random() * 100,

        size: Math.random() * 1.2 + 0.2,

        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,

        opacity: Math.random() * 0.30 + 0.03,

        shineSpeed: Math.random() * 5 + 3,

        twinkle: Math.random() > 0.85
      }))
    );
  }, []);

  return (
    <div className="lux-bg">
      <div className="ray ray1" />
      <div className="ray ray2" />

      {particles.map((p) => (
        <span
          key={p.id}
          className={`particle ${p.twinkle ? 'twinkle' : ''}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,

            animationDuration: p.twinkle
              ? `${p.duration}s, ${p.shineSpeed}s`
              : `${p.duration}s`,

            animationDelay: p.twinkle
              ? `${p.delay}s, ${p.delay}s`
              : `${p.delay}s`,

            ['--shineSpeed' as any]: `${p.shineSpeed}s`
          }}
        />
      ))}
    </div>
  );
}