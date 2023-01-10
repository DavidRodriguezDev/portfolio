import { faAngular, faCss3, faGit, faGithub, faHtml5, faJs, faNode, faPhp, faReact, faSymfony } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Menu from '../../components/Menu/Menu'
import ProyectCard from '../../components/ProyectCard/ProyectCard'
import ScrollArrow from '../../components/ScrollArrow/ScrollArrow'
import { CV } from '../../cv/cv'

import "./Home.scss"

const Home = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  const welcome1 = ["H", "o", "l", "a", ","];
  const welcome2 = ["S", "o", "y"]
  const nameArray = [" ", "D", "a", "v", "i", "d"];
  const jobArray = ["F", "u", "l", "l", "-", "S", "t", "a", "c", "k", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."];
  const about = ["S", "o", "b", "r", "e", " ", "m", "i"];
  const tech = ["T", "e", "c", "n", "o", "l", "o", "g", "í", "a", "s"];
  const education = ["E", "d", "u" ,"c", "a", "c", "i", "ó", "n"];
  const experience = ["E", "x", "p" ,"e", "r", "i", "e", "n", "c", "i", "a"];
  const projects = ["P", "r", "o", "y", "e", "c", "t", "o", "s"];
  const contact = ["C", "o", "n", "t", "a", "c", "t", "o"];
  const [showEducation, setShowEducation] = useState(true);
  const {educationn, experiencee, hero} = CV;

  useEffect(() => {
    
     setTimeout(() => {
      setLetterClass("text-animate__hover")
    },4000)

  }, [])

  return (

    <>
      <div className='b-home__container'> {/*APARTADO HOME*/}
        <nav>
          <Menu></Menu> 
        </nav> 
        <div className='b-home__main'>
          <h1 className='b-home__title'>
            <AnimatedLetters letterClass={letterClass} strArary={welcome1} idx={7}></AnimatedLetters>
          <br/>
            <AnimatedLetters letterClass={letterClass} strArary={welcome2} idx={12}></AnimatedLetters>
            <AnimatedLetters letterClass={letterClass} strArary={nameArray} idx={15}></AnimatedLetters>
          <br />
            <AnimatedLetters letterClass={letterClass} strArary={jobArray} idx={21}></AnimatedLetters>
          </h1>
            <Link to="/contact" className='b-home__link'>HABLEMOS</Link>
            <ScrollArrow></ScrollArrow>
        </div>
      </div>
        <section className='total'>
        <div className='b-about__container'> {/*APARTADO SOBRE MI*/}
          <div className='b-about__main'> 
            <h2 className='b-about__title'>
              <AnimatedLetters letterClass={letterClass} strArary={about} idx={1}></AnimatedLetters>
            </h2>
            <div className='b-about__parraf--container'>
              <p className='b-about__parraf'>Soy David, desarrollador web <span className='b-about__span--strong'>&lt;strong&gt;</span><span className='b-about__span'>Full-Stack</span><span className='b-about__span--strong'>&lt;/strong&gt;</span>, con 12 años de experiencia en el sector de la hostelería, desempeñando cargos de responsabilidad y gestionando equipos en las grandes empresas a nivel nacional del sector.</p>
              <p className='b-about__parraf'>Decidí seguir enriqueciéndome en el ámbito laboral estudiando desarrollo web en el Bootcamp de Upgrade Hub, cuyas tecnologías en la parte del front han sido HTML, CSS, JavaScript y sus frameworks Angular y React, en la parte del back, NodeJS con Express y PHP con Symfony y como bases de datos no relacionales MongoDB y relacionales MySQL.</p>
              <p className='b-about__parraf'>Me considero una persona responsable a la que le gusta trabajar en equipo  para llegar a obtener los resultados deseados y altamente motivado en  encontrar nuevos retos profesionales en los que seguir creciendo.</p>
            </div>
            <div className="b-about__buttons"> 
              <button                   //Botón para mostrar el campo de Educación.
              className="b-about__buttons--btn"
              onClick={() => setShowEducation(true)}
              >
              Educación  
              </button>
              <button                   //Botón para mostrar el campo de Experiencia.
                className="b-about__buttons--btn"
                onClick={() => setShowEducation(false)}
                >
              Experiencia  
              </button>
            </div>   
            <h2 className='b-about__title'>
              {showEducation ? <AnimatedLetters letterClass={letterClass} strArary={education} idx={1}></AnimatedLetters> :
              <AnimatedLetters letterClass={letterClass} strArary={experience} idx={1}></AnimatedLetters> }
            </h2>
            <div className='b-about__education'>
              {showEducation ? <Education education={educationn}></Education> : <Experience experience={experiencee}></Experience> }
            </div>
            <h2 className='b-about__title'>
              <AnimatedLetters letterClass={letterClass} strArary={tech} idx={1}></AnimatedLetters>
            </h2>
            <div className="b-about__list">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHtml5} color="#F45320"/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3} color="#2177FF"/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} color="#F7E018"/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faReact} color="#61DBFB"/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faAngular} color="#DD2A30"/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faNode} color="#91C63D"/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faSymfony} color="#F4F4F4"/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhp} color="#787CB4"/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGit} color="#F05033"/>
                </li>
              </ul>
            </div> 
          </div>
        </div>
        <div className='b-projects__container'>      
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
        <div className='b-contact__container'> {/*APARTADO CONTACTO*/}
          <h2 className='b-contact__title'>
            <AnimatedLetters letterClass={letterClass} strArary={contact} idx={1}></AnimatedLetters>
          </h2>
          <div className='b-contact__parraf--container'>
            <p className='b-contact__parraf'>Ahora que ya conoces un poco más sobre mi, ¿Trabajamos juntos? <span className='b-contact__span--strong'>&lt;strong&gt;</span><span className='b-contact__span'>¡Hablemos!</span><span className='b-contact__span--strong'>&lt;/strong&gt;</span></p>
          </div>
          <div className="b-contact__list">
            <ul>
              <li>
                <p>{hero.phone}</p>
              </li>
              <li>
                <a href="mailto:contacto.davidrodriguezdiaz@gmail.com">{hero.email}</a>
              </li>
            </ul>
          </div>
        </div>
        </section>
    </>

  )
}

export default Home