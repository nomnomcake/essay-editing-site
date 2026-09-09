export interface Package {
  id: string;
  name: string;
  /** Display string so you can write "$95" or "from $95" without touching code. */
  price: string;
  essayCount: number;
  /** Per essay. */
  wordCountCap: number;
  turnaroundDays: number;
  revisionRounds: number;
  includes: string[];
  excludes: string[];
  /** Stripe Payment Link. Replace the placeholder with the real URL from the Stripe dashboard. */
  stripeLink: string;
  featured: boolean;
  /** One line under the name on cards. */
  summary: string;
}

/**
 * Rush work is priced at this multiple of the package price.
 * Applies when the first deadline is under 72 hours from the intake date.
 * The intake form shows this number to the student before they submit.
 */
export const RUSH_MULTIPLIER = 1.5;

/** Hours before a deadline at which rush pricing starts. */
export const RUSH_THRESHOLD_HOURS = 72;

export const packages: Package[] = [
  {
    id: "single-supplement",
    name: "Single supplement",
    price: "$TODO", // TODO: real price
    essayCount: 1,
    wordCountCap: 400,
    turnaroundDays: 4,
    revisionRounds: 2,
    summary: "One supplemental essay, edited twice.",
    includes: [
      "Line edits in a shared Google Doc",
      "Margin comments on structure, voice and the prompt fit",
      "A short summary note of what to fix and why",
      "Two rounds of revision on the same essay",
    ],
    excludes: [
      "Writing new paragraphs for you",
      "Brainstorming from scratch (see the full package)",
      "Essays over the word cap",
    ],
    stripeLink: "https://buy.stripe.com/TODO_single_supplement",
    featured: false,
  },
  {
    id: "supplement-bundle",
    name: "Supplement bundle",
    price: "$TODO", // TODO: real price
    essayCount: 4,
    wordCountCap: 400,
    turnaroundDays: 7,
    revisionRounds: 2,
    summary: "Four supplemental essays, edited as a set.",
    includes: [
      "Everything in the single supplement, for four essays",
      "A cross-essay read so the set does not repeat itself",
      "A one-page note on which stories to use where",
      "Two rounds of revision per essay",
    ],
    excludes: [
      "Personal statement editing",
      "Essays over the word cap",
      "Additional essays past four (buy singles)",
    ],
    stripeLink: "https://buy.stripe.com/TODO_supplement_bundle",
    featured: true,
  },
  {
    id: "full-application",
    name: "Full application package",
    price: "$TODO", // TODO: real price
    essayCount: 8,
    wordCountCap: 650,
    turnaroundDays: 10,
    revisionRounds: 3,
    summary: "Personal statement plus up to seven supplements.",
    includes: [
      "Personal statement editing with three rounds",
      "Up to seven supplemental essays with two rounds each",
      "A 30 minute call at the start to map stories to prompts",
      "A cross-application read before you submit",
      "Priority turnaround on each round",
    ],
    excludes: [
      "Activities list or additional information section",
      "Interview preparation",
      "Applications past the first eight essays (buy singles)",
    ],
    stripeLink: "https://buy.stripe.com/TODO_full_application",
    featured: false,
  },
  {
    id: "personal-statement",
    name: "Personal statement deep dive",
    price: "$TODO", // TODO: real price
    essayCount: 1,
    wordCountCap: 650,
    turnaroundDays: 7,
    revisionRounds: 3,
    summary: "The main essay only, three rounds.",
    includes: [
      "A structural read of your draft before any line edits",
      "Line edits and margin comments across three rounds",
      "A 20 minute call after the first round",
      "A final proofread",
    ],
    excludes: [
      "Supplemental essays",
      "Writing the essay for you, at any stage",
    ],
    stripeLink: "https://buy.stripe.com/TODO_personal_statement",
    featured: false,
  },
];

export const getPackage = (id: string) => packages.find((p) => p.id === id);
