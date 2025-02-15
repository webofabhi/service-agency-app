import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Team from './components/Team'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-hidden bg-orange-100 text-emerald-900 antialiased'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Team />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App