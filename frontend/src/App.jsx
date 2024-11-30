import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import MessagePage from './pages/MessagePage'
import Footer from './components/Footer'
import AuthNavbar from './components/AuthNavbar'
import NotificationPage from './pages/NotificationPage'
import ConnectionsPage from './pages/ConnectionsPage'
import QueryPage from './pages/QueryPage'


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <AuthNavbar/> */}
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/login" element= {<LoginPage/>}/>
        <Route path="/signup" element= {<SignupPage/>}/>
        <Route path="/message" element= {<MessagePage/>}/>
        <Route path="/profile" element= {<ProfilePage/>}/>
        <Route path="/notifications" element= {<NotificationPage/>}/>
        <Route path="/query" element= {<QueryPage/>}/>
        <Route path="/connections" element= {<ConnectionsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
