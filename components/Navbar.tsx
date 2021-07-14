import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { classNames } from "../lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
const navigation = ["home", "about", "projects", "contact"];
export default function Navbar() {
  const [currentRoute, setCurrentRoute] = useState("home");

  const isCurrent = (route: string) => route === currentRoute;
  const { t } = useTranslation("common");
  const about = t("about");
  const projects = t("projects");
  const contact = t("contact");
  return (
    // <div className="text-white text-sm py-2 uppercase flex items-center justify-center space-x-8">
    //   {navigation.map((route) => (
    //     <a
    //       key={route}
    //       href={`#${route}`}
    //       onClick={() => setCurrentRoute(route)}
    //       className={classNames(
    //         isCurrent(route) ? "font-semibold text-orange-600" : "text-white"
    //       )}
    //     >
    //       {t(route)}
    //     </a>
    //   ))}
    // </div>
    <div>
      
    </div>
  );
}
