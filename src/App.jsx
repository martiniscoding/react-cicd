import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Whiteboard from './Pages/WhiteBoard'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='' element={<LandingPage></LandingPage>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/white' element={<Whiteboard></Whiteboard>}></Route>
   
      </Routes>
    </div>
  )
}

export default App