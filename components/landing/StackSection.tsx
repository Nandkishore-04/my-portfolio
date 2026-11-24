'use client';

import { Reveal } from "./Reveal";

const layers = [
    { name: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"] },
    { name: "Interface", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Electron"] },
    { name: "Server", items: ["Node.js", "FastAPI"] },
    { name: "Data", items: ["PostgreSQL", "MySQL", "SQLite", "Supabase"] },
    { name: "Platform", items: ["Docker", "AWS", "Git", "n8n", "Postman"] },
];

export default function StackSection() {
    return (
        <section id="stack" className="relative px-6 py-28">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
                        Tools I <em className="not-italic text-muted-foreground">actually use.</em>
                    </h2>
                    <p className="text-muted-foreground text-base mt-4">
                        No buzzword inflation — just what&apos;s shipped in real projects.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="liquid-glass rounded-2xl overflow-hidden mt-12">
                        {layers.map((layer, i) => (
                            <div
                                key={layer.name}
                                className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-5 sm:px-7 py-5 ${
                                    i < layers.length - 1 ? "border-b border-white/[0.07]" : ""
                                }`}
                            >
                                <span className="sm:w-24 sm:text-right text-[11px] uppercase tracking-[0.2em] text-muted-foreground shrink-0">
                                    {layer.name}
                                </span>
                                <div className="hidden sm:block w-px h-4 bg-white/10 shrink-0" />
                                <div className="flex flex-wrap gap-2">
                                    {layer.items.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs sm:text-sm text-foreground/70 border border-glassborder rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
