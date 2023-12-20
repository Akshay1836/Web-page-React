import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer';

function Contacts() {
  return (
    <div>
        <Navbar/>
        <Hero cName="hero-contacts" heroImg="/Images/img-8.jpg" title="Contacts" btnName="ContactBtn"/>
        <Footer/>
    </div>
  )
}

export default Contacts;