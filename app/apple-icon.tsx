import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#0e0e0e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ff6f61",
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        DC
      </div>
    ),
    {
      ...size,
    }
  );
}
