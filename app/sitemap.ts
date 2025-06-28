import type { MetadataRoute } from "next"

// Portfolio sections for sitemap
const sections = [
  { path: "/", lastModified: new Date() },
  { path: "/about", lastModified: new Date() },
  { path: "/skills", lastModified: new Date() },
  { path: "/projects", lastModified: new Date() },
  { path: "/services", lastModified: new Date() },
  { path: "/education", lastModified: new Date() },
  { path: "/contact", lastModified: new Date() },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://victor-onyemaechi.vercel.app"

  return sections.map((section) => ({
    url: `${baseUrl}${section.path}`,
    lastModified: section.lastModified.toISOString(),
    changeFrequency: "monthly",
    priority: section.path === "/" ? 1 : 0.8,
  }))
}
