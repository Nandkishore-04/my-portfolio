'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const links = [
    {
        label: "Email",
        value: "nkk01414@gmail.com",
        href: "mailto:nkk01414@gmail.com",
        external: false,
    },
    {
        label: "GitHub",
        value: "Nandkishore-04",
        href: "https://github.com/Nandkishore-04",
        external: true,
    },
    {
        label: "LinkedIn",
        value: "nand-kishore",
        href: "https://www.linkedin.com/in/nand-kishore-8b9093262/",
        external: true,
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
        <section id="contact" className="relative min-h-screen md:h-screen flex flex-col justify-between overflow-hidden bg-surface px-6 py-16 scroll-mt-16">
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
                                    className="group flex items-center justify-between px-4 py-3 bg-surface-raised border border-white/5 rounded-xl hover:border-neon/25 hover:bg-white/[0.02] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="font-display text-[10px] uppercase tracking-widest text-white/20 w-12">
                                            {link.label}
                                        </span>
                                        <span className="w-px h-3 bg-white/10" />
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
