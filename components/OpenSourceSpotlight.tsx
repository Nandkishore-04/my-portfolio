"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, fadeIn, scrollReveal } from "@/lib/animations";

const contributions = [
  {
    org: "OpenVINO",
    project: "GenAI",
    title: "C API for TTS Pipeline",
    description: "Designed and implemented C language bindings for Text-to-Speech pipeline, enabling cross-platform inference.",
    impact: "Core API Integration",
    tech: ["C/C++", "CMake", "AI Inference"],
    link: "#",
  },
  {
    org: "OpenVINO",
    project: "GenAI",
    title: "SpeechT5 Model Support",
    description: "Added SpeechT5 model integration for high-quality neural speech synthesis.",
    impact: "Model Integration",
    tech: ["Python", "TTS", "Neural Networks"],
    link: "#",
  },
];

export default function OpenSourceSpotlight() {
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
            Open Source
          </motion.span>
          <motion.h2
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight"
          >
            Contributing to the
            <br />
            <span className="text-accent">AI ecosystem</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-lg text-foreground/70 mt-6 leading-relaxed"
          >
            Active contributor to Intel&apos;s OpenVINO GenAI toolkit, building infrastructure
            for next-generation AI inference.
          </motion.p>
        </div>

        {/* Contributions Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {contributions.map((contrib, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-xl hover:border-accent/30 transition-all duration-500 overflow-hidden">
                {/* Organization Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">OV</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{contrib.org}</div>
                    <div className="text-xs text-foreground/50">{contrib.project}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {contrib.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {contrib.description}
                </p>

                {/* Impact Badge */}
                <div className="inline-block px-3 py-1 bg-accent/5 border border-accent/20 rounded-full text-xs font-medium text-accent mb-6">
                  {contrib.impact}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {contrib.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-background/50 border border-border/50 rounded text-foreground/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-foreground/70 group-hover:text-accent transition-colors duration-300">
                  <span>View Contribution</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeIn}
          className="mt-16 p-8 bg-gradient-to-r from-border/10 via-border/20 to-border/10 border border-border rounded-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">2+</div>
              <div className="text-sm text-foreground/60">Major Contributions</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">Intel</div>
              <div className="text-sm text-foreground/60">OpenVINO Toolkit</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">C/C++</div>
              <div className="text-sm text-foreground/60">Core Language</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">AI</div>
              <div className="text-sm text-foreground/60">Inference Focus</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
