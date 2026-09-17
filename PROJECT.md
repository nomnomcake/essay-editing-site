# Essay editing site — project brief and current state

Paste this whole file into a new Claude Code session to pick the work up.
The original phase-by-phase brief is preserved in git history at the first
commit; this file replaces it because several decisions in it have since
changed.

---

## What this is

A marketing and intake website for a one-person college application essay
editing service. Supplemental essays are the core product; personal statement
editing is secondary.

The site sells the service, answers objections, and captures a structured
intake. All actual editing happens afterwards in Google Docs and email.

Deliberately not built, and not wanted: client login, in-browser editor,
document storage, blog, file upload. `TODO(v2)` markers sit where those would
hook in if they ever happen.

## The editor

Copy about her stays factual. No adjectives, no superlatives, no origin-story
arc.

- Stanford Class of 2030, Bioengineering and Art Practice double major
- YoungArts winner, Visual Arts
- Congressional Art Competition winner; the painting hangs in the U.S. Capitol
- Inventor on two patent-pending medical devices, SSIV and PIVOT
- Former pediatric patient, later a volunteer at the same hospital

## Stack, fixed

Next.js 15 App Router, TypeScript, Tailwind v4, deployed on Vercel. No CMS, no
database. Intake posts to a Zod-validated route and emails via Resend. Payments
are hardcoded Stripe Payment Links. Scheduling is a Cal.com inline embed.
Vercel Analytics. Nothing else, and no new dependency without asking.

## Where it stands

Twelve routes, all building clean:

`/` `/services` `/packages` `/samples` `/about` `/faq` `/start` `/book`
`/terms` `/privacy`, plus two noindex internal pages, `/dev/design` (the design
key) and `/dev/components` (the full component state matrix).

The intake pipeline is done and tested end to end: field-level Zod errors,
honeypot, a minimum time-on-form check, an in-memory rate limit of five per
hour per IP, and a local-dev path that logs the payload instead of emailing
when `RESEND_API_KEY` is absent.

Last measured: accessibility 100, SEO 100, performance 96–98, CLS 0 on home,
start, packages and faq. No horizontal overflow and no console errors on any
page at 1440 or 375.

## The design system, as settled

`/dev/design` renders this from the real tokens and the real components, so it
cannot drift. Read it first. Source of truth for tokens is
`src/app/globals.css`.

**Palette.** Seven colours. Ink is the only text colour and the only outline
colour.

| token | hex | role |
| --- | --- | --- |
| `--peach-bg` | `#FBE3D8` | page ground, carries a faint grid |
| `--cream` | `#FFF9F4` | cards, panels, window chrome |
| `--ink` | `#4A2E29` | every outline, every piece of text |
| `--accent` | `#E89A94` | salmon: sky and primary button fill |
| `--accent-deep` | `#D97B77` | primary hover, inline error text |
| `--periwinkle` | `#B9C6E8` | secondary buttons, icon fills |
| `--gold` | `#F2C879` | sun, stars, sparkles, highlight tags |

Contrast rule, enforced: body text is only ever ink on cream or ink on peach.
Never accent or periwinkle text on peach. Text over the sky sits on a cream
panel, never straight on the salmon.

**Type.** Silkscreen for window titles, tabs, buttons and field labels, never a
sentence. Courier Prime for headings and all reading text. Reading text gets
1.7 line-height because monospace needs more leading at length.

**Form.** `outline-ink` 3px, uniform at every size; SVG uses
`vector-effect: non-scaling-stroke` so illustrated shapes never draw a heavier
line when scaled up. `r-soft` 12px for panels, `r-tight` 4px for controls.
`shadow-flat` 3px offset, collapsing on `:active`. `inset-flat` for sunken
inputs. `focus-retro` dashed ring on every real control, never removed.

**Layout.** The whole site is one full-screen browser window. Navigation tabs
live in that window's title bar, a decorative address bar sits under them, and
the page scrolls inside. Window chrome carries fine stripes and two outlined
dots at the right.

**Illustration.** Clouds are five silhouettes built from true circular arcs on
a flat base, with a `flip` for banks hanging off a top edge. They mass into
overlapping banks at the top and bottom edges rather than scattering as evenly
spaced blobs. Three parallax layers drift left to right over 190–280s, far
clouds slowest. Sixteen icons share one 56px grid. The sun is the "coquette"
variant: a scalloped daisy disc with fine alternating spokes and dotted tips.

**Motion.** drift 190–280s linear, bob 16s, pulse-sun 15s, twinkle 4.5s. All
decorative. Under `prefers-reduced-motion` the drifting clouds are removed
entirely while the anchored clouds, sun and sparkles stay visible and simply
stop moving, so the sky never reads as an empty band.

## Decisions already made — please do not reopen without asking

Accent: salmon is chosen. Sage `#8FBCAA`, wisteria `#C0A8DB`, dusty rose,
deep sky and lavender were all built and rejected.

Reading font: Courier Prime is chosen. Rejected, in order: Nunito, Space
Grotesk, Fredoka, Work Sans, DM Sans, Outfit, Plus Jakarta, Quicksand, Rubik,
Karla, then Fraunces, Newsreader, Bitter, Lora, Instrument Serif, Crimson Pro,
Zilla Slab, IBM Plex Mono and Bricolage. Silkscreen stays as the display face.

Also settled: folder cards use the `band` fill, not the old diagonal stripes;
the sun is coquette, not the plain disc; testimonials are removed entirely;
navigation tabs belong in the window title bar, not a separate header bar and
not a bottom dock; the hero sky is the top of the home page, not a window
nested inside another window.

## Standing constraints

- Mobile first. 375px is the design floor, not an afterthought.
- Decorative chrome is `aria-hidden`; real controls keep real focus rings.
- Zero hardcoded strings in JSX. All copy lives in typed exports under
  `src/content`.
- Respect `prefers-reduced-motion` everywhere.
- One outline weight on screen whatever the element's size.
- Verify visually and by measurement, not by assumption. Tailwind class
  conflicts have silently broken this build twice: a shorthand utility sitting
  later in the stylesheet beat the longhand it was supposed to lose to, once
  for `display` and once for `padding`. Screenshot and measure after layout
  changes.

## Still outstanding

Real prices and Stripe Payment Link URLs, the contact email, social links, and
two real before/after sample excerpts with written permission, all marked
`TODO` or `PLACEHOLDER` in `src/content`. Then env vars and a Vercel deploy;
the README covers both.

## What I want to do next

Finalize the layout of the site. The visual system is settled and I like it.
What I want now is the arrangement: what sits where on each page, the order and
weight of sections, how much room the sky takes, how the desktop icon rail
relates to the content, and whether any page is carrying too much or too
little. Treat the palette, type and components above as fixed and work on
composition.

I have also shared a new illustration reference: a set of cloud, moon and
sparkle badges in cream fills with warm brown outlines, dimensional clouds with
inner shading, and several distinct sparkle shapes. Worth considering for
refining the existing decorations, but the layout comes first.
