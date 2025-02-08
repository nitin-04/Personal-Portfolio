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
              {`I hold a `}<span>Bachelor</span>{`'s  degree in `}<span> Mathematics</span>{`, where I honed my problem-solving and logical thinking skills. My passion for IT led me to transition into web development and pursue a `}<span> Master</span>{`'s in `}<span> Computer Applications</span>{` , specializing in Data Science, currently in my final year.`}
              <br /><br />
             
              
              {`In my journey, I’ve gained hands-on experience with technologies like`} <span>ReactJS, JavaScript,</span>{` and various database tools. I enjoy creating original projects with captivating designs that solve real-world problems.`}
              <br /><br />
             
              {`Beyond coding, I find joy in `}<span>Traveling</span> {`, playing `}<span>Chess</span> {`, exploring `}<span>Mountains</span>{`, and engaging in conversations with diverse perspectives.`}
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
