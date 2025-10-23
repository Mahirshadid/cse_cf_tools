import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './features/Navbar'
import Template from './pages/Template.page'

function App() {

  return (
    <>
      <Navbar />  
      <Template />
    </>
  )
}

export default App
