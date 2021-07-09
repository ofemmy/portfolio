import useTranslation from "next-translate/useTranslation";
import { DownloadIcon, ChatAlt2Icon } from "@heroicons/react/outline";
import { Hero, Section, SectionHeading, Tab } from "../components";
const languages = ["javascript", "php", "python"];
const webTechnologies = [""];
const skills = {
  "programming languages": ["javascript", "php", "python"],
  frameworks: ["react", "vue", "laravel", "express js", "next js"],
  "technologies & tools": ["node js", "graphql", "git"],
  database: ["postgres","mongo db"],
};
export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Hero />
      <Section id="about">
        <div className="max-w-6xl mx-auto">
          <h2 className="uppercase text-center font-bold text-xl text-orange-600">
            About me
          </h2>
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-8 text-gray-500">
              <div className="leading-loose max-w-prose space-y-8">
                <p>{t("aboutMe1")}</p>
                <p>{t("aboutMe2")}</p>
                <p>{t("aboutMe3")}</p>
                <div className="space-x-8">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium  text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <ChatAlt2Icon className="h-4 mr-2" />
                    <span>Contact me</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium  text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <DownloadIcon className="h-4 mr-2" />
                    <span> Download Resume</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="space-y-8 pt-2">
                  {Object.entries(skills).map((item) => (
                    <div className="" key={item[0]}>
                      <h2 className="uppercase font-normal text-sm text-orange-600">
                        {item[0]}
                      </h2>
                      <div className="mt-4 space-x-4">
                        {item[1].map((lang) => (
                          <Tab text={lang} key={lang} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed">
                  While I have proficiency in working in the above languages and
                  technologies, I am also open to learning and working with the
                  ones I am not yet familiar with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
