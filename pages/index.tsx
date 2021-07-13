import {
  AboutSection,
  ContactSection,
  Hero,
  ProjectCard,
  ProjectSection,
  Section,
  SectionHeading,
  Tab,
} from "../components";
import Projects from "../lib/data/projects.json";

const languages = ["javascript", "javascript", "python"];
const webTechnologies = [""];

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
