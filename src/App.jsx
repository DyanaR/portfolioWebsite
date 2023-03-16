import React from 'react'
import Navbar from './components/Navbar.jsx'
import ScrollUp from './components/ScrollUp.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Socials from './components/Socials.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollUp />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Socials />
    </>
  )
}

export default App