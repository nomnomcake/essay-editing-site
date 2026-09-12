"use client";

import { useEffect, useMemo, useState } from "react";
import { Button, RetroWindow, SearchBar } from "@/components";
import { pages, site, ui, type Question } from "@/content";

const c = pages.faq;

function readHash() {
  if (typeof window === "undefined") return "";
  return window.location.hash.replace(/^#/, "");
}

/** Searchable, deep-linkable FAQ accordion built on native details/summary. */
export function FaqList({ questions }: { questions: Question[] }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string>("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
    const sync = () => {
      const id = readHash();
      if (id) {
        setOpenId(id);
        // Scroll after the panel has opened.
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ block: "start" });
        });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return questions;
    return questions.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.includes(q),
    );
  }, [query, questions]);

  return (
    <div className="flex flex-col gap-6">
      <SearchBar
        value={query}
        onChange={setQuery}
        label={c.searchLabel}
        placeholder={c.searchPlaceholder}
      />
      <p className="font-pixel text-[11px]" aria-live="polite">
        {filtered.length} {c.resultCount}
      </p>

      {filtered.length === 0 ? (
        <RetroWindow title={c.heading} variant="plain">
          <p>{c.noResults}</p>
        </RetroWindow>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((item) => (
            <details
              key={item.id}
              id={item.id}
              open={openId === item.id || undefined}
              onToggle={(e) => {
                if ((e.currentTarget as HTMLDetailsElement).open) setOpenId(item.id);
                else if (openId === item.id) setOpenId("");
              }}
              className="group outline-ink r-soft bg-cream scroll-mt-24 open:shadow-flat"
            >
              <summary className="focus-retro flex cursor-pointer list-none items-center gap-3 r-soft px-4 py-3 font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="inline-flex size-5 shrink-0 items-center justify-center outline-ink r-tight bg-periwinkle font-pixel text-[10px] group-open:bg-gold"
                >
                  {ui.glyph.plus}
                </span>
                <span className="flex-1">{item.question}</span>
                <span className="hidden font-pixel text-[10px] sm:inline">{item.category}</span>
              </summary>
              <div className="flex flex-col gap-3 border-t-[3px] border-ink px-4 py-4">
                <p className="max-w-prose">{item.answer}</p>
                <a
                  href={`#${item.id}`}
                  className="focus-retro w-fit r-tight font-pixel text-[10px] underline underline-offset-4"
                >
                  {c.copyLink}
                </a>
              </div>
            </details>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <p className="font-pixel text-xs">{c.stillHave}</p>
        <Button as="link" href={`mailto:${site.contactEmail}`} external variant="secondary" size="sm">
          {c.emailMe}
        </Button>
      </div>
    </div>
  );
}
