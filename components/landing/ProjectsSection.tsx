'use client';

import Link from "next/link";
import { projectsData } from "@/lib/projectsData";
import { Reveal } from "./Reveal";

export default function ProjectsSection() {
    return (
        <section id="work" className="relative px-6 py-28">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
                            Selected <em className="not-italic text-muted-foreground">work.</em>
                        </h2>
                        <a
                            href="https://github.com/Nandkishore-04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6 mt-14">
                    {projectsData.map((project, i) => (
                        <Reveal key={project.id} delay={0.05 + (i % 2) * 0.1}>
                            <Link
                                href={`/projects/${project.id}`}
                                className="liquid-glass group block h-full rounded-2xl p-7 transition-transform hover:scale-[1.01]"
                            >
                                <div className="flex items-center justify-between gap-3 mb-5">
                                    <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                                        {project.category}
                                    </span>
                                    <span className="text-[11px] text-muted-foreground tabular-nums">
                                        {project.year}
                                    </span>
                                </div>

                                <h3 className="font-serif text-2xl sm:text-3xl text-foreground leading-tight mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-8 mb-6">
                                    {project.metrics.slice(0, 2).map((m) => (
                                        <div key={m.label}>
                                            <p className="font-serif text-2xl text-foreground leading-none">
                                                {m.value}
                                            </p>
                                            <p className="text-[11px] text-muted-foreground mt-1.5">{m.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 5).map((t) => (
                                        <span
                                            key={t}
                                            className="text-[11px] text-muted-foreground border border-glassborder rounded-full px-2.5 py-1"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <span className="inline-block text-sm text-muted-foreground group-hover:text-foreground transition-colors mt-6">
                                    Read case study →
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
