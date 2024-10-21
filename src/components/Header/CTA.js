import React from 'react'
import CV from "../../asset/cv2.pdf"
export default function CTA() {
  return (
    <div className='cta'>
    <a href={CV} className='btn px-10 py-4 font-bold text-[1.25rem] btn-primary'>Download cv</a>
    <a href='#contact' className='btn px-10 py-4 font-bold text-[1.25rem] '>Let's talk</a>
    </div>
  )
}
