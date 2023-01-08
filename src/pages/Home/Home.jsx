import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'

import "./Home.scss"

const Home = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  const welcome1 = ["H", "o", "l", "a", ","];
  const welcome2 = ["S", "o", "y"]
  const nameArray = [" ", "D", "a", "v", "i", "d"];
  const jobArray = ["F", "u", "l", "l", "-", "S", "t", "a", "c", "k", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."];

  useEffect(() => {
    
     setTimeout(() => {
      setLetterClass("text-animate__hover")
    },4000)

  }, [])

  return (
    
      <div className='b-home__container'>
       
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
        </div>
      </div>

  )
}

export default Home