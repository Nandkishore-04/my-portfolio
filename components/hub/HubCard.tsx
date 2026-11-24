'use client';

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { HubCardDef } from "@/lib/hubConfig";
import { useHubStore } from "@/lib/hubStore";

interface HubCardProps {
    card: HubCardDef;
    /** Order in the entrance stagger */
    index: number;
}

export default function HubCard({ card, index }: HubCardProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const setHovered = useHubStore((s) => s.setHovered);
    const setExpanded = useHubStore((s) => s.setExpanded);
    const reducedMotion = useReducedMotion();

    const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

    const reportHover = () => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            setHovered(card.id, {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        }
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * 12);
        rotateX.set(-py * 12);
    };

    const clearHover = () => {
        setHovered(null);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto w-full md:w-56 lg:w-64 md:absolute ${card.position}`}
        >
            {/* Idle floating bob, staggered per card */}
            <motion.div
                animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
                transition={{ duration: 4.5 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.9 }}
            >
                <motion.button
                    ref={ref}
                    layoutId={`card-${card.id}`}
                    onMouseEnter={reportHover}
                    onFocus={reportHover}
                    onPointerMove={handlePointerMove}
                    onMouseLeave={clearHover}
                    onBlur={clearHover}
                    onClick={() => setExpanded(card.id)}
                    aria-haspopup="dialog"
                    style={{ rotateX, rotateY, transformPerspective: 800 }}
                    whileHover={reducedMotion ? undefined : { scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative w-full text-left p-5 lg:p-6 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl cursor-pointer hover:border-neon/40 hover:shadow-[0_0_35px_rgba(255,214,10,0.15)] focus:outline-none focus-visible:border-neon/60 focus-visible:shadow-[0_0_30px_rgba(255,214,10,0.2)] transition-[border-color,box-shadow] duration-300"
                >
                    {/* Corner brackets — game-UI framing */}
                    <span className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-neon/40 rounded-tl-md pointer-events-none group-hover:border-neon/80 transition-colors duration-300" />
                    <span className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-neon/40 rounded-br-md pointer-events-none group-hover:border-neon/80 transition-colors duration-300" />

                    {/* Shine sweep on hover */}
                    <span className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                        <span className="absolute inset-y-0 left-0 w-1/2 -translate-x-[150%] group-hover:translate-x-[300%] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-12 transition-transform duration-700 ease-out" />
                    </span>

                    <div className="w-10 h-10 mb-3 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center group-hover:bg-neon/20 transition-colors duration-300">
                        <svg className="w-5 h-5 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={card.icon} />
                        </svg>
                    </div>
                    <p className="font-display text-base lg:text-lg font-bold text-white group-hover:text-neon transition-colors duration-300">
                        {card.title}
                    </p>
                    <p className="text-xs text-white/50 mt-1">{card.subtitle}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-display text-white/30 mt-3 group-hover:text-neon/70 transition-colors duration-300">
                        Open
                        <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                    </span>
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
