'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const expoOut = [0.16, 1, 0.3, 1] as const;

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    once?: boolean;
    threshold?: number;
    className?: string;
}

export function ScrollReveal({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    distance = 24,
    once = true,
    threshold = 0.2,
    className = '',
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const directionOffset = {
        up: { x: 0, y: distance },
        down: { x: 0, y: -distance },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 },
    };

    const offset = directionOffset[direction];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
            transition={{ duration, delay, ease: expoOut }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: React.ReactNode;
    staggerDelay?: number;
    once?: boolean;
    threshold?: number;
    className?: string;
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    once = true,
    threshold = 0.15,
    className = '',
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const staggerChildVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: expoOut },
    },
};

export const staggerScaleVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: expoOut },
    },
};
