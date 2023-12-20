import React from 'react'

function TripData(props) {
  return (
    <div className='i-card'>
        <div className='i-image'>
        <img alt="" src={props.image}></img>
        </div>
        <h3>{props.Head}</h3>
        <p>{props.content}</p>
    </div>
  )
}

export default TripData;