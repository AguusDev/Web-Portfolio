import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import 'animate.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App

