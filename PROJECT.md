# PROJECT.md

## What we are building

A marketing and intake website for a one-person college application essay
editing service. Supplemental essays are the core product; personal statement
editing is secondary.

The site sells the service, answers objections, and captures a structured
intake. All actual editing work happens afterward over Google Docs and email.

Explicitly out of scope: client login, in-browser editor, document storage.

## The editor (factual copy only, no adjectives)

- Stanford Class of 2030, incoming Bioengineering + Art Practice double major
- YoungArts Visual Arts winner
- Congressional Art Competition winner; painting hangs in the U.S. Capitol
- Patent-pending medical device inventor (SSIV, PIVOT)
- Former pediatric patient turned hospital volunteer

## Stack (fixed)

- Next.js 15 App Router, TypeScript, Tailwind CSS v4
- Deployed on Vercel
- No CMS, no database. All copy lives in typed exports under `/content`
- Intake: `POST /api/intake`, Zod validated, email sent via Resend
- Payments: hardcoded Stripe Payment Links, no checkout backend
- Scheduling: Cal.com inline embed
- Analytics: Vercel Analytics
- Nothing else

## Visual direction

Soft retro desktop-OS aesthetic: pastel peach, thick dark outlines, rounded
rectangles, faux browser and dialog chrome, cloud and sparkle motifs. A 1998 UI
redrawn by an illustrator.

Not generic SaaS. Not glassmorphism. Not dark mode.

### Reference image (provided by the owner)

The design should be based on this reference. Observed elements:

- Ground: pale peach background with a faint square grid
- Palette: peach and salmon pinks, cream, muted lavender-blue, mustard yellow,
  one warm orange accent, thick warm-brown outlines on everything
- Browser window: title tab ("untitled" with close x), back/forward/refresh
  and home/star icons, address bar, window body showing a pink sky with
  cream clouds, a sun, and four-point sparkles
- Search bar with magnifier button
- Dialog box: "do you want to continue?" with YES / NO buttons, mono font
- Desktop icons: yellow folders with tabs, document icons with "Aa",
  closed envelope, globe, five-heart rating strip, orange star, small cloud
- Selection chrome: dotted bounding boxes with corner handles, a vertical
  scrollbar with arrows, small red "x" close badges
- Type: monospace, lowercase, small
- Corners: soft rounded rectangles throughout

## Constraints (every phase)

- Mobile first; 375px is the design floor
- Retro chrome is decorative: `aria-hidden` on fake buttons, real focus rings
  on real controls
- Zero hardcoded strings in JSX
- Respect `prefers-reduced-motion`
- Ask before adding any dependency not named in this brief

## Phases

| # | Phase             |
|---|-------------------|
| 0 | Brief             |
| 1 | Foundation        |
| 2 | Component library |
| 3 | Content layer     |
| 4 | Pages             |
| 5 | Intake pipeline   |
| 6 | Polish and ship   |

Do not work ahead of the current phase.
