/**
 * Edge-compatible in-memory rate limiter (sliding window per IP).
 * Works on Cloudflare Pages / Next.js Edge Runtime.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

// Cleanup stale entries every 60s to prevent memory leak
let lastCleanup = Date.now();
const CLEANUP_INTERVAL = 60_000;

function cleanup(now: number) {
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key);
  }
}

/**
 * Check if a request should be rate-limited.
 * @returns { limited, remaining, resetAt } — limited=true means reject the request
 */
export function rateLimit(
  ip: string,
  { maxRequests = 20, windowMs = 60_000 }: { maxRequests?: number; windowMs?: number } = {}
): { limited: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  cleanup(now);

  const key = ip;
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { limited: false, remaining: maxRequests - 1, resetAt: now + windowMs };
  }

  entry.count++;

  if (entry.count > maxRequests) {
    return { limited: true, remaining: 0, resetAt: entry.resetAt };
  }

  return { limited: false, remaining: maxRequests - entry.count, resetAt: entry.resetAt };
}
