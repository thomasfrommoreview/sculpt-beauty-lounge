import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e0e10",
          color: "#c9a24b",
          fontSize: 42,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
