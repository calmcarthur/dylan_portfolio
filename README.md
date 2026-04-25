# Dylan Quinn — Portfolio

A small, fast portfolio site for Dylan Quinn.

- **Frontend:** [Astro](https://astro.build) (mostly static)
- **CMS:** [Sanity](https://www.sanity.io) (embedded studio at `/studio`)
- **Hosting:** any static host (Vercel, Netlify, Cloudflare Pages)
- **Video:** YouTube/Vimeo for long-form, Instagram/TikTok/YouTube Shorts embeds for short-form

The site is intentionally minimal so it stays fast, cheap, and easy to maintain. Dylan can log into `/studio` and add new work without touching code.

## One-time setup

You'll only do this once.

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Sanity project

```bash
npx sanity@latest login
npx sanity@latest init --create-project "Dylan Quinn Portfolio" --dataset production
```

When asked, choose:
- **Use TypeScript:** yes
- **Use the default dataset configuration:** yes
- **Project output path:** keep current directory
- **Schema templates:** Clean project (no schema)

It will print a project ID. Copy it.

### 3. Add environment variables

```bash
cp .env.example .env
```

Then edit `.env` and set:

```
PUBLIC_SANITY_PROJECT_ID=your_project_id_here
PUBLIC_SANITY_DATASET=production
```

### 4. Allow the local studio host

In Sanity:

1. Go to <https://www.sanity.io/manage>.
2. Open your project → **API** → **CORS Origins**.
3. Add `http://localhost:4321` and your production domain.

### 5. Run it

```bash
npm run dev
```

Visit:

- `http://localhost:4321` — the public site
- `http://localhost:4321/studio` — the CMS (login with the same Sanity account)

The first time, create a **Site Settings** document and a few **Long-Form Project** and **Short / Social Post** documents, mark some as featured, and the homepage will pull them in automatically.

## Sample content

Until a real Sanity project ID is set, the site renders with built-in sample content from `src/lib/fallback.ts`. That keeps the design easy to preview before any real data exists.

## Deploy

### Recommended: Vercel

```bash
vercel
```

Set the same `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` environment variables in the Vercel dashboard.

The embedded Sanity Studio will be available at `https://your-domain.com/studio`.

### Alternate: deploy the studio separately

If you'd rather host the studio at `dylanquinn.sanity.studio`:

```bash
npm run studio:deploy
```

The site can stay on Vercel without the embedded studio route. Either approach is fine.

## File map

```
src/
  pages/         Public pages (home, work, shorts, about, contact)
  components/    UI building blocks (FloatingNav, HeroShowcase, ProjectCard, ShortCard)
  layouts/       Base HTML wrapper
  lib/           Sanity client, queries, types, fallback content
  styles/        Global CSS
schemas/         Sanity content models (project, short, siteSettings)
public/          Static assets (favicon)
sanity.config.ts  Studio configuration
astro.config.mjs  Astro + Sanity integration
```

## Handoff

See [HANDOFF.md](./HANDOFF.md) for the non-developer guide to adding content.
