"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button, DialogBox, DottedFrame, Field, RetroWindow } from "@/components";
import { packages, pages, RUSH_MULTIPLIER, site, ui } from "@/content";
import {
  intakeSchema,
  isRush,
  type FieldErrors,
  type IntakeInput,
} from "@/lib/intake-schema";
import { zodResolver } from "@/lib/zod-resolver";

const c = pages.start;
const STORAGE_KEY = "intake-draft-v1";

type ApiReply =
  | { ok: true }
  | { ok: false; code: "validation"; errors: FieldErrors }
  | { ok: false; code: "rate_limited" | "too_fast" | "server" };

const emptyEssay = { school: "", prompt: "", wordLimit: "" as unknown as number };

function defaultValues(): IntakeInput {
  return {
    name: "",
    email: "",
    applicantYear: "" as unknown as number,
    colleges: "",
    package: "" as IntakeInput["package"],
    essays: [{ ...emptyEssay }],
    deadline: "",
    draftStatus: "" as IntakeInput["draftStatus"],
    docLink: "",
    goal: "",
    website: "",
    startedAt: Date.now(),
  };
}

function loadDraft(): Partial<IntakeInput> | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<IntakeInput>) : null;
  } catch {
    return null;
  }
}

function saveDraft(values: IntakeInput) {
  try {
    const { website: _w, startedAt: _s, ...rest } = values;
    void _w;
    void _s;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
  } catch {
    /* storage unavailable */
  }
}

