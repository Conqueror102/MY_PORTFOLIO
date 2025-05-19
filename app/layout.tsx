import type React from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

// Load fonts
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

// Portfolio information - centralize data for consistency
const portfolioInfo = {
  name: "Victor Onyemaechi",
  title: "Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. View my projects and skills.",
  url: "https://victor-onyemaechi.vercel.app", // Replace with your actual domain
  image: "https://victor-onyemaechi.vercel.app/og-image.jpg", // Replace with your actual OG image
  twitterHandle: "@TECH_snitch101", // Replace with your Twitter handle
  keywords: [
    "full stack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "web developer portfolio",
    "software engineer",
    "frontend developer",
    "backend developer",
  ],
}

// Define metadata
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: `${portfolioInfo.name} | ${portfolioInfo.title}`,
    template: `%s | ${portfolioInfo.name}`,
  },
  description: portfolioInfo.description,
  keywords: portfolioInfo.keywords,

  // Author information
  authors: [{ name: portfolioInfo.name, url: portfolioInfo.url }],
  creator: portfolioInfo.name,

  // Canonical URL
  metadataBase: new URL(portfolioInfo.url),
  alternates: {
    canonical: "/",
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioInfo.url,
    title: `${portfolioInfo.name} | ${portfolioInfo.title}`,
    description: portfolioInfo.description,
    siteName: `${portfolioInfo.name} Portfolio`,
    images: [
      {
        url: portfolioInfo.image,
        width: 1200,
        height: 630,
        alt: `${portfolioInfo.name} - ${portfolioInfo.title}`,
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: `${portfolioInfo.name} | ${portfolioInfo.title}`,
    description: portfolioInfo.description,
    creator: portfolioInfo.twitterHandle,
    images: [portfolioInfo.image],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#007acc", // VS Code blue
      },
    ],
  },

  // Web manifest
  manifest: "/site.webmanifest",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification for search consoles
  verification: {
    google: "qzS6Fzf_hHAwewQfz-gfOatDDr196xJxJ6c_HHC2Q8o", // Replace with your verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

 
  // Viewport
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#007acc", // optional but now correctly placed
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans" suppressHydrationWarning={true}>
        {children}

        {/* Structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: portfolioInfo.name,
              url: portfolioInfo.url,
              jobTitle: portfolioInfo.title,
              description: portfolioInfo.description,
              image: portfolioInfo.image,
              sameAs: [
                "https://github.com/Conqueror102",
                "https://www.linkedin.com/in/victor-conqueror-956635327/",
                "https://x.com/TECH_snitch101?t=1MXTBHsRp_tx9nFgz7iNAA&s=09",
              ],
              knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Web Development", "UI/UX Design, HTML", "CSS", "JavaScript"],
            }),
          }}
        />
      </body>
    </html>
  )
}
