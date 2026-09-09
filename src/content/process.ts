export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  /** What the student does at this step. */
  you: string;
  /** What the editor does at this step. */
  me: string;
}

export const process: ProcessStep[] = [
  {
    id: "intake",
    title: "1. intake",
    description: "You tell me the prompts, the deadlines and what you want each essay to say.",
    you: "Fill in the intake form. Share a Google Doc with edit access.",
    me: "Reply within one business day with a yes or no and a price.",
  },
  {
    id: "first-read",
    title: "2. first read",
    description: "I read the prompt, then the draft, then mark it up.",
    you: "Wait. Do not touch the document while I am in it.",
    me: "Line edits, margin comments and a short summary note, inside the turnaround.",
  },
  {
    id: "revise",
    title: "3. revise",
    description: "You rewrite. I read again.",
    you: "Accept or reject each suggestion. Rewrite the parts the comments point at.",
    me: "Read the new version and mark what still needs work. Repeat for the rounds in your package.",
  },
  {
    id: "submit",
    title: "4. submit",
    description: "The essay is yours to send.",
    you: "Paste the final into the application and submit it yourself.",
    me: "Remove my access to the document. Keep no copy.",
  },
];
