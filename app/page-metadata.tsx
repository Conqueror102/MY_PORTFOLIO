// This is a helper component to add page-specific metadata
// Import and use this in each section component

import type { Metadata } from "next"

interface GenerateMetadataProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
}

export function generateMetadata({ title, description, path, keywords = [], image }: GenerateMetadataProps): Metadata {
  const baseUrl = "https://victor-onyemaechi.vercel.app" // Replace with your actual domain
  const url = `${baseUrl}${path}`
  const ogImage = image || `${baseUrl}/og-image`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  }
}
