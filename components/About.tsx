'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

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
        flagUrl: "https://flagcdn.com/w20/in.png",
        flagAlt: "India",
        badge: null,
    },
    {
        institution: "Shibaura Institute of Technology",
        location: "Tokyo, Japan",
        year: "2025",
        flagUrl: "https://flagcdn.com/w20/jp.png",
        flagAlt: "Japan",
        badge: "Semester Exchange",
    },
];

const stats = [
    { value: "3", label: "Clients served" },
    { value: "4", label: "Products shipped" },
    { value: "2+", label: "Years building" },
];

const expoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
    return (
        <section id="about" className="relative min-h-screen overflow-hidden bg-surface px-6 pt-8 pb-16 scroll-mt-16">
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,214,10,0.04)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-[1fr_300px] gap-8 lg:gap-12 items-center">

                    {/* Left: Bio + Capabilities + Stack */}
                    <div className="order-2 md:order-1 space-y-7">

                        {/* Header */}
                        <ScrollReveal>
                            <p className="font-display text-xs uppercase tracking-widest text-neon mb-2">About</p>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                                Engineer who builds things<br className="hidden md:block" /> that actually ship.
                            </h2>
                            <p className="text-white/70 leading-relaxed max-w-lg text-sm">
                                Software engineer based in India, shipping real tools for real clients.
                                Three freelance products in production — offline desktop apps, automation
                                dashboards, full-stack platforms. Open to full-time roles and the right
                                client projects.
                            </p>
                        </ScrollReveal>

                        {/* Stats row */}
                        <ScrollReveal delay={0.1}>
                            <div className="flex items-center gap-6">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: expoOut }}
                                        className="flex flex-col"
                                    >
                                        <span className="font-display text-2xl font-bold text-neon leading-none">{stat.value}</span>
                                        <span className="text-xs text-white/55 mt-1 font-medium">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Capabilities */}
                        <ScrollReveal delay={0.15}>
                            <p className="font-display text-xs uppercase tracking-widest text-white/45 mb-3">What I do</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {capabilities.map((cap, i) => (
                                    <motion.div
                                        key={cap.title}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: expoOut }}
                                        className="p-4 bg-surface-raised border border-white/5 rounded-xl hover:border-neon/20 transition-colors duration-300 group"
                                    >
                                        <p className="font-display text-sm font-bold text-white group-hover:text-neon transition-colors duration-300 mb-1.5">
                                            {cap.title}
                                        </p>
                                        <p className="text-xs text-white/55 leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Education */}
                        <ScrollReveal delay={0.2}>
                            <p className="font-display text-xs uppercase tracking-widest text-white/45 mb-3">Education</p>
                            <div className="flex flex-col gap-2.5">
                                {education.map((edu) => (
                                    <div
                                        key={edu.institution}
                                        className="flex items-center gap-3 p-4 bg-surface-raised border border-white/5 rounded-xl"
                                    >
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-white/80 font-display flex items-center gap-1.5 flex-wrap">
                                                {edu.institution}
                                                <img src={edu.flagUrl} alt={edu.flagAlt} className="inline w-4 h-auto" />
                                                {edu.badge && (
                                                    <span className="text-[10px] font-medium text-neon/70 border border-neon/25 bg-neon/5 rounded-full px-2 py-0.5 font-display tracking-wide">
                                                        {edu.badge}
                                                    </span>
                                                )}
                                            </p>
                                            <p className="text-xs text-white/50">{edu.location}</p>
                                        </div>
                                        <span className="text-xs text-white/45 font-display tabular-nums shrink-0">{edu.year}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Resume CTA */}
                        <ScrollReveal delay={0.25}>
                            <a
                                href="/Nand Kishore Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-neon text-black font-bold rounded-full font-display text-sm hover:shadow-[0_0_28px_rgba(255,214,10,0.3)] hover:scale-105 transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                View Resume
                            </a>
                        </ScrollReveal>
                    </div>

                    {/* Right: Photo */}
                    <div className="order-1 md:order-2">
                        <ScrollReveal direction="right" distance={30}>
                            <div className="w-full aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                                <img
                                    src="/WhatsApp Image 2026-01-29 at 11.23.59 PM.jpeg"
                                    alt="Nand Kishore"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