function clearDraft() {
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function IntakeForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [formError, setFormError] = useState<string>("");
  const startedAt = useRef(Date.now());

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<IntakeInput>({
    resolver: zodResolver(intakeSchema),
    defaultValues: defaultValues(),
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({ control, name: "essays" });

  // Restore a saved draft after mount so server and client markup match.
  useEffect(() => {
    const draft = loadDraft();
    if (draft) {
      reset({ ...defaultValues(), ...draft, startedAt: startedAt.current });
    }
  }, [reset]);

  // Persist on every change.
  useEffect(() => {
    const sub = watch((values) => saveDraft(values as IntakeInput));
    return () => sub.unsubscribe();
  }, [watch]);

  const deadline = watch("deadline");
  const rush = useMemo(() => (deadline ? isRush(deadline) : false), [deadline]);

  const yearOptions = useMemo(() => {
    const y = new Date().getFullYear();
    return [y + 1, y + 2, y + 3].map((n) => ({ value: String(n), label: String(n) }));
  }, []);

  const packageOptions = useMemo(
    () => packages.map((p) => ({ value: p.id, label: `${p.name} (${p.price})` })),
    [],
  );

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const onSubmit = handleSubmit(async (values) => {
    setStatus("submitting");
    setFormError("");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });
      const body = (await res.json()) as ApiReply;
      if (body.ok) {
        clearDraft();
        setStatus("sent");
        return;
      }
      setStatus("idle");
      if (body.code === "validation") {
        for (const [path, message] of Object.entries(body.errors)) {
          if (path === "_form") setFormError(message);
          else setError(path as keyof IntakeInput, { type: "server", message });
        }
        if (!Object.keys(body.errors).some((k) => k !== "_form")) {
          setFormError(c.errors.generic);
        }
      } else if (body.code === "rate_limited") {
        setFormError(c.errors.rateLimited);
      } else if (body.code === "too_fast") {
        setFormError(c.errors.tooFast);
      } else {
        setFormError(c.errors.generic);
      }
    } catch {
      setStatus("idle");
      setFormError(c.errors.generic);
    }
  });

  if (status === "sent") {
    return (
      <div className="flex justify-center py-10">
        <DialogBox
          prompt={c.success.prompt}
          yesLabel={c.success.yes}
          noLabel={c.success.no}
          onYes={() => {
            reset(defaultValues());
            setStatus("idle");
          }}
          noHref={site.book.href}
        />
      </div>
    );
  }

  const f = c.fields;
  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-10">
      {/* Honeypot. Hidden from people, visible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          {f.docLink.label}
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>
      <input type="hidden" {...register("startedAt")} />

      <RetroWindow title={c.sections.you} variant="plain">
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label={f.name.label}
            placeholder={f.name.placeholder}
            autoComplete="name"
            error={errors.name?.message}
            {...register("name")}
          />
          <Field
            label={f.email.label}
            type="email"
            placeholder={f.email.placeholder}
            help={f.email.help}
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Field
            kind="select"
            label={f.applicantYear.label}
            placeholder={f.applicantYear.placeholder}
            options={yearOptions}
            error={errors.applicantYear?.message}
            {...register("applicantYear")}
          />
          <Field
            kind="select"
            label={f.package.label}
            placeholder={f.package.placeholder}
            options={packageOptions}
            error={errors.package?.message}
            {...register("package")}
          />
          <Field
            className="md:col-span-2"
            label={f.colleges.label}
            placeholder={f.colleges.placeholder}
            help={f.colleges.help}
            error={errors.colleges?.message}
            {...register("colleges")}
          />
        </div>
      </RetroWindow>

      <RetroWindow title={c.sections.essays} variant="plain">
        <div className="flex flex-col gap-6">
          {errors.essays?.root?.message || (typeof errors.essays?.message === "string" ? errors.essays.message : "") ? (
            <p role="alert" className="font-pixel text-[11px] text-coral-deep">
              {errors.essays?.root?.message ?? errors.essays?.message}
            </p>
          ) : null}
          {fields.map((row, i) => (
            <DottedFrame key={row.id} padding="sm">
              <div className="flex flex-col gap-4 p-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-pixel text-xs">
                    {f.essay.heading} {i + 1}
                  </h2>
                  {fields.length > 1 ? (
                    <Button variant="ghost" size="sm" onClick={() => remove(i)}>
                      {ui.form.removeRow}
                    </Button>
                  ) : null}
                </div>
                <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
                  <Field
                    label={f.essay.school.label}
                    placeholder={f.essay.school.placeholder}
                    error={errors.essays?.[i]?.school?.message}
                    {...register(`essays.${i}.school` as const)}
                  />
                  <Field
                    label={f.essay.wordLimit.label}
                    type="number"
                    inputMode="numeric"
                    min={1}
                    placeholder={f.essay.wordLimit.placeholder}
                    error={errors.essays?.[i]?.wordLimit?.message}
                    {...register(`essays.${i}.wordLimit` as const)}
                  />
                </div>
                <Field
                  kind="textarea"
                  rows={3}
                  label={f.essay.prompt.label}
                  placeholder={f.essay.prompt.placeholder}
                  error={errors.essays?.[i]?.prompt?.message}
                  {...register(`essays.${i}.prompt` as const)}
                />
              </div>
            </DottedFrame>
          ))}
          <div>
            <Button variant="secondary" size="sm" onClick={() => append({ ...emptyEssay })} disabled={fields.length >= 12}>
              {ui.form.addRow}
            </Button>
          </div>
        </div>
      </RetroWindow>

      <RetroWindow title={c.sections.timing} variant="plain">
        <div className="flex flex-col gap-4">
          <Field
            label={f.deadline.label}
            type="date"
            min={minDate}
            help={f.deadline.help}
            error={errors.deadline?.message}
            {...register("deadline")}
          />
          {rush ? (
            <p role="status" className="outline-ink r-tight bg-gold px-3 py-2 text-sm">
              {c.rush.warning} {RUSH_MULTIPLIER} {c.rush.suffix}
            </p>
          ) : null}
        </div>
      </RetroWindow>

      <RetroWindow title={c.sections.draft} variant="plain">
        <div className="flex flex-col gap-5">
          <Field
            kind="radio"
            label={f.draftStatus.label}
            options={f.draftStatus.options}
            error={errors.draftStatus?.message}
            {...register("draftStatus")}
          />
          <Field
            label={f.docLink.label}
            type="url"
            required={false}
            placeholder={f.docLink.placeholder}
            help={f.docLink.help}
            error={errors.docLink?.message}
            {...register("docLink")}
          />
        </div>
      </RetroWindow>

      <RetroWindow title={c.sections.goal} variant="plain">
        <Field
          kind="textarea"
          label={f.goal.label}
          placeholder={f.goal.placeholder}
          help={f.goal.help}
          error={errors.goal?.message}
          {...register("goal")}
        />
      </RetroWindow>

      {formError ? (
        <p role="alert" className="outline-ink r-tight bg-cream px-3 py-2 font-pixel text-[11px] text-coral-deep">
          {formError}
        </p>
      ) : null}

      <div>
        <Button type="submit" size="lg" disabled={submitting} aria-busy={submitting}>
          {submitting ? c.submitting : c.submit}
        </Button>
      </div>
    </form>
  );
}
