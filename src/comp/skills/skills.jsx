import React from 'react'
import './skills.css'
import{BsFillPatchCheckFill} from 'react-icons/bs'
const skills = () => {
  return (
    <section id="skills">
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>
      <div className="cont ex-cont">
        <div className="ex-frontend">
          <h3>Frontend Devolopment</h3>
          <div className="ex-content">
          <article className='ex-details'>
            <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>HTML</h4> 
                <small className="text-light">Experinced</small>
                </div> 
          </article>
          <article className='ex-details'>
            <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>CSS</h4> 
                <small className="text-light">Experinced</small>
                </div> 
          </article>
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>JavaScript</h4> 
                <small className="text-light">Intermediate</small>
                </div> 
          </article>
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon' />
            <div>
                <h4>Bootstrap</h4> 
                <small className="text-light">Experinced</small> 
                </div>
          </article>
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>Tailwind</h4> 
                <small className="text-light">Experinced</small> 
                </div>
          </article>
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>React</h4> 
                <small className="text-light">Experinced</small>
                </div> 
          </article>
          </div>
        </div>
        <div className="ex-backend">
        <h3>backend Devolopment</h3>
        <div className="ex-content">
          
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>Python</h4> 
                <small className="text-light">Experinced</small>
                </div> 
          </article>
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>MySQl</h4> 
                <small className="text-light">Intermediate</small>
                </div> 
          </article>
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>Node JS</h4> 
                <small className="text-light">Experinced</small>
                </div> 
          </article>
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>MongDB</h4> 
                <small className="text-light">Experinced</small> 
                </div>
          </article>
          <article className='ex-details'>
          <BsFillPatchCheckFill className='ex-icon'/>
            <div>
                <h4>PHP</h4> 
                <small className="text-light">Experinced</small>
                </div> 
          </article>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default skills