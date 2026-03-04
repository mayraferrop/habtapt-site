'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { designSystem } from './design-system';

const COOKIE_KEY = 'habta_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_KEY);
      if (!consent) {
        // Show cookie banner after 4s — well after LCP is measured (~2.5s).
        // A simple timeout is the safest approach that avoids interfering
        // with Lighthouse's LCP tracing.
        const timer = setTimeout(() => setVisible(true), 4000);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const handleAccept = () => {
    try {
      // Intentionally stored in localStorage (not a cookie) — persists indefinitely
      // until the user clears browser data. The cookies policy page reflects this.
      localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted: true, date: new Date().toISOString() }));
    } catch {}
    setVisible(false);
  };

  const handleReject = () => {
    try {
      // Intentionally stored in localStorage (not a cookie) — see comment above.
      localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted: false, date: new Date().toISOString() }));
    } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Consentimento de cookies"
          initial={{ y: 100, opacity: 0.01 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0.01 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9998,
            padding: designSystem.spacing[4],
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              maxWidth: '48rem',
              margin: '0 auto',
              background: designSystem.colors.neutral.white,
              border: `1px solid ${designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.15)}`,
              borderRadius: designSystem.borderRadius['2xl'],
              boxShadow: '0 -4px 30px rgba(0,0,0,0.12)',
              padding: `${designSystem.spacing[5]} ${designSystem.spacing[6]}`,
              display: 'flex',
              flexDirection: 'column',
              gap: designSystem.spacing[4],
              pointerEvents: 'auto',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: designSystem.typography.fontSize.sm,
                  color: designSystem.colors.neutral[700],
                  lineHeight: designSystem.typography.lineHeight.relaxed,
                  margin: 0,
                }}
              >
                Utilizamos cookies essenciais para o funcionamento do site.
                Ao continuar a navegar, concorda com a nossa{' '}
                <Link
                  href="/cookies"
                  style={{
                    color: designSystem.colors.brand.primary,
                    textDecoration: 'underline',
                    fontWeight: designSystem.typography.fontWeight.semibold,
                  }}
                >
                  Política de Cookies
                </Link>{' '}
                e{' '}
                <Link
                  href="/privacidade"
                  style={{
                    color: designSystem.colors.brand.primary,
                    textDecoration: 'underline',
                    fontWeight: designSystem.typography.fontWeight.semibold,
                  }}
                >
                  Política de Privacidade
                </Link>.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: designSystem.spacing[3],
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={handleReject}
                style={{
                  padding: `${designSystem.spacing[2]} ${designSystem.spacing[4]}`,
                  border: `1px solid ${designSystem.colors.neutral[300]}`,
                  background: designSystem.colors.neutral.white,
                  color: designSystem.colors.neutral[700],
                  borderRadius: designSystem.borderRadius.lg,
                  fontSize: designSystem.typography.fontSize.sm,
                  fontWeight: designSystem.typography.fontWeight.medium,
                  cursor: 'pointer',
                  transition: designSystem.animations.transition.fast,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = designSystem.colors.neutral[100];
                  e.currentTarget.style.borderColor = designSystem.colors.neutral[400];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = designSystem.colors.neutral.white;
                  e.currentTarget.style.borderColor = designSystem.colors.neutral[300];
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26,62,92,0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Rejeitar
              </button>
              <button
                onClick={handleAccept}
                style={{
                  padding: `${designSystem.spacing[2]} ${designSystem.spacing[5]}`,
                  border: 'none',
                  background: designSystem.colors.brand.primary,
                  color: designSystem.colors.neutral.white,
                  borderRadius: designSystem.borderRadius.lg,
                  fontSize: designSystem.typography.fontSize.sm,
                  fontWeight: designSystem.typography.fontWeight.bold,
                  cursor: 'pointer',
                  transition: designSystem.animations.transition.fast,
                  boxShadow: designSystem.shadows.md,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = designSystem.colors.brand.primaryHover;
                  e.currentTarget.style.boxShadow = designSystem.shadows.primaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = designSystem.colors.brand.primary;
                  e.currentTarget.style.boxShadow = designSystem.shadows.md;
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = `${designSystem.shadows.md}, 0 0 0 3px rgba(26,62,92,0.15)`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = designSystem.shadows.md;
                }}
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
