import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseIcon,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MessageSquare,
  Twitter,
  Users,
  Code,
  Palette,
  Smartphone,
  Search,
  ShoppingCart,
  Wrench,
  Type,
  Terminal,
  Figma,
  Database,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"


export default function ClientPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-sans text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <TestimonialsSection /> */}
        <ProcessSection />
        <EducationSection />
        {/* <BlogSection /> */}
        <ContactSection />
        {/* <FAQSection /> */}
      </main>
      <Footer />
    </div>
  )
}

function Navbar() {
  // Dropdown state
  const [open, setOpen] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [userType, setUserType] = React.useState(() =>
    typeof window !== 'undefined' ? localStorage.getItem('portfolioUserType') || 'client' : 'client'
  );

  const handleSwitch = (type: string) => {
    setUserType(type);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolioUserType', type);
      window.location.reload();
    }
  };

  // Only relevant links for client portfolio
  const navLinks = ["Home", "About", "Services", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto md:px-16 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl flex items-center font-bold hover:text-violet-500 transition-colors">
            <div>
              <img src="/victor logo.jpg" alt="" className="h-14 w-14"/>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Victor.Conqueror
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-violet-500 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
{/* Dropdown for switching views */}
<div className="relative max-sm:hidden">
              <button
                className="px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full font-semibold shadow hover:shadow-lg focus:outline-none"
                onClick={() => setOpen((prev) => !prev)}
              >
                {userType === 'developer' ? 'Developer View' : 'Client View'}
                <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-violet-100 rounded-t-lg ${userType === 'client' ? 'font-bold text-violet-600' : ''}`}
                    onClick={() => { handleSwitch('client'); setOpen(false); }}
                  >
                    Client View
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-violet-100 rounded-b-lg ${userType === 'developer' ? 'font-bold text-violet-600' : ''}`}
                    onClick={() => { handleSwitch('developer'); setOpen(false); }}
                  >
                    Developer View
                  </button>
                </div>
              )}
            </div>
            
            {/* Hamburger for mobile */}
            <button className="md:hidden text-gray-800" onClick={() => setMobileMenu((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenu && (
          <nav className="md:hidden mt-4 flex flex-col gap-2 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 hover:text-violet-500 transition-colors text-base font-medium py-2 px-2 rounded-lg"
                onClick={() => setMobileMenu(false)}
              >
                {item}
              </a>
            ))}
            {/* Client/Developer view dropdown in mobile menu */}
            <div className="mt-4 border-t pt-3">
              <div className="font-semibold text-xs text-gray-500 mb-2 pl-1">View Mode</div>
              <div className="flex flex-col gap-1">
                <button
                  className={`w-full text-left px-4 py-2 rounded ${userType === 'client' ? 'bg-violet-100 text-violet-700 font-bold' : 'hover:bg-violet-50 text-gray-700'}`}
                  onClick={() => { handleSwitch('client'); setMobileMenu(false); }}
                >
                  Client View
                </button>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${userType === 'developer' ? 'bg-violet-100 text-violet-700 font-bold' : 'hover:bg-violet-50 text-gray-700'}`}
                  onClick={() => { handleSwitch('developer'); setMobileMenu(false); }}
                >
                  Developer View
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="home" className="pt-20 md:pt-32 pb-10 md:pb-20  md:px-16 overflow-hidden">
      <div className="container mx-auto px-4  sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 z-10">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-violet-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in text-gray-800">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  Victor Onyemaechi
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-5xl">Frontend Engineer & Server Architecturer</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl animate-fade-in-delay">
                I craft beautiful, functional digital experiences with a focus on clean design and intuitive user
                interfaces. Helping businesses stand out in the digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delay-2"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delay-2"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10 w-full max-w-[400px] sm:max-w-xs md:max-w-md aspect-square rounded-3xl overflow-hidden border-4 border-purple-500 shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all duration-500">
              <Image src="/me3.jpg" alt="Victor Onyemaechi" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "4+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ]

  return (
    <section className="py-12  md:px-16">
      <div className="container mx-auto px-6">
        <div className="bg-[#d846ef36] rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 text-center ${index < stats.length - 1 ? "border-r border-gray-100" : ""}`}
              >
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image src="/me3.jpg" alt="Victor Onyemaechi" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="inline-block mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-1 text-gray-800">About Me</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                I'm a passionate fullstack developer with 1+ years of experience creating modern web applications. I
                specialize in React, Next.js, Node.js, Express Js, and creating beautiful user interfaces with Tailwind CSS.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                My approach combines technical expertise with an eye for design, allowing me to build solutions that are
                both functional and visually stunning. I'm constantly learning new technologies and techniques to stay
                at the cutting edge of web development.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center px-6 py-3 text-gray-700 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 font-medium">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </button>
                <Link
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8 " />,
      title: "Web Development",
      description: "Building responsive, high-performance websites and web applications using the latest technologies.",
    },
    {
      icon: <Palette className="w-8 h-8 " />,
      title: "UI/UX Design",
      description: "Creating intuitive, user-friendly interfaces with a focus on aesthetics and functionality.",
    },
    {
      icon: <Smartphone className="w-8 h-8 " />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications for iOS and Android devices.",
    },
    {
      icon: <Search className="w-8 h-8 " />,
      title: "SEO Optimization",
      description: "Improving website visibility and search engine rankings through proven SEO strategies.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 " />,
      title: "E-commerce Solutions",
      description: "Building online stores with secure payment processing and inventory management.",
    },
    {
      icon: <Wrench className="w-8 h-8 " />,
      title: "Maintenance & Support",
      description: "Providing ongoing maintenance, updates, and technical support for web applications.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a comprehensive range of services to help businesses establish a strong online presence and
              achieve their digital goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl text-violet-500  bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-violet-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const skills = [
    { name: "React", level: 90, icon: <Code className="w-5 h-5 " /> },
    { name: "Next.js", level: 85, icon: <Code className="w-5 h-5 " /> },
    { name: "TypeScript", level: 80, icon: <Type className="w-5 h-5 " /> },
    { name: "Tailwind CSS", level: 95, icon: <Palette className="w-5 h-5 " /> },
    { name: "UI/UX Design", level: 85, icon: <Figma className="w-5 h-5 " /> },
    { name: "Node.js", level: 75, icon: <Database className="w-5 h-5 " /> },
  ]

  const otherSkills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Redux",
    "Framer Motion",
    "MongoDB",
    "Express",
    "Firebase",
    "Material UI",
    "Vite",
    "Axios",
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I have a diverse set of skills, tools, and technologies to bring your ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 flex items-center text-violet-500 justify-center bg-violet-500/10 rounded-lg mr-3 text-lg shadow-sm">
                    {skill.icon}
                  </span>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </div>
                <span className="text-gray-500">{skill.level}%</span>
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Other Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js and Tailwind CSS, featuring a clean UI and seamless checkout experience.",
      image: "/lims.png",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      demoLink: "https://peviacom.com",
      githubLink: "https://github.com/Conqueror102/gentlemen-ecommerce",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing creative work with smooth animations and intuitive navigation.",
      image: "/gentle.png",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      demoLink: "https://kode10x-quiz-app.vercel.app/",
      githubLink: "https://github.com/kode10x-org/Kode10x-quiz-app",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app for managing tasks and projects with drag-and-drop functionality and real-time updates.",
      image: "/med-ark.png",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      demoLink: "https://med-ark.vercel.app/",
      githubLink: "https://github.com/Conqueror102/medArk",
    },
    {
      title: "Study Abroad Consultancy Website",
      description: "A professional, modern website built for a study abroad consultancy agency that specializes in helping students apply to UK universities.",
      image: "/WAS.png",
      tags: ["React","Vite","Tailwind CSS","Axios","Yup","Node.js","Express","MongoDB","Cloudinary","Multer"],
      demoLink: "https://demo.com",
      githubLink: "https://github.com/Conqueror102?tab=repositories",
    },
    {
      title: "Solar Energy Solutions & Product eCommerce Website",
      description: "Peviacom is a modern web platform for a solar energy company, designed to showcase renewable energy solutions and sell solar products through an integrated eCommerce-like interface.",
      image: "/peviacom.png",
      tags: ["React","Vite","Material UI","Google Sheet"],
      demoLink: "https://peviacom.com",
      githubLink: "https://github.com/Conqueror102?tab=repositories",
    },
    {
      title: "Quiz App",
      description: "A modern, interactive quiz application built with React, designed to deliver a smooth, timed, and personalized quiz experience for users.",
      image: "/quiz-app.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS","Google Sheet" ],
      demoLink: "https://kode10x-quiz-app.vercel.app/",
      githubLink: "https://github.com/kode10x-org/Kode10x-quiz-app",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was carefully crafted with attention to detail, performance,
              and user experience.
            </p>
          </div>
          <div className="flex justify-center mb-8">
         
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Link
                      href={project.demoLink}
                      className="text-violet-500 hover:text-fuchsia-500 font-medium text-sm flex items-center transition-colors"
                    >
                      Live Demo
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="text-gray-600 hover:text-violet-500 font-medium text-sm flex items-center transition-colors"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  // Implementation of TestimonialsSection
}

