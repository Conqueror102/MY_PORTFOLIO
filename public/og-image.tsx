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
        background: "#1e1e1e",
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
      <div style={{ fontSize: 64, color: "#569CD6", marginBottom: 20 }}>Victor Onyemaechi</div>
      <div style={{ fontSize: 48, color: "#D4D4D4" }}>Full Stack Developer</div>
      <div
        style={{
          display: "flex",
          marginTop: 40,
          gap: 20,
        }}
      >
        <div style={{ background: "#61DAFB", padding: "8px 16px", borderRadius: 8 }}>React</div>
        <div style={{ background: "#3178C6", padding: "8px 16px", borderRadius: 8 }}>TypeScript</div>
        <div style={{ background: "#339933", padding: "8px 16px", borderRadius: 8 }}>Node.js</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
