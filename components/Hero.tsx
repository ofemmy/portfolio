import useTranslation from "next-translate/useTranslation";
import { GlobeAltIcon } from "@heroicons/react/outline";
import { Logo, Navbar } from "../components";
import { useRouter } from "next/router";
import Link from "next/link";
import { classNames } from "../lib/utils";

export default function Hero() {
  const router = useRouter();
  const isCurrentLocale = (locale: string) => locale === router.locale;
  const { t, lang } = useTranslation("common");
  const greet = t("test");
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="flex justify-between items-center space-x-8">
          <Logo />
          <div className="flex-1 border">
            <Navbar />
          </div>
          <div className="text-white py-2 flex items-center px-1">
            <GlobeAltIcon className="h-4 mr-2" />
            <div className="space-x-1">
              <Link href={router.asPath} locale="en-US">
                <a
                  className={classNames(
                    isCurrentLocale("en-US")
                      ? "text-orange-600 font-semibold"
                      : "text-white"
                  )}
                >
                  en
                </a>
              </Link>
              <span>|</span>
              <Link href={router.asPath} locale="de">
                <a
                  className={classNames(
                    isCurrentLocale("de")
                      ? "text-orange-600 font-semibold"
                      : "text-white"
                  )}
                >
                  de
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>{greet}</div>
      </div>
    </div>
  );
}
