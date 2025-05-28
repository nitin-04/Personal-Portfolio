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
            {`I embrace challenges head-on—whether it’s developing dynamic front-end interfaces, designing robust back-end logic, or seamlessly integrating APIs for real-time functionality.
    My approach combines clean, maintainable code with a sharp design sensibility, ensuring every project reflects both creativity and technical depth.`}
          </p>

          <Resume />
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
