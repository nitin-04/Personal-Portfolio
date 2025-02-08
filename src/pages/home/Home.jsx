import Profile from "../../assets/Profile.png";
import Resume from "../../components/Resume";
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">Hi, There ! <br />
            {`I' M`}  <span>Nitin Bahuguna</span> <br />Web Developer
          </h1>

          <p className="home__description">
            {`I am a passionate and innovative React JS Developer dedicated to crafting engaging, user-focused web applications.
              With deep expertise in JavaScript and modern frameworks.`}
              <br /> <br/>
              {`I embrace challenges head-on—whether it’s developing dynamic front-end features, enhancing performance, or seamlessly integrating back-end APIs for real-time functionality.
              My method combines clean, maintainable code with a sharp design sensibility, ensuring that each project harmoniously blends creativity with technical expertise.`}
            </p>

          <Resume />
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home
