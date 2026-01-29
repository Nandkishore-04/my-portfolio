"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, fadeIn, scrollReveal } from "@/lib/animations";

const milestones = [
  {
    year: "2024",
    title: "OpenVINO Contributor",
    description: "Joined Intel's OpenVINO GenAI project, implementing C API for TTS pipeline and SpeechT5 integration.",
    highlight: "Open Source Impact",
  },
  {
    year: "2024",
    title: "Co-Founder",
    description: "Co-founded startup building AI systems and automation platforms for real-world production use.",
    highlight: "Entrepreneurship",
  },
  {
    year: "2023",
    title: "International Exchange",
    description: "Participated in Japan exchange program, gaining global perspective on technology and collaboration.",
    highlight: "Global Exposure",
  },
  {
    year: "2022-Present",
    title: "Building & Shipping",
    description: "Developed admin dashboards, automation tools, and client platforms serving real users in production.",
    highlight: "Production Systems",
  },
];

export default function AboutJourney() {
  return (
    <section className="section-spacing container-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollReveal.viewport}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: About */}
          <div>
            <motion.span 
              variants={fadeIn}
              className="text-sm font-medium tracking-wider uppercase text-foreground/50"
            >
              About
            </motion.span>
            <motion.h2 
              variants={slideUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight mb-8"
            >
              Engineering with
              <br />
              <span className="text-accent">purpose</span>
            </motion.h2>

            <motion.div 
              variants={staggerContainer}
              className="space-y-6 text-lg text-foreground/70 leading-relaxed"
            >
              <motion.p variants={staggerItem}>
                I'm a backend engineer who thrives at the intersection of AI, automation, 
                and system design. My work ranges from contributing C APIs to Intel's OpenVINO 
                toolkit to building full-stack platforms that serve real users.
              </motion.p>

              <motion.p variants={staggerItem}>
                As a co-founder, I've learned that great engineering isn't just about 
                writing code—it's about solving problems that matter, shipping systems 
                that scale, and building tools that people actually use.
              </motion.p>

              <motion.p variants={staggerItem}>
                Whether it's optimizing AI inference pipelines, automating workflows, 
                or architecting admin dashboards, I approach every project with the same 
                mindset: <span className="text-accent font-semibold">build it right, make it work, ship it fast</span>.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-border"
            >
              <div>
                <div className="text-3xl font-bold text-accent mb-1">Open Source</div>
                <div className="text-sm text-foreground/60">Intel OpenVINO GenAI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">Co-founder</div>
                <div className="text-sm text-foreground/60">Building AI Systems</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">International</div>
                <div className="text-sm text-foreground/60">Japan Exchange</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">Production</div>
                <div className="text-sm text-foreground/60">Real User Impact</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Journey Timeline */}
          <div>
            <motion.span 
              variants={fadeIn}
              className="text-sm font-medium tracking-wider uppercase text-foreground/50"
            >
              Journey
            </motion.span>
            <motion.h3 
              variants={slideUp}
              className="text-3xl sm:text-4xl font-bold mt-4 leading-tight mb-12"
            >
              Key milestones
            </motion.h3>

            <motion.div 
              variants={staggerContainer}
              className="space-y-8 relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative pl-0 sm:pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full border-4 border-background hidden sm:block" />

                  <div className="group">
                    {/* Year */}
                    <div className="text-sm font-medium text-accent mb-2 tracking-wide">
                      {milestone.year}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                      {milestone.title}
                    </h4>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed mb-3">
                      {milestone.description}
                    </p>

                    {/* Highlight Badge */}
                    <span className="inline-block px-3 py-1 text-xs bg-accent/10 border border-accent/20 rounded-full text-accent">
                      {milestone.highlight}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div variants={fadeIn} className="mt-12 pt-8 border-t border-border">
              <p className="text-foreground/70 mb-4">
                Currently open to GSoC mentorships, startup engineering roles, and interesting projects.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-muted font-medium group transition-colors duration-300"
              >
                Let's build something together
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
