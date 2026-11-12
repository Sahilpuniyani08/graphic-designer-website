import { ImageResponse } from "next/og";

export const alt = "Creative Studio - Graphic Design & Brand Identity";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            width: "500px",
            height: "300px",
            background: "rgba(99, 85, 222, 0.12)",
            filter: "blur(90px)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "68px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#1A1B1E", marginRight: "16px" }}>Turning</span>
          <span style={{ color: "#CCD828", marginRight: "16px" }}>Ideas</span>
          <span style={{ color: "#1A1B1E", marginRight: "16px" }}>Into</span>
          <span style={{ color: "#6355DE" }}>Visuals</span>
        </div>
        <p
          style={{
            fontSize: "28px",
            color: "#667085",
            margin: 0,
            maxWidth: "760px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Create your identity digitally accessible • Graphic Design & Brand Studio
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
