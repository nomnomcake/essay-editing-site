/**
 * Desktop icon glyphs from the reference: folder, document, globe, star,
 * envelope. All decorative, all aria-hidden. Wrap in a link or button to make
 * them do something and give that element the accessible name.
 */

interface IconProps {
  size?: number;
  className?: string;
}

const stroke = { stroke: "var(--ink)", strokeWidth: 2.5, strokeLinejoin: "round" as const };

export function FolderIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 56 45" aria-hidden="true" focusable="false" className={className}>
      <path d="M3 10q0-4 4-4h12l5 5h25q4 0 4 4v25q0 4-4 4H7q-4 0-4-4Z" fill="var(--gold)" {...stroke} />
      <path d="M3 18h50" {...stroke} fill="none" />
    </svg>
  );
}

export function GlobeIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true" focusable="false" className={className}>
      <circle cx="28" cy="28" r="23" fill="var(--periwinkle)" {...stroke} />
      <ellipse cx="28" cy="28" rx="10" ry="23" fill="none" {...stroke} />
      <path d="M5 28h46M9 16h38M9 40h38" fill="none" {...stroke} />
    </svg>
  );
}

export function StarIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true" focusable="false" className={className}>
      <path
        d="M28 5l6.8 14.4 15.7 1.9-11.6 10.9 3 15.6L28 40.2 14.1 47.8l3-15.6L5.5 21.3l15.7-1.9Z"
        fill="var(--coral)"
        {...stroke}
      />
    </svg>
  );
}

export function EnvelopeIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 56 42" aria-hidden="true" focusable="false" className={className}>
      <rect x="3" y="3" width="50" height="36" rx="5" fill="var(--gold)" {...stroke} />
      <path d="M3 8l25 17L53 8" fill="none" {...stroke} />
    </svg>
  );
}

export function CloseBadge({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true" focusable="false" className={className}>
      <rect x="1.5" y="1.5" width="19" height="19" rx="5" fill="var(--coral)" {...stroke} />
      <path d="M7 7l8 8M15 7l-8 8" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
