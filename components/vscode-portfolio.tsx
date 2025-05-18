"use client"

import { useEffect, useState, Suspense } from "react"
import dynamic from "next/dynamic"
import { VSCodeLayout } from "@/components/vscode-layout"
import { LoadingPlaceholder } from "@/components/loading-placeholder"

// Import components with SSR enabled but with loading states
const Hero = dynamic(() => import("@/components/hero").then((mod) => mod.Hero), {
  loading: () => <LoadingPlaceholder height="600px" />,
})

const About = dynamic(() => import("@/components/about").then((mod) => mod.About), {
  loading: () => <LoadingPlaceholder height="600px" />,
})

const Skills = dynamic(() => import("@/components/skills").then((mod) => mod.Skills), {
  loading: () => <LoadingPlaceholder height="600px" />,
})

const Services = dynamic(() => import("@/components/services").then((mod) => mod.Services), {
  loading: () => <LoadingPlaceholder height="600px" />,
})

const Education = dynamic(() => import("@/components/education").then((mod) => mod.Education), {
  loading: () => <LoadingPlaceholder height="600px" />,
})

const Projects = dynamic(() => import("@/components/projects").then((mod) => mod.Projects), {
  loading: () => <LoadingPlaceholder height="600px" />,
})

const ImageGallery = dynamic(() => import("@/components/image-gallery").then((mod) => mod.ImageGallery), {
  loading: () => <LoadingPlaceholder height="600px" />,
})

const Contact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact), {
  loading: () => <LoadingPlaceholder height="600px" />,
})

interface VSCodePortfolioProps {
  initialSection?: string
}

export function VSCodePortfolio({ initialSection = "Home.jsx" }: VSCodePortfolioProps) {
  const [activeSection, setActiveSection] = useState(initialSection)
  const [isMounted, setIsMounted] = useState(false)

  // Sample gallery images
  const galleryImages = [
    {
      src: "/lims.png",
      alt: "Project Screenshot 1",
      caption: "A Saas Website",
    },
    {
      src: "/gentle.png",
      alt: "Project Screenshot 2",
      caption: "A Fashion E-commerce Website",
    },
    {
      src: "/med-ark.png",
      alt: "Project Screenshot 3",
      caption: "Medical staffing platform",
    },
    {
      src: "/peviacom.png",
      alt: "Project Screenshot 4",
      caption: "Solar Energy Solutions & Product eCommerce Website",
    },
    {
      src: "/quiz-app.png",
      alt: "Project Screenshot 5",
      caption: "A modern, interactive quiz application",
    },
    {
      src: "/WAS.png",
      alt: "Project Screenshot 5",
      caption: "Study Abroad Consultancy Website  ",
    },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Render a simplified version for server-side rendering
  // This will be replaced with the client-side version after hydration
  if (!isMounted) {
    return (
      <div className="h-screen w-full bg-[#1E1E1E] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full mx-auto mb-4"></div>
          <div className="text-lg">Loading Portfolio...</div>
        </div>
      </div>
    )
  }

  return (
    <VSCodeLayout activeSection={activeSection} setActiveSection={setActiveSection}>
      <Suspense fallback={<LoadingPlaceholder height="600px" />}>
        {activeSection === "Home.jsx" && <Hero />}
        {activeSection === "AboutMe.jsx" && <About />}
        {activeSection === "Skills.jsx" && <Skills />}
        {activeSection === "Services.jsx" && <Services />}
        {activeSection === "Education.jsx" && <Education />}
        {activeSection === "Projects.jsx" && <Projects />}
        {activeSection === "Gallery.jsx" && <ImageGallery images={galleryImages} />}
        {activeSection === "Contact.jsx" && <Contact />}
      </Suspense>
    </VSCodeLayout>
  )
}
