import { Section, ProjectCard } from "../components";
import Projects from "../lib/data/projects.json";
export default function ProjectSection() {
  return (
    <Section id="projects" bgColor="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="uppercase text-center font-bold text-xl text-orange-600">
          Projects
        </h2>
        <div className="mt-12">
          <div className="grid md:grid-cols-2 gap-10">
            {Object.values(Projects).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
