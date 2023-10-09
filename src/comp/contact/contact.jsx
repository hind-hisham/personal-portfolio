import React from 'react'
import './contact.css'

const contact = () => {
  return (
   <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="cont contact-cont">
      <div className="contact-options">
        <article className='contact-option'>
          <h4>Email</h4>
          <h5>me@gmail.com</h5>
          <a href="mailto:fatin1000@gmail.com" target='_blank'>send Masege</a>
        </article>
        <article className='contact-option'>
          <h4>Masenger</h4>
          <h5>meMasenger</h5>
          <a href="#">send Masege</a>
        </article>
        <article className='contact-option'>
          <h4>WhatsApp</h4>
          <h5>+8773554211</h5>
          <a href="#">send Masege</a>
        </article>
      </div>
      <form action="">
        <input type="text" name='name' placeholder='Your Name' required/>
        <input type="email" name='email' placeholder='Your email' required/>
        <textarea  name='masege' rows='7' placeholder='Your Message' required/>
         <button type='submit' className='btn btn-prim'>Send</button>
      </form>
    </div>
   </section>
  )
}

export default contact