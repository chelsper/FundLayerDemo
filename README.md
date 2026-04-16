# FundLayer Demo

Next.js donor database demo built to deploy on Vercel with Neon Postgres.

## Stack

- Next.js App Router
- TypeScript
- PostgreSQL via `pg`
- Server-rendered admin UI

## Project layout

- App routes: [src/app](/Users/chelseasantoro/Downloads/FundLayerDemo/src/app)
- Server data layer: [src/server/data](/Users/chelseasantoro/Downloads/FundLayerDemo/src/server/data)
- Auth helpers: [src/server/auth](/Users/chelseasantoro/Downloads/FundLayerDemo/src/server/auth)
- Security helpers: [src/server/security](/Users/chelseasantoro/Downloads/FundLayerDemo/src/server/security)
- SQL schema and migrations: [sql](/Users/chelseasantoro/Downloads/FundLayerDemo/sql)

## Required environment variables

- `DATABASE_URL`
- `SESSION_SECRET`
- `APP_URL`
- `RATE_LIMIT_WINDOW_SECONDS`
- `RATE_LIMIT_MAX_AUTH_ATTEMPTS`
- `RATE_LIMIT_MAX_EXPORTS`
- `RATE_LIMIT_MAX_INVITES`

Start from [.env.example](/Users/chelseasantoro/Downloads/FundLayerDemo/.env.example). Do not commit real secrets.

## Local development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Point `DATABASE_URL` at a Neon development database.
4. Apply [sql/schema.sql](/Users/chelseasantoro/Downloads/FundLayerDemo/sql/schema.sql).
5. Optionally apply [sql/seed.sql](/Users/chelseasantoro/Downloads/FundLayerDemo/sql/seed.sql) and [sql/sample_data.sql](/Users/chelseasantoro/Downloads/FundLayerDemo/sql/sample_data.sql) in non-production environments.
6. Run `npm run dev`.

## Deployment

Deployment setup for GitHub, Vercel, and Neon is documented in [DEPLOYMENT.md](/Users/chelseasantoro/Downloads/FundLayerDemo/DEPLOYMENT.md).
