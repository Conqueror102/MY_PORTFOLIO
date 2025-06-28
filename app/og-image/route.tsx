import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
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
      {/* Main Logo */}
      <img
        src={"/victor logo.jpg"}
        alt="Victor Onyemaechi Logo"
        style={{ 
          width: 300, 
          height: 300, 
          borderRadius: "20px", 
          marginBottom: 40, 
          objectFit: "cover", 
          border: "8px solid #ffffff", 
          boxShadow: "0 8px 40px rgba(0, 122, 204, 0.3)" 
        }}
      />
      
      {/* Name and Title */}
      <div style={{ 
        fontSize: 72, 
        color: "#ffffff", 
        marginBottom: 16, 
        fontWeight: 700,
        textAlign: "center",
        textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
      }}>
        Victor Onyemaechi
      </div>
      
      <div style={{ 
        fontSize: 36, 
        color: "#e6f3ff", 
        fontWeight: 500,
        textAlign: "center",
        textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
      }}>
        Full Stack Developer
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
} 