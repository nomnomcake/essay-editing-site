import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Full width. */
  block?: boolean;
  className?: string;
  children: ReactNode;
}

interface AsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  as?: "button";
}

interface AsLink extends BaseProps {
  as: "link";
  href: string;
  /** Open in a new tab with rel noopener. */
  external?: boolean;
  disabled?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export type ButtonProps = AsButton | AsLink;

const variants: Record<Variant, string> = {
  primary: "bg-coral hover:bg-coral-deep",
  secondary: "bg-periwinkle hover:brightness-95",
  ghost: "bg-cream hover:bg-peach-bg",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-[11px]",
  md: "px-4 py-2 text-xs",
  lg: "px-6 py-3 text-sm",
};

export const buttonClassName = ({
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  className = "",
}: {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  className?: string;
}) =>
  [
    "inline-flex items-center justify-center gap-2 outline-ink r-tight shadow-flat focus-retro",
    "font-pixel uppercase tracking-wide text-ink select-none",
    "transition-colors motion-reduce:transition-none",
    variants[variant],
    sizes[size],
    block ? "flex w-full" : "",
    disabled
      ? "pointer-events-none opacity-50 shadow-none"
      : "cursor-pointer",
    className,
  ].join(" ");

/** Use for every clickable action. Primary for the one thing a page wants you to do, secondary for alternatives, ghost for quiet actions. */
export function Button(props: ButtonProps) {
  if (props.as === "link") {
    const {
      href,
      external,
      variant,
      size,
      block,
      className,
      disabled,
      children,
      onClick,
      target,
      rel,
    } = props;
    const cls = buttonClassName({ variant, size, block, disabled, className });
    if (external) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          className={cls}
          aria-disabled={disabled || undefined}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cls}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  const {
    as: _as,
    variant,
    size,
    block,
    className,
    disabled,
    children,
    type = "button",
    ...rest
  } = props;
  void _as;
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClassName({ variant, size, block, disabled, className })}
      {...rest}
    >
      {children}
    </button>
  );
}
