/**
 * Copy for the internal design key. Not part of the public site.
 * The key renders real tokens and real components, so it cannot drift from
 * the build. Values below are labels only; the source of truth is noted
 * against each section.
 */
export const key = {
  title: "design key",
  intro:
    "The system this site is built from. Everything here is the real component or the real token, not a picture of one. Change a value in the source and this page changes with it.",
  sourceLabel: "source",

  review: {
    heading: "0. for review",
    note: "Four changes are in. Two of them are taste calls, so the alternates are rendered live below. Say which you want and I will switch the token; everything downstream follows.",
    changed: [
      "Salmon is back as the accent.",
      "A coquette sun: scalloped disc, fine spokes, dotted tips.",
      "Buttons and inputs are squarer, inputs now sit sunken.",
      "Courier Prime is the reading font. A typewriter face for a service about editing drafts.",
    ],
    fontHeading: "body font, alternates",
    fontNote: "Every sans I offered before was rejected, so these are a different category: old-style serifs, slabs and typewriter monos. Silkscreen stays as the pixel display face throughout.",
    fontSample: "Supplements first, personal statement second. You write. I mark it up.",
    accentHeading: "accent, alternates",
    accentNote:
      "Salmon is applied, as asked. Worth knowing it is the tightest of the set on text contrast at 4.54, just over the 4.5 floor, so ink on salmon should stay at body size or larger and never go grey.",
    accentCols: { name: "name", hex: "hex", ink: "ink on it", cloud: "cloud pop", page: "vs page" },
    accents: [
      { name: "salmon (applied)", hex: "#E89A94", ink: "4.54", cloud: "2.21", page: "1.80", applied: true },
      { name: "dusty rose", hex: "#D4A5B5", ink: "4.71", cloud: "2.13", page: "1.73", applied: false },
      { name: "wisteria", hex: "#C0A8DB", ink: "4.72", cloud: "2.13", page: "1.73", applied: false },
      { name: "deep sky", hex: "#8FB4DC", ink: "4.66", cloud: "2.16", page: "1.76", applied: false },
      { name: "lavender", hex: "#B6A8D4", ink: "4.57", cloud: "2.20", page: "1.79", applied: false },
      { name: "sage", hex: "#8FBCAA", ink: "4.76", cloud: "2.11", page: "1.72", applied: false },
    ],
    accentFootnote:
      "Ink on it needs 4.5 for body text. Cloud pop wants 1.6 or more or the clouds go flat. Vs page wants 1.5 or more or the sky merges into the page. Deep sky sits only 12 degrees from periwinkle in hue, so the two blues would muddy each other.",
    sunHeading: "sun, alternates",
    sunNote:
      "The old sun was a plain gold disc, the least interesting shape in the set. Rayed is applied. All four use the same disc, so switching is one prop.",
    folderHeading: "folder tab fill, alternates",
    folderNote:
      "The diagonal stripes are gone. Band is applied: a flat bar of the tone across the top of the card. Scallop hangs half circles off that bar, dots is a halftone that fades out, none is clean cream.",
    motionHeading: "slower motion",
    motionNote:
      "Slower again. A cloud now takes three to five minutes to cross, the bob runs at 16 seconds and the sun at 15.",
  },

  icons: {
    heading: "5. icons",
    source: "src/components/Icons.tsx",
    note: "Sixteen glyphs. Each is drawn on the same 56px grid with the same non-scaling outline, so a row at mixed sizes still looks like one set.",
  },

  retro: {
    heading: "8. retro treatments",
    source: "src/app/globals.css",
    note: "Surface patterns that add period texture without introducing a new colour. All three are built from ink at low opacity.",
    items: [
      { name: ".stripes-ink", use: "Fine horizontal rules in a title bar, as on a classic desktop." },
      { name: ".dither", use: "Halftone dot shading for a panel that should sit back." },
      { name: ".hatch-ink", use: "Diagonal hatch for an inert or unavailable surface." },
    ],
    dotsHeading: "window dots",
    dotsNote: "The two outlined circles at the right of a title bar. Decorative, aria-hidden, and now on every window.",
  },

  palette: {
    heading: "1. palette",
    source: "src/app/globals.css",
    note: "Seven colours, no more. Ink is the only text colour and the only outline colour.",
    swatches: [
      { token: "--peach-bg", hex: "#FBE3D8", use: "Page background. Carries the faint grid.", className: "bg-peach-bg" },
      { token: "--cream", hex: "#FFF9F4", use: "Card and panel fill. Window chrome.", className: "bg-cream" },
      { token: "--ink", hex: "#5A3A34", use: "Every outline. Every piece of text.", className: "bg-ink" },
      { token: "--accent", hex: "#E89A94", use: "Sky. Primary button fill.", className: "bg-accent" },
      { token: "--accent-deep", hex: "#D97B77", use: "Primary button hover. Inline error text.", className: "bg-accent-deep" },
      { token: "--periwinkle", hex: "#B9C6E8", use: "Secondary buttons. Icon fills.", className: "bg-periwinkle" },
      { token: "--gold", hex: "#F2C879", use: "Sun, stars, sparkles, highlight tags.", className: "bg-gold" },
    ],
    ruleHeading: "the contrast rule",
    rules: [
      "Body text is only ever ink on cream, or ink on peach.",
      "Never accent or periwinkle text on peach.",
      "Text over the accent sky sits on a cream panel, never straight on the accent.",
    ],
  },

  type: {
    heading: "2. type",
    source: "src/app/layout.tsx",
    note: "Two families. Silkscreen is a pixel face and is unreadable in long runs, so it is labels only.",
    families: [
      {
        name: "Silkscreen",
        variable: "--font-pixel",
        role: "Window titles, tabs, buttons, field labels, small caps. Never a sentence.",
        className: "font-pixel",
        sample: "window title / button",
      },
      {
        name: "Courier Prime",
        variable: "--font-body",
        role: "Headings and all body copy. Everything a person actually reads.",
        className: "font-body",
        sample: "Body copy and headings live here.",
      },
    ],
    scaleHeading: "scale in use",
    scale: [
      { label: "hero h1", className: "font-body text-3xl md:text-5xl font-bold", sample: "Editing for college application essays." },
      { label: "page h1", className: "font-pixel text-xl md:text-2xl", sample: "packages" },
      { label: "section h2", className: "font-pixel text-base md:text-lg", sample: "how it works" },
      { label: "lead", className: "font-body text-lg", sample: "One line of subcopy under a heading." },
      { label: "body", className: "font-body text-base", sample: "Default paragraph text, ink on cream." },
      { label: "small", className: "font-body text-sm", sample: "Help text under a form field." },
      { label: "label", className: "font-pixel text-xs", sample: "field label" },
    ],
  },

  form: {
    heading: "3. form",
    source: "src/app/globals.css",
    note: "Four utilities do almost all the visual work. Outlines are one weight everywhere, at every scale.",
    utilities: [
      { name: ".outline-ink", value: "3px solid var(--ink)", use: "Every border on every element." },
      { name: ".r-soft", value: "12px radius", use: "Windows, cards, panels." },
      { name: ".r-tight", value: "4px radius", use: "Buttons, inputs, tabs, small chips. Squarer than before." },
      { name: ".shadow-flat", value: "3px 3px 0 var(--ink)", use: "Raised controls. Collapses to 0 0 on :active." },
      { name: ".inset-flat", value: "inset 3px 3px 0 ink at 13%", use: "Sunken inputs, the way an old dialog drew them." },
      { name: ".focus-retro", value: "2px dashed var(--ink), 2px offset", use: "Every real control. Never removed." },
    ],
    strokeHeading: "outline weight never scales",
    strokeNote:
      "Illustrated shapes use vector-effect non-scaling-stroke so the outline stays the same weight on screen at any size. Without it a 320px cloud drew a 6px line and a 96px cloud drew 1.8px, and the set stopped looking drawn by one hand.",
  },

  components: {
    heading: "4. components",
    source: "src/components",
    note: "Live specimens. The full matrix with hover, focus, disabled and error states is at /dev/components.",
    labels: {
      button: "Button",
      buttonNote: "Primary for the one thing a page wants. Secondary for alternatives. Ghost for quiet actions.",
      window: "RetroWindow",
      windowNote: "Any panel that should read as a desktop window. Chrome is aria-hidden.",
      dialog: "DialogBox",
      dialogNote: "One yes/no decision. Not for forms.",
      frame: "DottedFrame",
      frameNote: "Groups a section so it reads as a selected object on a canvas.",
      folder: "FolderTab",
      folderNote: "Package cards. Body stays cream so text is ink on cream.",
      doc: "DocIcon",
      docNote: "Anything file shaped.",
      hearts: "HeartRow",
      heartsNote: "A rating beside a quote. Not interactive.",
      icons: "Desktop icons",
      iconsNote: "Sixteen glyphs on one 56px grid with a shared non-scaling outline. Decorative; the link around them carries the name.",
      field: "Field",
      fieldNote: "The one form atom. Input, textarea, select and radio all come from it.",
    },
  },

  clouds: {
    heading: "6. clouds",
    source: "src/components/Decorations.tsx",
    note: "Five silhouettes so a sky never reads as one shape stamped repeatedly. Every lobe is a true circular arc on a flat base, so the shape stays round at any size.",
    shapeLabel: "silhouette",
    sizeHeading: "sizes",
    sizes: "xs 72, sm 108, md 168, lg 240, xl 340 (px wide)",
    flipHeading: "flip",
    flipNote:
      "A bank hanging from a top edge is flipped, so the lobes scallop downward. Unflipped, its flat base draws a straight dark bar across the sky.",
    banksHeading: "composition",
    banksNote:
      "Clouds mass into overlapping banks at the top and bottom edges, cut off by the frame, with a few crossing the open middle. Evenly spaced isolated blobs do not read as a sky.",
  },

  motion: {
    heading: "7. motion",
    source: "src/app/globals.css",
    note: "Four animations. All decorative, none required to understand the page.",
    table: [
      { name: "drift", timing: "190s to 280s, linear", use: "Clouds crossing the sky. Duration set per cloud for parallax." },
      { name: "bob", timing: "16s, ease-in-out", use: "Clouds rising and squashing gently in place." },
      { name: "pulse-sun", timing: "15s, ease-in-out", use: "The sun." },
      { name: "twinkle", timing: "4.5s, ease-in-out", use: "Sparkles. Fades, shrinks and rotates." },
    ],
    parallaxHeading: "parallax",
    parallaxNote:
      "Far clouds are small and slow, near clouds big and quick. The gradient is what sells the depth. Measured below at the current, slower timings.",
    reducedHeading: "prefers-reduced-motion",
    reducedRules: [
      "Drifting clouds are removed. They are motion by definition.",
      "Anchored clouds, the sun and the sparkles stay visible and simply stop moving.",
      "The sky still reads as a full sky, never as an empty band.",
    ],
  },

  rules: {
    heading: "9. standing rules",
    note: "These hold on every page and every phase.",
    items: [
      "Mobile first. 375px is the design floor, not an afterthought.",
      "Retro chrome is decorative: aria-hidden on fake buttons, real focus rings on real controls.",
      "Zero hardcoded strings in JSX. All copy lives in typed exports under /content.",
      "Respect prefers-reduced-motion everywhere.",
      "One outline weight on screen, whatever the element's size.",
      "No new dependency without asking.",
    ],
  },
} as const;
