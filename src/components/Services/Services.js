import React from 'react'
import "./Services.css"
export default function Services() {
  return (
    <section id='services'>
      <h5 className="text-[2rem]" >What I Offer</h5>
      <h2 className="text-[4rem]" >Services</h2>
      
      <div className='container services__container'>
        {/* <article className='services'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p> lorem as s asad s das d </p>
            </li>
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p> lorem as s asad s das d </p>
            </li>
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p> lorem as s asad s das d </p>
            </li>
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p> lorem as s asad s das d </p>
            </li>
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p> lorem as s asad s das d </p>
            </li>
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p> lorem as s asad s das d </p>
            </li>
          </ul>
        </article> */}

        {/* web dev */}

        <article className='services'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p> Custom website development</p>
            </li>
             <li>
              <h1 className='service__list-icon'>O</h1>
              <p> Responsive design</p>
            </li>
            
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p> Maintenance and support </p>
            </li>
            <li>
              <h1 className='service__list-icon'>O</h1>
              <p>E-commerce website development </p>
            </li>
            
          </ul>
        </article>

      </div>
    </section>

  )
}
