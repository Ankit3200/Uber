import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import Captainlogin from './pages/Captainlogin.jsx'
import Captainsignup from './pages/Captainsignup.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/Signup' element={<UserSignup/>}/>
      <Route path='/captain-login' element={<Captainlogin/>}/>
      <Route path='/captain-signup' element={<Captainsignup/>}/>



    </Routes>
  )
}

export default App