/**
 * Desktop icon glyphs. All decorative, all aria-hidden. Wrap one in a link or
 * button to make it do something and give that element the accessible name.
 *
 * Every icon draws on a 56x56 grid with a non-scaling 3px outline, so a set
 * rendered at mixed sizes still reads as drawn by one hand.
 */

interface IconProps {
  size?: number;
  className?: string;
}

const S = {
  stroke: "var(--ink)",
  strokeWidth: 3,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

function Icon({
  size = 56,
  className = "",
  ratio = 1,
  children,
}: IconProps & { ratio?: number; children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={Math.round(size * ratio)}
      viewBox={`0 0 56 ${Math.round(56 * ratio)}`}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

/* ---------------------------------------------------------------- originals */

export function FolderIcon(p: IconProps) {
  return (
    <Icon {...p} ratio={0.8}>
      <path d="M3 10q0-4 4-4h12l5 5h25q4 0 4 4v25q0 4-4 4H7q-4 0-4-4Z" fill="var(--gold)" {...S} />
      <path d="M3 18h50" fill="none" {...S} />
    </Icon>
  );
}

export function GlobeIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <circle cx="28" cy="28" r="23" fill="var(--periwinkle)" {...S} />
      <ellipse cx="28" cy="28" rx="10" ry="23" fill="none" {...S} />
      <path d="M5 28h46M9 16h38M9 40h38" fill="none" {...S} />
    </Icon>
  );
}

export function StarIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <path
        d="M28 5l6.8 14.4 15.7 1.9-11.6 10.9 3 15.6L28 40.2 14.1 47.8l3-15.6L5.5 21.3l15.7-1.9Z"
        fill="var(--accent)"
        {...S}
      />
    </Icon>
  );
}

export function EnvelopeIcon(p: IconProps) {
  return (
    <Icon {...p} ratio={0.75}>
      <rect x="3" y="3" width="50" height="36" rx="5" fill="var(--gold)" {...S} />
      <path d="M3 8l25 17L53 8" fill="none" {...S} />
    </Icon>
  );
}

export function CloseBadge({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true" focusable="false" className={className}>
      <rect x="1.5" y="1.5" width="19" height="19" rx="5" fill="var(--accent)" {...S} />
      <path d="M7 7l8 8M15 7l-8 8" fill="none" {...S} />
    </svg>
  );
}

/* --------------------------------------------------------------------- new */

/** Save. The most retro object there is. */
export function FloppyIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M4 8q0-4 4-4h32l12 12v32q0 4-4 4H8q-4 0-4-4Z" fill="var(--periwinkle)" {...S} />
      <rect x="16" y="4" width="24" height="16" rx="2" fill="var(--cream)" {...S} />
      <rect x="14" y="32" width="28" height="20" rx="2" fill="var(--cream)" {...S} />
      <path d="M32 8v8" fill="none" {...S} />
    </Icon>
  );
}

/** A boxy CRT on a stand. */
export function MonitorIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <rect x="3" y="6" width="50" height="34" rx="5" fill="var(--cream)" {...S} />
      <rect x="10" y="13" width="36" height="20" rx="2" fill="var(--accent)" {...S} />
      <path d="M22 46h12M28 40v6" fill="none" {...S} />
      <path d="M16 52h24" fill="none" {...S} />
    </Icon>
  );
}

/** The classic arrow pointer. */
export function CursorIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M14 5l28 22-13 2 8 16-7 4-8-16-8 9Z" fill="var(--cream)" {...S} />
    </Icon>
  );
}

/** Waiting. */
export function HourglassIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M13 5h30M13 51h30" fill="none" {...S} />
      <path d="M16 5v9q0 8 12 14 12-6 12-14V5" fill="var(--gold)" {...S} />
      <path d="M16 51v-9q0-8 12-14 12 6 12 14v9" fill="var(--cream)" {...S} />
    </Icon>
  );
}

/** Editing, the whole point of the site. */
export function PencilIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M38 6l12 12-26 26-15 3 3-15Z" fill="var(--gold)" {...S} />
      <path d="M33 11l12 12" fill="none" {...S} />
      <path d="M9 47l6-1-5-5Z" fill="var(--ink)" {...S} />
    </Icon>
  );
}

/** An attachment. */
export function PaperclipIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <path
        d="M40 24L23 41a9 9 0 0 1-13-13L31 7a13 13 0 0 1 18 18L28 46"
        fill="none"
        {...S}
      />
    </Icon>
  );
}

/** Reading. */
export function BookIcon(p: IconProps) {
  return (
    <Icon {...p} ratio={0.85}>
      <path d="M4 9q10-5 24 0v35q-14-5-24 0Z" fill="var(--cream)" {...S} />
      <path d="M52 9q-10-5-24 0v35q14-5 24 0Z" fill="var(--periwinkle)" {...S} />
      <path d="M28 9v35" fill="none" {...S} />
    </Icon>
  );
}

/** An idea worth keeping. */
export function LightbulbIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M28 5a16 16 0 0 1 10 28v6H18v-6A16 16 0 0 1 28 5Z" fill="var(--gold)" {...S} />
      <path d="M20 45h16M22 51h12" fill="none" {...S} />
    </Icon>
  );
}

/** Cut it. */
export function TrashIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M8 14h40" fill="none" {...S} />
      <path d="M21 14V8q0-3 3-3h8q3 0 3 3v6" fill="none" {...S} />
      <path d="M12 14h32l-3 34q0 4-4 4H19q-4 0-4-4Z" fill="var(--cream)" {...S} />
      <path d="M24 24v20M32 24v20" fill="none" {...S} />
    </Icon>
  );
}

/** A deadline. */
export function CalendarIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <rect x="4" y="9" width="48" height="43" rx="5" fill="var(--cream)" {...S} />
      <path d="M4 21h48" fill="none" {...S} />
      <path d="M17 4v9M39 4v9" fill="none" {...S} />
      <rect x="13" y="29" width="8" height="7" rx="1.5" fill="var(--accent)" {...S} />
      <rect x="26" y="29" width="8" height="7" rx="1.5" fill="var(--periwinkle)" {...S} />
      <rect x="13" y="41" width="8" height="7" rx="1.5" fill="var(--periwinkle)" {...S} />
    </Icon>
  );
}

/** A margin comment. */
export function SpeechIcon(p: IconProps) {
  return (
    <Icon {...p} ratio={0.9}>
      <path d="M5 12q0-6 6-6h34q6 0 6 6v18q0 6-6 6H24l-11 9v-9h-2q-6 0-6-6Z" fill="var(--cream)" {...S} />
      <path d="M16 17h24M16 25h16" fill="none" {...S} />
    </Icon>
  );
}

/** A disc, for the desktop that never was. */
export function DiscIcon(p: IconProps) {
  return (
    <Icon {...p}>
      <circle cx="28" cy="28" r="23" fill="var(--periwinkle)" {...S} />
      <circle cx="28" cy="28" r="7" fill="var(--cream)" {...S} />
      <path d="M28 5a23 23 0 0 1 20 12" fill="none" {...S} />
    </Icon>
  );
}

/**
 * The two small circles that sit at the right of a classic title bar.
 * Purely decorative window controls.
 */
export function WindowDots({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex shrink-0 items-center gap-1.5 ${className}`}>
      <svg width="26" height="12" viewBox="0 0 26 12" focusable="false">
        <circle cx="6" cy="6" r="4.5" fill="var(--cream)" {...S} />
        <circle cx="20" cy="6" r="4.5" fill="var(--cream)" {...S} />
      </svg>
    </span>
  );
}
