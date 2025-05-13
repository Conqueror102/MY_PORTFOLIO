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
  const baseUrl = "https://your-portfolio-domain.com" // Replace with your actual domain

  return sections.map((section) => ({
    url: `${baseUrl}${section.path}`,
    lastModified: section.lastModified,
    changeFrequency: "monthly",
    priority: section.path === "/" ? 1 : 0.8,
  }))
}
