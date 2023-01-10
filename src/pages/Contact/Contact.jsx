import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import "./Contact.scss"
import { CV } from '../../cv/cv';
import Menu from '../../components/Menu/Menu';

const Contact = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  const contact = ["C", "o", "n", "t", "a", "c", "t", "o"];
  const {hero} = CV;
  useEffect(() => {
    
     setTimeout(() => {
      setLetterClass("text-animate__hover")
    },4000)

  }, [])

  return (
    <div className='b-contact__container'>
      <nav>
          <Menu></Menu> 
      </nav>
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
  )
}

export default Contact