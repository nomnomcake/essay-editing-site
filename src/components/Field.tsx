"use client";

import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { ui } from "@/content/ui";

export interface FieldOption {
  value: string;
  label: string;
  /** Extra line under a radio option. */
  hint?: string;
}

interface CommonProps {
  label: string;
  name: string;
  /** Shown under the control. */
  help?: string;
  /** Inline error. Presence of text marks the field invalid. */
  error?: string;
  /** Hide the "optional" tag. Required fields are the default. */
  required?: boolean;
  className?: string;
}

export interface InputFieldProps
  extends CommonProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "className" | "required"> {
  kind?: "input";
}

export interface TextareaFieldProps
  extends CommonProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "className" | "required"> {
  kind: "textarea";
}

export interface SelectFieldProps
  extends CommonProps,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, "name" | "className" | "required"> {
  kind: "select";
  options: readonly FieldOption[];
  /** Blank first option. */
  placeholder?: string;
}

export interface RadioFieldProps
  extends CommonProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "className" | "required" | "type"> {
  kind: "radio";
  options: readonly FieldOption[];
}

export type FieldProps =
  | InputFieldProps
  | TextareaFieldProps
  | SelectFieldProps
  | RadioFieldProps;

const control =
  "focus-retro w-full outline-ink r-tight bg-cream px-3 py-2.5 font-body text-base text-ink placeholder:text-ink/50 disabled:opacity-50 aria-[invalid=true]:border-accent-deep";

/** The one form atom. Use for every input, textarea, select and radio group so labels, help and errors stay consistent. */
export const Field = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FieldProps
>(function Field(props, ref) {
  const reactId = useId();
  const { label, name, help, error, required = true, className = "" } = props;
  const id = props.id ?? `${name}-${reactId}`;
  const helpId = help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;
  const invalid = Boolean(error);

  const labelNode = (
    <span className="flex items-baseline gap-2 font-pixel text-xs">
      <span>{label}</span>
      {!required ? (
        <span className="text-[10px]">{ui.field.optional}</span>
      ) : null}
    </span>
  );

  const footer = (
    <>
      {help ? (
        <p id={helpId} className="text-sm text-ink/80">
          {help}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="font-pixel text-[11px] text-accent-deep">
          {error}
        </p>
      ) : null}
    </>
  );

  if (props.kind === "radio") {
    const { kind: _k, options, label: _l, name: _n, help: _h, error: _e, required: _r, className: _c, ...rest } = props;
    void _k; void _l; void _n; void _h; void _e; void _r; void _c;
    return (
      <fieldset
        className={`flex flex-col gap-2 ${className}`}
        aria-describedby={describedBy}
        aria-invalid={invalid || undefined}
      >
        <legend className="mb-2">{labelNode}</legend>
        <div className="flex flex-col gap-2">
          {options.map((o) => {
            const oid = `${id}-${o.value}`;
            return (
              <label
                key={o.value}
                htmlFor={oid}
                className="flex cursor-pointer items-start gap-3 outline-ink r-tight bg-cream px-3 py-2.5 has-checked:bg-peach-bg has-focus-visible:outline-2 has-focus-visible:outline-dashed has-focus-visible:outline-offset-2 has-focus-visible:outline-ink"
              >
                <input
                  {...rest}
                  ref={ref as React.Ref<HTMLInputElement>}
                  id={oid}
                  type="radio"
                  name={name}
                  value={o.value}
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-ink focus:outline-none"
                />
                <span className="flex flex-col">
                  <span className="text-base">{o.label}</span>
                  {o.hint ? <span className="text-sm text-ink/80">{o.hint}</span> : null}
                </span>
              </label>
            );
          })}
        </div>
        {footer}
      </fieldset>
    );
  }

  if (props.kind === "textarea") {
    const { kind: _k, label: _l, name: _n, help: _h, error: _e, required: _r, className: _c, ...rest } = props;
    void _k; void _l; void _n; void _h; void _e; void _r; void _c;
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label htmlFor={id}>{labelNode}</label>
        <textarea
          {...rest}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={id}
          name={name}
          rows={rest.rows ?? 5}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={`${control} min-h-28 resize-y`}
        />
        {footer}
      </div>
    );
  }

  if (props.kind === "select") {
    const { kind: _k, options, placeholder, label: _l, name: _n, help: _h, error: _e, required: _r, className: _c, ...rest } = props;
    void _k; void _l; void _n; void _h; void _e; void _r; void _c;
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label htmlFor={id}>{labelNode}</label>
        <select
          {...rest}
          ref={ref as React.Ref<HTMLSelectElement>}
          id={id}
          name={name}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={`${control} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='m2 5 5 5 5-5' stroke='%235a3a34' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")] bg-[length:14px] bg-[position:right_12px_center] bg-no-repeat pr-9`}
        >
          {placeholder !== undefined ? <option value="">{placeholder}</option> : null}
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {footer}
      </div>
    );
  }

  const { kind: _k, label: _l, name: _n, help: _h, error: _e, required: _r, className: _c, ...rest } = props;
  void _k; void _l; void _n; void _h; void _e; void _r; void _c;
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id}>{labelNode}</label>
      <input
        {...rest}
        ref={ref as React.Ref<HTMLInputElement>}
        id={id}
        name={name}
        type={rest.type ?? "text"}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        className={control}
      />
      {footer}
    </div>
  );
});
