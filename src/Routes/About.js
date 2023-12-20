import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Data from '../components/Data'


function About() {
  return (
    <div>
        <Navbar/>
        <Hero cName="hero-about" heroImg="/Images/img-8.jpg" title="About" btnName="AbtBtn"/>
        <Data/>
        <Footer/>
    </div>
  )
}

export default About