import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <About />
            <Stack />
            <Contact />
        </main>
    );
}
