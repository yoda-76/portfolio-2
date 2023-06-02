import React from 'react'
import "./AboutUs.css"
import ME from "../../asset/about-me.jpg"
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaHandshake} from 'react-icons/fa'
import {FaLayerGroup} from 'react-icons/fa'
export default function AboutUs() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <h1><BsFillBriefcaseFill/></h1>
              <h5>Experience</h5>
              <small>3+ years working </small>
            </article>

            <article className='about__card'>
              <h1><FaHandshake/></h1>
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>

            <article className='about__card'>
              <h1><FaLayerGroup/></h1>
              <h5>Projects</h5>
              <small>3 compleated projects </small>
            </article>
          </div>
          <p>
          Hey, I'm Yadvendra Sharma, a frontend developer and computer science student. I love building beautiful, functional websites that solve real problems for people.
          <br/><br/>

          Through hackathons and freelance work, I've developed a passion for combining technical excellence with a deep understanding of user needs. I approach every project with creativity and attention to detail, striving to create web experiences that truly delight users.
          <br/><br/>

          This is where I share my work and connect with others who share my passion for web development. Whether you're a developer, a business owner, or just someone who loves great design, I hope you find something here that inspires you.
          <br/><br/>

          Thanks for stopping by, and feel free to reach out if you want to chat or collaborate!
          <br/><br/>
              </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
