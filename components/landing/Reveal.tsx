'use client';

import { motion } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

/* Scroll-triggered version of the hero's fade-rise entrance */
export function Reveal({ children, delay = 0, className }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
