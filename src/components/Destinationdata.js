import React from 'react'

function Destinationdata(props) {
  return (
    <div className={props.cName}>
                <div className='des-text'>
                    <h2>{props.title}</h2>
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className='des-img'>
                    <img alt='' src={props.image1}></img>
                    <img alt='' src={props.image2}></img>
                    
                </div>
    </div>
  )
}

export default Destinationdata