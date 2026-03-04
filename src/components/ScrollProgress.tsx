'use client';

import { useEffect, useState } from 'react';
import { designSystem } from './design-system';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / (h.scrollHeight - h.clientHeight));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1"
      aria-hidden="true"
      style={{
        transform: `scaleX(${progress})`,
        transformOrigin: '0%',
        background: designSystem.colors.gradients.primary,
        zIndex: designSystem.zIndex.fixed,
        willChange: 'transform',
      }}
    />
  );
}
