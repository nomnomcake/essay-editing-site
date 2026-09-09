import { Button } from "./Button";
import { ui } from "@/content/ui";

export interface DialogBoxProps {
  /** Short lowercase question rendered in the pixel font. */
  prompt: string;
  yesLabel?: string;
  noLabel?: string;
  /** Click handlers. Ignored for a side when the matching href is set. */
  onYes?: () => void;
  onNo?: () => void;
  /** Render YES as a link instead of a button. */
  yesHref?: string;
  /** Render NO as a link instead of a button. */
  noHref?: string;
  className?: string;
}

/** Use for a single yes/no decision, most often the main call to action. Not for forms or long text. */
export function DialogBox({
  prompt,
  yesLabel = ui.dialog.yes,
  noLabel = ui.dialog.no,
  onYes,
  onNo,
  yesHref,
  noHref,
  className = "",
}: DialogBoxProps) {
  return (
    <div
      role="group"
      aria-label={prompt}
      className={`inline-flex w-full max-w-xs flex-col items-center gap-4 outline-ink r-soft bg-cream px-5 py-5 text-center text-ink ${className}`}
    >
      <p className="font-pixel text-xs leading-relaxed">{prompt}</p>
      <div className="flex gap-3">
        {yesHref ? (
          <Button as="link" href={yesHref} variant="primary" onClick={onYes}>
            {yesLabel}
          </Button>
        ) : (
          <Button variant="primary" onClick={onYes}>
            {yesLabel}
          </Button>
        )}
        {noHref ? (
          <Button as="link" href={noHref} variant="ghost" onClick={onNo}>
            {noLabel}
          </Button>
        ) : (
          <Button variant="ghost" onClick={onNo}>
            {noLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
