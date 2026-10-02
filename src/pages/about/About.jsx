import Skills from '../../components/Skills';
import Stats from '../../components/Stats';
import ResumeItem from '../../components/ResumeItem';
import './about.css';
import Resume from '../../components/Resume';
import { SKILLS_LIST } from '../../data/skills';
import { TIMELINE_DATA } from '../../data/timeline';

const About = () => {
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
              {`I am a Full Stack Developer with 1.5+ years of experience engineering scalable web applications. Previously at `}
              <span>AbleSpace</span>
              {`, I focused on architecting robust backend microservices with NestJS and Node.js, optimizing MongoDB data layers, and creating reactive interfaces in Next.js and React. Prior to that, I engineered full-stack solutions and AI/RAG knowledge-retrieval workflows at `}
              <span>KTP InfraTech</span>
              {` and `}
              <span>YUP Solutions</span>
              {`.`}
              <br />
              <br />
              {`I hold a `}
              <span>{`Master's degree in Computer Applications (MCA)`}</span>
              {` with a specialization in `}
              <span>Data Science</span>
              {` and a `}
              <span>{`Bachelor's degree in Mathematics`}</span>
              {`, which provides a rigorous foundation in algorithms, system architecture, and analytical problem-solving.`}
              <br />
              <br />
              {`Beyond coding, I enjoy `}
              <span>playing chess</span>
              {`, exploring mountainous trails, and collaborating on high-impact technology products.`}
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
        <h2 className="section__subtitle subtitle__center">
          My <span>Technical Skills</span>
        </h2>
        <div className="skills__container">
          {SKILLS_LIST.map((skill) => (
            <Skills key={skill} skill={skill} />
          ))}
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Career <span>Timeline</span>
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {TIMELINE_DATA.map((val) => (
              <ResumeItem key={val.id} {...val} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
