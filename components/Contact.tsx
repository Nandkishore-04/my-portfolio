'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerChildVariants } from './ScrollReveal';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="relative min-h-screen py-24 px-6 bg-surface overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,214,10,0.03)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="mb-16 space-y-3">
                        <p className="font-display text-xs uppercase tracking-widest text-neon">Get In Touch</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-white/40 text-sm">Have a project in mind? Let&apos;s talk.</p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <StaggerContainer className="grid gap-4">
                            {[
                                {
                                    title: "Email",
                                    value: "hello@example.com",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    link: "mailto:hello@example.com"
                                },
                                {
                                    title: "Location",
                                    value: "Your City, Country",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                    link: "#"
                                },
                                {
                                    title: "LinkedIn",
                                    value: "linkedin.com/in/you",
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    ),
                                    link: "#"
                                }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    variants={staggerChildVariants}
                                    href={item.link}
                                    className="group flex items-center gap-5 p-5 bg-surface-raised border border-white/5 rounded-2xl hover:border-neon/20 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 bg-neon/10 rounded-xl flex items-center justify-center text-neon group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white/40 text-[10px] font-display font-bold uppercase tracking-widest mb-0.5">{item.title}</h4>
                                        <p className="text-white text-sm font-medium">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Right: Contact Form */}
                    <ScrollReveal direction="right" distance={40} delay={0.2}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon/10 to-transparent rounded-[2rem] blur-2xl opacity-50 transition-opacity group-hover:opacity-70" />

                            <form
                                onSubmit={handleSubmit}
                                className="relative bg-surface-raised backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-10 space-y-5"
                            >
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-display font-bold text-white/40 uppercase tracking-widest ml-1">Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon/50 focus:shadow-[0_0_10px_rgba(255,214,10,0.1)] transition-all"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-display font-bold text-white/40 uppercase tracking-widest ml-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon/50 focus:shadow-[0_0_10px_rgba(255,214,10,0.1)] transition-all"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-display font-bold text-white/40 uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="What's on your mind?"
                                        className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon/50 focus:shadow-[0_0_10px_rgba(255,214,10,0.1)] transition-all resize-none"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full relative group/btn py-4 px-8 rounded-xl font-bold font-display transition-all overflow-hidden ${
                                        submitted
                                            ? 'bg-neon text-black'
                                            : 'bg-neon text-black hover:shadow-[0_0_30px_rgba(255,214,10,0.3)] hover:scale-[1.02] active:scale-[0.98]'
                                    }`}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : submitted ? (
                                            "Sent!"
                                        ) : (
                                            <>
                                                Send Message
                                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Footer */}
                <ScrollReveal delay={0.1}>
                    <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm font-medium">
                        <p>&copy; 2026 Nand Kishore</p>
                        <div className="flex gap-8">
                            <a href="https://github.com/Nandkishore-04" className="hover:text-neon transition-colors">GitHub</a>
                            <a href="#" className="hover:text-neon transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-neon transition-colors">Twitter</a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
