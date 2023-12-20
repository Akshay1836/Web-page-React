import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer';

function Services() {
  return (
    <div>
        <Navbar/>
        <Hero cName="hero-services" heroImg="/Images/img-8.jpg" title="Services" btnName="ServicesBtn"/>
        <Footer/>
    </div>
  )
}

export default Services;