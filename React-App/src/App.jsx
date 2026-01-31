import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './footer'
import fullstack from './assets/fulllstack.webp'
import flutter from './assets/flutter.webp'
import python from './assets/python.webp'

function App() {
  return (
    <>
    <Course name = "HTML Full Course" price = "$499" image = {fullstack} rate = "5" show = {true} />
    <Course name = "Flutter" price = "$499" image = {flutter} rate = "4" show = {true}/>
    <Course name = "Python" price = "$499" image = {python} rate = "5" show = {true}/>
    </>
  )
}

export default App
