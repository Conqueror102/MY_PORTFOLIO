// This is a sample file showing how you could generate an Open Graph image
// You would need to build this with @vercel/og or similar
// This is just a placeholder to show the concept

import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(135deg, #007acc 0%, #60aaff 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
      }}
    >
      <img
        src={"/victor logo.jpg"}
        alt="Victor Onyemaechi Logo"
        style={{ width: 180, height: 180, borderRadius: "50%", marginBottom: 32, objectFit: "cover", border: "6px solid #fff", boxShadow: "0 4px 32px #007acc55" }}
      />
      <div style={{ fontSize: 64, color: "#007acc", marginBottom: 20, fontWeight: 700 }}>Victor Onyemaechi</div>
      <div style={{ fontSize: 48, color: "#D4D4D4" }}>Full Stack Developer</div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
