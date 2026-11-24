'use client';

import Link from "next/link";

const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "Projects", href: "#work", active: false },
    { label: "About", href: "#about", active: false },
    { label: "Stack", href: "#stack", active: false },
    { label: "Reach Us", href: "#contact", active: false },
];

export default function GlassNav() {
    return (
        <nav className="relative z-10 w-full flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
            <Link href="/" className="font-serif text-3xl tracking-tight text-foreground">
                Nand Kishore<sup className="text-xs">®</sup>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`text-sm transition-colors ${
                            link.active
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <a
                href="/Nand Kishore Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
            >
                View Resume
            </a>
        </nav>
    );
}
