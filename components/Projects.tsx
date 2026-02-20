'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const projects = [
    {
        title: "AI-Powered Inventory Management",
        type: "college" as const,
        typeLabel: "Final Year Project",
        description: "Full-stack inventory system with AI chat assistant, OCR invoice processing, and real-time stock monitoring.",
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI"],
        link: "https://github.com/Nandkishore-04/AI-powered-Inventory-Management",
    },
    {
        title: "Insurance Policy Manager",
        type: "client" as const,
        typeLabel: "Freelance · Shipped",
        description: "Offline-first Windows desktop app for a local insurance agent managing hundreds of Motor, Mediclaim, and General policies. Replaced Excel and paper with instant KYC search, a renewal deadline dashboard, and one-click policy renewal — all stored locally, no internet required.",
        tags: ["Electron", "React", "SQLite", "Vite", "jsPDF"],
        link: "https://github.com/Nandkishore-04/Insurance-Dashboard",
    },
    {
        title: "Simply Search",
        type: "client" as const,
        typeLabel: "Freelance · Shipped",
        description: "Desktop app replacing Excel spreadsheets with instant, millisecond product search for inventory management.",
        tags: ["Electron", "React", "FastAPI", "SQLite", "Python"],
        link: "https://github.com/Nandkishore-04/simply-search",
    },
    {
        title: "Automated Admin Dashboard",
        type: "client" as const,
        typeLabel: "Freelance · Shipped",
        description: "Replaced a local consultancy's Excel and WhatsApp chaos with a structured ops platform. Tracks the full client lifecycle — Requested → Documents Pending → In-Process → Completed — with automated status emails via n8n, a meeting scheduler, and Supabase RLS locking down every table.",
        tags: ["Next.js", "Supabase", "TypeScript", "n8n"],
        link: "https://github.com/Nandkishore-04/Automated-Admin-Dashboard",
    },
];

const expoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="projects" className="relative h-screen flex flex-col justify-center overflow-hidden bg-surface scroll-mt-16">
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Header */}
                <ScrollReveal>
                    <div className="flex items-end justify-between mb-10 md:mb-14">
                        <div>
                            <p className="font-display text-xs uppercase tracking-widest text-neon mb-2">Selected Work</p>
                            <h2 className="font-display text-2xl md:text-4xl font-bold text-white tracking-tight">
                                Featured Projects
                            </h2>
                        </div>
                        <a
                            href="https://github.com/Nandkishore-04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center gap-2 text-sm text-white/30 hover:text-neon transition-colors duration-300 font-display font-medium"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub Profile →
                        </a>
                    </div>
                </ScrollReveal>

                {/* Split layout */}
                <div className="flex gap-8 md:gap-16 items-stretch">

                    {/* Left: Numbered project list */}
                    <div className="flex flex-col w-full md:w-[42%] flex-none">
                        {projects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setActiveIndex(index)}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.5, delay: index * 0.08, ease: expoOut }}
                                className="group relative text-left py-5 flex items-start gap-5 border-b border-white/5 last:border-0"
                            >
                                {/* Active left-edge indicator */}
                                <motion.div
                                    className="absolute left-0 top-3 bottom-3 w-px bg-neon rounded-full"
                                    animate={{ opacity: activeIndex === index ? 1 : 0, scaleY: activeIndex === index ? 1 : 0.4 }}
                                    transition={{ duration: 0.25, ease: expoOut }}
                                />

                                {/* Number */}
                                <span className={`font-display text-xs font-bold tabular-nums mt-1 flex-none pl-3 transition-colors duration-300 ${
                                    activeIndex === index ? 'text-neon' : 'text-white/20 group-hover:text-white/40'
                                }`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Title + tags */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className={`font-display font-bold text-base md:text-lg leading-snug transition-colors duration-300 ${
                                            activeIndex === index ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                                        }`}>
                                            {project.title}
                                        </h3>
                                        <span className={`hidden sm:inline-block shrink-0 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                                            project.type === 'client'
                                                ? 'bg-neon/10 text-neon/70 border border-neon/20'
                                                : 'bg-white/5 text-white/30 border border-white/10'
                                        }`}>
                                            {project.typeLabel}
                                        </span>
                                    </div>
                                    <p className={`text-[11px] transition-colors duration-300 ${
                                        activeIndex === index ? 'text-neon/60' : 'text-white/20'
                                    }`}>
                                        {project.tags.slice(0, 3).join(' · ')}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <motion.span
                                    className="text-neon text-sm flex-none mt-0.5"
                                    animate={{ opacity: activeIndex === index ? 1 : 0, x: activeIndex === index ? 0 : -6 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    →
                                </motion.span>
                            </motion.a>
                        ))}

                        {/* Mobile-only GitHub link */}
                        <a
                            href="https://github.com/Nandkishore-04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:hidden mt-6 inline-flex items-center gap-2 text-sm text-white/30 hover:text-neon transition-colors duration-300 font-display font-medium"
                        >
                            View GitHub Profile →
                        </a>
                    </div>

                    {/* Right: Animated preview panel — desktop only */}
                    <motion.div
                        className="hidden md:flex flex-1 items-center"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: 0.2, ease: expoOut }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -18 }}
                                transition={{ duration: 0.35, ease: expoOut }}
                                className="w-full p-8 rounded-2xl border border-white/[0.07] bg-surface-raised relative overflow-hidden"
                            >
                                {/* Top accent line */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/25 to-transparent" />

                                {/* Ghost number */}
                                <span className="absolute right-5 bottom-3 text-[7rem] font-display font-bold text-white/[0.04] select-none leading-none pointer-events-none">
                                    {String(activeIndex + 1).padStart(2, '0')}
                                </span>

                                <div className="flex items-center gap-3 mb-5">
                                    <p className="font-display text-[11px] uppercase tracking-widest text-neon">
                                        Project {String(activeIndex + 1).padStart(2, '0')}
                                    </p>
                                    <span className={`px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider ${
                                        projects[activeIndex].type === 'client'
                                            ? 'bg-neon/10 text-neon border border-neon/20'
                                            : 'bg-white/5 text-white/40 border border-white/10'
                                    }`}>
                                        {projects[activeIndex].typeLabel}
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-white mb-4 leading-tight">
                                    {projects[activeIndex].title}
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed mb-7 max-w-md">
                                    {projects[activeIndex].description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {projects[activeIndex].tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-[11px] font-medium text-white/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={projects[activeIndex].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex items-center gap-2 text-sm font-display font-semibold text-neon"
                                >
                                    View on GitHub
                                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
