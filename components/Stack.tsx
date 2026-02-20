'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const layers = [
    {
        name: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
    },
    {
        name: "Interface",
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Electron"],
    },
    {
        name: "Server",
        items: ["Node.js", "FastAPI"],
    },
    {
        name: "Data",
        items: ["PostgreSQL", "MySQL", "SQLite", "Supabase"],
    },
    {
        name: "Platform",
        items: ["Docker", "AWS", "Git", "n8n", "Postman"],
    },
];

const expoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Stack() {
    return (
        <section id="stack" className="relative min-h-screen overflow-hidden bg-surface px-6 pt-8 pb-16 scroll-mt-16">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,214,10,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto w-full">

                {/* Header */}
                <ScrollReveal>
                    <p className="font-display text-xs uppercase tracking-widest text-neon mb-2">Stack</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                        Tools I actually use.
                    </h2>
                    <p className="text-white/35 text-sm mb-10">
                        No buzzword inflation — just what&apos;s shipped in real projects.
                    </p>
                </ScrollReveal>

                {/* Architecture layers */}
                <div className="border border-white/[0.06] rounded-2xl overflow-hidden">
                    {layers.map((layer, i) => (
                        <motion.div
                            key={layer.name}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.07, ease: expoOut }}
                            className={`group flex items-center gap-3 md:gap-6 px-4 md:px-6 py-4 md:py-5 hover:bg-white/[0.025] transition-colors duration-300 ${
                                i < layers.length - 1 ? 'border-b border-white/[0.06]' : ''
                            }`}
                        >
                            {/* Layer label */}
                            <span className="w-16 md:w-20 text-right font-display text-[10px] md:text-[11px] uppercase tracking-widest text-white/20 group-hover:text-neon transition-colors duration-300 shrink-0">
                                {layer.name}
                            </span>

                            {/* Divider */}
                            <div className="w-px h-4 bg-white/10 shrink-0" />

                            {/* Tech chips */}
                            <div className="flex flex-wrap gap-2">
                                {layer.items.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-0.5 text-xs md:text-sm text-white/50 border border-white/[0.08] rounded-full group-hover:text-white/75 group-hover:border-white/15 transition-colors duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
