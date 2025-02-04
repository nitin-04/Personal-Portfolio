import Profile from "../../assets/Profile.png";
import Resume from "../../components/Resume";
import "./home.css"
 
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">Hi, There ! <br/>
            {`I' M`}  <span>Nitin Bahuguna</span> <br/>Web Developer
          </h1>

          <p className="home__description">{`I’m a beginner web developer passionate about building and designing websites. I’m currently
                    learning the fundamentals of HTML, CSS, and JavaScript, and I’m excited to explore front-end and
                    back-end technologies. I enjoy creating functional and visually appealing web pages and am eager to
                    develop my skills through hands-on projects and continuous learning. My goal is to become proficient
                    in web development and contribute to innovative web solutions.`}</p>

          <Resume/>
        </div>
      </div> 

      <div className="color__block"></div>
    </section>
  )
}

export default Home
