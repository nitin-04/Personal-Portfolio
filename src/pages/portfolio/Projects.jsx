import ProjectBox from '../../pages/portfolio/ProtfolioBox';
import './portfolio.css'
import annadata from '../../assets/annadata.png';
import bgChanger from '../../assets/bg_changer.png';
import bmi from '../../assets/bmi.png';
import colorswitch from '../../assets/colorswitch.png';
import comingsoon from '../../assets/comingsoon.png';
import rps from '../../assets/rps.png';
import snakegame from '../../assets/snakegame.png';
import ttt from '../../assets/ttt.png';



const Projects = () => {
  return (
    <div id='project'>

      <h2 className="title">
        MY <span>PROJECTS</span>
      </h2>

      <p className='para'>
        {` Here are some of the projects I've worked on. Some of them are still in development, others are completed.
        Click on the project name for more information or to see the live version.
        Please note that the live version of the projects may not be fully functional yet.
        If you want to contribute to any of these projects, feel free to reach out to me.`}
      </p>

      <div className='project'>
        <ProjectBox projectPhoto={annadata} projectName="Annadata" />
        <ProjectBox projectPhoto={snakegame} projectName="SnakeGame" />
        <ProjectBox projectPhoto={bmi} projectName="BMI" />
        <ProjectBox projectPhoto={ttt} projectName="TicTacToe" />
        <ProjectBox projectPhoto={bgChanger} projectName="BgChanger" />
        <ProjectBox projectPhoto={colorswitch} projectName="ColorSwitch" />
        <ProjectBox projectPhoto={rps} projectName="RockPaperScissor" />
        <ProjectBox projectPhoto={comingsoon} projectName="Comingsoon" />
      </div>

    </div>
  )
}

export default Projects