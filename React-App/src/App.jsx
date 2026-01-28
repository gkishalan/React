import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './footer'

function App() {
  return (
    <>
    <Navbar/>
    <Course></Course>
    <Footer></Footer>
    </>
  )
}

export default App
