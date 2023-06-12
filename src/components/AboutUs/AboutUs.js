import React from 'react'
import "./AboutUs.css"
import ME from "../../asset/about-me.jpg"
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaHandshake} from 'react-icons/fa'
import {FaLayerGroup} from 'react-icons/fa'
export default function AboutUs() {
  return (
    <section id='about'>
      <h5 className='text-[2rem]'>Get to know</h5>
      <h2 className='text-[4rem]'>About Me</h2>

      <div className='container about__container px-[4rem]'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card flex flex-col items-start gap-2'>
              <h1><BsFillBriefcaseFill className='text-[1rem]'/></h1>
              <h5 className='text-[1.5rem]'>Experience</h5>
              <small className='text-[.75rem]'>3+ years working </small>
            </article>

            <article className='about__card flex flex-col items-start gap-2'>
              <h1><FaHandshake className='text-[1rem]'/></h1>
              <h5 className='text-[1.5rem]'>Clients</h5>
              <small className='text-[.75rem]'>200+ Clients</small>
            </article>

            <article className='about__card flex flex-col items-start gap-2'>
              <h1><FaLayerGroup className='text-[1rem]'/></h1>
              <h5 className='text-[1.5rem]'>Projects</h5>
              <small className='text-[.75rem]'>3 compleated projects </small>
            </article>
          </div>
          <p>
          Hey, I'm Yadvendra Sharma, a Full-Stack MERN developer. I love building functional websites that solve real problems for people.
          <br/><br/>

      

          This is where I share my work and connect with others who share my passion for creating stuff. Whether you're a developer, a business owner, or just someone who loves great design, I hope you find something here that inspires you.
          <br/><br/>

          Thanks for stopping by, and feel free to reach out!
          <br/><br/>
              </p>

          <a href='#contact' className='btn btn-primary px-10 py-4 text-[1.25rem] font-bold'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
