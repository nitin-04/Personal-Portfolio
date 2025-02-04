import ProjectBox from '../../pages/portfolio/ProtfolioBox';
import './portfolio.css'
import annadata from '../../assets/annadata.png';
import bgChanger from '../../assets/bg_changer.png';
import bmi from '../../assets/bmi.png';
import colorswitch from '../../assets/colorswitch.png';
import comingsoon from '../../assets/comingsoon.jpg';
import rps from '../../assets/rps.png';
import snakegame from '../../assets/snakegame.png';
import ttt from '../../assets/ttt.png';



const Projects = () => {
  return (
    <div id='project'>
      <h1 className='projectHeading'>My <span>Projects</span></h1>
      <div className='project'>
        <ProjectBox projectPhoto={annadata} projectName="Annadata" />
        <ProjectBox projectPhoto={snakegame} projectName="snakegame" />
        <ProjectBox projectPhoto={bmi} projectName="bmi" />
        <ProjectBox projectPhoto={bgChanger} projectName="bgChanger" />
        <ProjectBox projectPhoto={colorswitch} projectName="colorswitch" />
        <ProjectBox projectPhoto={rps} projectName="rps" />
        <ProjectBox projectPhoto={ttt} projectName="js" />
        <ProjectBox projectPhoto={comingsoon} projectName="comingsoon" />
      </div>

    </div>
  )
}

export default Projects