import {
  AboutSection,
  ContactSection,
  Hero,
  ProjectSection,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
