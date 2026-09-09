"use client";

import { useId, useState } from "react";
import { DocIcon, RetroWindow } from "@/components";
import { pages, ui, type Sample } from "@/content";

const c = pages.samples;

// TODO(v2): in-browser editor. Samples are static excerpts by design; a live editor would replace this component.
/** Grid of document icons that expand into a before/after view. One open at a time. */
export function SampleCards({ samples }: { samples: Sample[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const open = samples.find((s) => s.id === openId) ?? null;

  return (
    <div className="flex flex-col gap-8">
      <ul className="flex flex-wrap gap-6">
        {samples.map((s) => {
          const isOpen = s.id === openId;
          const panelId = `${baseId}-${s.id}`;
          return (
            <li key={s.id}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : s.id)}
                className={`focus-retro flex flex-col items-center gap-1 r-soft p-3 transition-colors motion-reduce:transition-none hover:bg-cream ${isOpen ? "bg-cream outline-ink" : ""}`}
              >
                <DocIcon label={s.school.toLowerCase()} size="lg" tone={isOpen ? "periwinkle" : "cream"} />
                <span className="font-pixel text-[10px]">
                  {s.wordLimit} {c.wordLimit}
                </span>
                {s.placeholder ? (
                  <span className="r-tight bg-gold px-1.5 py-0.5 font-pixel text-[9px] uppercase">
                    {c.placeholderTag}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {samples.map((s) => {
        const panelId = `${baseId}-${s.id}`;
        const isOpen = open?.id === s.id;
        return (
          <section key={s.id} id={panelId} hidden={!isOpen} aria-label={s.prompt}>
            {isOpen ? (
              <RetroWindow title={s.school.toLowerCase()} variant="browser">
                <div className="flex flex-col gap-6">
                  <p className="font-pixel text-xs">
                    {s.prompt} {ui.glyph.dot} {s.wordLimit} {c.wordLimit}
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-pixel text-[11px] uppercase">{c.before}</h3>
                      <p className="outline-ink r-tight bg-peach-bg p-4">{s.before}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-pixel text-[11px] uppercase">{c.after}</h3>
                      <p className="outline-ink r-tight bg-cream p-4">{s.after}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-pixel text-[11px] uppercase">{c.notes}</h3>
                    <ol className="flex list-decimal flex-col gap-1 pl-5">
                      {s.changeNotes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </RetroWindow>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
