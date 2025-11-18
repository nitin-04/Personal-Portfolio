import Skills from '../../components/Skills';
import Stats from '../../components/Stats';
import ResumeItem from '../../components/ResumeItem';
import './about.css';
import Resume from '../../components/Resume';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const resume = [
    {
      id: 1,
      category: 'education',
      icon: <FaBriefcase />,
      year: 'August 2025 - November 2025',
      title: 'KTP InfraTech Pvt Ltd <span> Software Engineer Intern </span>',
      desc: 'Sector 49, Gurgaon ',
    },
    {
      id: 2,
      category: 'education',
      icon: <FaBriefcase />,
      year: 'Feb 2025 - August 2025',
      title: 'YUP Solutions Pvt Ltd <span> Full Stack Developer Intern </span>',
      desc: 'Remote - Mississauga, Canada ',
    },
    {
      id: 3,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023-2025',
      title: 'Master Degree <span> Master Of Computer Applications </span>',
      desc: 'Gautam Buddha University, Greater Noida',
    },

    {
      id: 4,
      icon: <FaGraduationCap />,
      year: '2019-2022',
      title: 'Bachelor Degree <span> Bachelor of Science </span>',
      desc: 'Hemvati Nandan Bahuguna Garhwal University,  Srinagar Garhwal, Uttarakhand',
    },

    {
      id: 5,
      icon: <FaGraduationCap />,
      year: '2018',
      title: 'Intermediate',
      desc: 'Shri Guru Ram Rai Public School, Srinagar Garhwal, Uttarakhand',
    },
    {
      id: 6,
      icon: <FaGraduationCap />,
      year: '2016',
      title: 'High School',
      desc: 'Shri Guru Ram Rai Public School, Srinagar Garhwal, Uttarakhand',
    },
  ];

  return (
    <main className="section container">
      <section className="about">
        <h2 className="title">
          ABOUT <span>ME</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">
              <span>Information About Me</span>
            </h3>

            <p className="about__para">
              {`I recently completed my `}
              <span>{`Master's degree`}</span>
              {` in `}
              <span>Computer Applications</span>
              {` with a specialization in `}
              <span>Data Science</span>
              {`, where I honed my skills in both development and analytics. Prior to that, I earned a `}
              <span>{`Bachelor's degree`}</span>
              {` in `}
              <span>Mathematics</span>
              {`, which helped me develop strong `}
              <span>problem-solving</span>
              {` and `}
              <span>logical thinking</span>
              {` skills.`}
              <br />
              <br />

              {`Throughout my journey, I have gained hands-on experience with technologies such as `}
              <span>NextJS</span>
              {`, `}
              <span>ReactJS</span>
              {`, `}
              <span>JavaScript</span>
              {`, and various other `}
              <span>tools</span>
              {`.`}
              {` I enjoy building original `}
              <span>projects</span>
              {` with engaging `}
              <span>designs</span>
              {` that solve real-world problems.`}
              <br />
              <br />

              {`Beyond coding, I enjoy `}
              <span>traveling</span>
              {`, `}
              <span>playing chess</span>
              {`, `}
              <span>exploring mountainous areas</span>
              {`, and having conversations that bring in diverse perspectives.`}
            </p>

            <Resume />
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h1 className="section__subtitle subtitle__center">
          {' '}
          My <span>Skills</span>
        </h1>
        <div className="skills__container ">
          <Skills skill="Nextjs" />
          <Skills skill="React" />
          <Skills skill="Node" />
          <Skills skill="Express" />
          <Skills skill="MongoDb" />
          <Skills skill="MySQL" />
          <Skills skill="Git" />
          <Skills skill="Github" />
          <Skills skill="Javascript" />
          <Skills skill="Typescript" />
          <Skills skill="C++" />
          <Skills skill="Python" />
          <Skills skill="Excel" />
          <Skills skill="HTML" />
          <Skills skill="Tailwind" />
          <Skills skill="CSS" />
          <Skills skill="Vercel" />
          <Skills skill="Npm" />
          <Skills skill="Postman" />
          <Skills skill="Bootstrap" />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          My <span>TimeLine</span>
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              return <ResumeItem key={val.id} {...val} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
