'use client';

import Navbar from "./Navbar";
import PixelSnow from "./PixelSnow/PixelSnow";
import { motion } from 'framer-motion';

const expoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-surface scroll-mt-16">
            <PixelSnow
                color="#ffffff"
                variant="snowflake"
                speed={0.8}
                density={0.25}
                brightness={0.8}
                pixelResolution={250}
            />
            <Navbar />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 text-center">
                {/* Massive centered typography */}
                <div className="space-y-2 md:space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: expoOut }}
                        className="font-display font-bold text-[clamp(3rem,8vw,8rem)] text-white tracking-tight leading-[0.9]"
                    >
                        Engineering
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: expoOut }}
                        className="font-display font-bold text-[clamp(3rem,8vw,8rem)] text-white/50 tracking-tight leading-[0.9]"
                    >
                        Products That
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: expoOut }}
                        className="font-display font-bold text-[clamp(3rem,8vw,8rem)] tracking-tight leading-[0.9] text-neon"
                    >
                        Scale.
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: expoOut }}
                    className="font-display text-xs md:text-sm text-white/40 mt-8 md:mt-12 tracking-wide"
                >
                    AI &amp; Machine Learning Enthusiast | AI Full-Stack Dev | Automation | Open Source Contributor
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.85, ease: expoOut }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-3.5 bg-neon text-black font-bold rounded-full font-display text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(255,214,10,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        View Projects
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </motion.div>
            </div>

            {/* Edge vignettes for smooth scroll transition */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-surface to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-surface to-transparent pointer-events-none z-10" />
            {/* Solid strip so zero snowflakes bleed into the next section */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-surface pointer-events-none z-10" />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
                >
                    <div className="w-1.5 h-1.5 bg-neon/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
