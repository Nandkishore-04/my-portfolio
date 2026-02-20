'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const stack = [
    {
        category: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend",
        items: ["Node.js", "FastAPI"],
    },
    {
        category: "Desktop",
        items: ["Electron"],
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "SQLite", "Supabase"],
    },
    {
        category: "Automation",
        items: ["n8n"],
    },
    {
        category: "DevOps",
        items: ["Docker", "AWS", "Git"],
    },
];

const expoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function TechStackPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-surface px-6 pt-28 pb-20">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: expoOut }}
                        className="mb-14"
                    >
                        <p className="font-display text-xs uppercase tracking-widest text-neon mb-3">Tech Stack</p>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                            Tools I actually use.
                        </h1>
                        <p className="text-white/40 mt-3 text-sm max-w-md leading-relaxed">
                            No buzzword inflation — just what&apos;s been in real projects.
                        </p>
                    </motion.div>

                    {/* Stack grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {stack.map((group, i) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: expoOut }}
                                className="p-5 bg-surface-raised border border-white/5 rounded-2xl"
                            >
                                <p className="font-display text-[11px] uppercase tracking-widest text-white/30 mb-3">
                                    {group.category}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm font-medium text-white/70 border border-white/10 rounded-full hover:border-neon/40 hover:text-neon transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="mt-12"
                    >
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-neon transition-colors duration-200 font-display"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
                            </svg>
                            Back to portfolio
                        </a>
                    </motion.div>

                </div>
            </main>
        </>
    );
}
