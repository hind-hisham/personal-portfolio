import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import{MdMiscellaneousServices} from 'react-icons/md'
import {GrContact} from 'react-icons/gr'
import {useState} from 'react'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#');
  return (
   <nav>
    <a href="#home" onClick={() => setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#skills"  onClick={() => setActiveNav('#skills')} className={activeNav ==='#skills' ? 'active' : ''}><GiSkills/></a>
    <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
    <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><GrContact/></a>
   </nav>
  )
}

export default Nav