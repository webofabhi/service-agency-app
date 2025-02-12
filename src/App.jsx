import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Team from './components/Team'

const App = () => {
  return (
    <div className='overflow-hidden bg-orange-100 text-emerald-900 antialiased'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Footer />
    </div>
  )
}

export default App