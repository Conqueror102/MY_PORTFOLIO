// Example of how to implement section-specific metadata
// This is a sample file showing how you could structure section pages with metadata

import { Suspense } from "react"
import { VSCodePortfolio } from "@/components/vscode-portfolio"
import { LoadingPlaceholder } from "@/components/loading-placeholder"
import { generateMetadata } from "@/app/page-metadata"
import { notFound } from "next/navigation"

// Define section metadata
const sectionMetadata = {
  about: {
    title: "About Me",
    description: "Learn about my background, skills, and experience as a Full Stack Developer.",
    path: "/about",
    keywords: ["about me", "developer background", "full stack experience"],
  },
  skills: {
    title: "Skills",
    description: "Explore my technical skills in React, Next.js, TypeScript, Node.js, and more.",
    path: "/skills",
    keywords: ["developer skills", "technical proficiency", "programming languages"],
  },
  projects: {
    title: "Projects",
    description: "View my portfolio of web development projects including e-commerce, dashboards, and more.",
    path: "/projects",
    keywords: ["web projects", "development portfolio", "coding examples"],
  },
  services: {
    title: "Services",
    description: "Professional web development services including frontend, backend, and full stack development.",
    path: "/services",
    keywords: ["web development services", "freelance developer", "hire developer"],
  },
  education: {
    title: "Education",
    description: "My educational background, certifications, and continuous learning journey.",
    path: "/education",
    keywords: ["developer education", "programming certifications", "computer science degree"],
  },
  contact: {
    title: "Contact",
    description: "Get in touch with me for project inquiries, collaborations, or job opportunities.",
    path: "/contact",
    keywords: ["contact developer", "hire programmer", "developer inquiry"],
  },
}

// Generate metadata for each section
export function generateMetadataForSection({ params }: { params: { section: string } }) {
  const section = params.section

  if (!sectionMetadata[section as keyof typeof sectionMetadata]) {
    return {}
  }

  const metadata = sectionMetadata[section as keyof typeof sectionMetadata]
  return generateMetadata(metadata)
}

export default function SectionPage({ params }: { params: { section: string } }) {
  const section = params.section

  // Map section to the corresponding section in VSCodePortfolio
  const sectionMap: Record<string, string> = {
    about: "AboutMe.jsx",
    skills: "Skills.jsx",
    projects: "Projects.jsx",
    services: "Services.jsx",
    education: "Education.jsx",
    contact: "Contact.jsx",
  }

  const activeSection = sectionMap[section]

  if (!activeSection) {
    notFound()
  }

  return (
    <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
      <VSCodePortfolio initialSection={activeSection} />
    </Suspense>
  )
}
