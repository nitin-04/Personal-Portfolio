import Skills from "../../components/Skills"
import Stats from "../../components/Stats"
import ResumeItem from "../../components/ResumeItem"
import "./about.css"
import Resume from "../../components/Resume"
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {

  const resume = [

    {
      id: 1,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023-2025',
      title: 'Master Degree <span> Master Of Computer Applications </span>',
      desc: 'Gautam Buddha University, Greater Noida',
    },

    {
      id: 2,
      icon: <FaGraduationCap />,
      year: '2019-2022',
      title: 'Bachelor Degree <span> Bachelor of Science </span>',
      desc: 'Hemvati Nandan Bahuguna Garhwal University,  Srinagar Garhwal, Uttarakhand'
    },

    {
      id: 3,
      icon: <FaGraduationCap />,
      year: '2018',
      title: 'Intermediate',
      desc: 'Shri Guru Ram Rai Public School, Srinagar Garhwal, Uttarakhand'
    },
    {
      id: 4,
      icon: <FaGraduationCap />,
      year: '2016',
      title: 'High School',
      desc: 'Shri Guru Ram Rai Public School, Srinagar Garhwal, Uttarakhand'
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
            <h3 className="section__subtitle"><span>Information About Me</span></h3>

            <p className="about__para">
              {`I hold a `}<span>{`Bachelor's degree`}</span>{` in `}<span>Mathematics</span>{`, where I developed strong `}
              <span>problem-solving</span>{` and `}<span>logical thinking</span>{` skills. My passion for 
              information technology led me to transition into `}<span>web development</span>{`, and I am currently pursuing a `}
              <span>{`Master's degree`}</span>{` in `}<span>Computer Applications</span>{` with a specialization in `}
              <span>Data Science</span>{`, now in my `}<span>final year</span>{`.`}
              <br /><br />

              {`Throughout my journey, I have gained hands-on experience with technologies such as `}
              <span>ReactJS</span>{`, `}<span>JavaScript</span>{`, and various `}<span> tools</span>{`.`}
              {` I enjoy creating original`}<span> projects</span>{` with captivating `}<span>designs</span>{` that address
              real-world problems.`}
              <br /><br />

              {`Outside of coding, I take pleasure in `}<span>traveling</span>{`, `}<span>playing chess</span>{`, `}
              <span>exploring mountainous areas</span>{`, and engaging in conversations that offer 
              diverse perspectives.`}
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
        <h1 className="section__subtitle subtitle__center"> My <span>Skills</span></h1>
        <div className="skills__container ">
          <Skills skill='React' />
          <Skills skill='Node' />
          <Skills skill='Express' />
          <Skills skill='MongoDb' />
          <Skills skill='MySQL' />
          <Skills skill='Git' />
          <Skills skill='Github' />
          <Skills skill='Javascript' />
          <Skills skill='C++' />
          <Skills skill='Python' />
          <Skills skill='Excel' />
          <Skills skill='HTML' />
          <Skills skill='CSS' />
          <Skills skill='Vercel' />
          <Skills skill='Npm' />
          <Skills skill='Postman' />
          <Skills skill='Bootstrap' />
          <Skills skill='Tailwind' />
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

              return <ResumeItem key={val.id}{...val} />

            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About;
