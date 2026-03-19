# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HABTA PT — a premium real estate and urban rehabilitation company website with an admin panel. Built with Next.js 15 (App Router), Supabase backend, deployed on Cloudflare Pages. All content is in Portuguese (Portugal), locale `pt-PT`.

## Commands

```bash
# Development
npm run dev              # Local dev server (Turbopack)
npm run build            # Production build
npm run pages:build      # Cloudflare Pages build (npx @cloudflare/next-on-pages)
npm run pages:dev        # Local Cloudflare Pages dev server

# Linting
npx eslint .             # ESLint is disabled during builds (Zod config conflict)
```

There are no tests configured in this project.

## Architecture

### Routing (App Router)

- **`src/app/(site)/`** — Public site pages wrapped in shared layout (Header + Footer)
- **`src/app/(standalone)/`** — Pages with independent layouts (`/admin`, `/velask`)
- **`src/app/api/`** — Edge Runtime route handlers (projects, insights, testimonials, newsletter, revalidate)
- Path alias: `@/*` → `./src/*`

### Data Layer

- **Supabase** is the sole backend (PostgreSQL + Auth + Storage)
- Three Supabase clients in `src/lib/`:
  - `supabase/client.ts` — browser client (anon key)
  - `supabase/server.ts` — SSR client (cookie-based auth)
  - `supabaseServer.ts` — service role client (admin operations)
- **Server Actions** in `src/lib/actions/` handle mutations (contacts, projects, insights, newsletter, etc.)
- **Data fetching** functions live in `_lib/` folders next to their pages (e.g., `portfolio/_lib/fetchProjects.ts`)
- ISR with 5-minute revalidation on portfolio/blog; manual revalidation via `POST /api/revalidate`

### Auth & Middleware

- `src/middleware.ts` handles:
  - Rate limiting per API endpoint (e.g., newsletter: 5 req/min, default: 30 req/min)
  - Auth protection for `/admin/*` (requires confirmed email + optional MFA/AAL2)
  - Supabase SSR session refresh

### Component Organization

- **`src/components/`** — Page-level components (Hero, Header, Footer, Portfolio, Contact, etc.)
- **`src/components/ui/`** — Radix UI-based reusable primitives (50+ components)
- **`src/components/admin/`** — Admin panel components (ProjectsManager, InsightsManager, LeadsPipeline, etc.)
- **`src/components/design-system.ts`** — Brand color tokens, typography, spacing scale

### Design System

- Primary: `#1A3E5C` (petrol blue), Secondary: `#8f7350` (sober gold), Accent: `#C9A872`
- Font: Inter (locally loaded via `next/font`)
- Styling: Tailwind CSS v4 + `clsx` + `tailwind-merge` + `class-variance-authority`
- Animations: Motion (Framer Motion) library

### Deployment

- CI/CD via GitHub Actions → Cloudflare Pages (`.github/workflows/cloudflare-pages.yml`)
- Build: `npx @cloudflare/next-on-pages` → deploys `.vercel/output/static`
- Images are unoptimized (`next.config.ts`) for Cloudflare compatibility
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `REVALIDATION_SECRET`

## Key Conventions

- Server vs client components: explicitly marked with `'use client'` directive
- File naming: PascalCase for components, camelCase for utilities
- Security headers configured in `next.config.ts` (CSP, HSTS, X-Frame-Options)
- RLS enabled on all Supabase tables
- Redirect: `/imoveis` → `/portfolio` (configured in next.config.ts)
