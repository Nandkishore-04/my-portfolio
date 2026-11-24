'use client';

import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import StackSection from "./StackSection";
import ContactSection from "./ContactSection";

export default function Landing() {
    return (
        <div className="bg-background text-foreground font-sans">
            <Hero />
            <ProjectsSection />
            <AboutSection />
            <StackSection />
            <ContactSection />
        </div>
    );
}
