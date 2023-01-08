import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/images/logo1.png"
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className='b-sidebar'>
        <div className='b-sidebar__links'>
            <Link to="/">
                <img className='b-sidebar__logo' src={Logo} alt=''></img>
            </Link>
            <NavLink exact="true" activeclassname="active" className="b-link__about" to="/about">
                <h3>SOBRE MI</h3>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="b-link__project" to="/projects">
                <h3>PROYECTOS</h3>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="b-link__contact" to="/contact">
                <h3>CONTACTO</h3>
            </NavLink>
        </div>
        <div className='b-sidebar__rrss'>
            <a className="b-link__about" href="https://www.linkedin.com/in/david-rodr%C3%ADguez-d%C3%ADaz/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a exact="true" className="b-link__project" href="https://github.com/DavidRodriguezDev" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
        </div>
    </div>
  )
}

export default Sidebar