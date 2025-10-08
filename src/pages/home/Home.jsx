import Profile from '../../assets/Profile.png';
import Resume from '../../components/Resume';
import './home.css';

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            Hi, There ! <br />
            {`I' M`} <span>Nitin Bahuguna</span> <br />
            Web Developer
          </h1>

          <p className="home__description">
            {`I am a passionate and innovative MERN Stack Developer dedicated to building full-fledged, user-focused web applications. 
  I specialize in JavaScript, React, Node.js, Express, and MongoDB, crafting scalable solutions that blend functionality with clean design.`}
            <br /> <br />
            {`Currently, I am working as a Software Engineer Intern at KTP Infratech, Gurgaon, where I contribute to multiple MERN stack projects and explore cutting-edge technologies like Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) pipelines for intelligent data-driven applications.`}
            <br /> <br />
            {/* {`Previously, at Yup Solutions Pvt Ltd, I collaborated remotely with cross-functional teams across different time zones to develop real-time, high-performance applications. 
  This experience strengthened my expertise in performance optimization, API integration, and end-to-end development.`}
            <br /> <br /> */}
            {`I thrive on solving complex challenges—whether it’s engineering intuitive interfaces, enhancing performance, or implementing seamless API communication.
  My approach combines clean, maintainable code with an eye for design, ensuring every project delivers both functionality and visual impact.`}
          </p>

          <Resume />
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
