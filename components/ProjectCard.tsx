import Image from "next/image";
import { getIcon } from "../hooks/getIcon";
import Tab from "./Tab";
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    description: string;
    coverImg: string;
    technologies: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const img = require(`../public/${project.coverImg}`);
  return (
    <div className="min-h-[600px] bg-white rounded-sm shadow-sm">
      <div className="h-[288px] bg-black relative overflow-hidden border-b shadow-xs">
        <Image src={img} alt="Mueller 4 clean website cover" />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold leading-7 text-orange-600 sm:text-3xl sm:truncate">
          {project.title}
        </h2>
        <div className="mt-4 flex space-x-4 items-center">
          {project.technologies.map((tech) => (
            <Tab key={tech}>
              {getIcon(tech)}
              <p className="text-xs uppercase">{tech}</p>
            </Tab>
          ))}
        </div>
        <div className="mt-8">
          <p className="leading-loose font-extralight">{project.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
