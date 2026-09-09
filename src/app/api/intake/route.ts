import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { getPackage, RUSH_MULTIPLIER } from "@/content/packages";
import { pages } from "@/content/pages";
import { rateLimit } from "@/lib/rate-limit";
import {
  flattenZodErrors,
  intakeSchema,
  isRush,
  MIN_TIME_ON_FORM_SECONDS,
  type FieldErrors,
  type IntakeData,
} from "@/lib/intake-schema";

export const runtime = "nodejs";

// TODO(v2): file upload. If drafts are ever accepted as files instead of Doc links, this route
// would need multipart parsing and object storage. Nothing built; docLink stays a URL.

const RATE_LIMIT = { limit: 5, windowMs: 60 * 60 * 1000 };

type Reply =
  | { ok: true }
  | { ok: false; code: "validation"; errors: FieldErrors }
  | { ok: false; code: "rate_limited" | "too_fast" | "server" };

function reply(body: Reply, status: number) {
  return NextResponse.json(body, { status });
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function formatEmail(data: IntakeData): { subject: string; text: string } {
  const pkg = getPackage(data.package);
  const rush = isRush(data.deadline);
  const lines: string[] = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Applying for fall: ${data.applicantYear}`,
    `Colleges: ${data.colleges}`,
    ``,
    `Package: ${pkg?.name ?? data.package} (${pkg?.price ?? "?"})`,
    `First deadline: ${data.deadline}${rush ? `  ** RUSH x${RUSH_MULTIPLIER} **` : ""}`,
    `Draft status: ${data.draftStatus}`,
    `Doc link: ${data.docLink ?? "(none yet)"}`,
    ``,
    `Goal:`,
    data.goal,
    ``,
    `Essays (${data.essays.length}):`,
  ];
  data.essays.forEach((e, i) => {
    lines.push(``, `${i + 1}. ${e.school}  [${e.wordLimit} words]`, e.prompt);
  });
  const subject = `${rush ? "[RUSH] " : ""}Intake: ${data.name}, ${pkg?.name ?? data.package}, due ${data.deadline}`;
  return { subject, text: lines.join("\n") };
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  const rl = rateLimit(`intake:${ip}`, RATE_LIMIT);
  if (!rl.ok) return reply({ ok: false, code: "rate_limited" }, 429);

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return reply({ ok: false, code: "validation", errors: { _form: pages.start.errors.generic } }, 400);
  }

  const parsed = intakeSchema.safeParse(json);
  if (!parsed.success) {
    return reply({ ok: false, code: "validation", errors: flattenZodErrors(parsed.error) }, 400);
  }
  const data = parsed.data;

  // Honeypot: bots fill hidden fields. Pretend it worked so they stop.
  if (data.website && data.website.length > 0) {
    return reply({ ok: true }, 200);
  }

  // Time on form: a real person needs at least a few seconds.
  const elapsedSeconds = (Date.now() - data.startedAt) / 1000;
  if (elapsedSeconds < MIN_TIME_ON_FORM_SECONDS || elapsedSeconds > 60 * 60 * 24) {
    return reply({ ok: false, code: "too_fast" }, 400);
  }

  const { subject, text } = formatEmail(data);
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INTAKE_TO_EMAIL;
  const from = process.env.INTAKE_FROM_EMAIL ?? "Intake <onboarding@resend.dev>";

  if (!apiKey || !to) {
    // Local dev: no email provider configured. Log and succeed.
    console.info("[intake] RESEND_API_KEY or INTAKE_TO_EMAIL missing; payload follows.\n", subject, "\n", text);
    return reply({ ok: true }, 200);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      text,
    });
    if (error) {
      console.error("[intake] resend error", error);
      return reply({ ok: false, code: "server" }, 502);
    }
    return reply({ ok: true }, 200);
  } catch (err) {
    console.error("[intake] send failed", err);
    return reply({ ok: false, code: "server" }, 502);
  }
}
