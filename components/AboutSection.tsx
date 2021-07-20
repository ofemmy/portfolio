import { DownloadIcon, ChatAlt2Icon } from "@heroicons/react/outline";
import { getIcon } from "../lib/utils/getIcon";
import { Section, Tab } from "../components";
const skills = {
  "programming languages": ["javascript", "typescript", "php", "python"],
  "technologies & tools": ["node js", "graphql", "git", "html", "css"],
  frameworks: ["react", "vue", "laravel", "express js", "next js"],
  database: ["postgres", "mongo db"],
};

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="uppercase text-center font-bold text-xl text-orange-600">
          About me
        </h2>
        <div className="mt-12">
          <div className="grid sm:grid-cols-2 gap-8 text-gray-500">
            <div className="leading-loose max-w-prose space-y-8">
              <p>
                My name is Oladayo Olufemi, a fullstack web developer based in
                Berlin, Germany. My passion and love for problem solving led to
                my decision to transition from Electrical Engineering to
                Software Development in 2018.
              </p>
              <p>
                I have so far gained experience working with programming
                languages and technologies across the front and back ends of web
                development, using the skills I have gained to provide solution
                and create value both for myself and those around me.
              </p>
              <p>
                I am self-motivated, value-driven and always open to learn new
                things in order to improve myself.
              </p>
              <div className="space-x-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium  text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <ChatAlt2Icon className="h-4 mr-2" />
                  <span>Contact Me</span>
                </a>
                {/* <a
                  download
                  href={new URL("/Oladayo_Resume.pdf").href}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium  text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <DownloadIcon className="h-4 mr-2" />
                  <span>{t("download")}</span>
                </a> */}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-8 pt-2">
                {Object.entries(skills).map((item) => (
                  <div className="" key={item[0]}>
                    <h2 className="uppercase font-normal text-sm text-orange-600">
                      {item[0]}
                    </h2>
                    <div className="mt-4 space-y-4 sm:space-y-0">
                      {item[1].map((lang) => (
                        <div className="mr-2 inline-flex" key={lang}>
                          <Tab>
                            {getIcon(lang)}
                            <span className="text-xs uppercase">{lang}</span>
                          </Tab>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-4 sm:mt-0">
                While I am comfortable in working with the above languages and
                technologies, I am also open to learning and working with the
                ones I am not yet familiar with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
