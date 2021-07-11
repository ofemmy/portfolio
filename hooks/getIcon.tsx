import { IoLogoJavascript } from "react-icons/io";
import {
  FaCss3Alt,
  FaGitAlt,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaHtml5,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiMongodb, SiNextDotJs, SiPostgresql } from "react-icons/si";

export function getIcon(iconName: string) {
  let IconComponent = null;
  switch (iconName) {
    case "javascript":
      IconComponent = <IoLogoJavascript />;
      break;
    case "php":
      IconComponent = <FaPhp />;
      break;
    case "python":
      IconComponent = <FaPython />;
      break;
    case "html":
      IconComponent = <FaHtml5 />;
      break;
    case "laravel":
      IconComponent = <FaLaravel />;
      break;
    case "git":
      IconComponent = <FaGitAlt />;
      break;
    case "css":
      IconComponent = <FaCss3Alt />;
      break;
    case "node js":
      IconComponent = <FaNodeJs />;
      break;
    case "graphql":
      IconComponent = <GrGraphQl />;
      break;
    case "react":
      IconComponent = <FaReact />;
      break;
    case "vue":
      IconComponent = <FaVuejs />;
      break;
    case "express js":
      IconComponent = <IoLogoJavascript />;
      break;
    case "next js":
      IconComponent = <SiNextDotJs />;
      break;
    case "postgres":
      IconComponent = <SiPostgresql />;
      break;
    case "mongo db":
      IconComponent = <SiMongodb />;
      break;
    default:
      throw new Error("Invalid icon name");
  }
  return IconComponent;
}
