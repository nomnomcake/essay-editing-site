import type { ReactNode } from "react";

export interface DottedFrameProps {
  /** Inner padding. */
  padding?: "none" | "sm" | "md";
  className?: string;
  children: ReactNode;
}

const paddings: Record<NonNullable<DottedFrameProps["padding"]>, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-5 md:p-8",
};

const handle =
  "pointer-events-none absolute size-2 bg-ink";

/** Use to group a section so it reads as a selected object on a canvas, e.g. the process row or a highlighted card. */
export function DottedFrame({
  padding = "md",
  className = "",
  children,
}: DottedFrameProps) {
  return (
    <div
      className={`relative border-2 border-dashed border-ink ${paddings[padding]} ${className}`}
    >
      <span aria-hidden="true" className={`${handle} -top-[5px] -left-[5px]`} />
      <span aria-hidden="true" className={`${handle} -top-[5px] -right-[5px]`} />
      <span aria-hidden="true" className={`${handle} -bottom-[5px] -left-[5px]`} />
      <span aria-hidden="true" className={`${handle} -right-[5px] -bottom-[5px]`} />
      {children}
    </div>
  );
}
