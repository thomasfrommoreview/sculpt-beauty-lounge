import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sculpt Beauty Lounge — Med Spa in Downtown Sarnia, Ontario";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 120% at 50% 0%, #1a1712 0%, #0e0e10 55%)",
          color: "#f4f1eb",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c9a24b",
            fontFamily: "sans-serif",
            marginBottom: 26,
          }}
        >
          Downtown Sarnia, Ontario
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: 14,
            color: "#e3c77e",
            lineHeight: 1,
          }}
        >
          SCULPT
        </div>
        <div
          style={{
            fontSize: 34,
            letterSpacing: 20,
            textTransform: "uppercase",
            color: "#f4f1eb",
            marginTop: 14,
          }}
        >
          Beauty Lounge
        </div>
        <div
          style={{
            width: 120,
            height: 1,
            background: "#c9a24b",
            margin: "40px 0 28px",
          }}
        />
        <div
          style={{
            fontSize: 26,
            color: "#c7c1b6",
            fontFamily: "sans-serif",
          }}
        >
          Advanced skin, aesthetics &amp; beauty · (519) 331-6373
        </div>
      </div>
    ),
    { ...size }
  );
}
