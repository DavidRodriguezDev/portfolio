import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BurguerButton from '../BurgerButton/BurguerButton'
import "./Menu.scss"

const Menu = () => {

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }

  return (
    <div >
        <div className='b-menu__container'>
            <div className={`b-menu__links ${clicked ? 'active' : ''}`}>
                <NavLink exact="true" activeclassname="active" className="b-menu__contact" to="/">
                    <h3>HOME</h3>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="b-menu__contact" to="/about">
                    <h3>SOBRE MI</h3>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="b-menu__contact" to="/projects">
                    <h3>PROYECTOS</h3>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="b-menu__contact" to="/contact">
                    <h3>CONTACTO</h3>
                </NavLink>
            <div className='b-menu__rrss'>
                <a className="b-link__about" href="https://www.linkedin.com/in/david-rodr%C3%ADguez-d%C3%ADaz/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a exact="true" className="b-link__project" href="https://github.com/DavidRodriguezDev" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </div>
            </div>
            <div className='b-menu__burger'>
                <BurguerButton clicked={clicked} handleClick={handleClick}></BurguerButton>
            </div>
        </div>
    </div>
  )
}

export default Menu