"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-padding py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Left: Name & Tagline */}
            <div className="text-center sm:text-left">
              <div className="text-lg font-bold text-foreground mb-1">
                Nand Kishore
              </div>
              <div className="text-sm text-foreground/60">
                Backend & Automation Engineer
              </div>
            </div>

            {/* Center: Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:nand@example.com"
                className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                Email
              </a>
            </div>

            {/* Right: Copyright */}
            <div className="text-sm text-foreground/40">
              © {currentYear} All rights reserved
            </div>
          </div>

          {/* Bottom: Built with */}
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-xs text-foreground/40">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
