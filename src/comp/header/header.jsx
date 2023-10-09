import React from 'react'
import './header.css'
import CAT from './cat'
import Me from '../../aseet/me.png'
import Socail from './socil'
const header = () => {
  return (
    <header>
      <div className="cont header-cont">
        <h5>Hello I'm</h5>
        <h1>Haja Bingo</h1>
        <h5 className="text-light">Fullstack Devolober</h5>
        <CAT/>
        <Socail/>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header