function ProcessSection() {
  const process = [
    {
      icon: <Users size={24} />,
      title: "Discovery",
      description:
        "Understanding your business needs, target audience, and project goals through in-depth consultation.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Planning",
      description: "Creating a detailed project roadmap, wireframes, and technical specifications.",
    },
    {
      icon: <BriefcaseIcon size={24} />,
      title: "Development",
      description: "Building your project using modern technologies and best practices for optimal performance.",
    },
    {
      icon: <Award size={24} />,
      title: "Delivery",
      description: "Rigorous testing, refinement, and launching your project with ongoing support and maintenance.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Work Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I follow a structured approach to ensure every project is delivered successfully and meets your
              expectations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row  justify-between relative">
            <div className="hidden md:block absolute top-[74px] left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform -translate-y-1/2 z-0"></div>

            {process.map((step, index) => (
              <div key={index} className="md:w-1/4 relative z-10  mb-10 md:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mb-6 text-violet-500">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-center text-gray-600 px-4">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  const education = [
    {
      degree: "Software Engineer",
      institution: "Kode10x",
      period: "2024 - 2025",
      description: "Specialized in Frontend development and Server side architecture, with emphasis on scalable web applications.",
    },
    {
      degree: "Computer Engineer",
      institution: "Inland Computers",
      period: "2017 - 2024",
      description: "Trained in computer hardware, networking, and embedded systems.",
    },
  ]

  // const certifications = [
  //   {
  //     title: "Certified JavaScript Developer",
  //     issuer: "Kode10x",
  //     date: "2024",
  //   },
  //   {
  //     title: "Git",
  //     issuer: "Kode10x",
  //     date: "2024",
  //   },
  //   {
  //     title: "Responsive Web Design",
  //     issuer: "Kode10x",
  //     date: "2024",
  //   },
  //   {
  //     title: "Certificate in Computer Hardware Maintenance",
  //     issuer: "Inland Computers",
  //     date: "2024",
  //   },
  // ]

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Education & Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My academic background and professional certifications that have shaped my expertise.
            </p>
          </div>

          <div className="grid  gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <GraduationCap className="mr-3 text-violet-500" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
                    <div className="absolute h-full w-1 bg-gradient-to-b from-violet-500 to-fuchsia-500 left-0 top-0 rounded-l-2xl"></div>
                    <div className="pl-4">
                      <h4 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h4>
                      <p className="text-violet-500 font-medium mb-2">{item.institution}</p>
                      <p className="text-gray-500 text-sm mb-3">{item.period}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <Award className="mr-3 text-violet-500" />
                Certifications
              </h3>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-bold text-gray-800">{cert.title}</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-violet-500">{cert.issuer}</span>
                        <span className="text-gray-500">{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}



function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <p className="mb-8 text-gray-600">
                  I'd love to hear from you. Fill out the form or reach out directly through the following channels:
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-violet-500" />
                    <span className="text-gray-700">victorvector608@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-6 w-6 mr-4 flex items-center justify-center text-violet-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">+234 802 538 3208</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-6 w-6 mr-4 flex items-center justify-center text-violet-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Lagos, Nigeria</span>
                  </div>
                </div>
                <div className="mt-12 flex space-x-4">
                  <Link
                    href="https://x.com/TECH_snitch101?t=1MXTBHsRp_tx9nFgz7iNAA&s=09"
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors text-violet-500 shadow-sm"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/victor-conqueror-956635327/"
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors text-violet-500 shadow-sm"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://github.com/Conqueror102"
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors text-violet-500 shadow-sm"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8  md:px-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Victor Onyemaechi
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              I create beautiful, functional websites and applications that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/TECH_snitch101?t=1MXTBHsRp_tx9nFgz7iNAA&s=09"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-violet-500"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/victor-conqueror-956635327/"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-violet-500"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/Conqueror102"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-violet-500"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-violet-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-violet-500 mt-1" />
                <span className="text-gray-600">victorvector608@gmail.com</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 mr-3 flex items-center justify-center text-violet-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-600">+234 802 538 3208</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 mr-3 flex items-center justify-center text-violet-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-600">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Victor Onyemaechi. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  )
} 