"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, staggerItem, scaleIn } from "@/lib/animations";

const projects = [
  {
    id: "client-dashboard",
    title: "Client Dashboard & Automation System",
    category: "Enterprise Platform",
    description: "Full-stack admin platform with real-time monitoring, automated workflows, and comprehensive client management. Built for scale.",
    year: "2025",
    status: "Production",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Uptime", value: "99.9%" },
    ],
    color: "from-violet-500/20 to-purple-500/20",
    accentColor: "violet",
  },
  {
    id: "ai-inventory",
    title: "AI Inventory Management System",
    category: "AI Product",
    description: "Intelligent inventory tracking with predictive analytics, automated reordering, and ML-driven insights. Eliminates manual stock management.",
    year: "2024",
    status: "Production",
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "React"],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Time Saved", value: "70%" },
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "blue",
  },
  {
    id: "simply-search",
    title: "Simply Search",
    category: "Shipped Product",
    description: "Fast, intuitive search engine with advanced filtering and real-time results. Shipped to production with thousands of queries daily.",
    year: "2024",
    status: "Live",
    tech: ["Next.js", "TypeScript", "Elasticsearch", "Tailwind"],
    metrics: [
      { label: "Queries/day", value: "10k+" },
      { label: "Response", value: "<50ms" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "emerald",
  },
  {
    id: "gemstone-elegance",
    title: "Gemstone Elegance",
    category: "Product Demo",
    description: "E-commerce platform showcasing premium product design, smooth animations, and seamless checkout experience. Built for conversion.",
    year: "2024",
    status: "Demo",
    tech: ["Next.js", "Stripe", "Framer Motion", "Tailwind"],
    metrics: [
      { label: "Performance", value: "98/100" },
      { label: "Animations", value: "60fps" },
    ],
    color: "from-rose-500/20 to-pink-500/20",
    accentColor: "rose",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="section-spacing container-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider uppercase bg-accent/10 border border-accent/20 rounded-full text-accent">
              Featured Work
            </span>
          </motion.div>
          
          <motion.h1 
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Products that
            <br />
            <span className="text-accent">ship and scale</span>
          </motion.h1>
          
          <motion.p 
            variants={slideUp}
            className="text-xl sm:text-2xl text-foreground/70 max-w-3xl leading-relaxed"
          >
            From concept to production—building systems that solve real problems
            for real businesses.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative h-full p-8 sm:p-10 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-2xl hover:border-accent/40 transition-all duration-500 overflow-hidden">
                  {/* Background Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
                  
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium tracking-wide uppercase text-foreground/50">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Production' || project.status === 'Live'
                        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                        : 'bg-accent/10 border border-accent/20 text-accent'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border/50">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-foreground/60">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-background/80 border border-border/50 rounded-md text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all duration-300 font-medium">
                    <span>View Project</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-8 right-8 text-6xl font-bold text-foreground/[0.03] pointer-events-none">
                    {project.year}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="container-padding pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            I build custom dashboards, automation systems, and AI products.
            Let's discuss your next project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-muted text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Start a Conversation
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </section>
    </main>
  );
}

