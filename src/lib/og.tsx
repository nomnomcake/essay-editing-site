import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const palette = {
  peach: "#fbe3d8",
  cream: "#fff9f4",
  ink: "#5a3a34",
  coral: "#e89a94",
  gold: "#f2c879",
};

/** Cloud drawn with plain divs so it renders in Satori. */
function Cloud({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = (n: number) => n * scale;
  const base = {
    position: "absolute" as const,
    background: "#ffffff",
    border: `${s(5)}px solid ${palette.ink}`,
    borderRadius: 9999,
  };
  return (
    <div style={{ position: "absolute", left: x, top: y, width: s(180), height: s(90), display: "flex" }}>
      <div style={{ ...base, left: 0, top: s(30), width: s(180), height: s(60) }} />
      <div style={{ ...base, left: s(30), top: 0, width: s(70), height: s(70) }} />
      <div style={{ ...base, left: s(85), top: s(10), width: s(60), height: s(60) }} />
      <div style={{ position: "absolute", left: s(8), top: s(38), width: s(164), height: s(46), background: "#fff", borderRadius: 9999 }} />
      <div style={{ position: "absolute", left: s(36), top: s(8), width: s(58), height: s(58), background: "#fff", borderRadius: 9999 }} />
      <div style={{ position: "absolute", left: s(91), top: s(18), width: s(48), height: s(48), background: "#fff", borderRadius: 9999 }} />
    </div>
  );
}

/** Shared OG layout: a retro browser window over a peach ground with the page title inside. */
export function ogImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: palette.peach,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: palette.ink,
        }}
      >
        <div
          style={{
            width: 1040,
            height: 500,
            background: palette.cream,
            border: `6px solid ${palette.ink}`,
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: `12px 12px 0 ${palette.ink}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 24px",
              borderBottom: `6px solid ${palette.ink}`,
              fontSize: 26,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                display: "flex",
                background: palette.peach,
                border: `4px solid ${palette.ink}`,
                borderRadius: 12,
                padding: "6px 16px",
              }}
            >
              {site.shortName}
            </div>
            <div
              style={{
                display: "flex",
                width: 40,
                height: 40,
                border: `4px solid ${palette.ink}`,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              ×
            </div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <div style={{ position: "relative", width: 380, background: palette.coral, borderRight: `6px solid ${palette.ink}`, display: "flex" }}>
              <div style={{ position: "absolute", left: 40, top: 40, width: 60, height: 60, borderRadius: 9999, background: palette.gold, border: `5px solid ${palette.ink}` }} />
              <Cloud x={150} y={110} />
              <Cloud x={20} y={250} scale={0.7} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 48px", gap: 20, flex: 1 }}>
              <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>{title}</div>
              {subtitle ? <div style={{ fontSize: 28, lineHeight: 1.3, opacity: 0.85 }}>{subtitle}</div> : null}
            </div>
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
