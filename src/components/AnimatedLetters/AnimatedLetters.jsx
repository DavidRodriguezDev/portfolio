import React from 'react'
import "./AnimatedLetters.scss"

const AnimatedLetters = ({letterClass, strArary, idx}) => {
  return (
    <span>
      {strArary.map((char, i) => <span key={char + i} className={`${letterClass} _${i + idx}`}>{char}</span>)}
    </span>
  )
}

export default AnimatedLetters