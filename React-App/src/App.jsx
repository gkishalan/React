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
    <Course name = "Full-Stack Development" price = "$499" />
    <Course name = "Flutter" price = "$499" />
    <Course name = "Python" price = "$499" />
    </>
  )
}

export default App
