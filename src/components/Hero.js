import React from 'react'
import './Hero.css'


export default function Hero(props) {
  return (
    <div className={props.cName}>
    <img href='/' src={props.heroImg}></img>
    <div className='Hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href='/' className={props.btnName}>{props.buttontext}</a>
    </div>
    
    </div>
  )
}
