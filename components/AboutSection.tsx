import useTranslation from "next-translate/useTranslation";
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
  const { t } = useTranslation("common");
  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto px-6 sm:px-0">
        <h2 className="uppercase text-center font-bold text-xl text-orange-600">
          About me
        </h2>
        <div className="mt-12">
          <div className="grid sm:grid-cols-2 gap-8 text-gray-500">
            <div className="leading-loose max-w-prose space-y-8">
              <p>{t("aboutMe1")}</p>
              <p>{t("aboutMe2")}</p>
              <p>{t("aboutMe3")}</p>
              <div className="space-x-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium  text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <ChatAlt2Icon className="h-4 mr-2" />
                  <span>{t("contactMe")}</span>
                </a>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium  text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <DownloadIcon className="h-4 mr-2" />
                  <span>{t("download")}</span>
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
                        <Tab key={lang}>
                          {getIcon(lang)}
                          <span className="text-xs uppercase">{lang}</span>
                        </Tab>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed">{t("skills")}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
