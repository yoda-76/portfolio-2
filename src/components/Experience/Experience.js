import React from 'react'
import  './Experience.css';
import {AiFillHtml5} from 'react-icons/ai'
// import { RiTailwindCssFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import {SiJavascript} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";


export default function Experience() {
  return (
    <section id='experience'>
      <h5 className='text-[2rem]'>What Skills I Have</h5>
      <h2 className='text-[5rem]'>My Experience</h2>

      <div className='container experience__container gap-8'>
        <div className='experience__frontend'>
          <h3 className='text-[1.75rem]'>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <h1 className='experience__details-icon'><FaReact className='text-[2rem]'/></h1>
              <div>
                <h4>React</h4>
                <small className='text-light '>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>

              <h1 className='experience__details-icon'><SiJavascript className='text-[2rem]'/></h1>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light '>Experienced</small>
              </div>
            </article>
           
            <article className='experience__details'>
              <h1 className='experience__details-icon'><SiTailwindcss  className='text-[2rem]'/></h1>
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light '>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'><SiTypescript className='text-[2rem]'/></h1>
              <div>
                <h4>Type Script</h4>
                <small className='text-light '>Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
        {/* end of front end */}

        <div className='experience__frontend'>
          <h3 className='text-[1.75rem]'>Backend Development</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
              <h1 className='experience__details-icon'><AiFillHtml5 className='text-[2rem]'/></h1>
              <div>
                <h4>Node</h4>
                <small className='text-light '>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'><DiCss3 className='text-[2rem]'/></h1>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light '>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>

              <h1 className='experience__details-icon'><SiJavascript className='text-[2rem]'/></h1>
              <div>
                <h4>Express</h4>
                <small className='text-light '>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'><BiLogoPostgresql className='text-[2rem]'/></h1>
              <div>
                <h4>Postgress</h4>
                <small className='text-light '>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <h1 className='experience__details-icon'><FaAws className='text-[2rem]'/></h1>
              <div>
                <h4>AWS</h4>
                <small className='text-light '>Intermediate</small>
              </div>
            </article><article className='experience__details'>
              <h1 className='experience__details-icon'><FaDocker className='text-[2rem]'/></h1>
              <div>
                <h4>Docker</h4>
                <small className='text-light '>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>

      
    </section>

  )
}

 