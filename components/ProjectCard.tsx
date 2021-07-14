import Image from "next/image";
import Link from "next/link";
import { getIcon } from "../lib/utils/getIcon";
import Tab from "./Tab";
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    description: string[];
    coverImg: string;
    technologies: string[];
    url: string;
    images: string[];
    githubUrl: "";
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const img = require(`../public/${project.coverImg}`);
  return (
    <div className="min-h-[600px] bg-white rounded-sm shadow-sm flex flex-col hover:shadow-lg">
      <div className="h-[288px] bg-gray-900 relative overflow-hidden border-b shadow-xs">
        <Image src={img} alt="Mueller 4 clean website cover" />
      </div>
      <div className="px-6 py-8 flex-1 flex flex-col justify-between">
        <div>
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
            <p className="leading-relaxed font-extralight">{project.excerpt}</p>
          </div>
        </div>
        <div className="space-x-6">
          <Link href={`/projects/${encodeURIComponent(project.slug)}`}>
            <a className="inline-flex items-center px-4 py-2 border border-orange-600 text-base font-medium rounded-sm shadow-sm text-orange-600 bg-transparent hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:text-white">
              Read More
            </a>
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-sm shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            See Live
          </a>
        </div>
      </div>
    </div>
  );
}
