import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0f172a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#f97356",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: 700,
              marginRight: "20px",
            }}
          >
            DC
          </div>
          <div style={{ color: "#94a3b8", fontSize: "24px" }}>
            denescsaszar.github.io
          </div>
        </div>

        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Denes Csaszar
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#f97356",
            marginBottom: "32px",
            fontWeight: 600,
          }}
        >
          Developer | Product Manager
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          Full-stack development paired with 8+ years of e-commerce, API
          integrations, and product delivery. Berlin & Zürich based.
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {["JavaScript", "React", "Node.js", "REST APIs", "Scrum"].map(
            (skill) => (
              <div
                key={skill}
                style={{
                  backgroundColor: "#1e293b",
                  color: "#e2e8f0",
                  padding: "8px 20px",
                  borderRadius: "20px",
                  fontSize: "18px",
                  border: "1px solid #334155",
                }}
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
