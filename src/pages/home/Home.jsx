import Profile from "../../assets/Profile.png";
import Resume from "../../components/Resume";
import "./home.css";

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
  With strong expertise in JavaScript, React, Node.js, Express, and MongoDB.`}
            <br /> <br />
            {`Through hands-on experience at Yup Solutions Pvt Ltd, where I collaborate remotely with cross-functional teams to build scalable, real-time applications across different time zones. 
  This experience has strengthened my skills in performance optimization, API integration, and end-to-end development.
  `}
            <br />
            <br />
            {`I embrace challenges head-on—whether it’s building intuitive interfaces, optimizing performance, or ensuring smooth API communication.
  My approach combines clean, maintainable code with a strong eye for design, ensuring every project blends functionality with visual appeal.`}
          </p>

          <Resume />
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
