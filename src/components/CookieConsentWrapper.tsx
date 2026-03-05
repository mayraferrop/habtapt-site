'use client';

import dynamic from 'next/dynamic';

const CookieConsent = dynamic(
  () => import('@/components/CookieConsent').then((m) => ({ default: m.CookieConsent })),
  { ssr: false }
);

export function CookieConsentWrapper() {
  return <CookieConsent />;
}
