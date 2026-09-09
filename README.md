# Essay editing site

Marketing and intake site for a one-person college essay editing service.
Next.js 15 App Router, TypeScript, Tailwind v4, deployed on Vercel. No CMS, no
database. See [PROJECT.md](PROJECT.md) for the brief.

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in what you have; everything is optional locally
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build, also typechecks and lints
npm run start   # serve the production build
npm run lint
```

The component review page is at `/dev/components`. It is marked noindex and
excluded in robots.txt.

## Environment variables

All of them are listed with a comment in [.env.example](.env.example).

| Variable | Needed for | If missing |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | metadata, sitemap, OG image URLs | falls back to localhost |
| `NEXT_PUBLIC_CAL_LINK` | `/book` calendar embed | page shows an email fallback |
| `RESEND_API_KEY` | sending intake email | payload is logged to the server console and the form still succeeds |
| `INTAKE_TO_EMAIL` | inbox for intake submissions | same as above |
| `INTAKE_FROM_EMAIL` | sender address, must be verified in Resend | defaults to `onboarding@resend.dev` |

## Editing copy

Every string on the site lives under [src/content](src/content). Nothing is
hardcoded in components.

| File | What it holds |
| --- | --- |
| `packages.ts` | the four packages, prices, Stripe links, rush multiplier |
| `faq.ts` | questions and answers, grouped by category |
| `process.ts` | the how-it-works steps |
| `credentials.ts` | the bio bullets |
| `samples.ts` | before/after excerpts and change notes |
| `site.ts` | nav, footer, contact email, socials, terms, privacy |
| `pages.ts` | headings, intros, labels and metadata per page |
| `ui.ts` | tiny shared microcopy: button labels, glyphs, aria text |

Search the folder for `TODO` and `PLACEHOLDER` to find every value that still
needs a real number, quote or link. Samples have a
`placeholder` flag; set it to `false` once the real text is in and the yellow
tag disappears.

## Swapping Stripe links

1. In the Stripe dashboard create one Payment Link per package.
2. Paste each URL into the `stripeLink` field in `src/content/packages.ts`.
3. Update `price` in the same object. It is a display string, so `$95` or
   `from $95` both work.

There is no checkout backend. The packages page links straight to Stripe.

## Deploying to Vercel

1. Push the repo to GitHub.
2. In Vercel, import the repo. The defaults detect Next.js; no build settings
   need changing.
3. Add the environment variables from the table above under Settings then
   Environment Variables. Set `NEXT_PUBLIC_SITE_URL` to the final public URL
   with no trailing slash.
4. Deploy. Vercel Analytics is already wired in the root layout and switches on
   automatically for the project.

## Pointing a subdomain at it

1. In Vercel, open the project, then Settings, then Domains, and add
   `essays.yourdomain.com` (or whatever you chose).
2. Vercel shows a CNAME target, usually `cname.vercel-dns.com`.
3. At your DNS provider, add a CNAME record for the subdomain pointing at that
   target.
4. Wait for the check in Vercel to turn green. Certificates are issued
   automatically.
5. Update `NEXT_PUBLIC_SITE_URL` to `https://essays.yourdomain.com` and
   redeploy so the sitemap and OG images use the right host.

## Where v2 would plug in

Search the code for `TODO(v2)`. Markers exist for a client portal, file
upload, an in-browser editor and a blog. None of those are built.
