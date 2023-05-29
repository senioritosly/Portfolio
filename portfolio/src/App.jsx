import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
