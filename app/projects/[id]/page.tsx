"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, staggerItem, scrollReveal } from "@/lib/animations";
import { getProjectById, getOtherProjects } from "@/lib/projectsData";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const otherProjects = getOtherProjects(id);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing container-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Back Link */}
          <motion.div variants={fadeIn} className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>

          {/* Category + Status */}
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 text-sm font-medium tracking-wider uppercase bg-accent/10 border border-accent/20 rounded-full text-accent">
              {project.category}
            </span>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.status === 'Production' || project.status === 'Live'
                ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                : 'bg-accent/10 border border-accent/20 text-accent'
              }`}>
              {project.status}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={slideUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={slideUp}
            className="text-xl sm:text-2xl text-foreground/70 leading-relaxed mb-12"
          >
            {project.description}
          </motion.p>

          {/* Metrics Grid */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-xl"
          >
            {project.metrics.map((metric, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-foreground/60">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-6">
            Overview
          </motion.h2>
          <motion.p variants={slideUp} className="text-lg text-foreground/70 leading-relaxed">
            {project.overview}
          </motion.p>
        </motion.div>
      </section>

      {/* The Challenge */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-6">
            The Challenge
          </motion.h2>
          <motion.div
            variants={slideUp}
            className="p-8 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-xl"
          >
            <p className="text-lg text-foreground/70 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Solution */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-6">
            The Solution
          </motion.h2>
          <motion.div variants={staggerContainer} className="space-y-4">
            {project.solution.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-lg hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg text-accent font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-foreground/70 leading-relaxed pt-1">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-8">
            Key Features
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="p-6 bg-gradient-to-br from-border/10 to-transparent border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Results */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-6">
            Results & Impact
          </motion.h2>
          <motion.div variants={staggerContainer} className="space-y-3">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent/5 to-transparent border-l-2 border-accent/50 rounded-r-lg"
              >
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-foreground/80 leading-relaxed">{result}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="container-padding pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal.viewport}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-6">
            Technology Stack
          </motion.h2>
          <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium bg-gradient-to-br from-border/20 to-transparent border border-border rounded-lg text-foreground hover:border-accent/30 hover:text-accent transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="container-padding pb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollReveal.viewport}
            className="max-w-7xl mx-auto"
          >
            <motion.h2 variants={slideUp} className="text-3xl sm:text-4xl font-bold mb-8">
              Other Projects
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.slice(0, 3).map((otherProject) => (
                <motion.div key={otherProject.id} variants={staggerItem}>
                  <Link href={`/projects/${otherProject.id}`}>
                    <div className="group h-full p-6 bg-gradient-to-br from-border/20 to-transparent border border-border rounded-xl hover:border-accent/40 transition-all duration-500">
                      <div className="text-xs font-medium tracking-wide uppercase text-foreground/50 mb-3">
                        {otherProject.category}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                        {otherProject.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                        {otherProject.description.substring(0, 100)}...
                      </p>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium">
                        <span>View Project</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

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
            Like what you see?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let&apos;s discuss how I can help build your next project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-muted text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Start a Conversation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
