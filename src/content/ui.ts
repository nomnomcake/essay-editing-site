/**
 * Interface microcopy shared by components. Page copy lives in the other
 * files in this folder. Keep everything lowercase where it renders in the
 * pixel font.
 */
export const ui = {
  window: {
    close: "close window",
    back: "back",
    forward: "forward",
    refresh: "refresh",
    home: "home",
    bookmark: "bookmark",
    defaultUrl: "https://",
  },
  dialog: {
    yes: "yes",
    no: "no",
  },
  search: {
    label: "search",
    placeholder: "search",
    submit: "search",
  },
  hearts: {
    /** Screen reader text. {n} is replaced with the count. */
    rating: "{n} out of 5 hearts",
  },
  doc: {
    glyph: "Aa",
  },
  field: {
    optional: "optional",
    required: "required",
  },
  button: {
    loading: "one moment",
  },
  form: {
    addRow: "add another essay",
    removeRow: "remove",
    submit: "send intake",
    submitting: "sending",
  },
} as const;

export type UiCopy = typeof ui;
