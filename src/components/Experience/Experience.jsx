import React from 'react'
import "./Experience.scss"

const Experience = ({experience}) => {
  return (
    <div className='b-experience-container'>
            <div className='b-experience--card'>
            {experience && experience.map((item) => {
                return(
                    <div key={JSON.stringify(item)}>
                        <h3 className='b-experience--name'>{item.name.toUpperCase()}</h3>
                        <p className='b-experience--where'>{item.where}</p>
                        <small className='b-experience--date'>{item.date}</small>
                    </div>
                )
                })}
            </div>
        </div>
  )
}

export default Experience