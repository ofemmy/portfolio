import useTranslation from "next-translate/useTranslation";

import Image from "next/image";
import { Logo, Navbar, LanguageSwitcher } from "../components";

import ProfileImg from "../public/oladayo.png";
import Header from "./Header";

export default function Hero() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-black text-white">
      <div className="px-4 pt-4 pb-12">
        <Header />
        {/* <div className="flex justify-between items-center space-x-8">
          <Logo />
          <div className="hidden sm:block sm:flex-1">
            <Navbar />
          </div>
          <LanguageSwitcher />
        </div> */}
        <div className="mt-12 md:mt-32 flex flex-col items-center justify-center space-y-12">
          <div className="h-48 w-48 border rounded-full overflow-hidden">
            <Image
              src={ProfileImg}
              objectFit="cover"
              alt="Image of oladayo"
              layout="responsive"
            />
          </div>
          <div className="flex flex-col space-y-4 text-center">
            <span className="uppercase">{t("hello")},</span>
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              {t("nameIntro")}
            </h1>
            <h2 className="text-xl tracking-tight font-extralight sm:text-2xl md:text-3xl text-orange-500">
              {t("jobIntro")}
            </h2>
            <div className="rounded-sm mt-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent  rounded-md text-gray-900 bg-white hover:bg-gray-800 hover:text-white md:py-3 md:text-lg md:px-10 uppercase font-light text-sm"
              >
                {t("knowMore")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
