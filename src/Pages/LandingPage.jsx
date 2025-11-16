import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

function LandingPage() {
  return (
    <div className='  flex flex-col  bg-white p-4  overflow-x-hidden  '>
      
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage