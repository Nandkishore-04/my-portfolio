import Hero from "@/components/Hero";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import OpenSourceSpotlight from "@/components/OpenSourceSpotlight";
import ProjectsGrid from "@/components/ProjectsGrid";
import Capabilities from "@/components/Capabilities";
import AboutJourney from "@/components/AboutJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCaseStudy />
      <OpenSourceSpotlight />
      <ProjectsGrid />
      <Capabilities />
      <AboutJourney />
      <Contact />
      <Footer />
    </main>
  );
}
