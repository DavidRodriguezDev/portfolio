import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import "./About.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faAngular, faNode, faPhp, faSymfony, faGit} from '@fortawesome/free-brands-svg-icons'
import { CV } from '../../cv/cv';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';


const About = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  const about = ["S", "o", "b", "r", "e", " ", "m", "i"];
  const tech = ["T", "e", "c", "n", "o", "l", "o", "g", "í", "a", "s"];
  const education = ["E", "d", "u" ,"c", "a", "c", "i", "ó", "n"];
  const experience = ["E", "x", "p" ,"e", "r", "i", "e", "n", "c", "i", "a"];
  const [showEducation, setShowEducation] = useState(true);
  const {educationn, experiencee} = CV;

  useEffect(() => {
    
     setTimeout(() => {
      setLetterClass("text-animate__hover")
    },4000)

  }, [])

  return (
    <div className='b-about__container'>
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

  )
}

export default About