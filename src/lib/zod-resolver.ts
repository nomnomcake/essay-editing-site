import type { FieldError, FieldValues, Resolver } from "react-hook-form";
import type { z } from "zod";

/**
 * Minimal react-hook-form resolver for a Zod schema.
 * Written inline so the site does not need @hookform/resolvers.
 */
export function zodResolver<TIn extends FieldValues, TOut extends FieldValues>(
  schema: z.ZodType<TOut, TIn>,
): Resolver<TIn, unknown, TOut> {
  return async (values) => {
    const result = await schema.safeParseAsync(values);
    if (result.success) {
      return { values: result.data, errors: {} };
    }
    const errors: Record<string, FieldError> = {};
    for (const issue of result.error.issues) {
      const path = issue.path.map(String).join(".");
      if (!path || errors[path]) continue;
      errors[path] = { type: issue.code, message: issue.message };
    }
    return { values: {}, errors: toNested(errors) } as unknown as Awaited<
      ReturnType<Resolver<TIn, unknown, TOut>>
    >;
  };
}

/** Turn { "essays.0.prompt": err } into { essays: [ { prompt: err } ] } as RHF expects. */
function toNested(flat: Record<string, FieldError>) {
  const root: Record<string, unknown> = {};
  for (const [path, err] of Object.entries(flat)) {
    const parts = path.split(".");
    let cur: Record<string, unknown> = root;
    parts.forEach((part, i) => {
      const last = i === parts.length - 1;
      if (last) {
        cur[part] = err;
        return;
      }
      const nextIsIndex = /^\d+$/.test(parts[i + 1]);
      if (cur[part] === undefined) cur[part] = nextIsIndex ? [] : {};
      cur = cur[part] as Record<string, unknown>;
    });
  }
  return root;
}
