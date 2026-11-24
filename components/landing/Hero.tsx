'use client';

import Link from "next/link";
import GlassNav from "./GlassNav";

export default function Hero() {
    return (
        <header id="home" className="relative min-h-screen overflow-hidden flex flex-col">
            {/* Fullscreen looping background video — provides all visual depth */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            <GlassNav />

            <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-24">
                <span className="animate-fade-rise liquid-glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
                    GSoC 2026 — Intel OpenVINO · Open to full-time roles
                </span>

                <h1 className="animate-fade-rise font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal">
                    Engineering <em className="not-italic text-muted-foreground">products</em>
                    <br />
                    that <em className="not-italic text-muted-foreground">quietly scale.</em>
                </h1>

                <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
                    I&apos;m Nand Kishore — a full-stack &amp; AI engineer shipping real tools
                    for real clients. Offline desktop apps, automation dashboards, and
                    platforms built for sharp focus and inspired work.
                </p>

                <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center gap-4 mt-12">
                    <a
                        href="#work"
                        className="liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
                    >
                        View Projects
                    </a>
                    <Link
                        href="/hub"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                    >
                        Meet my AI avatar →
                    </Link>
                </div>
            </section>

            {/* Seam into the navy sections below */}
            <div className="absolute bottom-0 left-0 right-0 h-32 z-[5] bg-gradient-to-b from-transparent to-background pointer-events-none" />
        </header>
    );
}
