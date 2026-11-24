'use client';

import { Reveal } from "./Reveal";

const stats = [
    { value: "3", label: "Clients served" },
    { value: "4", label: "Products shipped" },
    { value: "2+", label: "Years building" },
];

const capabilities = [
    {
        title: "Product Engineering",
        description: "Full-stack apps built to ship — not to demo. From schema design to deployed UI.",
    },
    {
        title: "Automation",
        description: "Replacing manual ops with n8n workflows, scripts, and scheduled jobs that just run.",
    },
    {
        title: "Desktop & Offline Tools",
        description: "Electron apps for clients who need their data local, private, and fast.",
    },
];

const education = [
    {
        institution: "Hindustan University",
        location: "Chennai, India",
        year: "2022 – 2026",
        badge: null as string | null,
    },
    {
        institution: "Shibaura Institute of Technology",
        location: "Tokyo, Japan",
        year: "2025",
        badge: "Semester Exchange",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="relative px-6 py-28">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl">
                        Building things that{" "}
                        <em className="not-italic text-muted-foreground">actually ship.</em>
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-[1fr_300px] gap-12 mt-14 items-start">
                    <div className="space-y-12">
                        <Reveal delay={0.1}>
                            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                                Software engineer based in India, shipping real tools for real
                                clients. Three freelance products in production — offline
                                desktop apps, automation dashboards, full-stack platforms.
                                Open to full-time roles and the right client projects.
                            </p>
                            <div className="flex items-center gap-10 mt-8">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <p className="font-serif text-4xl text-foreground leading-none">
                                            {stat.value}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                                What I do
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {capabilities.map((cap) => (
                                    <div key={cap.title} className="liquid-glass rounded-2xl p-5">
                                        <p className="font-serif text-lg text-foreground mb-2">{cap.title}</p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                                Education
                            </p>
                            <div className="space-y-3">
                                {education.map((edu) => (
                                    <div
                                        key={edu.institution}
                                        className="liquid-glass rounded-2xl px-5 py-4 flex items-center justify-between gap-4"
                                    >
                                        <div>
                                            <p className="text-sm text-foreground flex items-center gap-2 flex-wrap">
                                                {edu.institution}
                                                {edu.badge && (
                                                    <span className="text-[10px] text-muted-foreground border border-glassborder rounded-full px-2 py-0.5">
                                                        {edu.badge}
                                                    </span>
                                                )}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{edu.location}</p>
                                        </div>
                                        <span className="text-xs text-muted-foreground tabular-nums shrink-0">
                                            {edu.year}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2} className="order-first md:order-none">
                        <div className="liquid-glass rounded-2xl p-2">
                            <img
                                src="/WhatsApp Image 2026-01-29 at 11.23.59 PM.jpeg"
                                alt="Nand Kishore"
                                className="w-full aspect-[3/4] object-cover rounded-xl"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
