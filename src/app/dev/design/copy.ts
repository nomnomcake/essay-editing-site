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

  palette: {
    heading: "1. palette",
    source: "src/app/globals.css",
    note: "Seven colours, no more. Ink is the only text colour and the only outline colour.",
    swatches: [
      { token: "--peach-bg", hex: "#FBE3D8", use: "Page background. Carries the faint grid.", className: "bg-peach-bg" },
      { token: "--cream", hex: "#FFF9F4", use: "Card and panel fill. Window chrome.", className: "bg-cream" },
      { token: "--ink", hex: "#5A3A34", use: "Every outline. Every piece of text.", className: "bg-ink" },
      { token: "--coral", hex: "#E89A94", use: "Sky. Primary button fill.", className: "bg-coral" },
      { token: "--coral-deep", hex: "#D97B77", use: "Primary button hover. Inline error text.", className: "bg-coral-deep" },
      { token: "--periwinkle", hex: "#B9C6E8", use: "Secondary buttons. Icon fills.", className: "bg-periwinkle" },
      { token: "--gold", hex: "#F2C879", use: "Sun, stars, sparkles, highlight tags.", className: "bg-gold" },
    ],
    ruleHeading: "the contrast rule",
    rules: [
      "Body text is only ever ink on cream, or ink on peach.",
      "Never coral or periwinkle text on peach.",
      "Text over the coral sky sits on a cream panel, never straight on the coral.",
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
        name: "Nunito",
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
      { name: ".outline-ink", value: "2.5px solid var(--ink)", use: "Every border on every element." },
      { name: ".r-soft", value: "12px radius", use: "Windows, cards, panels." },
      { name: ".r-tight", value: "8px radius", use: "Buttons, inputs, tabs, small chips." },
      { name: ".shadow-flat", value: "3px 3px 0 var(--ink)", use: "Raised controls. Collapses to 0 0 on :active." },
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
      iconsNote: "Folder, globe, star, envelope. Decorative glyphs inside real links.",
      field: "Field",
      fieldNote: "The one form atom. Input, textarea, select and radio all come from it.",
    },
  },

  clouds: {
    heading: "5. clouds",
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
    heading: "6. motion",
    source: "src/app/globals.css",
    note: "Four animations. All decorative, none required to understand the page.",
    table: [
      { name: "drift", timing: "44s to 88s, linear", use: "Clouds crossing the sky. Duration set per cloud for parallax." },
      { name: "bob", timing: "7s, ease-in-out", use: "Clouds rising and squashing gently in place." },
      { name: "pulse-sun", timing: "9s, ease-in-out", use: "The sun." },
      { name: "twinkle", timing: "3s, ease-in-out", use: "Sparkles. Fades, shrinks and rotates." },
    ],
    parallaxHeading: "parallax",
    parallaxNote:
      "Far clouds are small and slow, near clouds big and quick. Measured across three seconds: 81, 88, 95, 121 and 153 px. The gradient is what sells the depth.",
    reducedHeading: "prefers-reduced-motion",
    reducedRules: [
      "Drifting clouds are removed. They are motion by definition.",
      "Anchored clouds, the sun and the sparkles stay visible and simply stop moving.",
      "The sky still reads as a full sky, never as an empty band.",
    ],
  },

  rules: {
    heading: "7. standing rules",
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
