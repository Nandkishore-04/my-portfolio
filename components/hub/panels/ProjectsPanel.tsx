'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function ProjectsPanel() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                    <p className="font-display text-xs uppercase tracking-widest text-neon mb-2">Selected Work</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                        Products that shipped.
                    </h2>
                </div>
                <a
                    href="https://github.com/Nandkishore-04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-display font-semibold text-white/70 border border-white/10 rounded-full hover:border-neon/40 hover:text-neon transition-colors duration-300"
                >
                    GitHub Profile ↗
                </a>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-5"
            >
                {projectsData.map((project) => (
                    <motion.div key={project.id} variants={staggerItem}>
                        <Link
                            href={`/projects/${project.id}`}
                            className="group relative block h-full p-6 bg-surface-raised border border-white/5 rounded-2xl overflow-hidden hover:border-neon/25 transition-colors duration-300"
                        >
                            {/* Accent gradient wash */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            {/* Ghost year */}
                            <span className="absolute -top-3 right-3 font-display font-bold text-6xl text-white/[0.04] select-none pointer-events-none">
                                {project.year}
                            </span>

                            <div className="relative">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[10px] font-display uppercase tracking-widest text-neon/80">
                                        {project.category}
                                    </span>
                                    <span className="text-[10px] font-display uppercase tracking-wide text-emerald-400/80 border border-emerald-400/20 bg-emerald-400/5 rounded-full px-2 py-0.5">
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="font-display text-lg font-bold text-white group-hover:text-neon transition-colors duration-300 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/55 leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {project.metrics.slice(0, 2).map((m) => (
                                        <div key={m.label} className="px-3 py-2 bg-white/[0.03] border border-white/5 rounded-lg">
                                            <p className="font-display text-base font-bold text-neon leading-none">{m.value}</p>
                                            <p className="text-[10px] text-white/45 mt-1">{m.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.slice(0, 5).map((t) => (
                                        <span key={t} className="text-[10px] font-display text-white/50 border border-white/10 rounded-full px-2 py-0.5">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 5 && (
                                        <span className="text-[10px] font-display text-white/35 px-1 py-0.5">
                                            +{project.tech.length - 5}
                                        </span>
                                    )}
                                </div>

                                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-display text-white/30 mt-4 group-hover:text-neon/70 transition-colors duration-300">
                                    Case Study
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
