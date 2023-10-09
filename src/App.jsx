import React from 'react'
import Header from './comp/header/header'
import Nav from './comp/nav/Nav'
import About from './comp/about/about'
import Skills from './comp/skills/skills'
import Services from './comp/services/services'
import Portfolio from './comp/portfolio/portfolio'
import Testimon from './comp/testimon/testimon'
import Contact from './comp/contact/contact'
import Footer from './comp/footer/footer'
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Testimon/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App