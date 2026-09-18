"use client";

import { useId, useState } from "react";
import { DocIcon, RetroWindow } from "@/components";
import { pages, ui, type Sample } from "@/content";

const c = pages.samples;

// TODO(v2): in-browser editor. Samples are static excerpts by design; a live editor would replace this component.
/** Grid of document icons that expand into a before/after view. One open at a time. */
export function SampleCards({ samples }: { samples: Sample[] }) {
  const [openId, setOpenId] = useState<string | null>(samples[0]?.id ?? null);
  const baseId = useId();
  const open = samples.find((s) => s.id === openId) ?? null;

  return (
    <div className="flex flex-col gap-8">
      <ul className="flex flex-wrap gap-2">
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
                className={`focus-retro flex items-center gap-2 outline-ink r-tight px-3 py-2 font-pixel text-[11px] ${
                  isOpen ? "bg-peach-bg" : "bg-cream hover:bg-peach-bg/60"
                }`}
              >
                <DocIcon label="" size="sm" tone={isOpen ? "periwinkle" : "cream"} className="w-5" />
                <span>{s.school.toLowerCase()}</span>
                <span>
                  {s.wordLimit} {c.wordLimit}
                </span>
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
              <RetroWindow title={s.school.toLowerCase()} variant="plain">
                <div className="flex flex-col gap-6">
                  {/* An h2 here so the before/after h3s do not jump straight from the page h1. */}
                  <h2 className="font-pixel text-xs">
                    {s.prompt} {ui.glyph.dot} {s.wordLimit} {c.wordLimit}
                  </h2>
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
