import {
  AboutSection,
  ContactSection,
  Hero,
  ProjectSection,
} from "../components";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
