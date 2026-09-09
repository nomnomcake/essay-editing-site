/**
 * Page-level copy: headings, subcopy, labels. Data lists live in their own
 * files (packages, faq, process, samples, credentials, site).
 */
export const pages = {
  home: {
    meta: {
      title: "College essay editing",
      description:
        "Line edits and margin comments on your supplemental essays and personal statement. You write it. I make it clearer.",
    },
    window: { title: "untitled", url: "https://essay-edits/start" },
    headline: "Editing for college application essays.",
    subcopy:
      "Supplements first, personal statement second. You write. I mark it up. Nothing is written for you.",
    dialog: { prompt: "do you want to continue?" },
    credentials: { heading: "who is editing" },
    process: { heading: "how it works", you: "you", me: "me" },
    packages: {
      heading: "packages",
      seeAll: "see all packages",
      turnaround: "day turnaround",
      rounds: "rounds",
      essays: "essays",
    },
    faqPreview: { heading: "questions", seeAll: "see all questions", anchor: "faq" },
    search: { label: "search the questions", placeholder: "search the questions" },
  },

  desktop: {
    rail: "desktop",
    docs: { samples: "samples.doc", terms: "terms.txt" },
    mail: "email",
    globe: "book a call",
    star: "start intake",
    footerTitle: "readme.txt",
    urlPrefix: "https://essay-edits/",
  },

  services: {
    meta: {
      title: "Services",
      description:
        "What an edit includes and excludes, how long it takes, and how the packages compare.",
    },
    heading: "services",
    intro:
      "Every package is the same kind of work at a different size. This page says exactly what that work is.",
    includes: {
      heading: "what an edit includes",
      items: [
        "Line edits as suggestions in your Google Doc. You accept or reject each one.",
        "Margin comments on structure, order, voice and whether the essay answers the prompt.",
        "A summary note listing the three changes that matter most, in order.",
        "A cross-essay read on bundles, so the set does not repeat a story.",
        "A reply to follow-up questions by email during your rounds.",
      ],
    },
    excludes: {
      heading: "what it does not include",
      items: [
        "Writing sentences, paragraphs or ideas for you, at any stage.",
        "Activities lists, additional information sections or interview prep.",
        "Essays over the word cap for the package.",
        "Submitting anything on your behalf.",
      ],
    },
    turnaround: {
      heading: "turnaround",
      body:
        "Turnaround counts from when I confirm I have your draft and payment. It is a maximum, not an estimate. Rush pricing applies when your first deadline is under 72 hours away.",
    },
    table: {
      windowTitle: "compare.xls",
      heading: "compare packages",
      columns: {
        package: "package",
        essays: "essays",
        words: "word cap",
        days: "turnaround",
        rounds: "rounds",
        price: "price",
      },
      daysUnit: "days",
    },
    cta: "see prices and buy",
  },

  packages: {
    meta: {
      title: "Packages",
      description: "Four fixed packages. Pick one, pay through Stripe, share a Google Doc.",
    },
    heading: "packages",
    intro:
      "Prices are fixed. Submit the intake form first so I can confirm I have room, then pay through the link.",
    includes: "includes",
    excludes: "does not include",
    buy: "pay with stripe",
    start: "start intake first",
    featured: "most chosen",
    perEssay: "words per essay",
    days: "days per round",
    rounds: "rounds",
    essays: "essays",
    rush: {
      heading: "rush pricing",
      body: "If your first deadline is under 72 hours away when you submit the intake form, the price is the package price multiplied by",
      confirm: "I confirm rush jobs by email before you pay, because it depends on my queue.",
    },
  },

  samples: {
    meta: {
      title: "Samples",
      description: "Before and after excerpts with notes on what changed and why.",
    },
    heading: "samples",
    intro:
      "Short excerpts, shown with the student's permission. Open one to see the before, the after and the reasons.",
    before: "before",
    after: "after",
    notes: "what changed",
    wordLimit: "word limit",
    placeholderTag: "placeholder",
    open: "open",
    close: "close",
  },

  about: {
    meta: {
      title: "About",
      description: "Who is editing your essay and why that matters for how it gets read.",
    },
    heading: "about",
    windowTitle: "about.txt",
    paragraphs: [
      "I am a Stanford undergraduate studying bioengineering and art practice. I edit college application essays, mostly supplements, on the side.",
      "Two things from outside writing shape how I read. The first is painting. A painting has a subject and a structure, and the usual failure is filling the canvas with detail before deciding what the eye should land on first. Essays fail the same way. I read for the one thing the reader should walk away with, then cut whatever crowds it.",
      "The second is building medical devices. I hold two patent-pending designs, and both were rewritten more times than they were redrawn. Patent claims are the most literal writing there is. Every word either narrows or widens what you own. That habit carries over. When I comment on a sentence it is because the sentence claims something it does not show, or shows something it never claims.",
      "I do not use a template. There is no five-paragraph shape I push essays into, because the readers on the other side have seen every shape and are looking for a person. My job is to make the person on the page easier to see.",
      "I was a pediatric patient for a stretch of my childhood and later volunteered at the same hospital. I mention it because it is on the credentials list, not because it is a story. It taught me to notice who is in the room and what they need, which is also the whole job of a why-us essay.",
      "Everything happens in Google Docs and email. I keep no copies and I do not write essays for anyone. If that is what you are looking for, this is not the right service.",
    ],
    credentialsHeading: "on paper",
  },

  faq: {
    meta: {
      title: "FAQ",
      description: "Answers about what an edit includes, timing, payment, refunds and academic integrity.",
    },
    heading: "questions",
    intro: "Type to filter. Each answer has its own link.",
    searchLabel: "filter questions",
    searchPlaceholder: "type to filter",
    noResults: "nothing matches. try a shorter word.",
    resultCount: "questions shown",
    copyLink: "link",
    stillHave: "still have a question?",
    emailMe: "email me",
  },

  start: {
    meta: {
      title: "Start",
      description: "The intake form. Tell me the prompts, the deadlines and what you want the essay to say.",
    },
    heading: "start",
    windowTitle: "intake.form",
    intro:
      "This takes about five minutes. Nothing is sent until you press the button at the bottom, and your answers are saved in this tab if you refresh.",
    sections: {
      you: "about you",
      essays: "the essays",
      timing: "timing",
      draft: "where you are",
      goal: "the goal",
    },
    fields: {
      name: { label: "name", placeholder: "first and last" },
      email: { label: "email", placeholder: "you@example.com", help: "I reply here within one business day." },
      applicantYear: {
        label: "applying for fall of",
        placeholder: "choose a year",
      },
      colleges: {
        label: "colleges",
        placeholder: "Stanford, Brown, UCLA",
        help: "Comma separated. Every school you might send these essays to.",
      },
      package: { label: "package", placeholder: "choose a package" },
      essay: {
        school: { label: "school", placeholder: "school name or Common App" },
        prompt: { label: "prompt", placeholder: "paste the prompt exactly as written" },
        wordLimit: { label: "word limit", placeholder: "250" },
        heading: "essay",
      },
      deadline: {
        label: "first deadline",
        help: "The earliest date any of these essays is due.",
      },
      draftStatus: {
        label: "draft status",
        options: [
          { value: "none", label: "Nothing yet", hint: "I have the prompt and some notes." },
          { value: "rough", label: "Rough draft", hint: "It exists. It is not good yet." },
          { value: "near-final", label: "Near final", hint: "I want a last hard read." },
        ],
      },
      docLink: {
        label: "google doc link",
        placeholder: "https://docs.google.com/document/d/...",
        help: "Turn on edit access for anyone with the link, or share it with my email later.",
      },
      goal: {
        label: "what do you want this essay to say about you",
        placeholder: "One or two honest sentences. Not a thesis.",
        help: "This is the most useful field on the form.",
      },
    },
    rush: {
      warning: "That deadline is under 72 hours away. Rush pricing applies at",
      suffix: "times the package price, if I can take it.",
    },
    submit: "send intake",
    submitting: "sending",
    success: {
      prompt: "sent. check your email within one business day?",
      yes: "ok",
      no: "book a call",
    },
    errors: {
      generic: "something went wrong. email me instead.",
      rateLimited: "too many submissions from this network. try again in an hour.",
      tooFast: "that was fast. take a second look and send again.",
    },
  },

  book: {
    meta: {
      title: "Book a call",
      description: "A 20 minute call to talk through prompts and fit before you buy.",
    },
    heading: "book a call",
    windowTitle: "calendar",
    intro: "Twenty minutes. Bring the prompts.",
    fallback: {
      body: "Scheduling is not set up on this site yet. Email me and suggest two times.",
      cta: "email me",
    },
  },

  legal: {
    updated: "last updated",
  },

  notFound: {
    meta: { title: "Not found" },
    windowTitle: "error",
    prompt: "that page does not exist. go home?",
    yes: "yes",
    no: "faq",
  },

  layout: {
    skipLink: "Skip to content",
    menu: "menu",
    close: "close menu",
    homeLabel: "home",
  },
} as const;
