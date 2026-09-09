export interface Credential {
  id: string;
  /** Short factual line. No adjectives. */
  text: string;
}

export const credentials: Credential[] = [
  {
    id: "stanford",
    text: "Stanford Class of 2030. Bioengineering and Art Practice double major.",
  },
  {
    id: "youngarts",
    text: "YoungArts winner, Visual Arts.",
  },
  {
    id: "congressional",
    text: "Congressional Art Competition winner. The painting hangs in the U.S. Capitol.",
  },
  {
    id: "patents",
    text: "Inventor on two patent-pending medical devices, SSIV and PIVOT.",
  },
  {
    id: "hospital",
    text: "Former pediatric patient. Later a volunteer at the same hospital.",
  },
];
