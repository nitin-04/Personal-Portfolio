import Profile from '../../assets/Profile.png';
import Resume from '../../components/Resume';
import './home.css';

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="Nitin Bahuguna" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            Hi, There ! <br />
            {`I' M`} <span>Nitin Bahuguna</span> <br />
            Full Stack Engineer
          </h1>
          <p className="home__description">
            {`I am a Full Stack Software Engineer with 1.5+ years of experience architecting high-performance web applications and scalable B2B SaaS platforms.`}
            <br /> <br />
            {`Previously at AbleSpace , I engineered robust backend microservices with NestJS, optimized MongoDB data layers for complex multi-tenant workflows, and translated intricate design systems into reactive, accessible Next.js & React frontends. My experience covers the entire SaaS product lifecycle—from designing resilient RESTful APIs and optimizing database queries to deploying AI-powered RAG pipelines and automated E2E testing.`}
            <br /> <br />
            {`I thrive in fast-paced product environments, bridging system architecture with clean, intuitive user experiences that scale.`}
          </p>

          <Resume />
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
