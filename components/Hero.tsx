"use client";

import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, staggerItem, scrollReveal } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center container-padding">
      <div className="max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Label */}
          <motion.div variants={fadeIn}>
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-foreground/50">
              Backend & Automation Engineer
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={slideUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
          >
            Building systems
            <br />
            that{" "}
            <span className="text-accent">
              scale
            </span>
            .
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={slideUp}
            className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-2xl leading-relaxed"
          >
            Open source contributor to OpenVINO GenAI. Co-founder building AI systems, 
            automation platforms, and production tools that solve real problems.
          </motion.p>

          {/* CTA Row */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-muted text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02]"
            >
              View Work
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-foreground/30 text-foreground font-medium rounded-lg transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Tags */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap gap-3 pt-8"
          >
            {["OpenVINO GenAI", "AI Systems", "Automation", "Admin Dashboards"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm border border-border/50 rounded-full text-foreground/60 hover:text-foreground hover:border-border transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/40 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-foreground/20 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
