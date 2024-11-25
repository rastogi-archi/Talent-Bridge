import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/login" element= {<LoginPage/>}/>
        <Route path="/signup" element= {<SignupPage/>}/>
        <Route path="/about" element= {<AboutPage/>}/>
        <Route path="/profile" element= {<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
