import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { Hero } from "@/components/home/Hero";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { ToolkitSection } from "@/components/home/ToolkitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ResearchSection />
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <ToolkitSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
