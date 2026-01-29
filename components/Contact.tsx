"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, fadeIn, scrollReveal } from "@/lib/animations";

const contactMethods = [
  {
    label: "Email",
    value: "nand@example.com",
    href: "mailto:nand@example.com",
    icon: "📧",
  },
  {
    label: "GitHub",
    value: "github.com/nandkishore",
    href: "https://github.com",
    icon: "💻",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nandkishore",
    href: "https://linkedin.com",
    icon: "💼",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-spacing container-padding bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollReveal.viewport}
        className="max-w-5xl mx-auto"
      >
        {/* Main Content */}
        <div className="text-center mb-16">
          <motion.span 
            variants={fadeIn}
            className="text-sm font-medium tracking-wider uppercase text-foreground/50"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 leading-tight"
          >
            Let's build something
            <br />
            <span className="text-accent">great together</span>
          </motion.h2>
          <motion.p 
            variants={slideUp}
            className="text-lg sm:text-xl text-foreground/70 mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            Open to GSoC mentorships, startup engineering roles, internships, 
            and interesting projects. Always happy to discuss AI, automation, 
            or systems engineering.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div 
          variants={staggerContainer}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              variants={staggerItem}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative p-6 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-xl hover:border-accent/40 transition-all duration-500 text-center">
                {/* Icon */}
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>

                {/* Label */}
                <div className="text-sm font-medium text-foreground/60 mb-2">
                  {method.label}
                </div>

                {/* Value */}
                <div className="text-sm text-accent group-hover:text-accent-muted transition-colors duration-300 font-medium">
                  {method.value}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div 
          variants={fadeIn}
          className="text-center"
        >
          <a
            href="mailto:nand@example.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-muted text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] group shadow-lg shadow-accent/20"
          >
            Send me an email
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Availability Status */}
        <motion.div 
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-accent font-medium">
              Available for new opportunities
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
