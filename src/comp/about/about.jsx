import React from 'react'
import './about.css'
import Me from '../../aseet/me-about.jpg'
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="cont about-cont">
        <div className="about-me">
        <div className="about-me-img">
           <img src={Me} alt="" />
        </div>
        </div>
        <div className="about-content">
              <div className="about-cards">
                <article className='about-card'>
                         
                         <h5>Experience</h5>
                         <small>3+ Years Working</small>
                </article>
                <article className='about-card'>
                         
                         <h5>Experience</h5>
                         <small>3+ Years Working</small>
                </article>
                <article className='about-card'>
                         
                         <h5>Experience</h5>
                         <small>3+ Years Working</small>
                </article>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, odit eveniet eum obcaecati quisquam recusandae quae fugiat et ut quidem vero voluptas consequatur expedita voluptates commodi asperiores. Suscipit, error soluta.</p>
              <a href="#contact" className="btn btn-prim">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about