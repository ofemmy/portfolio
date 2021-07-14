import { useRouter } from "next/router";
import Link from "next/link";
import { classNames } from "../lib/utils";
import { GlobeAltIcon } from "@heroicons/react/outline";
export default function LanguageSwitcher() {
    const router = useRouter();
    const isCurrentLocale = (locale: string) => locale === router.locale;
    return (
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
    );
  }