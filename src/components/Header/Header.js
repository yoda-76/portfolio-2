import React from 'react'
import CTA from './CTA'
import "./Header.css"
import ME from "../../asset/ME.png"
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className='header container header--container'>
        <h5>Hello I'm</h5>
        <h1>Yadvendra Sharma</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        
          <a href='#contact' className='scroll__down'>Scroll Down</a>
          <div className='me'>
            <img src={ME} alt="me"/>
          </div>
          <HeaderSocials/>
        

      </div>
    </header>
  )
}
