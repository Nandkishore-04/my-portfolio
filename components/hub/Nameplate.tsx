'use client';

import { motion } from "framer-motion";

/* Game-style identity plate anchored under the avatar platform */
export default function Nameplate() {
    return (
        <div className="absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-20 w-max max-w-[94vw]">
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2"
        >
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-5 py-2.5 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-display font-bold text-white text-sm md:text-base tracking-tight">
                    Nand Kishore
                </span>
                <span className="hidden sm:block w-px h-4 bg-white/15" />
                <span className="text-xs md:text-sm text-white/60">Full-Stack &amp; AI Engineer</span>
                <a
                    href="https://github.com/openvinotoolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-[10px] md:text-[11px] font-display font-bold bg-neon/10 text-neon border border-neon/30 rounded-full hover:bg-neon hover:text-black transition-colors duration-300"
                >
                    GSoC 2026 · Intel OpenVINO
                </a>
            </div>
        </motion.div>
        </div>
    );
}
