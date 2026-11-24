'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const expoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HubHeader() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: expoOut }}
            className="absolute top-0 left-0 right-0 z-30 pointer-events-none"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3 pointer-events-auto">
                    <div className="w-9 h-9 bg-neon rounded-xl flex items-center justify-center flex-none">
                        <span className="text-sm font-bold text-black font-display tracking-tight">NK</span>
                    </div>
                    <span className="text-sm font-semibold text-white/70 hidden md:block font-display">
                        Nand Kishore
                    </span>
                </div>

                <div className="flex items-center gap-3 pointer-events-auto">
                    <a
                        href="/Nand-Kishore-AI Engineer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs font-display font-semibold text-white/70 border border-white/10 rounded-full hover:border-neon/40 hover:text-neon transition-colors duration-300"
                    >
                        Resume
                    </a>
                    <Link
                        href="/contact"
                        className="px-4 py-2 text-xs font-display font-bold bg-neon text-black rounded-full hover:shadow-[0_0_24px_rgba(255,214,10,0.3)] transition-shadow duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
