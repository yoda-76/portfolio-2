import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../asset/image1.jpeg"
import IMG2 from "../../asset/image2.jpeg"


export default function Portfolio() {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='portfolio__container container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item.</h3>
        <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item.</h3>
        <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      
      

      
      

    </div>
    </section>
    
  )
}
