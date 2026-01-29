"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px]"
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgb(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-padding w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Label */}
          <motion.div variants={fadeIn} className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider uppercase bg-accent/10 border border-accent/20 rounded-full text-accent">
              Founder & Backend Engineer
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={slideUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            Building products
            <br />
            that solve{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">real problems</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-10"
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            variants={slideUp}
            className="text-xl sm:text-2xl lg:text-3xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Admin dashboards. Automation systems. AI products.
            <br />
            <span className="text-foreground/90">From concept to production.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="group relative px-8 py-4 bg-accent hover:bg-accent-muted text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-muted/0 via-accent-muted/20 to-accent-muted/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>

            <Link
              href="/contact"
              className="group px-8 py-4 border-2 border-border hover:border-accent/50 text-foreground hover:text-accent text-lg font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Contact Me
              <svg
                className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-accent rounded-full" />
            </motion.div>
            <span className="text-xs text-foreground/40 tracking-widest uppercase">
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
