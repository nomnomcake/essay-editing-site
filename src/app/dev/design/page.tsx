import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Cloud,
  DialogBox,
  DocIcon,
  DottedFrame,
  EnvelopeIcon,
  Field,
  FolderIcon,
  FolderTab,
  GlobeIcon,
  HeartRow,
  RetroWindow,
  Sparkle,
  StarIcon,
  Sun,
  type CloudShape,
  type SunVariant,
  type FolderPattern,
} from "@/components";
import {
  Bitter,
  Bricolage_Grotesque,
  Crimson_Pro,
  IBM_Plex_Mono,
  Instrument_Serif,
  Lora,
  Newsreader,
  Zilla_Slab,
} from "next/font/google";
import {
  BookIcon,
  CalendarIcon,
  CursorIcon,
  DiscIcon,
  FloppyIcon,
  HourglassIcon,
  LightbulbIcon,
  MonitorIcon,
  PaperclipIcon,
  PencilIcon,
  SpeechIcon,
  TrashIcon,
  WindowDots,
} from "@/components";
import { key } from "./copy";

/* Candidate reading fonts. Imported here only, so they never load on the public site. */
const newsreader = Newsreader({ subsets: ["latin"], display: "swap" });
const bitter = Bitter({ subsets: ["latin"], display: "swap" });
const lora = Lora({ subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", display: "swap" });
const crimson = Crimson_Pro({ subsets: ["latin"], display: "swap" });
const zilla = Zilla_Slab({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "600"], display: "swap" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

const FONT_OPTIONS = [
  { name: "Courier Prime ✓", className: "font-body" },
  { name: "Newsreader", className: newsreader.className },
  { name: "Bitter", className: bitter.className },
  { name: "Lora", className: lora.className },
  { name: "Instrument Serif", className: instrument.className },
  { name: "Crimson Pro", className: crimson.className },
  { name: "Zilla Slab", className: zilla.className },
  { name: "IBM Plex Mono", className: plexMono.className },
  { name: "Bricolage", className: bricolage.className },
];

const SUNS: { name: string; variant: SunVariant }[] = [
  { name: "coquette ✓", variant: "coquette" },
  { name: "spoked", variant: "spoked" },
  { name: "rayed", variant: "rayed" },
  { name: "banded", variant: "banded" },
  { name: "disc (was)", variant: "disc" },
];

const FOLDER_PATTERNS: { name: string; pattern: FolderPattern }[] = [
  { name: "band ✓", pattern: "band" },
  { name: "scallop", pattern: "scallop" },
  { name: "dots", pattern: "dots" },
  { name: "none", pattern: "none" },
];

const ICONS = [
  { name: "folder", El: FolderIcon },
  { name: "globe", El: GlobeIcon },
  { name: "star", El: StarIcon },
  { name: "envelope", El: EnvelopeIcon },
  { name: "floppy", El: FloppyIcon },
  { name: "monitor", El: MonitorIcon },
  { name: "cursor", El: CursorIcon },
  { name: "hourglass", El: HourglassIcon },
  { name: "pencil", El: PencilIcon },
  { name: "paperclip", El: PaperclipIcon },
  { name: "book", El: BookIcon },
  { name: "lightbulb", El: LightbulbIcon },
  { name: "trash", El: TrashIcon },
  { name: "calendar", El: CalendarIcon },
  { name: "speech", El: SpeechIcon },
  { name: "disc", El: DiscIcon },
];

export const metadata: Metadata = {
  title: key.title,
  robots: { index: false, follow: false },
};

function Section({
  heading,
  source,
  note,
  children,
}: {
  heading: string;
  source?: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="font-pixel text-base md:text-lg">{heading}</h2>
          {source ? (
            <span className="font-pixel text-[10px]">
              {key.sourceLabel}: {source}
            </span>
          ) : null}
        </div>
        {note ? <p className="max-w-prose">{note}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Specimen({ label, note, children }: { label: string; note?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-pixel text-xs">{label}</h3>
        {note ? <p className="text-sm">{note}</p> : null}
      </div>
      <div className="flex flex-wrap items-end gap-4 r-tight bg-peach-bg p-4">{children}</div>
    </div>
  );
}

const CLOUD_SHAPES: CloudShape[] = ["tall", "wide", "peaked", "lumpy", "puff"];

export default function DesignKeyPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14 px-4 py-10 md:py-14">
      <header className="flex flex-col gap-3">
        <h1 className="flex items-center gap-3 font-pixel text-xl md:text-2xl">
          <Sparkle tone="gold" size={20} />
          <span>{key.title}</span>
        </h1>
        <p className="max-w-prose text-lg">{key.intro}</p>
      </header>

      {/* 0. For review */}
      <Section heading={key.review.heading} note={key.review.note}>
        <ul className="grid gap-2 sm:grid-cols-2">
          {key.review.changed.map((c) => (
            <li key={c} className="flex gap-2 outline-ink r-soft bg-gold/40 p-3 text-sm">
              <Sparkle tone="gold" size={13} className="mt-1 shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-pixel text-xs">{key.review.fontHeading}</h3>
            <p className="text-sm">{key.review.fontNote}</p>
          </div>
          <ul className="flex flex-col gap-3">
            {FONT_OPTIONS.map((f) => (
              <li key={f.name} className="grid gap-1 r-tight bg-peach-bg p-3 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-4">
                <span className="font-pixel text-[10px]">{f.name}</span>
                <span className={`${f.className} text-lg`}>{key.review.fontSample}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-pixel text-xs">{key.review.accentHeading}</h3>
            <p className="text-sm">{key.review.accentNote}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {key.review.accents.map((a) => (
              <figure key={a.hex} className="flex flex-col gap-2">
                <div
                  className="relative h-28 overflow-hidden outline-ink r-tight"
                  style={{ background: a.hex }}
                >
                  <Cloud size="xs" shape="lumpy" flip className="absolute -top-3 -left-2" />
                  <Cloud size="sm" shape="tall" className="absolute -bottom-4 right-0" />
                  <Sun size={20} className="absolute top-3 right-4" />
                </div>
                <figcaption className="flex flex-col gap-1">
                  <span className="font-pixel text-[10px]">
                    {a.name} {a.applied ? "✓" : ""}
                  </span>
                  <span className="font-pixel text-[10px]">{a.hex}</span>
                  <span className="text-xs">
                    {key.review.accentCols.ink} {a.ink} / {key.review.accentCols.cloud} {a.cloud} /{" "}
                    {key.review.accentCols.page} {a.page}
                  </span>
                  <span
                    className="mt-1 r-tight px-2 py-1 text-center font-pixel text-[10px]"
                    style={{ background: a.hex, border: "3px solid var(--ink)" }}
                  >
                    button
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-sm">{key.review.accentFootnote}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-pixel text-xs">{key.review.sunHeading}</h3>
              <p className="text-sm">{key.review.sunNote}</p>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {SUNS.map((s) => (
                <figure key={s.variant} className="flex flex-col items-center gap-2 r-tight bg-accent p-3">
                  <Sun size={46} variant={s.variant} />
                  <figcaption className="text-center font-pixel text-[10px]">{s.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <DottedFrame padding="sm">
            <div className="flex flex-col gap-2 p-2">
              <h3 className="font-pixel text-xs">{key.review.motionHeading}</h3>
              <p className="text-sm">{key.review.motionNote}</p>
            </div>
          </DottedFrame>
        </div>

        <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-pixel text-xs">{key.review.folderHeading}</h3>
            <p className="text-sm">{key.review.folderNote}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOLDER_PATTERNS.map((f) => (
              <FolderTab key={f.pattern} label={f.name} tone="accent" pattern={f.pattern}>
                <p className="text-sm">Card body.</p>
              </FolderTab>
            ))}
          </div>
        </div>
      </Section>

      {/* 1. Palette */}
      <Section heading={key.palette.heading} source={key.palette.source} note={key.palette.note}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {key.palette.swatches.map((s) => (
            <li key={s.token} className="flex items-stretch gap-3 outline-ink r-soft bg-cream p-3">
              <span aria-hidden="true" className={`w-16 shrink-0 outline-ink r-tight ${s.className}`} />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="font-pixel text-[11px]">{s.token}</span>
                <span className="font-pixel text-[10px]">{s.hex}</span>
                <span className="text-sm">{s.use}</span>
              </span>
            </li>
          ))}
        </ul>
        <DottedFrame padding="sm">
          <div className="flex flex-col gap-2 p-2">
            <h3 className="font-pixel text-xs">{key.palette.ruleHeading}</h3>
            <ul className="flex list-disc flex-col gap-1 pl-5">
              {key.palette.rules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </DottedFrame>
      </Section>

      {/* 2. Type */}
      <Section heading={key.type.heading} source={key.type.source} note={key.type.note}>
        <div className="grid gap-4 md:grid-cols-2">
          {key.type.families.map((f) => (
            <div key={f.name} className="flex flex-col gap-2 outline-ink r-soft bg-cream p-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-pixel text-xs">{f.name}</h3>
                <span className="font-pixel text-[10px]">{f.variable}</span>
              </div>
              <p className={`${f.className} text-lg`}>{f.sample}</p>
              <p className="text-sm">{f.role}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
          <h3 className="font-pixel text-xs">{key.type.scaleHeading}</h3>
          <ul className="flex flex-col gap-3">
            {key.type.scale.map((s) => (
              <li key={s.label} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:items-baseline sm:gap-4">
                <span className="font-pixel text-[10px]">{s.label}</span>
                <span className={s.className}>{s.sample}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 3. Form */}
      <Section heading={key.form.heading} source={key.form.source} note={key.form.note}>
        <ul className="flex flex-col gap-3">
          {key.form.utilities.map((u) => (
            <li key={u.name} className="grid gap-1 outline-ink r-soft bg-cream p-3 sm:grid-cols-[9rem_11rem_1fr] sm:items-baseline sm:gap-4">
              <span className="font-pixel text-[11px]">{u.name}</span>
              <span className="font-pixel text-[10px]">{u.value}</span>
              <span className="text-sm">{u.use}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-end gap-6 outline-ink r-soft bg-cream p-4">
          <span className="outline-ink r-soft bg-peach-bg px-4 py-3 font-pixel text-[10px]">r-soft</span>
          <span className="outline-ink r-tight bg-peach-bg px-4 py-3 font-pixel text-[10px]">r-tight</span>
          <span className="outline-ink r-tight bg-accent px-4 py-3 font-pixel text-[10px] shadow-flat">shadow-flat</span>
          <button type="button" className="focus-retro outline-ink r-tight bg-periwinkle px-4 py-3 font-pixel text-[10px]">
            focus-retro (tab to me)
          </button>
        </div>
        <DottedFrame padding="sm">
          <div className="flex flex-col gap-3 p-2">
            <h3 className="font-pixel text-xs">{key.form.strokeHeading}</h3>
            <p className="max-w-prose">{key.form.strokeNote}</p>
            <div className="flex flex-wrap items-end gap-4 r-tight bg-accent p-4">
              <Cloud size="xs" shape="puff" />
              <Cloud size="sm" shape="lumpy" />
              <Cloud size="md" shape="tall" />
            </div>
          </div>
        </DottedFrame>
      </Section>

      {/* 4. Components */}
      <Section heading={key.components.heading} source={key.components.source} note={key.components.note}>
        <div className="grid gap-4 md:grid-cols-2">
          <Specimen label={key.components.labels.button} note={key.components.labels.buttonNote}>
            <Button variant="primary">primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="ghost">ghost</Button>
          </Specimen>

          <Specimen label={key.components.labels.dialog} note={key.components.labels.dialogNote}>
            <DialogBox prompt="do you want to continue?" />
          </Specimen>

          <Specimen label={key.components.labels.folder} note={key.components.labels.folderNote}>
            <FolderTab label="accent" tone="accent" className="w-40">
              <p className="text-sm">Card body.</p>
            </FolderTab>
            <FolderTab label="gold" tone="gold" featured className="w-40">
              <p className="text-sm">Featured.</p>
            </FolderTab>
          </Specimen>

          <Specimen label={key.components.labels.doc} note={key.components.labels.docNote}>
            <DocIcon label="samples.doc" size="sm" />
            <DocIcon label="terms.txt" size="md" tone="periwinkle" />
          </Specimen>

          <Specimen label={key.components.labels.hearts} note={key.components.labels.heartsNote}>
            <HeartRow filled={5} />
            <HeartRow filled={3} />
          </Specimen>

          <Specimen label={key.components.labels.icons} note={key.components.labels.iconsNote}>
            <FolderIcon size={48} />
            <GlobeIcon size={48} />
            <StarIcon size={48} />
            <EnvelopeIcon size={48} />
          </Specimen>
        </div>

        <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-pixel text-xs">{key.components.labels.window}</h3>
            <p className="text-sm">{key.components.labels.windowNote}</p>
          </div>
          <RetroWindow title="untitled" variant="browser" url="https://essay-edits/example">
            <p>Window body. Ink on cream.</p>
          </RetroWindow>
        </div>

        <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-pixel text-xs">{key.components.labels.frame}</h3>
            <p className="text-sm">{key.components.labels.frameNote}</p>
          </div>
          <DottedFrame>
            <p>Anything inside reads as a selected object.</p>
          </DottedFrame>
        </div>

        <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-pixel text-xs">{key.components.labels.field}</h3>
            <p className="text-sm">{key.components.labels.fieldNote}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="text input" name="key-text" placeholder="placeholder" help="Help text sits here." />
            <Field label="with an error" name="key-error" placeholder="placeholder" error="this field has an error" />
          </div>
        </div>
      </Section>

      {/* 5. Icons */}
      <Section heading={key.icons.heading} source={key.icons.source} note={key.icons.note}>
        <ul className="grid grid-cols-3 gap-4 outline-ink r-soft bg-cream p-5 sm:grid-cols-4 md:grid-cols-6">
          {ICONS.map(({ name, El }) => (
            <li key={name} className="flex flex-col items-center gap-2">
              <El size={44} />
              <span className="text-center font-pixel text-[10px]">{name}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. Clouds */}
      <Section heading={key.clouds.heading} source={key.clouds.source} note={key.clouds.note}>
        <div className="flex flex-col gap-4 outline-ink r-soft bg-cream p-4">
          <h3 className="font-pixel text-xs">{key.clouds.shapeLabel}</h3>
          <div className="flex flex-wrap items-end gap-6 r-tight bg-accent p-5">
            {CLOUD_SHAPES.map((s) => (
              <figure key={s} className="flex flex-col items-center gap-2">
                <Cloud size="sm" shape={s} />
                <figcaption className="font-pixel text-[10px]">{s}</figcaption>
              </figure>
            ))}
          </div>
          <p className="font-pixel text-[10px]">{key.clouds.sizes}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
            <h3 className="font-pixel text-xs">{key.clouds.flipHeading}</h3>
            <p className="text-sm">{key.clouds.flipNote}</p>
            <div className="flex items-end gap-6 r-tight bg-accent p-5">
              <figure className="flex flex-col items-center gap-2">
                <Cloud size="sm" shape="lumpy" />
                <figcaption className="font-pixel text-[10px]">default</figcaption>
              </figure>
              <figure className="flex flex-col items-center gap-2">
                <Cloud size="sm" shape="lumpy" flip />
                <figcaption className="font-pixel text-[10px]">flip</figcaption>
              </figure>
            </div>
          </div>

          <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
            <h3 className="font-pixel text-xs">{key.clouds.banksHeading}</h3>
            <p className="text-sm">{key.clouds.banksNote}</p>
            <div className="relative h-40 overflow-hidden r-tight bg-accent">
              <Sun size={28} className="absolute top-4 right-6" />
              <Cloud size="sm" shape="lumpy" flip className="absolute -top-4 -left-4" />
              <Cloud size="xs" shape="puff" flip className="absolute -top-2 left-24" />
              <Cloud size="md" shape="wide" className="absolute -bottom-8 -left-6" />
              <Cloud size="sm" shape="tall" className="absolute -bottom-6 right-4" />
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Motion */}
      <Section heading={key.motion.heading} source={key.motion.source} note={key.motion.note}>
        <div className="overflow-x-auto outline-ink r-soft bg-cream">
          <table className="w-full min-w-[34rem]">
            <thead>
              <tr className="border-b-[3px] border-ink bg-peach-bg font-pixel text-[11px]">
                <th scope="col" className="px-4 py-3 text-left">name</th>
                <th scope="col" className="px-4 py-3 text-left">timing</th>
                <th scope="col" className="px-4 py-3 text-left">where</th>
              </tr>
            </thead>
            <tbody>
              {key.motion.table.map((m) => (
                <tr key={m.name} className="border-b-2 border-ink/15 last:border-b-0">
                  <th scope="row" className="px-4 py-3 text-left font-pixel text-[11px]">{m.name}</th>
                  <td className="px-4 py-3 text-sm">{m.timing}</td>
                  <td className="px-4 py-3 text-sm">{m.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
            <h3 className="font-pixel text-xs">{key.motion.parallaxHeading}</h3>
            <p className="text-sm">{key.motion.parallaxNote}</p>
            <div className="relative h-32 overflow-hidden r-tight bg-accent">
              <Cloud size="xs" shape="puff" drift={55} delay={9} className="absolute left-0 top-3" />
              <Cloud size="sm" shape="wide" drift={38} delay={15} className="absolute left-0 top-12" />
              <Cloud size="md" shape="tall" drift={26} delay={6} className="absolute left-0 bottom-0" />
            </div>
          </div>

          <DottedFrame padding="sm">
            <div className="flex flex-col gap-2 p-2">
              <h3 className="font-pixel text-xs">{key.motion.reducedHeading}</h3>
              <ul className="flex list-disc flex-col gap-1 pl-5 text-sm">
                {key.motion.reducedRules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </DottedFrame>
        </div>
      </Section>

      {/* 8. Retro treatments */}
      <Section heading={key.retro.heading} source={key.retro.source} note={key.retro.note}>
        <ul className="grid gap-4 md:grid-cols-3">
          {key.retro.items.map((r, i) => (
            <li key={r.name} className="flex flex-col gap-2 outline-ink r-soft bg-cream p-4">
              <span className="font-pixel text-[11px]">{r.name}</span>
              <span
                className={`h-16 outline-ink r-tight bg-cream ${
                  i === 0 ? "stripes-ink opacity-60" : i === 1 ? "dither" : "hatch-ink"
                }`}
              />
              <span className="text-sm">{r.use}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-4">
          <h3 className="font-pixel text-xs">{key.retro.dotsHeading}</h3>
          <p className="text-sm">{key.retro.dotsNote}</p>
          <div className="flex items-center gap-3 r-tight bg-peach-bg p-4">
            <span className="stripes-ink h-2.5 flex-1 opacity-45" />
            <WindowDots />
          </div>
        </div>
      </Section>

      {/* 7. Standing rules */}
      <Section heading={key.rules.heading} note={key.rules.note}>
        <ul className="grid gap-3 md:grid-cols-2">
          {key.rules.items.map((r) => (
            <li key={r} className="flex gap-3 outline-ink r-soft bg-cream p-3">
              <Sparkle tone="gold" size={14} className="mt-1 shrink-0" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <p className="font-pixel text-[11px]">
        <Link href="/dev/components" className="focus-retro r-tight underline underline-offset-4">
          /dev/components
        </Link>
      </p>
    </div>
  );
}
