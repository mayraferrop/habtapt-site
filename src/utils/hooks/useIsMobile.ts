import { useState, useEffect } from 'react';

const LG_BREAKPOINT = 1024;

/**
 * Shared hook for responsive breakpoint detection.
 * Uses matchMedia for performance (no resize listener).
 * Default breakpoint: 1024px (lg) — matches design system.
 */
export function useIsMobile(breakpoint = LG_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [breakpoint]);

  return isMobile;
}
