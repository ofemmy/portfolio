import Link from "next/link";
import { RewindIcon } from "@heroicons/react/solid";
import { Tab } from "../../components";
import projects from "../../lib/data/projects.json";
import { getIcon } from "../../lib/utils/getIcon";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { FaGithub } from "react-icons/fa";
export async function getStaticPaths() {
  const projectSlugs = Object.values(projects).map((project) => project.slug);
  return {
    paths: projectSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const slug = params.slug;
  const project = Object.values(projects).find(
    (project) => project.slug === slug
  );

  return { props: { project } };
}
interface Project {
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
    imgAlt: string;
    githubUrl: string;
  };
}
export default function Project({ project }: Project) {
  const img = require(`../../public/${project.coverImg}`);
  const img2 = require(`../../public/geldtrack.png`);
  return (
    <div className="max-w-6xl mx-auto pt-16 pb-32 px-6">
      <div>
        <Link href="/">
          <a className="inline-flex items-center uppercase py-1 px-2 rounded-md border-2 border-orange-600 font-medium text-orange-600">
            <RewindIcon className="h-4 mr-1" /> back to Home
          </a>
        </Link>
      </div>
      <div className="mt-16">
        <Image src={img} alt="Mueller 4 clean website cover" />
        <div className="mt-4 flex items-center sm:space-x-12 flex-wrap">
          <h2 className="text-2xl font-bold leading-7 text-orange-600 sm:text-3xl sm:truncate">
            {project.title}
          </h2>
          <div className="flex space-x-4 items-center mt-4 sm:mt-0">
            {project.technologies.map((tech) => (
              <Tab key={tech}>
                {getIcon(tech)}
                <p className="text-xs uppercase">{tech}</p>
              </Tab>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="pb-2 border-b border-gray-200 mt-12 flex items-center justify-between">
            <h3 className="hidden sm:block text-lg leading-6 font-medium text-gray-700">
              Description
            </h3>
            <div className="sm:ml-4">
              <Link href={project.githubUrl}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 uppercase"
                >
                  <span className="flex items-center space-x-2">
                    <FaGithub className="h-4" />
                    <small>See code</small>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          {project.description.map((paragraph, idx) => (
            <p key={idx} className="font-light leading-loose">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
