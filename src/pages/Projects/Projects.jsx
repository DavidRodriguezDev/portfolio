import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import Menu from '../../components/Menu/Menu';
import ProyectCard from '../../components/ProyectCard/ProyectCard';
import "./Projects.scss"
import { faHtml5, faCss3, faJs, faReact, faAngular, faNode, faGit, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  const projects = ["P", "r", "o", "y", "e", "c", "t", "o", "s"];

  useEffect(() => {
    
    setTimeout(() => {
     setLetterClass("text-animate__hover")
   },4000)

 }, [])

  return (
    <div className='b-projects__container'> 
      <Menu></Menu>      
      <div className='b-projects__main'>
        <h2 className='b-projects__title'>
          <AnimatedLetters letterClass={letterClass} strArary={projects} idx={1}></AnimatedLetters>
        </h2>
      </div>
      <div className='b-projects__cards'>
        <div className='b-projects__item'>
          <h2>CHICAGO´S SPEAKEASY</h2>
          <ProyectCard border={"react"}></ProyectCard>
          <div className='b-projects__item--spans'>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faHtml5} color="#F45320"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faCss3} color="#2177FF"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faReact} color="#61DBFB"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faNode} color="#91C63D"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div>
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/speakeasy-react"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div>        
          </div>
        </div>
        <div className='b-projects__item'>
          <h2>METTTALENT</h2>
          <ProyectCard border={"react"}></ProyectCard>
          <div className='b-projects__item--spans'>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faHtml5} color="#F45320"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faCss3} color="#2177FF"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faReact} color="#61DBFB"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faNode} color="#91C63D"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div>
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/meettalent"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div> 
          </div>
        </div>
        <div className='b-projects__item'>
          <h2>GAME OF THRONES</h2>
          <ProyectCard border={"react"}></ProyectCard>
          <div className='b-projects__item--spans'>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faHtml5} color="#F45320"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faCss3} color="#2177FF"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faReact} color="#61DBFB"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div>
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/game-of-thrones/tree/master/game-of-thrones"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div> 
          </div>
        </div>
        <div className='b-projects__item'>
          <h2>API COCTELERÍA</h2>
          <ProyectCard border={"node"}></ProyectCard>
          <div className='b-projects__item--spans'>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faNode} color="#91C63D"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div>
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/base-de-datos-cocteleria"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div>          
          </div>
        </div>
        <div className='b-projects__item'>
          <h2>API PROTECTORA</h2>
          <ProyectCard border={"node"}></ProyectCard>
          <div className='b-projects__item--spans'>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faNode} color="#91C63D"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div> 
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/lucky-project-backend"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div> 
          </div>
        </div>
        <div className='b-projects__item'>
          <h2>API ENTERPRISES</h2>
          <ProyectCard border={"node"}></ProyectCard>
          <div className='b-projects__item--spans'>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faNode} color="#91C63D"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div> 
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/ejercicio-enterprises"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div> 
          </div>
        </div>
        <div className='b-projects__item'>
          <h2>SHOPEAME</h2>
          <ProyectCard border={"angular"}></ProyectCard>
          <div className='b-projects__item--spans'>
          <div className='b-projects__item--span'><FontAwesomeIcon icon={faHtml5} color="#F45320"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faCss3} color="#2177FF"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faAngular} color="#DD2A30"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div>
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/shopeame"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div>        
          </div>
        </div>
        <div className='b-projects__item'>
          <h2>POKEAPI</h2>
          <ProyectCard border={"js"}></ProyectCard>
          <div className='b-projects__item--spans'>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faHtml5} color="#F45320"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faCss3} color="#2177FF"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div> 
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/pokedex"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div> 
          </div>
        </div>
        <div className='b-projects__item'>
          <h2>TO DO LIST</h2>
          <ProyectCard border={"js"}></ProyectCard>
          <div className='b-projects__item--spans'>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faHtml5} color="#F45320"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faCss3} color="#2177FF"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faJs} color="#F7E018"/></div>
            <div className='b-projects__item--span'><FontAwesomeIcon icon={faGit} color="#F05033"/></div>
            <div className='b-projects__item--repository'>
              <a exact="true" className="b-link__project" href={"https://github.com/DavidRodriguezDev/task-app"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> VER
              </a>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects