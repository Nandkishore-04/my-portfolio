"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, fadeIn, scrollReveal } from "@/lib/animations";

const capabilities = [
  {
    area: "Backend Engineering",
    icon: "⚙️",
    description: "Building scalable server-side systems and APIs",
    skills: ["Python", "Node.js", "FastAPI", "Express", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "GraphQL"],
  },
  {
    area: "AI & Machine Learning",
    icon: "🧠",
    description: "Implementing production-ready AI systems",
    skills: ["OpenVINO", "TensorFlow", "PyTorch", "LLMs", "TTS", "Model Optimization", "AI Inference", "Neural Networks"],
  },
  {
    area: "Automation & DevOps",
    icon: "🚀",
    description: "Streamlining workflows and infrastructure",
    skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "AWS", "Nginx", "Celery"],
  },
  {
    area: "Full-Stack Development",
    icon: "💻",
    description: "End-to-end application development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WebSocket", "Framer Motion", "Responsive Design"],
  },
  {
    area: "System Architecture",
    icon: "🏗️",
    description: "Designing robust and maintainable systems",
    skills: ["Microservices", "Event-Driven", "API Design", "Database Design", "Scalability", "Performance", "Security"],
  },
  {
    area: "Open Source",
    icon: "🌐",
    description: "Contributing to large-scale projects",
    skills: ["C/C++", "CMake", "Git", "Code Review", "Documentation", "Testing", "Community Collaboration"],
  },
];

export default function Capabilities() {
  return (
    <section className="section-spacing container-padding bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent">
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
            Technical Capabilities
          </motion.span>
          <motion.h2 
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight"
          >
            Full-stack expertise,
            <br />
            <span className="text-accent">backend-first</span> mindset
          </motion.h2>
          <motion.p 
            variants={slideUp}
            className="text-lg text-foreground/70 mt-6 leading-relaxed"
          >
            From low-level C APIs to modern web applications—versatile engineering 
            across the entire stack.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl hover:border-accent/30 transition-all duration-500">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>

                {/* Area Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {capability.area}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
                  {capability.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {capability.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-background/50 border border-border/50 rounded text-foreground/70 hover:border-accent/30 hover:text-accent transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative Gradient */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div 
          variants={fadeIn}
          className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-border/10 via-border/20 to-border/10 border border-border rounded-xl text-center"
        >
          <p className="text-xl sm:text-2xl font-medium text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Comfortable working across the stack—from C bindings in AI toolkits to 
            shipping <span className="text-accent font-semibold">production web applications</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
