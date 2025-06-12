import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import PropTypes from "prop-types";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    AnnadataDesc:
      "This is an Online Food Delivery platform designed to provide a seamless and efficient way for users to browse menus and place orders.",
    AnnadataGithub: "https://github.com/nitin-04/Annadata",
    AnnadataWebsite:
      "https://drive.google.com/file/d/1XzUqj_syzqxTD083xRY7mSHtS4kSStd2/view",

    DevDateDesc:
      "Developed Developer Connect, a MERN stack web app enabling developers to network, send/reject connection requests, and collaborate seamlessly.",
    DevDateGithub: "https://github.com/nitin-04/DevDate-web",
    DevDateWebsite: "",

    ContentShareDesc:
      "Content Share is a platform for sharing and discovering content, allowing users to upload files, Ppt, Video and Pdf.",
    ContentShareGithub: "https://github.com/nitin-04/ContentShare-Web",
    ContentShareWebsite: "https://content-share-web.vercel.app/",

    SnakeGameDesc:
      "A simple Snake Game where the snake grows by eating food, with gameplay ending upon collision with the walls or itself.",
    SnakeGameGithub: "https://github.com/nitin-04/snakeGame",
    SnakeGameWebsite: "https://snake-game-sg.vercel.app/",
    BMIDesc:
      "BMI Calculator: Enter height and weight to calculate BMI and get categorized results: Underweight, Normal, Overweight, or Obese.",
    BMIGithub: "https://github.com/nitin-04/bmi",
    BMIWebsite: "https://bmi-dusky-omega.vercel.app",

    BgChangerDesc:
      "A background changer built with JavaScript featuring Start and Stop buttons. Press Start to change the background color every 2 seconds and Stop to pause the effect.",
    BgChangerGithub: "https://github.com/nitin-04/Unlimited-background-colors",
    BgChangerWebsite: "https://unlimited-background-colors.vercel.app/",

    ColorSwitchDesc:
      "A Color Switcher built with JavaScript that changes the background based on the selected color, providing a simple and interactive user experience.",
    ColorSwitchGithub: "https://github.com/nitin-04/color-switch  ",
    ColorSwitchWebsite: "https://color-switch-five.vercel.app/",

    TicTacToeDesc:
      "A dynamic Tic Tac Toe game using JavaScript, featuring a 3x3 grid with real-time win, loss, and draw detection.",
    TicTacToeGithub: "https://github.com/nitin-04/TicTacToe",
    TicTacToeWebsite: "https://tic-tac-toe-eight-lovat.vercel.app/",

    RockPaperScissorDesc:
      "A single-player Rock-Paper-Scissors game where the player competes against the computer. The computer makes random choices.",
    RockPaperScissorGithub: "https://github.com/nitin-04/RPS",
    RockPaperScissorWebsite: "https://rps-bice-five.vercel.app/",

    // CommingsoonDesc: "",
    // ComingsoonGithub: "",
    // ComingsoonWebsite: "",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3 className="project_name">{projectName}</h3>
        <br />
        <div className="projectDesc">{desc[projectName + "Desc"]}</div>
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

ProjectBox.propTypes = {
  projectPhoto: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};

export default ProjectBox;
