import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero cName="Hero" heroImg="/Images/img-home.jpg" title="Your Journey Your Story" text="Choose your favourite destination" btnName="hero-btn" buttontext="Travel plan"/>
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home