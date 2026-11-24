'use client';

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const education = [
    {
        year: "2022 – 2026",
        title: "Bachelor of Technology",
        institution: "Hindustan Institute of Technology and Science",
        location: "Chennai, India",
        flagUrl: "https://flagcdn.com/w20/in.png",
        flagAlt: "India",
        badge: null as string | null,
        description:
            "Pursuing B.Tech with focus on backend engineering, system design, and AI. Built strong foundation in data structures, algorithms, and software architecture.",
        highlights: [
            "Specialized in backend systems and automation",
            "Led technical projects and hackathons",
            "Built portfolio of production-ready applications",
        ],
        tags: ["DSA", "System Design", "Backend Engineering", "AI/ML"],
    },
    {
        year: "2025",
        title: "International Exchange Program",
        institution: "Shibaura Institute of Technology",
        location: "Tokyo, Japan",
        flagUrl: "https://flagcdn.com/w20/jp.png",
        flagAlt: "Japan",
        badge: "Semester Exchange",
        description:
            "Selected for international exchange program in Japan. Gained global perspective on technology, collaboration, and cross-cultural engineering practices.",
        highlights: [
            "Completed coursework in advanced computer science",
            "Collaborated with international teams on technical projects",
            "Gained exposure to Japanese engineering methodologies",
        ],
        tags: ["Research", "Collaboration", "Global Exposure"],
    },
];

export default function EducationPanel() {
    return (
        <div className="max-w-4xl mx-auto">
            <p className="font-display text-xs uppercase tracking-widest text-neon mb-2">Education</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                From Chennai to Tokyo.
            </h2>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-5"
            >
                {education.map((edu) => (
                    <motion.div
                        key={edu.institution}
                        variants={staggerItem}
                        className="p-6 bg-surface-raised border border-white/5 rounded-2xl hover:border-neon/20 transition-colors duration-300"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <div>
                                <p className="font-display text-lg font-bold text-white flex items-center gap-2 flex-wrap">
                                    {edu.title}
                                    {edu.badge && (
                                        <span className="text-[10px] font-medium text-neon/70 border border-neon/25 bg-neon/5 rounded-full px-2 py-0.5 font-display tracking-wide">
                                            {edu.badge}
                                        </span>
                                    )}
                                </p>
                                <p className="text-sm text-white/70 font-display flex items-center gap-1.5 mt-1">
                                    {edu.institution}
                                    <img src={edu.flagUrl} alt={edu.flagAlt} className="inline w-4 h-auto" />
                                </p>
                                <p className="text-xs text-white/50">{edu.location}</p>
                            </div>
                            <span className="text-xs text-white/45 font-display tabular-nums shrink-0">
                                {edu.year}
                            </span>
                        </div>

                        <p className="text-sm text-white/60 leading-relaxed mb-4">{edu.description}</p>

                        <ul className="space-y-1.5 mb-4">
                            {edu.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2 text-xs text-white/55">
                                    <span className="text-neon mt-0.5">▸</span>
                                    {h}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {edu.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-display text-white/50 border border-white/10 rounded-full px-2.5 py-1"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
