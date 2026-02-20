"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, scaleIn, scrollReveal } from "@/lib/animations";

export default function FeaturedCaseStudy() {
  return (
    <section id="work" className="section-spacing container-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollReveal.viewport}
        className="max-w-7xl mx-auto"
      >
        {/* Section Label */}
        <motion.div variants={slideUp} className="mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-foreground/50">
            Featured Work
          </span>
        </motion.div>

        {/* Main Card */}
        <motion.div
          variants={scaleIn}
          className="group relative bg-gradient-to-br from-border/30 to-border/10 border border-border rounded-2xl overflow-hidden hover:border-border/80 transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <motion.div
                variants={staggerContainer}
                className="space-y-6"
              >
                {/* Project Type */}
                <motion.div variants={staggerItem}>
                  <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-accent/10 text-accent border border-accent/20 rounded-full">
                    Open Source Contribution
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  variants={staggerItem}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                >
                  OpenVINO GenAI
                  <br />
                  <span className="text-foreground/70">TTS Pipeline</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  variants={staggerItem}
                  className="text-lg text-foreground/70 leading-relaxed"
                >
                  Designed and implemented C API for Text-to-Speech pipeline with SpeechT5
                  integration. Contributed to Intel&apos;s AI inference toolkit, enabling
                  high-performance speech synthesis across platforms.
                </motion.p>

                {/* Highlights */}
                <motion.div
                  variants={staggerItem}
                  className="grid grid-cols-2 gap-6 pt-4"
                >
                  <div>
                    <div className="text-2xl font-bold text-accent">C API</div>
                    <div className="text-sm text-foreground/60 mt-1">Core Integration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">SpeechT5</div>
                    <div className="text-sm text-foreground/60 mt-1">Model Support</div>
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  variants={staggerItem}
                  className="flex flex-wrap gap-2 pt-4"
                >
                  {["C/C++", "OpenVINO", "TTS", "AI Inference", "Cross-platform"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-background/50 border border-border/50 rounded-md text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div variants={staggerItem} className="pt-4">
                  <a
                    href="#case-study"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-muted font-medium group/link transition-colors duration-300"
                  >
                    View Full Case Study
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Visual Side */}
            <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] bg-gradient-to-br from-accent/5 to-transparent order-1 lg:order-2 overflow-hidden">
              {/* Decorative Code-like Pattern */}
              <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                <div className="space-y-4 w-full max-w-md opacity-40 font-mono text-xs sm:text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 0.4, x: 0 }}
                    viewport={scrollReveal.viewport}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="space-y-2"
                  >
                    <div className="text-accent"># OpenVINO TTS Pipeline</div>
                    <div className="text-foreground/60">ov_genai_pipeline_create(...)</div>
                    <div className="text-foreground/60 pl-4">model: SpeechT5</div>
                    <div className="text-foreground/60 pl-4">device: CPU</div>
                    <div className="text-foreground/60 pl-4">precision: FP16</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 0.4, x: 0 }}
                    viewport={scrollReveal.viewport}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="space-y-2 pt-4"
                  >
                    <div className="text-accent"># Generate Speech</div>
                    <div className="text-foreground/60">ov_genai_tts_generate(...)</div>
                    <div className="text-foreground/60 pl-4">text: &quot;Hello World&quot;</div>
                    <div className="text-foreground/60 pl-4">→ audio.wav</div>
                  </motion.div>

                  {/* Accent Glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={scrollReveal.viewport}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"
                  />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-tl-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
