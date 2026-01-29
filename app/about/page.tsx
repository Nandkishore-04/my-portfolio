"use client";

import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, staggerItem, scrollReveal } from "@/lib/animations";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Photo */}
      <section className="section-spacing container-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Photo Block */}
            <motion.div variants={fadeIn} className="lg:col-span-2">
              <div className="relative group">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-border/20 to-accent/5 border border-border">
                  {/* Photo */}
                  <img
                    src="/profile.jpg"
                    alt="Nand Kishore"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Quick Stats */}
              <motion.div
                variants={staggerItem}
                className="mt-6 p-6 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Role</span>
                    <span className="text-sm font-semibold text-accent">Founder & Engineer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Company</span>
                    <span className="text-sm font-semibold text-foreground">Hexor</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Focus</span>
                    <span className="text-sm font-semibold text-foreground">AI & Automation</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Intro */}
              <motion.div variants={slideUp}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Building systems,
                  <br />
                  <span className="text-accent">shipping products</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  I'm a founder and backend engineer who turns ideas into production systems.
                  From admin dashboards to AI-powered automation, I build tools that work.
                </p>
              </motion.div>

              {/* Current Work */}
              <motion.div
                variants={slideUp}
                className="p-8 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <h2 className="text-2xl font-bold">Currently</h2>
                </div>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    Co-founder at <span className="text-accent font-semibold">Hexor</span>, where we're building
                    automation systems and AI products for businesses that need reliability at scale.
                  </p>
                  <p>
                    Working on admin dashboards, client management platforms, and automation tools
                    that eliminate manual processes and save hours of work.
                  </p>
                  <p>
                    Contributing to open source projects like OpenVINO, implementing C APIs for
                    AI inference pipelines.
                  </p>
                </div>
              </motion.div>

              {/* What I Study */}
              <motion.div variants={slideUp}>
                <h2 className="text-2xl font-bold mb-4">What I Study</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { area: "System Design", desc: "Scalable architectures" },
                    { area: "AI Integration", desc: "Production ML systems" },
                    { area: "Backend Engineering", desc: "APIs & databases" },
                    { area: "Automation", desc: "Workflow optimization" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="p-4 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-lg hover:border-accent/30 transition-colors duration-300"
                    >
                      <h3 className="font-semibold mb-1">{item.area}</h3>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What I Build */}
              <motion.div variants={slideUp}>
                <h2 className="text-2xl font-bold mb-4">What I Build</h2>
                <div className="space-y-3">
                  {[
                    "Admin dashboards with real-time monitoring and analytics",
                    "Automation systems that eliminate repetitive tasks",
                    "AI-powered inventory and management tools",
                    "Client platforms with authentication and billing",
                    "Backend APIs serving thousands of requests",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                      <p className="text-foreground/70 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* About Hexor */}
              <motion.div
                variants={slideUp}
                className="p-8 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-2xl font-bold">About Hexor</h2>
                  <span className="px-2 py-1 text-xs bg-accent/10 border border-accent/20 rounded text-accent font-medium">
                    Startup
                  </span>
                </div>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    Hexor is my startup focused on building practical automation and AI systems
                    for businesses. We're not chasing hype—we're solving real operational problems.
                  </p>
                  <p>
                    Our approach is simple: identify manual, time-consuming processes, build tools
                    that automate them, and ship products that actually work in production.
                  </p>
                  <p className="text-foreground/90 font-medium">
                    We build systems that scale, products that ship, and tools that matter.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="container-padding pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's work together
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Looking for a technical co-founder, backend engineer, or someone to build
            your product from scratch? Let's talk.
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

