import { RetroWindow } from "@/components/RetroWindow";
import { pages, type LegalDoc } from "@/content";
import { Page } from "./Page";

/** Renders terms or privacy from a LegalDoc structure with deep-linkable sections. */
export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <Page heading={doc.title.toLowerCase()} intro={doc.description}>
      <RetroWindow title={doc.fileName} variant="plain">
        <p className="mb-6 font-pixel text-[11px] opacity-70">
          {pages.legal.updated} {doc.updated}
        </p>
        <div className="flex flex-col gap-8">
          {doc.sections.map((s) => (
            <section key={s.id} id={s.id} className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="font-pixel text-sm">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="max-w-prose">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </RetroWindow>
    </Page>
  );
}
