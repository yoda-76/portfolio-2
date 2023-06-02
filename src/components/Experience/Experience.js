import React from 'react'
import  './Experience.css';
import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'


export default function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
              <h1 className='experience__details-icon'><AiFillHtml5/></h1>
              <div>
                <h4>HTML</h4>
                <small className='text-light '>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'><DiCss3/></h1>
              <div>
                <h4>CSS</h4>
                <small className='text-light '>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>

              <h1 className='experience__details-icon'><SiJavascript/></h1>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light '>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'><FaReact/></h1>
              <div>
                <h4>React</h4>
                <small className='text-light '>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of front end */}

        {/* <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
              <h1 className='experience__details-icon'>O</h1>
              <h4>HTML</h4>
              <small className='text-light '>Experienced</small>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'>O</h1>
              <h4>CSS</h4>
              <small className='text-light '>Intermediate</small>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'>O</h1>
              <h4>JavaScript</h4>
              <small className='text-light '>Intermediate</small>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'>O</h1>
              <h4>React</h4>
              <small className='text-light '>Experienced</small>
            </article>
          </div>
        </div> */}

      </div>

      
    </section>

  )
}

 