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
            {`I am a passionate and innovative Full Stack Developer dedicated to building robust, user-focused web applications. 
  I specialize in the modern JavaScript ecosystem, including React, Next.js, Node.js, NestJS, and MongoDB, crafting scalable solutions that blend powerful functionality with clean design.`}
            <br /> <br />
            {`Previously, as a Full Stack Developer at AbleSpace, I focused on architecting scalable backend systems and translating complex UI/UX designs into highly responsive, interactive frontend components.`}
            <br /> <br />
            {`I thrive on solving complex challenges—whether it’s engineering scalable APIs, enhancing UI performance, or delivering seamless end-to-end user experiences.`}
          </p>

          <Resume />
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
