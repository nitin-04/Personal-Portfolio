import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMysql, SiMongodb, SiPostman, SiVercel, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";
import PropTypes from 'prop-types';
import ".././pages/about/about.css";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    Python: <SiPython />,
    Tailwind: <SiTailwindcss />,
    MySQL: <SiMysql />,
    Typescript: <SiTypescript />,
  }

  return (
    <div title={skill} className="SkillBox">
      <div className="SkillIcon">{icon[skill]}</div>
      <p className="SkillLabel">{skill}</p>
    </div>
  );
}
Skills.propTypes = {
  skill: PropTypes.string.isRequired
};

export default Skills;

