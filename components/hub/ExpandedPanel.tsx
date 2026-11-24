'use client';

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hubCards, type CardId } from "@/lib/hubConfig";
import { useHubStore } from "@/lib/hubStore";
import About from "@/components/About";
import Stack from "@/components/Stack";
import EducationPanel from "./panels/EducationPanel";
import ProjectsPanel from "./panels/ProjectsPanel";

/* Strips fullscreen-section chrome so existing components sit nicely inside the panel */
const sectionReset =
    "[&_section]:min-h-0 [&_section]:px-0 [&_section]:pt-0 [&_section]:pb-0 [&_section]:bg-transparent";

const panelContent: Record<CardId, React.ReactNode> = {
    about: <About />,
    education: <EducationPanel />,
    projects: <ProjectsPanel />,
    stack: <Stack />,
};

export default function ExpandedPanel() {
    const expandedCard = useHubStore((s) => s.expandedCard);
    const setExpanded = useHubStore((s) => s.setExpanded);
    const closeRef = useRef<HTMLButtonElement>(null);
    const lastFocused = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (expandedCard) {
            lastFocused.current = document.activeElement as HTMLElement | null;
            // Wait a tick so the panel exists before grabbing focus
            requestAnimationFrame(() => closeRef.current?.focus());
        } else {
            lastFocused.current?.focus();
            lastFocused.current = null;
        }
    }, [expandedCard]);

    const card = hubCards.find((c) => c.id === expandedCard);

    return (
        <AnimatePresence>
            {expandedCard && card && (
                <div className="fixed inset-0 z-40">
                    {/* Backdrop — scene stays faintly visible behind */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setExpanded(null)}
                        className="absolute inset-0 bg-surface/70 backdrop-blur-md"
                    />

                    <motion.div
                        layoutId={`card-${expandedCard}`}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        role="dialog"
                        aria-modal="true"
                        aria-label={card.title}
                        className="absolute inset-3 md:inset-10 lg:inset-14 bg-surface/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden flex flex-col"
                    >
                        {/* Panel header */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.3 } }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            className="flex items-center justify-between px-6 md:px-10 pt-5 pb-4 border-b border-white/5 shrink-0"
                        >
                            <p className="font-display text-sm uppercase tracking-widest text-neon">
                                {card.title}
                            </p>
                            <button
                                ref={closeRef}
                                onClick={() => setExpanded(null)}
                                aria-label="Close panel"
                                className="w-9 h-9 rounded-full border border-white/10 text-white/60 hover:text-neon hover:border-neon/40 focus:outline-none focus-visible:border-neon/60 transition-colors duration-300 flex items-center justify-center"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>

                        {/* Content fades in after the container settles (avoids layoutId warping) */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            className={`flex-1 overflow-y-auto px-6 md:px-10 py-8 ${sectionReset}`}
                        >
                            {panelContent[expandedCard]}
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
