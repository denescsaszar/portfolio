import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
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
