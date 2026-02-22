'use client';

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ['home', 'projects', 'about', 'stack', 'contact'] as const;

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: '-40% 0px -55% 0px' }
            );

            observer.observe(el);
            observers.push(observer);
        });

        const handleScroll = () => {
            const current = window.scrollY;
            setScrolled(current > 60);
            if (current < 60) {
                setVisible(true);
            } else if (current > lastScrollY.current + 8) {
                setVisible(false); // scrolling down — hide
            } else if (current < lastScrollY.current - 8) {
                setVisible(true);  // scrolling up — show
            }
            lastScrollY.current = current;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observers.forEach((obs) => obs.disconnect());
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? 'bg-white/[0.03] backdrop-blur-2xl border-b border-white/[0.06]' : 'bg-transparent'
                } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-3 flex-1">
                        <div className="w-9 h-9 bg-neon rounded-xl flex items-center justify-center flex-none">
                            <span className="text-sm font-bold text-black font-display tracking-tight">NK</span>
                        </div>
                        <span className="text-sm font-semibold text-white/70 hidden md:block font-display">
                            Nand Kishore
                        </span>
                    </Link>

                    {/* Center nav pill — desktop */}
                    <div className="hidden md:flex items-center gap-1 px-1.5 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                        {sections.map((id) => {
                            const isActive = activeSection === id;
                            const label = id.charAt(0).toUpperCase() + id.slice(1);

                            return (
                                <Link
                                    key={id}
                                    href={`#${id}`}
                                    className="relative px-3 lg:px-4 py-1.5 rounded-full font-display text-[10px] lg:text-xs uppercase tracking-wider transition-colors duration-300"
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="navPill"
                                            className="absolute inset-0 bg-neon/10 rounded-full"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className={`relative z-10 ${isActive ? 'text-neon' : 'text-white/40 hover:text-white/70'}`}>
                                        {label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Contact CTA — desktop */}
                    <div className="flex-1 flex justify-end">
                    <a
                        href="#contact"
                        className="hidden md:flex items-center px-5 py-2 bg-neon text-black font-bold text-xs uppercase tracking-wider rounded-full font-display hover:shadow-[0_0_20px_rgba(255,214,10,0.3)] transition-all duration-300"
                    >
                        Contact
                    </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
                    >
                        {sections.map((id) => {
                            const isActive = activeSection === id;
                            const label = id.charAt(0).toUpperCase() + id.slice(1);

                            return (
                                <Link
                                    key={id}
                                    href={`#${id}`}
                                    onClick={() => setMobileOpen(false)}
                                    className={`font-display text-3xl font-bold uppercase tracking-wider transition-colors ${
                                        isActive ? 'text-neon' : 'text-white/40'
                                    }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-4 px-8 py-3 bg-neon text-black font-bold text-sm uppercase tracking-wider rounded-full font-display"
                        >
                            Contact
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
