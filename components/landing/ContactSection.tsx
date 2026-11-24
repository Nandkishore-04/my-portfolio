'use client';

import Link from "next/link";
import { Reveal } from "./Reveal";

const socials = [
    { label: "GitHub", value: "Nandkishore-04", href: "https://github.com/Nandkishore-04" },
    { label: "LinkedIn", value: "nand-kishore", href: "https://www.linkedin.com/in/nand-kishore-8b9093262/" },
];

export default function ContactSection() {
    return (
        <section id="contact" className="relative px-6 pt-28 pb-12">
            <div className="max-w-4xl mx-auto text-center">
                <Reveal>
                    <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
                        Let&apos;s build something{" "}
                        <em className="not-italic text-muted-foreground">worth shipping.</em>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
                        Available for full-time roles and selective client work. If you have
                        a hard problem and a quiet deadline, I&apos;d love to hear about it.
                    </p>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                        <a
                            href="mailto:nkk01414@gmail.com"
                            className="liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] transition-transform"
                        >
                            nkk01414@gmail.com
                        </a>
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="liquid-glass rounded-full px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:scale-[1.03] transition-all"
                            >
                                {s.label} ↗
                            </a>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.25}>
                    <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-28 pt-8 border-t border-white/[0.07] text-xs text-muted-foreground">
                        <span>© {new Date().getFullYear()} Nand Kishore</span>
                        <div className="flex items-center gap-6">
                            <Link href="/hub" className="hover:text-foreground transition-colors">
                                AI Avatar Hub
                            </Link>
                            <Link href="/experience" className="hover:text-foreground transition-colors">
                                Experience
                            </Link>
                            <Link href="/contact" className="hover:text-foreground transition-colors">
                                Contact Page
                            </Link>
                        </div>
                    </footer>
                </Reveal>
            </div>
        </section>
    );
}
