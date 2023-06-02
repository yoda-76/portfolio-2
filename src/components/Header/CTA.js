import React from 'react'
import CV from "../../asset/cv.pdf"
export default function CTA() {
  return (
    <div className='cta'>
    <a href={CV} className=' btn btn-primary'>Download cv</a>
    <a href='#contact' className='btn '>Let's talk</a>
    </div>
  )
}
