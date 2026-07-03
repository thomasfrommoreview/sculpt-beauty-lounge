import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "#0e0e10",
          color: "#c9a24b",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 1 }}>S</div>
      </div>
    ),
    { ...size }
  );
}
