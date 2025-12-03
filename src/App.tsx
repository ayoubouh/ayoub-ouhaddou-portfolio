import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeNav, setActiveNav] = useState('home')

  return (
    <div className="min-h-screen bg-white">
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <Hero setActiveNav={setActiveNav} />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
