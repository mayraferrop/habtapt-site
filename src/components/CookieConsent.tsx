'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { designSystem } from './design-system';

const COOKIE_KEY = 'habta_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_KEY);
      if (!consent) {
        // Show immediately on mount — delay would cause late LCP replacement.
        setVisible(true);
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
    <>
      <style>{`
        .cookie-banner { transform: translateY(100%); opacity: 0; transition: transform 0.4s ease-out, opacity 0.4s ease-out; }
        .cookie-banner.visible { transform: translateY(0); opacity: 1; }
        .cookie-btn { transition: background 0.15s, border-color 0.15s, box-shadow 0.15s; }
        .cookie-btn:focus-visible { box-shadow: 0 0 0 3px rgba(26,62,92,0.15) !important; }
        .cookie-btn-reject:hover { background: ${designSystem.colors.neutral[100]} !important; border-color: ${designSystem.colors.neutral[400]} !important; }
        .cookie-btn-accept:hover { background: ${designSystem.colors.brand.primaryHover} !important; }
      `}</style>
      <div
        role="dialog"
        aria-label="Consentimento de cookies"
        className={`cookie-banner${visible ? ' visible' : ''}`}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9998,
          padding: designSystem.spacing[4],
          pointerEvents: visible ? 'auto' : 'none',
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
            flexDirection: 'column' as const,
            gap: designSystem.spacing[4],
          }}
        >
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

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: designSystem.spacing[3],
              justifyContent: 'flex-end',
              flexWrap: 'wrap' as const,
            }}
          >
            <button
              onClick={handleReject}
              className="cookie-btn cookie-btn-reject"
              style={{
                padding: `${designSystem.spacing[2]} ${designSystem.spacing[4]}`,
                border: `1px solid ${designSystem.colors.neutral[300]}`,
                background: designSystem.colors.neutral.white,
                color: designSystem.colors.neutral[700],
                borderRadius: designSystem.borderRadius.lg,
                fontSize: designSystem.typography.fontSize.sm,
                fontWeight: designSystem.typography.fontWeight.medium,
                cursor: 'pointer',
              }}
            >
              Rejeitar
            </button>
            <button
              onClick={handleAccept}
              className="cookie-btn cookie-btn-accept"
              style={{
                padding: `${designSystem.spacing[2]} ${designSystem.spacing[5]}`,
                border: 'none',
                background: designSystem.colors.brand.primary,
                color: designSystem.colors.neutral.white,
                borderRadius: designSystem.borderRadius.lg,
                fontSize: designSystem.typography.fontSize.sm,
                fontWeight: designSystem.typography.fontWeight.bold,
                cursor: 'pointer',
                boxShadow: designSystem.shadows.md,
              }}
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
