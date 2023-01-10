import React from 'react'
import "./ProyectCard.scss"

const ProyectCard = ({border, img}) => {
  console.log(img);
  return (
    <div className={`b-card ${border}`} style={{backgroundImage: `url(${img})`, backgroundSize : "cover", backgroundPosition: "center"}}>
        
    </div>
  )
}

export default ProyectCard