"use client";

import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, staggerItem } from "@/lib/animations";

const contactMethods = [
  {
    label: "Email",
    value: "nand@hexor.co",
    href: "mailto:nand@hexor.co",
    icon: "📧",
    description: "Preferred for detailed discussions",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nandkishore",
    href: "https://linkedin.com/in/nandkishore",
    icon: "💼",
    description: "Professional networking",
  },
  {
    label: "GitHub",
    value: "github.com/nandkishore",
    href: "https://github.com/nandkishore",
    icon: "💻",
    description: "View my code & contributions",
  },
];

const availability = [
  "Custom admin dashboard development",
  "Automation system implementation",
  "AI product integration",
  "Backend architecture & APIs",
  "Technical co-founder partnerships",
  "Consulting & code reviews",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing container-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider uppercase bg-accent/10 border border-accent/20 rounded-full text-accent">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Let&apos;s build something
            <br />
            <span className="text-accent">great together</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Looking for a technical co-founder, backend engineer, or someone to build
            your product from scratch? I&apos;m here to help.
          </motion.p>

          {/* Availability Indicator */}
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-12">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-emerald-400 font-medium">
              Available for new projects
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.label !== "Email" ? "_blank" : undefined}
                rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                variants={staggerItem}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-xl hover:border-accent/40 transition-all duration-500 text-center">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-medium text-foreground/60 mb-2">
                    {method.label}
                  </div>

                  {/* Value */}
                  <div className="text-sm text-accent group-hover:text-accent-muted transition-colors duration-300 font-medium mb-3 break-all">
                    {method.value}
                  </div>

                  {/* Description */}
                  <div className="text-xs text-foreground/50">
                    {method.description}
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Primary CTA */}
          <motion.div variants={fadeIn} className="text-center">
            <a
              href="mailto:nand@hexor.co"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-muted text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden shadow-lg shadow-accent/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                Send me an email
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
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* What I Can Help With */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            What I Can Help With
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {availability.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start gap-3 p-6 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Response Time */}
      <section className="container-padding pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-2xl"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                24h
              </div>
              <div className="text-sm text-foreground/60">
                Response Time
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                Remote
              </div>
              <div className="text-sm text-foreground/60">
                Work Available
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                Global
              </div>
              <div className="text-sm text-foreground/60">
                Time Zones
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ / Common Questions */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Common Questions
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              variants={staggerItem}
              className="p-6 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl"
            >
              <h3 className="text-lg font-bold mb-2">What&apos;s your tech stack?</h3>
              <p className="text-foreground/70 leading-relaxed">
                I specialize in Python and Node.js for backend, React/Next.js for frontend,
                PostgreSQL/MongoDB for databases, and have deep experience with AI/ML integration
                using TensorFlow and OpenVINO.
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="p-6 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl"
            >
              <h3 className="text-lg font-bold mb-2">Do you take on freelance projects?</h3>
              <p className="text-foreground/70 leading-relaxed">
                Yes! I&apos;m available for custom admin dashboards, automation systems, AI integration,
                and full-stack development projects. I prefer projects where I can have significant
                technical impact.
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="p-6 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl"
            >
              <h3 className="text-lg font-bold mb-2">Are you open to full-time opportunities?</h3>
              <p className="text-foreground/70 leading-relaxed">
                I&apos;m particularly interested in startup roles where I can be a technical co-founder
                or early backend engineer. Open to discussing exciting opportunities that align with
                my expertise in AI, automation, and system design.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="container-padding pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center p-12 sm:p-16 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-2xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent blur-2xl -z-10" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to start?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Drop me an email and let&apos;s discuss how I can help bring your project to life.
          </p>
          <a
            href="mailto:nand@hexor.co"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-muted text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02]"
          >
            nand@hexor.co
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </section>
    </main>
  );
}

