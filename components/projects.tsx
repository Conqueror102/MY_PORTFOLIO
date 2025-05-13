import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product catalog, shopping cart, and payment processing.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that generates blog posts, social media content, and marketing copy.",
      technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with channels, direct messages, and file sharing capabilities.",
      technologies: ["React", "Firebase", "Tailwind CSS", "WebSockets"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="text-[#6A9955] text-xl mb-2">// Projects</div>
        <div className="text-[#569CD6] text-3xl font-bold mb-4">My Work</div>
        <div className="text-[#D4D4D4]">A collection of my recent development projects</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#252526] border border-[#3C3C3C] rounded-md overflow-hidden hover:border-[#569CD6] transition-colors duration-200"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#569CD6] text-lg font-bold">{project.title}</h3>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4D4D4] hover:text-[#569CD6]"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4D4D4] hover:text-[#569CD6]"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-[#D4D4D4] mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-[#1E1E1E] text-[#CE9178] px-2 py-1 rounded-md text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-4 py-3 border-t border-[#3C3C3C] bg-[#1E1E1E]">
              <div className="text-[#6A9955] text-xs">// View project details</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
