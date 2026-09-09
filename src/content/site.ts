export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  title: string;
  description: string;
  /** ISO date. */
  updated: string;
  sections: LegalSection[];
}

export const site = {
  name: "Essay editing",
  /** Used in the browser tab and OG images. Lowercase for the pixel font. */
  shortName: "essay edits",
  tagline: "Editing for college application essays. Supplements first.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: "hello@example.com", // TODO: real address
  nav: [
    { href: "/services", label: "services" },
    { href: "/packages", label: "packages" },
    { href: "/samples", label: "samples" },
    { href: "/about", label: "about" },
    { href: "/faq", label: "faq" },
  ] satisfies NavItem[],
  cta: { href: "/start", label: "start" },
  book: { href: "/book", label: "book a call" },
  footer: {
    links: [
      { href: "/terms", label: "terms" },
      { href: "/privacy", label: "privacy" },
      { href: "/book", label: "book a call" },
      { href: "/start", label: "start intake" },
    ] satisfies NavItem[],
    note: "One editor. No agency, no subcontractors.",
    copyright: "essay edits",
  },
  social: [
    { id: "instagram", label: "instagram", href: "https://instagram.com/TODO" }, // TODO
    { id: "linkedin", label: "linkedin", href: "https://linkedin.com/in/TODO" }, // TODO
  ] satisfies SocialLink[],
} as const;

export const terms: LegalDoc = {
  title: "Terms",
  description: "What you are buying, what you are not, and who is responsible for what.",
  updated: "2026-09-09",
  sections: [
    {
      id: "scope",
      heading: "Scope of work",
      paragraphs: [
        "Each package on the packages page lists a number of essays, a word cap per essay, a number of revision rounds and a turnaround in days. That list is the whole scope. Anything not listed is not included.",
        "Editing means line edits, margin comments and a summary note on writing you produced. It does not mean drafting paragraphs, sentences or ideas for you. Requests to write original content will be declined and are not grounds for a refund once work has started.",
      ],
    },
    {
      id: "revisions",
      heading: "Revision limits",
      paragraphs: [
        "A round is one edit pass by me followed by one revision by you. Rounds do not roll over between essays or between packages. Unused rounds expire 60 days after the first round is returned.",
        "An essay that changes prompt or school after the first round counts as a new essay.",
      ],
    },
    {
      id: "deadlines",
      heading: "Deadlines",
      paragraphs: [
        "Turnaround is counted in calendar days from the moment I confirm receipt of both your draft and your payment. You are responsible for knowing your application deadlines and for leaving enough time for every round you intend to use.",
        "I do not submit applications and I am not responsible for missed deadlines, portal errors or late submissions.",
      ],
    },
    {
      id: "refunds",
      heading: "Refunds",
      paragraphs: [
        "You may cancel for a full refund at any time before I begin reading your draft. Once a first round has been returned, fees are not refundable.",
        "If I decline a job or cannot meet the listed turnaround, you will be refunded in full.",
      ],
    },
    {
      id: "no-guarantee",
      heading: "No guarantee of admission",
      paragraphs: [
        "I do not guarantee, promise or imply admission to any institution, scholarship, program or interview. Admissions decisions depend on factors outside the essay and outside my control. Payment is for editing time and feedback, not for an outcome.",
      ],
    },
    {
      id: "conduct",
      heading: "Your responsibilities",
      paragraphs: [
        "You confirm that every draft you share is your own work and that you have the right to share it. You are responsible for following the application rules of each institution, including rules about outside help.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paragraphs: [
        "These terms may change. The version in effect is the one on this page on the day you submit the intake form.",
      ],
    },
  ],
};

export const privacy: LegalDoc = {
  title: "Privacy",
  description: "What I collect through the intake form, what I do with it, and how to have it deleted.",
  updated: "2026-09-09",
  sections: [
    {
      id: "collected",
      heading: "What is collected",
      paragraphs: [
        "The intake form collects your name, email address, application year, the schools you are applying to, the package you want, the prompts and word limits for each essay, your deadlines, whether you have a draft, an optional Google Doc link and a short statement of what you want the essay to say.",
        "The form is sent to my email inbox. Nothing is stored in a database on this site. The site uses Vercel Analytics, which records page views without cookies and without identifying you.",
      ],
    },
    {
      id: "drafts",
      heading: "Your drafts",
      paragraphs: [
        "Your essays stay in your Google Doc, which you own and control. I access it only for the rounds you have paid for and I remove my own access when the last round is returned.",
        "Drafts are never shared with anyone, never reused as samples or teaching material, and never used to train any software. If I want to quote from your essay on this site I will ask in writing and use nothing until you agree.",
      ],
    },
    {
      id: "payments",
      heading: "Payments",
      paragraphs: [
        "Payments are handled by Stripe on Stripe's pages. I do not see or store card numbers. Stripe's privacy policy applies to the payment step.",
      ],
    },
    {
      id: "scheduling",
      heading: "Scheduling",
      paragraphs: [
        "Calls are booked through Cal.com, which collects your name and email to send the calendar invite. Cal.com's privacy policy applies to that step.",
      ],
    },
    {
      id: "deletion",
      heading: "Deleting your data",
      paragraphs: [
        "Email me from the address you used on the intake form and ask for deletion. I will delete the intake email, any notes and any calendar records within seven days and confirm by reply.",
      ],
    },
  ],
};
