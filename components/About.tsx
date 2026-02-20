'use client';

import dynamic from 'next/dynamic';
import { ScrollReveal } from './ScrollReveal';

const ProfileCard = dynamic(() => import('./ProfileCard/ProfileCard'), {
    ssr: false,
    loading: () => (
        <div className="w-full aspect-[3/4] bg-surface-raised border border-white/10 rounded-3xl animate-pulse" />
    ),
});

export default function About() {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-surface overflow-hidden">
            {/* Subtle neon gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,214,10,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto w-full space-y-20">
                {/* Bio (left) + ProfileCard (right) — swapped for asymmetry */}
                <div className="grid md:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
                    {/* Bio + Skills — left */}
                    <div className="space-y-12 order-2 md:order-1">
                        <ScrollReveal>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                                About <span className="text-neon">Me</span>
                            </h2>
                            <p className="text-white/70 leading-relaxed max-w-lg">
                                Short bio goes here. Two or three sentences about who you are,
                                what you do, and what drives you. Replace this with your actual story.
                            </p>
                        </ScrollReveal>

                        {/* What I Do — 2-column mini-cards */}
                        <ScrollReveal delay={0.15}>
                            <h3 className="font-display text-xs font-bold text-white/40 uppercase tracking-widest mb-4">What I Do</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "Full-Stack Development",
                                    "System Architecture",
                                    "Product Strategy",
                                    "Automation",
                                    "Cloud Infrastructure",
                                    "API Design",
                                ].map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-4 py-3 bg-surface-raised border border-white/5 rounded-xl text-sm text-white/70 hover:border-neon/30 hover:text-neon transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Tech Stack */}
                        <ScrollReveal delay={0.25}>
                            <h3 className="font-display text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React", "Next.js", "TypeScript", "Tailwind CSS",
                                    "Node.js", "Python", "PostgreSQL", "Redis",
                                    "AWS", "Docker", "Kubernetes", "Git"
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-xs text-white/50 hover:border-neon/30 hover:text-white transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Resume CTA */}
                        <ScrollReveal delay={0.35}>
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-3 px-8 py-3 bg-neon text-black font-bold rounded-full font-display text-sm hover:shadow-[0_0_30px_rgba(255,214,10,0.3)] hover:scale-105 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>
                        </ScrollReveal>
                    </div>

                    {/* ProfileCard — right */}
                    <div className="md:sticky md:top-24 order-1 md:order-2">
                        <ScrollReveal direction="right" distance={40}>
                            <ProfileCard
                                avatarUrl="/WhatsApp Image 2026-01-29 at 11.23.59 PM.jpeg"
                                name="Nand Kishore"
                                title="Founder-Engineer"
                                handle="nandkishore"
                                status="Building at Hexor"
                                behindGlowColor="rgba(255, 214, 10, 0.5)"
                                innerGradient="linear-gradient(145deg, #1f1a0a8c 0%, #FFD60Aaa 100%)"
                                enableTilt={true}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
