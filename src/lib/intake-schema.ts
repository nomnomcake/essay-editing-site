import { z } from "zod";
import { packages, RUSH_THRESHOLD_HOURS } from "@/content/packages";

/** Validation messages. Kept here so the client and server say the same thing. */
export const intakeMessages = {
  name: "Tell me your name.",
  email: "That email does not look right.",
  applicantYear: "Pick the year you are applying for.",
  colleges: "List at least one college.",
  package: "Pick a package.",
  essaysMin: "Add at least one essay.",
  essaySchool: "Which school is this for?",
  essayPrompt: "Paste the prompt.",
  essayWordLimit: "Enter the word limit as a number.",
  deadlinePast: "The deadline has to be in the future.",
  deadlineInvalid: "Enter a valid date.",
  draftStatus: "Tell me where the draft is.",
  docLink: "That link does not look like a URL.",
  goal: "One honest sentence is enough.",
  goalMax: "Keep it under 1000 characters.",
} as const;

const packageIds = packages.map((p) => p.id) as [string, ...string[]];

export const draftStatuses = ["none", "rough", "near-final"] as const;

/** Minimum seconds the form must have been open before a submit is accepted. */
export const MIN_TIME_ON_FORM_SECONDS = 8;

const trimmed = (msg: string, max = 200) =>
  z.string({ error: msg }).trim().min(1, msg).max(max, msg);

export const essaySchema = z.object({
  school: trimmed(intakeMessages.essaySchool, 120),
  prompt: trimmed(intakeMessages.essayPrompt, 2000),
  wordLimit: z.coerce
    .number({ error: intakeMessages.essayWordLimit })
    .int(intakeMessages.essayWordLimit)
    .min(1, intakeMessages.essayWordLimit)
    .max(5000, intakeMessages.essayWordLimit),
});

export const intakeSchema = z.object({
  name: trimmed(intakeMessages.name, 120),
  email: z.email({ error: intakeMessages.email }).max(200),
  applicantYear: z.coerce
    .number({ error: intakeMessages.applicantYear })
    .int()
    .min(2020, intakeMessages.applicantYear)
    .max(2100, intakeMessages.applicantYear),
  colleges: trimmed(intakeMessages.colleges, 1000),
  package: z.enum(packageIds, { error: intakeMessages.package }),
  essays: z.array(essaySchema, { error: intakeMessages.essaysMin }).min(1, intakeMessages.essaysMin).max(12),
  deadline: z
    .string({ error: intakeMessages.deadlineInvalid })
    .regex(/^\d{4}-\d{2}-\d{2}$/, intakeMessages.deadlineInvalid)
    .refine((d) => !Number.isNaN(Date.parse(d)), intakeMessages.deadlineInvalid)
    .refine((d) => new Date(`${d}T23:59:59`) > new Date(), intakeMessages.deadlinePast),
  draftStatus: z.enum(draftStatuses, { error: intakeMessages.draftStatus }),
  docLink: z
    .union([z.literal(""), z.url({ error: intakeMessages.docLink }).max(500)])
    .optional()
    .transform((v) => v || undefined),
  goal: trimmed(intakeMessages.goal, 1000),

  /** Honeypot. Real people never see or fill this. */
  website: z.string().max(200).optional(),
  /** Epoch ms when the form mounted. Used for the time-on-form check. */
  startedAt: z.coerce.number().int().positive(),
});

export type IntakeInput = z.input<typeof intakeSchema>;
export type IntakeData = z.output<typeof intakeSchema>;

/** Hours between now and the end of the given YYYY-MM-DD day. */
export function hoursUntilDeadline(deadline: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(deadline)) return null;
  const end = new Date(`${deadline}T23:59:59`).getTime();
  if (Number.isNaN(end)) return null;
  return (end - Date.now()) / 36e5;
}

export function isRush(deadline: string): boolean {
  const h = hoursUntilDeadline(deadline);
  return h !== null && h < RUSH_THRESHOLD_HOURS;
}

/** Flat map of dotted field path to first message, e.g. { "essays.0.prompt": "..." }. */
export type FieldErrors = Record<string, string>;

export function flattenZodErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const path = issue.path.map(String).join(".") || "_form";
    if (!(path in out)) out[path] = issue.message;
  }
  return out;
}
