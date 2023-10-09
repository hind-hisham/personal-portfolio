import React from 'react'
import CV from '../../aseet/cv.pdf'
const cat = () => {
  return (
    <div className="cat">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-prim'>Let's Talk</a>
    </div>
  )
}

export default cat