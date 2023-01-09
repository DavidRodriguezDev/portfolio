import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./ScrollArrow.scss"

const ScrollArrow = () => {
  return (
    <div className='b-scrolldown'>
        <span className='b-scrolldown__span'>Scroll down <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></span>
        <span className='b-scrolldown__span'>Scroll down <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></span>
    </div>
  )
}

export default ScrollArrow