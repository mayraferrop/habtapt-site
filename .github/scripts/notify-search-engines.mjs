#!/usr/bin/env node
// Notifica Google Indexing API + IndexNow (Bing/Yandex) sobre URLs novos/actualizados.
// Descoberta automática: lê slugs em src/content/insights/ (excepto _*.ts e types.ts)
// e adiciona as páginas estáticas principais.
//
// Variáveis de ambiente:
//   GOOGLE_INDEXING_SA_KEY — JSON completo do Service Account (opcional; salta Google se vazio)
//   URLS                   — lista de URLs separados por vírgula (opcional; sobrepõe auto-discover)
//   SITE_URL               — default https://habta.eu
//
// Uso local:
//   GOOGLE_INDEXING_SA_KEY="$(cat sa.json)" node .github/scripts/notify-search-engines.mjs

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src/content/insights');
const SITE_URL = process.env.SITE_URL || 'https://habta.eu';
const INDEXNOW_KEY = '54505bb665e40ff8d69b90b937d5f71c';

const STATIC_PATHS = ['/', '/portfolio', '/sobre', '/servicos', '/blog', '/processo', '/metodologia', '/contacto'];

function log(msg) { console.log(msg); }
function warn(msg) { console.warn(`::warning::${msg}`); }
function fail(msg) { console.error(`::error::${msg}`); process.exit(1); }

function base64url(buf) {
  return Buffer.from(buf).toString('base64').replace(/=+$/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getGoogleAccessToken(saKeyJson) {
  const sa = JSON.parse(saKeyJson);
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claims = {
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };
  const toSign = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claims))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(toSign);
  const sig = signer.sign(sa.private_key);
  const jwt = `${toSign}.${base64url(sig)}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function pingGoogleIndexing(token, url) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  const body = await res.text();
  return { ok: res.ok, status: res.status, body };
}

async function pingIndexNow(urls) {
  const host = new URL(SITE_URL).host;
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });
  const body = await res.text();
  return { ok: res.ok, status: res.status, body };
}

async function verifyUrlLive(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return res.ok;
  } catch {
    return false;
  }
}

function discoverUrls() {
  const files = fs.readdirSync(CONTENT_DIR);
  const blogUrls = files
    .filter((f) => f.endsWith('.ts') && !f.startsWith('_') && f !== 'types.ts')
    .map((f) => `${SITE_URL}/blog/${f.replace(/\.ts$/, '')}`);
  const staticUrls = STATIC_PATHS.map((p) => (p === '/' ? SITE_URL : `${SITE_URL}${p}`));
  return [...staticUrls, ...blogUrls];
}

async function main() {
  let urls;
  if (process.env.URLS && process.env.URLS.trim()) {
    urls = process.env.URLS.split(',').map((s) => s.trim()).filter(Boolean);
  } else {
    urls = discoverUrls();
  }
  if (!urls.length) fail('Nenhum URL para notificar.');

  log(`Descobertos ${urls.length} URLs.`);

  const live = [];
  for (const url of urls) {
    const ok = await verifyUrlLive(url);
    if (ok) {
      live.push(url);
    } else {
      warn(`URL não 200 (ignorado): ${url}`);
    }
  }
  if (!live.length) fail('Nenhum URL está live. Abortar.');
  log(`${live.length}/${urls.length} URLs verificados live.`);

  const saKey = process.env.GOOGLE_INDEXING_SA_KEY;
  if (saKey) {
    try {
      const token = await getGoogleAccessToken(saKey);
      log('Google Indexing API: token obtido.');
      let gOk = 0, gFail = 0;
      for (const url of live) {
        const r = await pingGoogleIndexing(token, url);
        if (r.ok) {
          gOk++;
          log(`  [OK]   ${url}`);
        } else {
          gFail++;
          warn(`  [FAIL ${r.status}] ${url} — ${r.body.slice(0, 200)}`);
        }
      }
      log(`Google: ${gOk} OK, ${gFail} falhas.`);
    } catch (err) {
      warn(`Google Indexing API falhou: ${err.message}`);
    }
  } else {
    warn('GOOGLE_INDEXING_SA_KEY não definido. A saltar Google.');
  }

  const r = await pingIndexNow(live);
  if (r.ok) {
    log(`IndexNow (Bing/Yandex): OK (${r.status}) — ${live.length} URLs submetidos.`);
  } else {
    warn(`IndexNow falhou (${r.status}): ${r.body.slice(0, 200)}`);
  }

  log('Notificação concluída.');
}

main().catch((err) => fail(err.message || String(err)));
