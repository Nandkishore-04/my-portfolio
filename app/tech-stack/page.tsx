"use client";

import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, staggerItem, scrollReveal } from "@/lib/animations";

const techStack = [
  {
    category: "Languages",
    icon: "💻",
    color: "from-violet-500/20 to-purple-500/20",
    technologies: [
      { name: "Python", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "C/C++", level: "Advanced" },
      { name: "Go", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    color: "from-blue-500/20 to-cyan-500/20",
    technologies: [
      { name: "Node.js", level: "Expert" },
      { name: "FastAPI", level: "Expert" },
      { name: "Express.js", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Advanced" },
      { name: "WebSocket", level: "Advanced" },
    ],
  },
  {
    category: "Automation & DevOps",
    icon: "🚀",
    color: "from-emerald-500/20 to-teal-500/20",
    technologies: [
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Celery", level: "Advanced" },
      { name: "Terraform", level: "Intermediate" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "🧠",
    color: "from-rose-500/20 to-pink-500/20",
    technologies: [
      { name: "TensorFlow", level: "Advanced" },
      { name: "PyTorch", level: "Advanced" },
      { name: "OpenVINO", level: "Advanced" },
      { name: "LLMs", level: "Intermediate" },
      { name: "Model Optimization", level: "Advanced" },
      { name: "AI Inference", level: "Advanced" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "from-amber-500/20 to-orange-500/20",
    technologies: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "Elasticsearch", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "SQLite", level: "Advanced" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    color: "from-indigo-500/20 to-blue-500/20",
    technologies: [
      { name: "AWS", level: "Advanced" },
      { name: "Vercel", level: "Advanced" },
      { name: "Digital Ocean", level: "Intermediate" },
      { name: "Nginx", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
      { name: "Git", level: "Expert" },
    ],
  },
  {
    category: "Frontend & UI",
    icon: "🎨",
    color: "from-pink-500/20 to-rose-500/20",
    technologies: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Responsive Design", level: "Expert" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    color: "from-cyan-500/20 to-teal-500/20",
    technologies: [
      { name: "VS Code", level: "Expert" },
      { name: "Postman", level: "Advanced" },
      { name: "Stripe", level: "Advanced" },
      { name: "CMake", level: "Advanced" },
      { name: "Webpack", level: "Intermediate" },
      { name: "Jest", level: "Advanced" },
    ],
  },
];

const levelColors: Record<string, { bg: string; text: string }> = {
  Expert: { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  Advanced: { bg: "bg-blue-500/10", text: "text-blue-400" },
  Intermediate: { bg: "bg-violet-500/10", text: "text-violet-400" },
};

export default function TechStackPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="section-spacing container-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider uppercase bg-accent/10 border border-accent/20 rounded-full text-accent">
              Technology Stack
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Tools I use to
            <br />
            <span className="text-accent">build products</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="text-xl sm:text-2xl text-foreground/70 max-w-3xl leading-relaxed"
          >
            From backend systems to AI integration—a comprehensive toolkit for
            building production-ready applications.
          </motion.p>
        </motion.div>
      </section>

      {/* Tech Stack Grid */}
      <section className="container-padding pb-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollReveal.viewport}
              className="relative"
            >
              {/* Category Header */}
              <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{category.icon}</div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold">{category.category}</h2>
                </div>
              </motion.div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.technologies.map((tech, techIndex) => {
                  const levelColor = levelColors[tech.level];
                  return (
                    <motion.div
                      key={techIndex}
                      variants={staggerItem}
                      className="group relative"
                    >
                      <div className="relative h-full p-4 sm:p-5 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-xl hover:border-accent/40 transition-all duration-500 text-center">
                        {/* Tech Name */}
                        <div className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                          {tech.name}
                        </div>

                        {/* Level Badge */}
                        <div
                          className={`inline-block px-2 py-1 text-xs rounded-full ${levelColor.bg} ${levelColor.text} font-medium`}
                        >
                          {tech.level}
                        </div>

                        {/* Hover Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl -z-10`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proficiency Legend */}
      <section className="container-padding pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          variants={fadeIn}
          className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Proficiency Levels</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 font-medium mb-2">
                Expert
              </div>
              <p className="text-sm text-foreground/60">
                Production experience, deep knowledge, can architect solutions
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-medium mb-2">
                Advanced
              </div>
              <p className="text-sm text-foreground/60">
                Strong practical experience, confident in complex implementations
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-400 font-medium mb-2">
                Intermediate
              </div>
              <p className="text-sm text-foreground/60">
                Working knowledge, can build features and learn quickly
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="container-padding pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          variants={fadeIn}
          className="max-w-5xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">8</div>
              <div className="text-sm text-foreground/60">Tech Categories</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">48</div>
              <div className="text-sm text-foreground/60">Technologies</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">Full-Stack</div>
              <div className="text-sm text-foreground/60">Capability</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">Production</div>
              <div className="text-sm text-foreground/60">Ready</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container-padding pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need these skills on your team?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let&apos;s discuss how I can help build your next project with the right tools.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-muted text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Get in Touch
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

