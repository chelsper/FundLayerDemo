# Deployment Setup

This app is structured for:

- Source control on GitHub
- Hosting on Vercel
- Postgres on Neon

## GitHub

Initialize the repo locally if needed:

```bash
git init -b main
git add .
git commit -m "Initial import"
```

Create a remote repository and push:

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Neon

Create a Neon project and use separate databases or branches for:

- local development
- Vercel preview
- Vercel production

Apply the schema:

```bash
psql "$DATABASE_URL" -f sql/schema.sql
```

Optional non-production data:

```bash
psql "$DATABASE_URL" -f sql/seed.sql
psql "$DATABASE_URL" -f sql/sample_data.sql
```

If you are applying changes onto an existing database instead of a fresh schema, run the files in [sql/migrations](/Users/chelseasantoro/Downloads/FundLayerDemo/sql/migrations) in timestamp order.

Use the Neon pooled connection string for `DATABASE_URL`.

## Vercel

Import the GitHub repo into Vercel and let it detect `Next.js`.

Recommended project settings:

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`

Add these environment variables in Vercel for each environment:

- `DATABASE_URL`
- `SESSION_SECRET`
- `APP_URL`
- `RATE_LIMIT_WINDOW_SECONDS`
- `RATE_LIMIT_MAX_AUTH_ATTEMPTS`
- `RATE_LIMIT_MAX_EXPORTS`
- `RATE_LIMIT_MAX_INVITES`

Set `APP_URL` to the exact deployment URL for each environment.

## Notes

- Health check endpoint: `/api/health`
- Generate `SESSION_SECRET` with at least 32 random bytes.
- Do not load demo seed data into production unless that is intentional.
