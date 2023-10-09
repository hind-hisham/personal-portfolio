import React from 'react'
import './footer.css'
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Haja Bingo</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirence</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="#"><FaFacebookSquare/></a>
        <a href="#"><FaInstagramSquare/></a>
        <a href="#"><FaTwitterSquare/></a>
      </div>
      <div className="footer-c">
        <small>&copy; Haja Bingo .All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer