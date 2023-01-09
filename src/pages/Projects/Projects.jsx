import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import Menu from '../../components/Menu/Menu';
import "./Projects.scss"

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
    </div>
  )
}

export default Projects