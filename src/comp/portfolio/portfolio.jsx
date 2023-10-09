import React from 'react'
import './portfolio.css'
import IMG1 from '../../aseet/portfolio1.jpg'
import IMG2 from '../../aseet/portfolio2.jpg'
import IMG3 from '../../aseet/portfolio3.jpg'
import IMG4 from '../../aseet/portfolio4.jpg'
import IMG5 from '../../aseet/portfolio5.png'
import IMG6 from '../../aseet/portfolio6.jpg'
const data=[
  {
    id:1,
    img:IMG1,
    title:'projact1',
    github:'#',
    demo:'#'
  },
  {
    id:2,
    img:IMG2,
    title:'projact2',
    github:'#',
    demo:'#'
  },
  {
    id:3,
    img:IMG3,
    title:'projact3',
    github:'#',
    demo:'#'
  },
  {
    id:4,
    img:IMG4,
    title:'projact4',
    github:'#',
    demo:'#'
  },
  {
    id:5,
    img:IMG5,
    title:'projact5',
    github:'#',
    demo:'#'
  },
  {
    id:6,
    img:IMG6,
    title:'projact6',
    github:'#',
    demo:'#'
  }
]
const portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="cont port-cont">
       {
        data.map(({id,img,title,github,demo}) =>{
          return(
            <article key={id} className='port-item'>
            <div className="port-item-img">
              <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="port-item-cta">
            <a href={github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-prim'>live Demo</a>
            </div>
          </article>    
          )
        })
       }
      </div>
    </section>
  )
}

export default portfolio