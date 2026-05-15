import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#03060c",
          color: "#ffffff",
          fontFamily: "Inter"
        }}
      >
        {/* Green ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 14% 18%, rgba(34,197,94,0.42), transparent 44%), radial-gradient(circle at 86% 78%, rgba(74,222,128,0.32), transparent 40%)"
          }}
        />
        {/* Faint grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(34,197,94,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,197,94,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div
          style={{
            margin: "auto",
            width: "84%",
            display: "flex",
            flexDirection: "column",
            gap: 22,
            position: "relative"
          }}
        >
          {/* Leaf bullet + brand mark */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 4,
                height: 28,
                background: "#4ade80",
                borderRadius: 2
              }}
            />
            <div
              style={{
                fontSize: 24,
                color: "#86efac",
                letterSpacing: 5,
                textTransform: "uppercase",
                fontWeight: 600
              }}
            >
              Jungle Labs · Surrey BC
            </div>
          </div>

          {/* Main tagline */}
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.04,
              fontWeight: 800,
              maxWidth: 1000,
              color: "#ffffff",
              letterSpacing: "-0.02em"
            }}
          >
            We Build. You Scale.
            <br />
            Systems That{" "}
            <span style={{ color: "#4ade80" }}>Think.</span>
          </div>

          {/* Sub-tagline */}
          <div
            style={{
              fontSize: 28,
              color: "#cbd5e1",
              maxWidth: 950,
              lineHeight: 1.4,
              marginTop: 8
            }}
          >
            AI Automation · Blockchain · Tokenization · Industry CRM Automation
          </div>

          {/* Bottom URL row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 22,
              fontSize: 22,
              color: "#86efac",
              fontWeight: 600
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                background: "#4ade80",
                borderRadius: 999,
                boxShadow: "0 0 12px rgba(74,222,128,0.9)"
              }}
            />
            junglelabsworld.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
