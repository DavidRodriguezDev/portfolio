import React from 'react'
import "./BurgerButton.scss"

const BurguerButton = ({handleClick, clicked}) => {
  return (
    <div className={`b-menu__icon ${clicked ? 'open' : ''}`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default BurguerButton