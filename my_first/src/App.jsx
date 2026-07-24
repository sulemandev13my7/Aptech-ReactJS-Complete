import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Contacts from './components/Contacts'
import About from './components/About'
import Services from './components/Services'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Card />
      <Contact />
      <Sidebar />
      <Footer />
      <Contacts />
      <About />
      <Services />
    </div>
  )
}

export default App