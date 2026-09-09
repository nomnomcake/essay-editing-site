"use client";

import { useState, type ReactNode } from "react";
import {
  Button,
  Cloud,
  DialogBox,
  DocIcon,
  DottedFrame,
  Field,
  FolderTab,
  HeartRow,
  RetroWindow,
  SearchBar,
  Sparkle,
  Sun,
} from "@/components";
import { gallery as g } from "./copy";

type UiState = "rest" | "hover" | "focus" | "disabled" | "error";

const forced: Record<UiState, string> = {
  rest: "",
  hover: "[&_button]:bg-coral-deep [&_a]:bg-coral-deep",
  focus:
    "[&_button]:outline-2 [&_button]:outline-dashed [&_button]:outline-ink [&_button]:outline-offset-2 [&_input]:outline-2 [&_input]:outline-dashed [&_input]:outline-ink [&_input]:outline-offset-2 [&_a]:outline-2 [&_a]:outline-dashed [&_a]:outline-ink [&_a]:outline-offset-2",
  disabled: "",
  error: "",
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-pixel text-sm">{title}</h2>
      {children}
    </section>
  );
}

function Both({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_375px]">
      <div className="@container min-w-0 outline-ink r-soft bg-peach-bg p-4">
        <p className="mb-3 font-pixel text-[10px]">{g.desktop}</p>
        {children}
      </div>
      <div className="w-[375px] max-w-full justify-self-start overflow-hidden outline-ink r-soft bg-peach-bg p-4">
        <p className="mb-3 font-pixel text-[10px]">{g.mobile}</p>
        <div className="@container">{children}</div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [state, setState] = useState<UiState>("rest");
  const [query, setQuery] = useState("");
  const [dialogMsg, setDialogMsg] = useState<string>("");
  const disabled = state === "disabled";
  const error = state === "error" ? g.fieldError : undefined;

  return (
    <div className={`mx-auto flex max-w-6xl flex-col gap-12 px-4 py-8 ${forced[state]}`}>
      <header className="flex flex-col gap-3">
        <h1 className="font-pixel text-base">{g.title}</h1>
        <p className="max-w-prose">{g.intro}</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-pixel text-xs">{g.stateLabel}</span>
          {(Object.keys(forced) as UiState[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setState(s)}
              aria-pressed={state === s}
              className={`focus-retro outline-ink r-tight px-3 py-1 font-pixel text-[11px] ${state === s ? "bg-gold" : "bg-cream"}`}
            >
              {g.states[s]}
            </button>
          ))}
        </div>
      </header>

      <Section title={g.sections.window}>
        <Both>
          <div className="flex flex-col gap-4">
            <RetroWindow title={g.windowTitle} variant="browser" url={g.windowUrl}>
              <p>{g.lorem}</p>
            </RetroWindow>
            <RetroWindow title={g.windowTitle} variant="plain">
              <p>{g.lorem}</p>
            </RetroWindow>
            <RetroWindow title={g.windowTitle} variant="browser" fill="coral" flush>
              <div className="relative h-40 overflow-hidden">
                <Sun className="absolute top-4 left-6" />
                <Cloud size="lg" className="absolute top-6 right-6" />
                <Cloud size="sm" className="absolute bottom-3 left-10" />
                <Sparkle tone="cream" className="absolute top-12 left-1/2" />
              </div>
            </RetroWindow>
          </div>
        </Both>
      </Section>

      <Section title={g.sections.dialog}>
        <Both>
          <div className="flex flex-col items-start gap-3">
            <DialogBox
              prompt={g.dialogPrompt}
              onYes={() => setDialogMsg(g.dialogYes)}
              onNo={() => setDialogMsg(g.dialogNo)}
            />
            <p className="font-pixel text-[11px] min-h-4" aria-live="polite">
              {dialogMsg}
            </p>
          </div>
        </Both>
      </Section>

      <Section title={g.sections.frame}>
        <Both>
          <DottedFrame>
            <p>{g.lorem}</p>
          </DottedFrame>
        </Both>
      </Section>

      <Section title={g.sections.folder}>
        <Both>
          <div className="grid gap-6 grid-cols-1 @md:grid-cols-3">
            <FolderTab label={g.folderLabels[0]} tone="coral">
              <p>{g.short}</p>
            </FolderTab>
            <FolderTab label={g.folderLabels[1]} tone="periwinkle" featured>
              <p>{g.short}</p>
            </FolderTab>
            <FolderTab label={g.folderLabels[2]} tone="gold">
              <p>{g.short}</p>
            </FolderTab>
          </div>
        </Both>
      </Section>

      <Section title={g.sections.doc}>
        <Both>
          <div className="flex flex-wrap items-end gap-6">
            <DocIcon label={g.docLabel} size="sm" />
            <DocIcon label={g.docLabel} size="md" />
            <DocIcon label={g.docLabel} size="lg" tone="periwinkle" />
          </div>
        </Both>
      </Section>

      <Section title={g.sections.hearts}>
        <Both>
          <div className="flex flex-wrap gap-6 pb-3">
            {[0, 3, 5].map((n) => (
              <HeartRow key={n} filled={n} />
            ))}
          </div>
        </Both>
      </Section>

      <Section title={g.sections.search}>
        <Both>
          <div className="flex flex-col gap-2">
            <SearchBar value={query} onChange={setQuery} />
            <p className="font-pixel text-[11px]">
              {g.searchEcho} {query}
            </p>
          </div>
        </Both>
      </Section>

      <Section title={g.sections.decor}>
        <Both>
          <div className="flex flex-wrap items-center gap-6">
            <Cloud size="sm" />
            <Cloud size="md" />
            <Cloud size="lg" animated />
            <Sparkle tone="ink" />
            <Sparkle tone="gold" size={24} animated />
            <Sparkle tone="cream" size={32} />
            <Sun />
          </div>
        </Both>
      </Section>

      <Section title={g.sections.button}>
        <Both>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" disabled={disabled}>
              {g.buttonLabel}
            </Button>
            <Button variant="secondary" disabled={disabled}>
              {g.buttonLabel}
            </Button>
            <Button variant="ghost" disabled={disabled}>
              {g.buttonLabel}
            </Button>
            <Button as="link" href="#" variant="primary" size="lg" disabled={disabled}>
              {g.buttonLink}
            </Button>
            <Button variant="secondary" size="sm" disabled={disabled}>
              {g.buttonLabel}
            </Button>
          </div>
        </Both>
      </Section>

      <Section title={g.sections.field}>
        <Both>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <Field
              label={g.field.text}
              name="demo-text"
              help={g.fieldHelp}
              error={error}
              disabled={disabled}
              placeholder={g.fieldPlaceholder}
            />
            <Field
              label={g.field.email}
              name="demo-email"
              type="email"
              required={false}
              error={error}
              disabled={disabled}
            />
            <Field
              kind="select"
              label={g.field.select}
              name="demo-select"
              placeholder={g.fieldPlaceholder}
              options={g.options}
              error={error}
              disabled={disabled}
            />
            <Field
              kind="radio"
              label={g.field.radio}
              name="demo-radio"
              options={g.options}
              error={error}
              disabled={disabled}
            />
            <Field
              kind="textarea"
              label={g.field.textarea}
              name="demo-textarea"
              help={g.fieldHelp}
              error={error}
              disabled={disabled}
            />
          </form>
        </Both>
      </Section>
    </div>
  );
}
