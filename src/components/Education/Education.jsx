import React from 'react'
import "./Education.scss"

const Education = ({education}) => {
    console.log(education);
  return (
        <div className='b-education-container'>
            <div className='b-education-card'>
            {education && education.map((item) => {
                return(
                    <div key={JSON.stringify(item)}>
                        <h3 className='b-education--name'>{item.name.toUpperCase()}</h3>
                        <p className='b-education--where'>{item.where}</p>
                        <small className='b-education--date'>{item.date}</small>
                    </div>
                )
                })}
            </div>
        </div>
    )
}

export default Education