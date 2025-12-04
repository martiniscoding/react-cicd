import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import LoadingBar from './LoadingBar'

function LandingPage() {
  return (
    <div className='  flex flex-col items-center bg-white p-4  overflow-x-hidden  '>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage