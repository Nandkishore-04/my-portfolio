'use client';

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/* Giant ghost typography behind the 3D scene, with gentle pointer parallax */
export default function BackgroundText() {
    const reducedMotion = useReducedMotion();
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const x1 = useSpring(mx, { stiffness: 40, damping: 20 });
    const y1 = useSpring(my, { stiffness: 40, damping: 20 });

    useEffect(() => {
        if (reducedMotion) return;
        const onMove = (e: MouseEvent) => {
            mx.set((e.clientX / window.innerWidth - 0.5) * -30);
            my.set((e.clientY / window.innerHeight - 0.5) * -16);
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, [mx, my, reducedMotion]);

    return (
        <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none select-none" aria-hidden="true">
            {/* Stacked name behind the avatar */}
            <motion.div
                style={{ x: x1, y: y1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
            >
                <h1 className="font-display font-bold uppercase leading-[0.82] tracking-tight text-[clamp(5rem,17vw,15rem)] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.06)]">
                    Nand
                </h1>
                <h1 className="font-display font-bold uppercase leading-[0.82] tracking-tight text-[clamp(5rem,17vw,15rem)] text-white/[0.025] [-webkit-text-stroke:1.5px_rgba(255,214,10,0.05)]">
                    Kishore
                </h1>
            </motion.div>

            {/* Vertical Japanese accents — nod to the Shibaura exchange */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
                className="hidden md:block absolute left-7 top-1/2 -translate-y-1/2 font-display text-xs tracking-[0.5em] text-white/15 [writing-mode:vertical-rl]"
            >
                エンジニア
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.1 }}
                className="hidden md:block absolute right-7 top-1/2 -translate-y-1/2 font-display text-xs tracking-[0.5em] text-neon/20 [writing-mode:vertical-rl]"
            >
                フルスタック開発者
            </motion.p>

            {/* Faint scanline texture for game-UI flavor */}
            <div className="absolute inset-0 opacity-[0.35] bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.012)_3px,rgba(255,255,255,0.012)_4px)]" />
        </div>
    );
}
