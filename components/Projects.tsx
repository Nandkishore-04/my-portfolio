'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const projects = [
        {
            title: "AI-Powered Inventory Management",
            description: "Full-stack inventory system with AI chat assistant, OCR invoice processing, and real-time stock monitoring.",
            tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI"],
            link: "https://github.com/Nandkishore-04/AI-powered-Inventory-Management",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            title: "Insurance Tracking Dashboard",
            description: "Interactive dashboard for tracking and visualizing insurance policies, metrics, and analytics with a clean UI.",
            tags: ["React", "Vite", "JavaScript", "Vercel"],
            link: "https://github.com/Nandkishore-04/Insurance-Dashboard",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Simply Search",
            description: "Desktop app replacing Excel spreadsheets with instant, millisecond product search for inventory management.",
            tags: ["Electron", "React", "FastAPI", "SQLite", "Python"],
            link: "https://github.com/Nandkishore-04/simply-search",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            title: "Project Four",
            description: "Brief one-liner about what this project does.",
            tags: ["E-commerce", "Stripe", "Next.js"],
            link: "#",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
        }
    ];

    const handleScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll > 0) {
            setScrollProgress(el.scrollLeft / maxScroll);
        }
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', handleScroll, { passive: true });
        return () => el.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scroll = (direction: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = window.innerWidth < 768 ? window.innerWidth * 0.85 : 480;
        el.scrollBy({ left: direction === 'right' ? cardWidth + 32 : -(cardWidth + 32), behavior: 'smooth' });
    };

    return (
        <section id="projects" className="relative py-24 overflow-hidden bg-surface">
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <ScrollReveal>
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="font-display text-xs uppercase tracking-widest text-neon mb-3">Selected Work</p>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Featured Projects
                            </h2>
                        </div>

                        {/* Navigation arrows — desktop only */}
                        <div className="hidden md:flex items-center gap-3">
                            <button
                                onClick={() => scroll('left')}
                                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-neon hover:border-neon/30 transition-all duration-300"
                                aria-label="Scroll left"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-neon hover:border-neon/30 transition-all duration-300"
                                aria-label="Scroll right"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Horizontal scroll track */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-8 scrollbar-hide px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group w-[85vw] md:w-[480px] shrink-0 snap-start"
                    >
                        <div className="relative h-full rounded-2xl border border-white/5 bg-surface-raised overflow-hidden transition-all duration-500 hover:border-neon/30 hover:neon-border-glow">
                            {/* Gradient header area */}
                            <div className="relative h-48 bg-gradient-to-br from-neon/5 to-transparent flex items-center justify-center overflow-hidden">
                                <span className="absolute text-[8rem] font-display font-bold text-white/[0.03] select-none pointer-events-none">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="p-4 bg-neon/10 border border-neon/20 rounded-2xl text-neon group-hover:scale-110 transition-transform duration-500">
                                    {project.icon}
                                </div>
                            </div>

                            {/* Content area */}
                            <div className="p-6 space-y-4">
                                <h3 className="font-display text-xl font-bold text-white group-hover:text-neon transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-medium text-white/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-sm font-display font-semibold text-white/30 group-hover:text-neon transition-all duration-300 pt-2"
                                >
                                    View Project
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Progress bar */}
            <div className="max-w-7xl mx-auto px-6 mt-8">
                <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-neon/50 rounded-full"
                        style={{ width: `${Math.max(scrollProgress * 100, 5)}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
            </div>

            {/* GitHub CTA */}
            <ScrollReveal delay={0.3}>
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/Nandkishore-04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3 border border-white/10 text-white font-bold rounded-full font-display text-sm hover:text-neon hover:border-neon/30 hover:shadow-[0_0_20px_rgba(255,214,10,0.1)] transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Profile
                    </a>
                </div>
            </ScrollReveal>
        </section>
    );
}
