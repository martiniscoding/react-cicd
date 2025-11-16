import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='' element={<LandingPage></LandingPage>}></Route>
      </Routes>
    </div>
  )
}

export default App