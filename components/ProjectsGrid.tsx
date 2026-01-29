"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, fadeIn, scrollReveal } from "@/lib/animations";

const projects = [
  {
    category: "AI System",
    title: "AI-Powered Analytics Platform",
    description: "Production-ready analytics engine processing real-time data streams with ML-driven insights.",
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    year: "2025",
    link: "#",
  },
  {
    category: "Automation",
    title: "Workflow Automation Suite",
    description: "End-to-end automation platform reducing manual processes by 70% for enterprise clients.",
    tech: ["Python", "Celery", "Redis", "Docker"],
    year: "2024",
    link: "#",
  },
  {
    category: "Dashboard",
    title: "Admin Control Center",
    description: "Comprehensive admin dashboard for multi-tenant SaaS platform with real-time monitoring.",
    tech: ["React", "Node.js", "WebSocket", "MongoDB"],
    year: "2024",
    link: "#",
  },
  {
    category: "Platform",
    title: "Client Management Portal",
    description: "Full-stack client platform with authentication, billing, and project tracking capabilities.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    year: "2025",
    link: "#",
  },
  {
    category: "Tool",
    title: "Developer CLI Tool",
    description: "Command-line utility for automating deployment workflows and infrastructure management.",
    tech: ["Go", "Kubernetes", "Terraform", "CI/CD"],
    year: "2024",
    link: "#",
  },
  {
    category: "Integration",
    title: "API Gateway Service",
    description: "Scalable API gateway handling 10M+ requests daily with rate limiting and caching.",
    tech: ["Node.js", "Redis", "Nginx", "Microservices"],
    year: "2025",
    link: "#",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="section-spacing container-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollReveal.viewport}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.span 
            variants={fadeIn}
            className="text-sm font-medium tracking-wider uppercase text-foreground/50"
          >
            Selected Projects
          </motion.span>
          <motion.h2 
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight"
          >
            Building for
            <br />
            <span className="text-accent">production</span>
          </motion.h2>
          <motion.p 
            variants={slideUp}
            className="text-lg text-foreground/70 mt-6 leading-relaxed"
          >
            From AI systems to automation platforms—shipping tools that solve real problems 
            for startups and enterprises.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              variants={staggerItem}
              className="group relative block h-full"
            >
              <div className="relative h-full p-6 sm:p-8 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl hover:border-accent/40 transition-all duration-500 flex flex-col">
                {/* Category & Year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium tracking-wide uppercase text-accent/80">
                    {project.category}
                  </span>
                  <span className="text-xs text-foreground/40">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-background/50 border border-border/50 rounded text-foreground/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow Indicator */}
                <div className="flex items-center gap-2 text-sm font-medium text-foreground/50 group-hover:text-accent transition-colors duration-300">
                  <span>View Project</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <a
            href="#all-projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-accent/50 text-foreground hover:text-accent font-medium rounded-lg transition-all duration-300 group"
          >
            View All Projects
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
