"use client";

import { useState } from "react";
import { projects, type Project, type Tone } from "@/lib/portfolioData";

const toneStyles: Record<Tone, { lane: string; label: string; solid: string }> = {
    rose: { lane: "border-rose-300 bg-rose-50", label: "text-rose-700", solid: "bg-rose-600 text-white" },
    indigo: { lane: "border-indigo-300 bg-indigo-50", label: "text-indigo-800", solid: "bg-indigo-700 text-white" },
    emerald: { lane: "border-emerald-300 bg-emerald-50", label: "text-emerald-800", solid: "bg-emerald-700 text-white" },
    amber: { lane: "border-amber-300 bg-amber-50", label: "text-amber-800", solid: "bg-amber-600 text-white" },
    slate: { lane: "border-slate-300 bg-slate-50", label: "text-slate-700", solid: "bg-slate-700 text-white" },
};

function Diagram({ project }: { project: Project }) {
    const { diagram } = project;
    return (
        <div className="border border-ink/15 bg-[#eef0f4] p-4 sm:p-5">
            <div className="mb-3 flex items-baseline justify-between gap-3 text-[11px]">
                <span className="font-semibold text-ink">{diagram.title}</span>
                <span className="text-ink/50">{diagram.note}</span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {diagram.lanes.map((lane) => {
                    const t = toneStyles[lane.tone];
                    return (
                        <div key={lane.label} className={`flex flex-col gap-2 border p-3 sm:min-h-[150px] ${t.lane}`}>
                            <span className={`text-[11px] font-semibold uppercase tracking-wide ${t.label}`}>
                                {lane.label}
                            </span>
                            {lane.nodes.map((node) => (
                                <div
                                    key={node.name}
                                    className={`border px-2.5 py-2 ${
                                        node.solid ? `${t.solid} border-transparent` : "border-ink/10 bg-white text-ink"
                                    }`}
                                >
                                    <div className="text-xs font-semibold">{node.name}</div>
                                    {node.sub && (
                                        <div className={`text-[11px] ${node.solid ? "opacity-80" : "text-ink/55"}`}>
                                            {node.sub}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
            <p className="mt-3 text-[11px] text-ink/60">
                <span className="font-semibold text-indigo-800">{diagram.footer.step}</span> · {diagram.footer.text}
            </p>
        </div>
    );
}

export default function ProjectExplorer() {
    const [activeId, setActiveId] = useState(projects[0].id);
    const project = projects.find((p) => p.id === activeId) ?? projects[0];

    return (
        <div>
            {/* Tabs */}
            <div role="tablist" aria-label="Projects" className="grid grid-cols-2 border-l border-t border-ink/15 sm:grid-cols-3">
                {projects.map((p, i) => {
                    const active = p.id === activeId;
                    // Featured first tab spans two columns so 5 tabs fill the grid (2 cols mobile, 3 cols sm+)
                    const span = i === 0 && projects.length === 5 ? "col-span-2" : "";
                    return (
                        <button
                            key={p.id}
                            role="tab"
                            aria-selected={active}
                            aria-controls="project-panel"
                            onClick={() => setActiveId(p.id)}
                            className={`${span} border-b border-r border-ink/15 px-3 py-2.5 text-left transition-colors ${
                                active ? "bg-ink text-white" : "bg-white hover:bg-[#eef0f4]"
                            }`}
                        >
                            <div className="text-sm font-semibold">{p.tab}</div>
                            <div className={`text-[11px] ${active ? "text-white/60" : "text-ink/50"}`}>{p.tabSub}</div>
                            {active && <div className="mt-1.5 h-0.5 w-full bg-amber-400" />}
                        </button>
                    );
                })}
            </div>

            {/* Panel */}
            <div id="project-panel" role="tabpanel" className="mt-6 grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
                {/* On phones the description comes first, the diagram second */}
                <div className="order-2 lg:order-1">
                    <Diagram project={project} />
                </div>

                <div className="order-1 lg:order-2">
                    <p className="text-xs text-ink/55">{project.eyebrow}</p>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{project.tagline}</p>

                    {project.stats && (
                        <div className="mt-5 grid grid-cols-3 gap-1.5 sm:gap-2">
                            {project.stats.map((s) => (
                                <div key={s.label} className="border border-ink/15 bg-white px-2 py-2 sm:px-3 sm:py-2.5">
                                    <div className="font-display text-base font-bold text-ink sm:text-lg">{s.value}</div>
                                    <div className="text-[11px] text-ink/55">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    <ul className="mt-5 space-y-1.5 text-sm text-ink/80">
                        {project.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-ink/60" />
                                {b}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                            <span key={t} className="rounded-full border border-ink/20 px-2.5 py-0.5 text-[11px] text-ink/70">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex gap-2">
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                                Live site ↗
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className={project.live ? "btn-outline" : "btn-primary"}>
                                Watch demo ↗
                            </a>
                        )}
                        {project.code && (
                            <a href={project.code} target="_blank" rel="noreferrer" className="btn-outline">
                                Code ↗
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
