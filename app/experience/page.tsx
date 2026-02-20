"use client";

import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, staggerItem, scrollReveal } from "@/lib/animations";

const timeline = [
  {
    year: "2024 - Present",
    title: "Co-Founder & Backend Engineer",
    organization: "Hexor",
    type: "Startup",
    description: "Building AI systems, automation platforms, and admin dashboards for businesses. Leading backend architecture and product development.",
    achievements: [
      "Shipped 4+ production systems serving 500+ users",
      "Built automated workflows saving 70% manual time",
      "Developed AI-powered inventory management with 94% accuracy",
    ],
    tech: ["Python", "Node.js", "React", "PostgreSQL", "TensorFlow", "AWS"],
  },
  {
    year: "2024",
    title: "Open Source Contributor",
    organization: "Intel OpenVINO GenAI",
    type: "Open Source",
    description: "Contributing to Intel's AI inference toolkit. Implemented C API for Text-to-Speech pipeline with SpeechT5 model integration.",
    achievements: [
      "Designed and implemented C language bindings for TTS pipeline",
      "Added SpeechT5 model support for neural speech synthesis",
      "Contributed to documentation and testing infrastructure",
    ],
    tech: ["C/C++", "CMake", "Python", "AI Inference", "TTS"],
  },
  {
    year: "2023",
    title: "International Exchange Program",
    organization: "Shibaura Institute of Technology",
    type: "Education",
    description: "Selected for international exchange program in Japan. Gained global perspective on technology, collaboration, and cross-cultural engineering practices.",
    achievements: [
      "Completed coursework in advanced computer science",
      "Collaborated with international teams on technical projects",
      "Gained exposure to Japanese engineering methodologies",
    ],
    tech: ["Research", "Collaboration", "Global Exposure"],
  },
  {
    year: "2022 - 2026",
    title: "Bachelor of Technology",
    organization: "Hindustan Institute of Technology and Science",
    type: "Education",
    description: "Pursuing B.Tech with focus on backend engineering, system design, and AI. Built strong foundation in data structures, algorithms, and software architecture.",
    achievements: [
      "Specialized in backend systems and automation",
      "Led technical projects and hackathons",
      "Built portfolio of production-ready applications",
    ],
    tech: ["DSA", "System Design", "Backend Engineering", "AI/ML"],
  },
  {
    year: "2023 - Present",
    title: "Building in Public",
    organization: "YouTube & Content Creation",
    type: "Initiative",
    description: "Sharing knowledge through technical content, tutorials, and project breakdowns. Teaching others while documenting the building journey.",
    achievements: [
      "Created technical tutorials and project walkthroughs",
      "Shared insights on system design and automation",
      "Built community around practical engineering",
    ],
    tech: ["Teaching", "Content", "Community"],
  },
];

const typeColors: Record<string, { bg: string; border: string; text: string }> = {
  Startup: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400" },
  "Open Source": { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  Education: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  Initiative: { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400" },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="section-spacing container-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider uppercase bg-accent/10 border border-accent/20 rounded-full text-accent">
              Experience & Education
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            The journey
            <br />
            <span className="text-accent">so far</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="text-xl sm:text-2xl text-foreground/70 max-w-3xl leading-relaxed"
          >
            From education to entrepreneurship, open source to production systems—
            continuously building, learning, and shipping.
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/50 to-accent/20 hidden sm:block md:translate-x-[-1px]" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {timeline.map((item, index) => {
                const colors = typeColors[item.type];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className={`relative md:grid md:grid-cols-2 gap-8 items-start ${
                      isEven ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg shadow-accent/20 hidden sm:block md:translate-x-[-8px] z-10" />

                    {/* Content */}
                    <div className={`${isEven ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}>
                      <div className={`inline-block w-full md:max-w-md ${isEven ? "" : "md:ml-auto"}`}>
                        {/* Year */}
                        <div className="text-sm font-bold text-accent mb-3 tracking-wide">
                          {item.year}
                        </div>

                        {/* Card */}
                        <div className="p-6 sm:p-8 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-xl hover:border-accent/40 transition-all duration-500 group">
                          {/* Type Badge */}
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full ${colors.bg} border ${colors.border} ${colors.text}`}
                            >
                              {item.type}
                            </span>
                          </div>

                          {/* Title & Organization */}
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                            {item.title}
                          </h3>
                          <div className="text-foreground/80 font-medium mb-4">
                            {item.organization}
                          </div>

                          {/* Description */}
                          <p className="text-foreground/70 leading-relaxed mb-6">
                            {item.description}
                          </p>

                          {/* Achievements */}
                          <div className="space-y-2 mb-6">
                            {item.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <p className="text-sm text-foreground/70 leading-relaxed">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-background/50 border border-border/50 rounded text-foreground/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Decorative Glow */}
                          <div className="absolute -inset-4 bg-accent/5 rounded-xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className={`hidden md:block ${isEven ? "md:col-start-1" : "md:col-start-2"}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Stats */}
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
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">2024</div>
              <div className="text-sm text-foreground/60">Co-founded Hexor</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-foreground/60">Active Users</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">Japan</div>
              <div className="text-sm text-foreground/60">Exchange Program</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">OpenVINO</div>
              <div className="text-sm text-foreground/60">Contributor</div>
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
            Want to work together?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            I'm always open to interesting projects, collaborations, and opportunities.
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

