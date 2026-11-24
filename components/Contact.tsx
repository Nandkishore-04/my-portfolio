'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const GmailIcon = () => (
    <svg className="w-5 h-5" viewBox="52 42 88 66" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
        <path fill="#34a853" d="M114 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
        <path fill="#fbbc04" d="M114 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
        <path fill="#ea4335" d="M72 74V48l21 16 21-16v26L93 90"/>
        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
    </svg>
);

const GitHubIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const links = [
    {
        label: "Email",
        value: "nkk01414@gmail.com",
        href: "mailto:nkk01414@gmail.com",
        external: false,
        Icon: GmailIcon,
        iconBg: "#ffffff",
        rowHover: "hover:border-red-500/30 hover:shadow-[0_0_24px_rgba(234,67,53,0.12)]",
    },
    {
        label: "GitHub",
        value: "Nandkishore-04",
        href: "https://github.com/Nandkishore-04",
        external: true,
        Icon: GitHubIcon,
        iconBg: "#1a1a1a",
        rowHover: "hover:border-white/15 hover:shadow-[0_0_24px_rgba(255,255,255,0.04)]",
    },
    {
        label: "LinkedIn",
        value: "nand-kishore",
        href: "https://www.linkedin.com/in/nand-kishore18/",
        external: true,
        Icon: LinkedInIcon,
        iconBg: "#0A66C2",
        rowHover: "hover:border-blue-500/30 hover:shadow-[0_0_24px_rgba(10,102,194,0.12)]",
    },
];

const expoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'; // replace with your Formspree endpoint

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                }),
            });
            if (!res.ok) throw new Error('Failed');
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch {
            alert('Something went wrong. Please email me directly at nkk01414@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-surface px-6 pt-8 pb-10 scroll-mt-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,214,10,0.04)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative z-10 flex-1 flex items-center">
                <div className="max-w-5xl mx-auto w-full grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">

                    {/* Left */}
                    <div>
                        <ScrollReveal>
                            <p className="font-display text-xs uppercase tracking-widest text-neon mb-3">Contact</p>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                                Let&apos;s build something.
                            </h2>
                            <p className="text-white/35 text-sm mb-8 leading-relaxed">
                                Open to freelance projects and full-time roles. Based in Chennai — available remotely.
                            </p>
                        </ScrollReveal>

                        <div className="flex flex-col gap-2">
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: expoOut }}
                                    className={`group flex items-center justify-between px-4 py-3 bg-surface-raised border border-white/5 rounded-xl transition-all duration-300 ${link.rowHover}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            style={{ backgroundColor: link.iconBg }}
                                            className="w-10 h-10 flex items-center justify-center rounded-xl flex-none text-white"
                                        >
                                            <link.Icon />
                                        </div>
                                        <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300">
                                            {link.value}
                                        </span>
                                    </div>
                                    <span className="text-white/20 group-hover:text-neon group-hover:translate-x-0.5 transition-all duration-300 text-sm">
                                        {link.external ? '↗' : '→'}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <ScrollReveal direction="right" distance={30} delay={0.15}>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-surface-raised border border-white/[0.06] rounded-2xl p-6 space-y-4"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-display uppercase tracking-widest text-white/30 ml-0.5">Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-black/30 border border-white/[0.07] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-display uppercase tracking-widest text-white/30 ml-0.5">Email</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-black/30 border border-white/[0.07] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-display uppercase tracking-widest text-white/30 ml-0.5">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="What are you building?"
                                    className="w-full bg-black/30 border border-white/[0.07] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all resize-none"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3.5 px-6 bg-neon text-black font-bold font-display text-sm rounded-xl hover:shadow-[0_0_24px_rgba(255,214,10,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : submitted ? (
                                    'Message sent!'
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        Send Message <span>→</span>
                                    </span>
                                )}
                            </button>
                        </form>
                    </ScrollReveal>

                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-2 text-white/20 text-xs font-display">
                    <p>© 2026 Nand Kishore · Chennai, India</p>
                    <p className="uppercase tracking-widest">Built with Next.js</p>
                </div>
            </div>
        </section>
    );
}
