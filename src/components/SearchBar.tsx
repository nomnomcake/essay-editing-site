"use client";

import { useId } from "react";
import { ui } from "@/content/ui";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  /** Called on Enter or when the button is pressed. */
  onSubmit?: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

/** Use wherever the user filters a list, e.g. the FAQ. Controlled; the parent owns the value. */
export function SearchBar({
  value,
  onChange,
  onSubmit,
  label = ui.search.label,
  placeholder = ui.search.placeholder,
  className = "",
}: SearchBarProps) {
  const id = useId();

  return (
    <form
      role="search"
      className={`flex w-full items-stretch gap-2 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(value);
      }}
    >
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        className="focus-retro min-w-0 flex-1 outline-ink r-soft bg-cream px-4 py-2.5 font-body text-base text-ink placeholder:text-ink/50"
      />
      <button
        type="submit"
        aria-label={ui.search.submit}
        className="focus-retro inline-flex size-12 shrink-0 cursor-pointer items-center justify-center outline-ink r-soft bg-periwinkle text-ink shadow-flat hover:brightness-95"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <circle cx="8.5" cy="8.5" r="5.5" fill="var(--cream)" stroke="currentColor" strokeWidth="2.5" />
          <path d="m13 13 5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}
